import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    static contextTypes = {
        store: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
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

    render() {
        return (
            <div style={{color: this.state.themeColor}}>Header</div>
        )
    }
}

export default Header;