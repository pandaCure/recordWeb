import React, {Component} from 'react';
import ThemeSwitch from './ThemeSwitch';
import {connect} from './react-redux';

class Content extends Component {
    render() {
        return (
            <div style={{color: this.props.themeColor}}>
                脱单、明年要脱单了
                <ThemeSwitch/>
            </div>
        )
    }
}

// 这个相当于过滤的作用  其实不加这个不行吗

const mapStateToProps = (changeState, sendState) => {
    return {
        themeColor: changeState.themeColor
    }
};

Content = connect(mapStateToProps)(Content);

export default Content;