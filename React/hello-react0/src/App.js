import React, {Component} from 'react';
import './App.css';
import CommentInput from './commentInput';
import CommentList from './commentList';
import TestComponentTime from './testComponentTime';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            comments: [],
            isTrue: false
        };
    }

    handleCommentInput(state) {
        // 视图更新不了，只能通过setState去更新
        if (!state) return;
        if (!state.username) return alert('请输入用户名');
        if (!state.content) return alert('请输入评论内容');
        this.state.comments.push(state);
        this.setState({
            comments: this.state.comments
        })
    }

    handleComponentTime() {
        this.setState({
            isTrue: !this.state.isTrue
        })
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleCommentInput.bind(this)}/>
                <CommentList comments={this.state.comments}/>
                {this.state.isTrue ? <TestComponentTime/> : null}
                <button onClick={this.handleComponentTime.bind(this)}>生命周期</button>
            </div>
        );
    }
}

export default App;
