import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';

class Content extends Component {
    static contextTypes = {
        store: PropTypes.object
    };

    constructor() {
        super();
        this.state = {};
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

    render() {
        return (
            <div style={{color: this.state.themeColor}}>
                祭奠逝去的2017
                <ThemeSwitch/>
            </div>
        )
    }
}

export default Content;