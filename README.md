# React JSX Study

<br>

# What is the React  JSX Study?
The React JSX Study is an examination of the fundamentals of React using JSX, a syntactical sugar for JavaScript similar to HTML to help write user interface code. This study covers many topics form loading JSX via CDN and enabling with Babel, comparisons to vanilla React, and a detailed excamination of components, props, etc.

Here are a few questions from the study to explore:

* [What is JSX?](#What-is-JSX)
* [What is Babel](#What-is-Babel)
* [How do you use JSX?](#How-do-you-use-JSX)
* [What is a component?](#What-is-a-component)
* [What is a prop?](#What-is-a-prop)
* [How do you structure a Basic React app?](#How-do-you-structure-a-Basic-React-app)

<br>
<br>
<br>

# What is JSX?

<dl>
<dd>

## JSX is a syntax extension for JavaScript UI.
**JSX (JavaScript Extension) is an incredibly convienent visual aid for developers when building applications.** Essentially, JSX is a syntax extension for JavaScript and is used to describe what the UI should look like. JSX uses a developers previous knowlegde of HTML and tree structure of markup elements. For example, you have a situation where you need to render multiple HTML elements combined together from you JavaScript application. If you had to write the ```React.createElement()``` for each and every one of those elements, it would very bothersome.

</dd>
</dl>

<br>
<br>
<br>

# What is Babel?

<dl>
<dd>

## Babel is used to compile JSX to JavaScript.
 Babel is a transpiler used to enable JSX and convert edge ECMAScript 2015+ into backwards compatible versions of JavaScript (i.e. < ES5 )in older browsers and environments. A *transpiler* (i.e. source-to-source compiler) is a tool that reads source code written in one programming lnagugae and produce the equivalent code in another language at the same level. Unlike compiling (which converst one language to another at a *lower* abstraction level), transpiling converts one language to another at the same level (e.g. typescript == JavaScript or SAASS == CSS. You need to use Babel to transpile the latest JavaScript features (e.g. ES6+) which some browsers might not be able to understand. Babel can be used to ensure you have some level of backwards compatibility with older browsers.

 <br>

## Import the Babel library via CDN (for limited use).
**To use Babel via CDN, you can use the following script:**
```JavaScript
  <script
    src="https://unpkg.com/babel-standalone@6/babel.min.js">
  </script>
```

<br>

## Enable Babel with type="text/babel".
**You can enable Babel in script tags by adding a special type to it.** However, this method is substantially slow compared to integration via npm.
```JavaScript
  <script type="text/babel">                                                     // type added to script tag.
    const myGreeting = React.createElement('h1', null, 'Hello world!');
    // etc...
  </script>
```

</dd>
</dl>

<br>
<br>
<br>

# How do you use JSX?

<dl>
<dd>

## To use JSX, you simply need to refactor your created element.
With JSX, we can simply add the HTML element without React.createElement! Babel transpiles the JSX version of myGreeting and converts it to the original ```React.createElement()``` version. Of course, JSX is optional, but it is much easier to write and read compared to normal React. In the example below, the original way to create an element was by using ```React.createElement()``` and passing in the element, the property, and the content. With JSX, the value of the stored variable is simply an HTML element.
```JavaScript
    const appRoot = document.querySelector('#application-root');

    // const myGreeting = React.createElement('h1', null, 'Hello world!');       // Vanilla React.
    const myGreeting = <h1>Hello world, it's JSX!</h1>;                          // JSX Refactor.
    
    ReactDOM.render(myGreeting, appRoot);
```

<br>

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

<br>

## JSX is much shorter and easier to write.
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
<br>
<br>

# What is a component?

<dl>
<dd>

## Components are resuable pieces of code to create elements.
**Components are the building blocks of a React app.** In a more technical sense, a component is a JavaScript class or function that accepts inputs like props and returns a React element that describes how the section's UI will appear. At its core, components can help organize complex applications by making small, reusable pieces of code. Below is an example of the simple "component".
```JavaScript
      const myGreeting = <div>                                             
                            <h1>This is my Greeting</h1>                     
                            <p>Salutations from myself to yourself</p>
                         </div>
```

<br>

## A component can be written as a function.
When you write the component as a function, you simply return the component inside parentheses ( () ). **Note here that custom components should be upper case**
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

<br>

## To use functional components, you can use tags or createElement.
**The first method is using tags (e.g. ```<myComponent> <myComponent />```).** Tags can be used because a React component that only accepts one element and all the rest/siblings must be nested within the one parent element.

**The second method is to use the full tags as an element (e.g. ```<myComponent><myComponent/>``` ).** This will come in handy when you start nested elements later on.

**The third method is to use the ```React.createElement(myComponent)``` method.** When you use this method, you simply pass in the component name (i.e. Greeting).
```JavaScript
  // Method 1: Tags:
  ReactDOM.render(< Greeting />, appRoot);
  
  // Method 2: Full tag element:
  ReactDOM.render(<Greeting><Greeting/>, appRoot);

  // Method 3: createElement method:
  ReactDOM.render(React.createElement(Greeting), appRoot);

```

</dd>
</dl>

<br>
<br>
<br>

# What is a prop?

<dl>
<dd>

## Props make components easily and dynamically customizable.
 **Props are the inputs (i.e. arguments) to a React component and are similar to HTML element attributes.** Props provide a way of pasing properites and data down from one component to another, typically from parent to a child component (unidirectional dataflow). In many ways, you can consider props the same as arguments to a function.  However, note that props are *read-only* and components should *never* modify props passed into it. So when a component is passed a prop as an input, it should always return the same result for the input.

<br>

## To use props in a component, use curly braces.
Inside the curly braces, you can insert JavaScript, such as variables, etc. You can also use backticks inside the curly braces as well.
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

<br>

## You can add id's and class attributes to output HTML.
**You can add id's and classes which are rendered into the DOM by using props.** Notice that these look very much similar to DOM attributes. However, keep in mind that there are some subtle differences in prop attributes. For example, although the "id" is the same as it is in HTML,the the prop for "class" is called "className".

```JavaScript
      function Greeting() {
        return (
          <span id='greet-id' className='greet-class'>Hello world</span>    // id and classname.
        );
      }

      ReactDOM.render(< Greeting />, appRoot);
```

<br>

## Props are function arguments.
**Props are passed to components much like the way arguments are passed into a function.** If you were to pass in a the parameter "args" and insert a console.log(args), you will get an empty object ( {} ). This object is the component's props (which we called "args") and contains the key/value pairs corresponding to the props that were passed in.

In the example below, when you render Greeting, you can also (in the same tag) pass in any arguments you want. In this case, there are no argument. However, if you console log the args you passed in (which are still nothing in this case), you will get an *empty object*. This object is what will store all the arguments you pass in to the component for you to use internally. 
```JavaScript
      const appRoot = document.querySelector("#application-root");

      function Greeting(args) {                                                              // 2. Arguments passed in as "args".
        console.log(args)                                                                    // 3. {}
        return <span id="greeting-id" className="greeting-class">My Greeting</span>;    
      }

      ReactDOM.render(<Greeting />, appRoot);                                                // 1. Greeting instance with NO arguments.
```

<br>

## Pass props like arguments.
**To pass props to components, you simply pass the arguments to the empty "props" object.** Suppose you want to pass attributes from OUTSIDE the component. In the example below, when we render Greeting with ```ReactDOM.render()``` and pass in ```className="new-class-name"```, we are essentially populating the blank object in the form of key/value pairs, which in this case would be ```className: new-class-name```. 

And because you pass the props like arguments, you pass ```props``` as a parameter to Greeting and then access the key/value pair for className using dot-notation. In this case, we use the curly braces and ```props.className```.
```JavaScript
      const appRoot = document.querySelector("#application-root");                     

      function Greeting(props) {                                                             // 2. arguments passed in as "props". 
        return <span id="greeting-id" className={props.className}>My Greeting</span>;        // 3. className accesed with props.className.
      }

      ReactDOM.render(<Greeting className="new-class-name"/>, appRoot);                      // 1. Greeting instance with className argument.
```

<br>

## You can pass multiple types of data to the component.
**The types of data you can pass include strings, booleans, numbers, objects, arrays, etc.** You can do all of that when you render the instance of your component. **Also notice that except for the strings, all the values of the data types are in curly braces ({}).**
```JavaScript
      ReactDOM.render(
        <Greeting 
          className="new-class-name"           // class
          foo='bar'                            // string
          boolProp={false}                     // booleans
          numberProp={123}                     // integers
          objectProp={{ baz: 'buzz' }}         // objects
          objectProp={ bar }                   // object via const obj = {foo: 'bar'}
          functionProp={func}                  // function via const func = function(){...}
          arrayProp={[ '3', '2', '1' ]}        // array
        />, appRoot);
```

<br>

## Nesting Elements will create a prop called "children".
**When you nest other elements inside your rendered component, React will create a special object called "children".** For example, if you want to nest an ```<h1>``` element inside ```<header>```, those nested elements are stored and accessed via the "children" property. The children prop to pass nested element much like an argument to a function which React then renders to the page.



 In the following examples, you'll see how the rendered component shows in the console WITHOUT children and WITH children and how when you do have children, a special "children" property is created.

<dl>
<dd>

<br>

### WITHOUT nested elements, React will not provide the "children" object.
-------------
**Withough nested elements, the component will not have the children object.** In the example below, we have a basic render of the Greeting component WITHOUT any nested elements. Note that in the console, the component does NOT have a children property.
```JavaScript
      function Greeting(props) {
        console.log(props)
        return (
          <header>
            Salutations!                       // OUTPUT: Salutations!
          </header>
        );
      }

      ReactDOM.render(
        <Greeting className="my-class">        // Note that there are NO nested elements.
        </Greeting>, appRoot);
```
```
  ==========CONSOLE==========

  {className: "my-class"}
    className: "my-class"
    __proto__: Object
```

<br>

### WITH nested elements, React WILL provide the "children" object.
--------------
**React creates the "children" prop automatically and assigns its value whatever was between the open and closing of the component tags.** The children prop is enabling the h1 element to be specified *outside* the Greeting component at the exact point where we placed it.

```JavaScript
      function Greeting(props) {
        console.log(props)
        return (
          <header>
            {props.children}                   // OUTPUT: Warm Welcome!
          </header>
        );
      }

      ReactDOM.render(
        <Greeting className="my-class">
          <h1>Warm Welcome!</h1>               // h1 nested element.
        </Greeting>, appRoot);
```
```
  ==========CONSOLE==========

  {className: "my-class", children: {…}}
    className: "my-class"
    children: {$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …}
    __proto__: Object
```
</dd>
</dl>

</dd>
</dl>

<br>
<br>
<br>

# How do you structure a Basic React app?

<dl>
<dd>

## Step 1: Create your application-root element.
This application root is the crucial solitary element in the body of your HTML document that the React application will render to. In the example below, we use ```document.querySelector()``` and select the div element by id.
```HTML
  <div id="application-root"></div>                                 <!-- Root element in HTML body -->
```
```JavaScript
  const appRoot = document.querySelector('#application-root');      // selects root element in JS.
```

<br>

## Step 2: Create "App" and "ReactDOM.render()".
The first step requires you to create two things: A central "App" for the React application and a "ReactDOM.render" method to render the element to the DOM at the anchor point. First, create the "App" function. Then, it is important to remember that React components only recognize ONE root element. So if you are planning on using "App" as your central hub for the page, create a ```div``` element or a higher-level semantic equivalent like ```main``` and then nest everything else inside there. I always find it useful to create a simple paragraph element to test and see if everything is working correctly as well but this is optional. Second, create a ```ReactDOM.render()``` method to render the element you want to the container you want. Remember, ```ReactDOM.render()``` takes two arguments, the element and the container, which in this case is App and application-root. Also remember that when you call components, you need to call them as elements with angle brackets (e.g. < App />). 
```JavaScript
  const appRoot = document.querySelector('#application-root');
  
  function App() {                                                  // Central "App" component hub. 
    return (
      <main>
        <p>testing</p>                                              // Test will show "testing" in the DOM.
      </main>
      
    );
  }

  ReactDOM.render(<App />, appRoot);                                // Render to the DOM "App" to "appRoot".
```

<br>

## Step 3: Create a component.
To create a component, simply create another function and return a single root element. In this example, we'll create a greeting component. When you have finished this components, simply place that component name as an elemnt inside the ```main``` element in your App component.
```JavaScript
    const appRoot = document.querySelector('#application-root');
  
    function Greeting() {                                           // 1. Greeting component
      return (
        <h1>Hello there!</h1>
      );
    }
    
    function App() {                                 
      return (
        <main>
          < Greeting />                                             // 2. Greeting component imported.
        </main>
        
      );
    }

    ReactDOM.render(<App />, appRoot);               
```

</dd>
</dl>

<br>
<br>
<br>

# How do you create a React App with create-react-app?

<dl>
<dd>

## Create-react-app creats a react application with one command.
The ```create-react-app``` command creates a ready-made React Application with an up-to-date build setup. Everything is included, such as common dependencies, starting scripts, etc. If you would like to know more about NPM or the process behind ```create-react-app``` in more detail, check out [Create React App Study](https://github.com/john-azzaro/Study-Create-React-App).

## Step 1: Use create-react-app at the command line.
To setup the entire environment including React, JSX, ES6, Flow syntax, language extras, autoprefixed css, an interactive test runner, live development server, etc. If it takes a few minutes to install everything to your machine, dont worry its normal. Anyway, run the following at the command line:
```
  $ npx create-react-app <name-of-app>
```

## To Start the app, use npm start
When you run ```npm start``` you will start the live development server. There are other running scripts available which you can see with ```npm run```.
```
  npm start
```

</dd>
</dl>

<br>
<br>
<br>

# How do you use packages in your React application?

<dl>
<dd>

## Import Node modules into your application.
To use packages in your react application, you need to import those dependencies into each and every specific document that uses them (e.g. app.js, etc.). To import the dependency, you need ot use an *import statement*.  **Import statements** are used to make JavaScript modules available to use in your specific file. Take for example the "moment" library (which is use to parse, manipulate, and format dates). Once we have installed moment via npm, you can *import* the moment module into your code. In the example below, we are creating a variable called "React" from the ```react``` directory in the ```node_modules``` directory. When this is done, you can use moment within the file.
```JavaScript
  import moment from 'moment';
```

<br>

## Use the imported module in your app.
Once imported, you can use the package as needed. In other words, with a single install you get all the functionality of the package. The moment package, you can do everything from creating a variable that will give you the current date and time by simply calling moment to add days, etc. For example, if you just wanted to get the current time, simply call moment:
```JavaScript
  const right_now = moment()
```
To format the date and time, you can also use the ```.format``` method:
```JavaScript
  right_now.format("dddd, MMMM Do YYYY, h:mm:ss a");
```
Or if you wanted to add an amount of time to the current time, you can use the ```.add``` method:
```JavaScript
  right_now.add(5, 'days');
```

<br>

## You can import specific parts of a package.
Suppose you want to import certain parts of a package. For example, if you were to use the ```mathjs``` library that provides functions to create fractions and perform mathematical processes on them as well as format the input, you can load specific parts of that package. So suppose you want to import fraction, add, and format to your application from the package using destructring, you would do the following:
```JavaScript
  import {fraction, add, format} from 'mathjs';
```
These methods will then be available to you in the file:
```JavaScript
  const f1 = fraction(4, 7);                                      // the fraction 4/7
  const f2 = fraction(3, 8);                                      // the fraction 3/8
  const f3 = add(f1, f2);                                         // the fraction 53/56
  const formatted_fraction = format(f3, { fraction: 'ratio' });
```

<br>

## To export variable and import relative to the current file.
To export variables from a file you want to import them form, you need to use a "default" export. For example, suppose you want to export the App component in App.js and import it to index.js. To do this, you first need to export it:
```JavaScript
  function App() {                         // App component.
    return(
      <h1>Im going to be exported</h1>;
    );
  }

  export default App;                       // export App. 
```
Then you can use a relative import in the file that wants to access the App component we just exported. Note below that the location is specified by the string at the end of the line. The "./" tell JavaScript to look *realtive* to the current file
```JavaScript
  import App from './App'
```

</dd>
</dl>

<br>
<br>
<br>

# How many JSX

<dl>
<dd>







</dd>
</dl>

<br>
<br>
<br>
