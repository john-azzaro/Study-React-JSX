const appRoot = document.querySelector('#application-root');
const myGreeting = React.createElement('h1', null, 'Hello world!');

ReactDOM.render(myGreeting, appRoot);