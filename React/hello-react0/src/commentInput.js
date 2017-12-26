import React, {Component} from 'react'

class CommentInput extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            username: '',
            content: ''
        }
    }

    handleUsernameChange(e) {
        const value = e.target.value;
        this.setState({
            username: value
        })
    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state);
        }
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div className='comment-input'>
                {/*可控组件*/}
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                               onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content}
                                  onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;