import React, {Component} from 'react';
import './App.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        this._loadContent();
    }

    _loadContent() {
        let content = window.localStorage.getItem('content');
        if (content) {
            this.setState({
                comments: JSON.parse(content)
            })
        }
    }

    getCommentsValue(state) {
        this.state.comments.push(state);
        this.setState({
            comments: this.state.comments
        });
        this._saveContent();
    }

    _saveContent(){
        window.localStorage.setItem('content', JSON.stringify(this.state.comments));
    }

    handleDeleteEvent(index) {
        this.state.comments.splice(index, 1);
        this.setState({
            comments: this.state.comments
        })
        this._saveContent();
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.getCommentsValue.bind(this)}/>
                <CommentList comments={this.state.comments} deleteEvent={this.handleDeleteEvent.bind(this)}/>
            </div>
        );
    }
}

export default App;
