import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ThemeSwitch extends Component {
    static contextTypes = {
        store: PropTypes.object
    };

    constructor() {
        super();
        this.state = {
            themeColor: ''
        };
    }

    componentWillMount() {
        const {store} = this.context;
        this._changeStateColor();
        store.subscribe(() => this._changeStateColor());
    }

    _changeStateColor() {
        const {store} = this.context;
        let newState = store.getState();
        this.setState({
            themeColor: newState.themeColor
        })
    }

    handleChangeThemeColor(color) {
        const {store} = this.context;
        store.dispatch({
            type: 'UPDATE_THEMECOLOR',
            themeColor: color
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleChangeThemeColor.bind(this, 'red')}
                        style={{color: this.state.themeColor}}>Red
                </button>
                <button onClick={this.handleChangeThemeColor.bind(this, 'blue')}
                        style={{color: this.state.themeColor}}>Blue
                </button>
            </div>
        )
    }
}

export default ThemeSwitch;