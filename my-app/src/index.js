// JSX的引入 jS+XML
import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import App from "./01-base/10-toDoList"

// React18的写法
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("root"))