var RESET_TEMPLATE = [
  '<style>',
  'body {',
  '  counter-reset: h1 SECTION_NUM;',
  '}',
  '</style>'
].join('\n') + '\n';

module.exports = {
  ebook: {
    assets: './assets',
    css: [
      'numbered-headings.css'
    ]
  },
  hooks: {
    'page:before': function(page) {
      var sectionNum = page.progress.current.index - 1;
      var counterReset = RESET_TEMPLATE.replace(/SECTION_NUM/, sectionNum);
      page.content = counterReset + page.content;
      return page;
    }
  }
};
