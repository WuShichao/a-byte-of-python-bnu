# Numbered headings for GitBook PDFs

For example:

-------

### 1 Main heading
Some text.

#### 1.1 First subheading
More text.

#### 1.2 Another subheading
Even more text.

##### 1.2.1 A sub-sub heading
Running out of things to say.

-------

### Usage

```js
{
  "plugins": ["numbered-headings"]
}
```

To adjust the style of the numbers, use:

```css
h1:before, h2:before, h3:before, h4:before, h5:before {
  color: #aaa;
  width: 40px;
}
```
