import React, {Component} from 'react';

class TestComponentTime extends Component {
    constructor() {
        super();
        console.log('constructor');
        this.state = {
            data: ''
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleData() {
        this.setState({
            data: 'zzy'
        })
    }

    render() {
        return (
            <div>
                我来了
                {console.log('render')}
                <span>{this.state.data}</span>
                <button onClick={this.handleData.bind(this)}>更新数据触发生命周期吗</button>
            </div>
        )
    }
}

export default TestComponentTime;
