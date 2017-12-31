import React, {Component} from 'react';
import {connect} from './react-redux';

class Header extends Component {
    render() {
        return (
            <div style={{color: this.props.themeColor}}>
                我是头部，我引领2018年的未来
            </div>
        )
    }
}

const mapStateToProps = (selfState, sendState) => {
    return {
        themeColor: selfState.themeColor
    }
};

Header = connect(mapStateToProps)(Header);

export default Header;