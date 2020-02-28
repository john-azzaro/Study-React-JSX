# React JSX Study
See it Live: https://john-azzaro.github.io/Study-React-JSX/

<br>

# What is the React JSX Study?

Here are a few questions from the study to explore:

* [What is Babel](#What-is-Babel)
* [How do you use JSX?](#How-do-you-use-JSX)
* [](#)


<br>

# What is JSX?

<dl>
<dd>

## JSX is a syntax extension for JavaScript UI.
**JSX (JavaScript Extension) is an incredibly convienent visual aid for developer when building applications.** JSX uses a developers previous knowlegde of HTML and tree structure of markup elements. Essentially, JSX is a syntax extension for JavaScript and is used to describe what the UI should look like. For example, you have a situation where you need to render multiple HTML elements combined together from you JavaScript application. If you had to write the ```React.createElement()``` for each and every one of those elements, it would very bothersome.

</dd>
</dl>

<br>

# What is Babel?

<dl>
<dd>

## Babel is used to compile JSX to JavaScript.
 Babel is a transpiler used to convert edge ECMAScript 2015+ into backwards compatible versions of JavaScript (i.e. < ES5 )in older browsers and environments. A transpiler (i.e. sourse-to-source compiler) is a tool that reads source code written in one programming lnagugae and produce the equivalent code in another language at the same level. Unlike compiling (which converst one language to another at a *lower* abstraction level), transpiling converts one language to another at the same level (e.g. typescript == JavaScript or SAASS == CSS. You need to use Babel to transpile the latest JavaScript features (e.g. ES6+) which some browsers might not be able to understand. Babel can be used to ensure you have some level of backwards compatibility with older browsers.

## Import the Babel library via CDN (for limited use).
To use Babel via CDN, you can use the following script:
```JavaScript
  <script
    src="https://unpkg.com/babel-standalone@6/babel.min.js">
  </script>
```
## Enable Babel with type="text/babel".
**You can enable Babel in script tags by adding a special type to it.** However, this method is substantially slow compared to integration via npm.
```JavaScript
  <script type="text/babel">                                                     // type added to script tag.
    const myGreeting = React.createElement('h1', null, 'Hello world!');
    // etc...
  </script>
```

## Use Create-React-App method initializer to use Babel.
<<<>>>

</dd>
</dl>


<br>

# How do you use JSX?

<dl>
<dd>

## Think of JSX as something similar to HTML.
In the example below, the original way to create an element was by using ```React.createElement()``` and passing in the element, the property, and the content. 

## To use JSX, you simply need to refactor your created element.
With JSX, we can simply add the HTML element! Babel transpiles the JSX version of myGreeting and converts it to the original ```React.createElement()``` version. Of course JSX is optional, but it is much easier to write and read compared to normal React. 
```JavaScript
    const appRoot = document.querySelector('#application-root');

    // const myGreeting = React.createElement('h1', null, 'Hello world!');       // Vanilla React.
    const myGreeting = <h1>Hello world, it's JSX!</h1>;                          // JSX Refactor.
    
    ReactDOM.render(myGreeting, appRoot);
```

## With JSX, you can create multiple elements.
**You can create multiple elements and insert them all into the page without using quotes or backticks.**
```JavaScript
      const appRoot = document.querySelector('#application-root');
      const myGreeting = <div>                                                   // Multiple elements.
                            <h1>This is my Greeting</h1>
                            <p>Salutations from myself to yourself</p>
                         </div>;
      ReactDOM.render(myGreeting, appRoot);
```

## JSX is much shorted and easier to write.
**WIHTOUT JSX, you would have to use the ```React.createElement()``` method multiple times.** Compared to the example above, the example below is a bit more cumbersome to work with. 

Also note that the elements nexted in the divs are inside brackets ([]) and that each element is followed by a comma. For example, If you were to create a div with 3 elements inside(h1, h1, p), the vanilla React method would require you to use the React.createElement.
```JavaScript
      const appRoot = document.querySelector('#application-root');
      const myGreeting = React.createElement('div', null, [
        React.createElement('h1', null, 'This is my Greeting'),
        React.createElement('p', null, 'Salutations from myself to yourself')
      ]);
      ReactDOM.render(myGreeting, appRoot);
```

</dd>
</dl>

<br>

# What is a component?

<dl>
<dd>

## Components are the building blocks of a React app.
**A component is a JavaScript class or function that accepts inputs like props and returns a React element that describes how the section's UI will appear.** At its core, components can help organize complex applications by making small, reusable pieces of code. Below is an example of the simple "component".
```JavaScript
      const myGreeting = <div>                                             
                            <h1>This is my Greeting</h1>                     
                            <p>Salutations from myself to yourself</p>
                         </div>
```

## A component can be written as a function.
When you write the component as a function, you simply return the component inside parentheses ( () ).
```JavaScript
      function Greeting() {
        return (
          <div>                                             
              <h1>This is my Greeting</h1>                     
              <p>Salutations from myself to yourself</p>
          </div>
        );
      };
```

## To use functional components, you can use tags or createElement.
The first method is using tags (e.g. <> < />). Tags can be used because a React component that only accepts one element and all the rest/siblings must be nested within the one parent element.

The second method is to use the ```React.createElement()``` method and simply pass in the component.
```JavaScript
  // Method 1: Tags:
  ReactDOM.render(< Greeting />, appRoot);

  // Method2: createElement method:
  ReactDOM.render(React.createElement(Greeting), appRoot);
```

</dd>
</dl>

<br>

# What is a prop?

<dl>
<dd>

## Props are React's way of making components easily and dynamically customizable.
 Props provide a way of pasing properites and data down from one component to another, typically from parent to a child component (unidirectional dataflow). It is important to note that props are *read-only* and components should *never* modify props passed into it. So when a component is passed a prop as an input, it should always return the same result for the input.

## To use props in a component, use curly braces.
To use props, you need to use curly braces

Since JSX can use JavaScript, you can use backticks. But in order to use backticks, you need to use curly braces.
```JavaScript
      const googleAddress = "https://google.com";
      const target = "_blank";

      const googleHome = (
        <a href={googleAddress} target={target}>        // curly braces for variables.
          {`Google Homepage`}                           // curly braces with backticks.
        </a>
      );

      ReactDOM.render(googleHome, appRoot);
```



Props are NOT HTML attributes, even though they are very similar. For example



## Use curly braces 


</dd>
</dl>

