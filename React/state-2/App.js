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

    handleContextColor() {
        this.setState({
            themeColor: `rgb(${this._handleRandomNum()},${this._handleRandomNum()},${this._handleRandomNum()})`
        })
    }

    _handleRandomNum() {
        // Math.Random * (max-min+1)+min
        return Math.floor(Math.random() * 256);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <button onClick={this.handleContextColor.bind(this)}>切换颜色</button>
            </div>
        );
    }
}

class Main extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    };

    render() {
        return (
            <div>
                <h2 style={{color: this.context.themeColor}}>this is main</h2>
                <Content/>
            </div>
        )
    }
}

class Header extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    };

    render() {
        return (
            <div>
                <h2 style={{color: this.context.themeColor}}>this is header</h2>
                <Title/>
            </div>
        )
    }
}

class Title extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    };

    render() {
        return (
            <div>
                <h2 style={{color: this.context.themeColor}}>我爱你中国</h2>
            </div>
        )
    }
}

class Content extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    };

    render() {
        return (
            <div>
                <h2 style={{color: this.context.themeColor}}>你知道吗</h2>
            </div>
        )
    }
}

export default App;
