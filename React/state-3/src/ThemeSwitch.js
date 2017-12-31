import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from './react-redux';

class ThemeSwitch extends Component {
    static contextTypes = {
        store: PropTypes.object
    };

    static propTypes = {
        themeColor: PropTypes.string,
        changeThemeColor: PropTypes.func
    };

    constructor(props) {
        super(props);
        console.log(props);
    }

    handleChangeThemeColor(color) {
        if (this.props.changeThemeColor) {
            this.props.changeThemeColor(color);
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleChangeThemeColor.bind(this, 'red')}
                        style={{color: this.props.themeColor}}>Red
                </button>
                <button onClick={this.handleChangeThemeColor.bind(this, 'blue')}
                        style={{color: this.props.themeColor}}>Blue
                </button>
            </div>
        )
    }
}

const mapStateToProps = (changeState, sendState) => {
    return {
        themeColor: changeState.themeColor
    }
};

const mapDispatchToProps = (store, sendFunction) => {
    return {
        changeThemeColor: function (color) {
            store.dispatch({
                type: 'UPDATE_THEMECOLOR',
                themeColor: color
            });
        }
    }
};

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);

export default ThemeSwitch;