import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Header from "./components/Header";

const App = () => {
    return (
        <Router>
            <Header/>
            <div className='container py-20'>
                <Route exact path={'/'}><Home/></Route>
                <Route exact path={'/cart'}><Cart/></Route>
            </div>
        </Router>
    );
};

export default App;