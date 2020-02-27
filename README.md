# React JSX Study
See it Live: 

<br>

# What is the React JSX Study?


<br>

# What is JSX?
 
**JSX (JavaScript Extension) is a React extension that that allows you to write JavaScript that *looks* like HTML.** Essentially, JSX  is a syntax extension for JavaScript and is used to describe what the UI should look like. For example, you have a situation where you need to render multiple HTML elements combined together from you JavaScript application. If you had to write the ```React.createElement()``` for each and every one of those elements, it would very bothersome.

Here are a few questions from the study to explore:

* [What is Babel](#What-is-Babel)
* [](#)
* [](#)

<br>

# What is Babel?
**Babel can be used to ensure you have some level of backwards compatibility with older browsers.** Babel is a transpiler used to convert edge ECMAScript 2015+ into backwards compatible versions of JavaScript (i.e. < ES5 )in older browsers and environments. A transpiler (i.e. sourse-to-source compiler) is a tool that reads source code written in one programming lnagugae and produce the equivalent code in another language at the same level. Unlike compiling (which converst one language to another at a *lower* abstraction level), transpiling converts one language to another at the same level (e.g. typescript == JavaScript or SAASS == CSS). You need to use Babel to transpile the latest JavaScript features (e.g. ES6+) which some browsers might not be able to understand.


## You can import the Babel library via CDN.
To use Babel via CDN, you can use the following script:
```JavaScript
  <script
    src="https://unpkg.com/babel-standalone@6/babel.min.js">
  </script>
```

## You can enable Babel in script tags with type.
You can enable Babel in script tags by adding a special type to it. However, this method is substantially slow compared to integration via npm.
```JavaScript
  <script type="text/babel">
    const greeting = React.createElement('h1', null, 'Hello world!');
    // etc...
  </script>
```

<br>

# How do you use JSX?
**To use JSX, you simply need to refactor the  way you create elements to have a value of the HTML tag.** In the example in this study, the original way to create an element was by using ```React.createElement()``` and passing in the element, the property, and the content. With JSX, we can simply add the HTML element!
```JavaScript

```
