import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux"; //

ReactDOM.render(
  <React.StrictMode>
<Provider store={store}> {/*//Компонент который даем доступ всем компонентом находящ-ся внутри него. Вобщем все компоненты будут иметь доступ к хранилище store*/}
    <App />
</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

