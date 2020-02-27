# React JSX Study
See it Live: https://john-azzaro.github.io/Study-React-JSX/

<br>

# What is the React JSX Study?


<br>

# What is JSX?
 
**JSX (JavaScript Extension) is a React extension that that allows you to write JavaScript that *looks* like HTML.** Essentially, JSX  is a syntax extension for JavaScript and is used to describe what the UI should look like. For example, you have a situation where you need to render multiple HTML elements combined together from you JavaScript application. If you had to write the ```React.createElement()``` for each and every one of those elements, it would very bothersome.

Here are a few questions from the study to explore:

* [What is Babel](#What-is-Babel)
* [How do you use JSX?](#How-do-you-use-JSX)
* [](#)

<br>

# What is Babel?
**Babel can be used to ensure you have some level of backwards compatibility with older browsers.** Babel is a transpiler used to convert edge ECMAScript 2015+ into backwards compatible versions of JavaScript (i.e. < ES5 )in older browsers and environments. A transpiler (i.e. sourse-to-source compiler) is a tool that reads source code written in one programming lnagugae and produce the equivalent code in another language at the same level. Unlike compiling (which converst one language to another at a *lower* abstraction level), transpiling converts one language to another at the same level (e.g. typescript == JavaScript or SAASS == CSS). You need to use Babel to transpile the latest JavaScript features (e.g. ES6+) which some browsers might not be able to understand.


## For limited use, you can import the Babel library via CDN.
To use Babel via CDN, you can use the following script:
```JavaScript
  <script
    src="https://unpkg.com/babel-standalone@6/babel.min.js">
  </script>
```

**You can enable Babel in script tags by adding a special type to it.** However, this method is substantially slow compared to integration via npm.
```JavaScript
  <script type="text/babel">                                                     // type added to script tag.
    const myGreeting = React.createElement('h1', null, 'Hello world!');
    // etc...
  </script>
```

## Use Create-React-App method initializer to use Babel.
<<<>>>


<br>

# How do you use JSX?

**To use JSX, you simply need to refactor the way you create elements to have a value of the HTML tag.** 

## Think of JSX as something similar to HTML.
In the example below, the original way to create an element was by using ```React.createElement()``` and passing in the element, the property, and the content. With JSX, we can simply add the HTML element! Babel transpiles the JSX version of myGreeting and converts it to the original ```React.createElement()``` version. Of course JSX is optional, but it is much easier to write and read compared to normal React. 
```JavaScript
    const appRoot = document.querySelector('#application-root');

    // const myGreeting = React.createElement('h1', null, 'Hello world!');       // Vanilla React.
    const myGreeting = <h1>Hello world, it's JSX!</h1>;                          // JSX Refactor.
    
    ReactDOM.render(myGreeting, appRoot);
```

**You can create multiple elements and insert them all into the page without using quotes or backticks.**
```JavaScript
      const appRoot = document.querySelector('#application-root');
      const myGreeting = <div>                                                   // Multiple elements.
                            <h1>This is my Greeting</h1>
                            <p>Salutations from myself to yourself</p>
                         </div>;
      ReactDOM.render(myGreeting, appRoot);
```

**WIHTOUT JSX, you would have to use the ```React.createElement()``` method multiple times.**
Compared to the example above, the example below is a bit more cumbersome to work with. Also note that the elements nexted in the divs are inside brackets ([]) and that each element is followed by a comma.
```JavaScript
      const appRoot = document.querySelector('#application-root');
      const myGreeting = React.createElement('div', null, [
        React.createElement('h1', null, 'This is my Greeting'),
        React.createElement('p', null, 'Salutations from myself to yourself')
      ]);
      ReactDOM.render(myGreeting, appRoot);
```







## Compare vanilla React to JSX.
For example, If you were to create a div with 3 elements inside(h1, h1, p), the vanilla React method would require you to use the React.createElement