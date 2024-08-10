import './bootstrap';

// resources/js/app.tsx
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <h1>Hola desde TypeScript!</h1>;
};

ReactDOM.render(<App />, document.getElementById('app'));