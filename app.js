const appRoot = document.querySelector('#application-root');

// Standard way to write HTML elements:
// const myGreeting = React.createElement('h1', null, 'Hello world!');

// Using JSX!
const myGreeting = <h1>Hello world, it's JSX!</h1>;


ReactDOM.render(myGreeting, appRoot);