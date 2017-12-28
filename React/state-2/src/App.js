import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    };

    constructor() {
        super();
        this.state = {
            themeColor: 'red'
        }
    }

    getChildContext() {
        return {
            themeColor: this.state.themeColor
        }
    }

    render() {
        return (
            <div className="App">

            </div>
        );
    }
}

export default App;
