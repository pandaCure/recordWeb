import React, {Component} from 'react';
import PropsType from 'prop-types';

class CommentInput extends Component {
    static propsType = {
        onSubmit: PropsType.func.isRequired
    };

    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    componentWillMount() {
        this._getSaveName();
    }

    componentDidMount() {
        this.dom.focus();
    }

    _saveName(e) {
        window.localStorage.setItem('username', e.target.value);
    }

    _getSaveName() {
        const username = window.localStorage.getItem('username');
        if (username) {
            this.setState({
                username
            })
        }
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                ...this.state,
                nowDate: +new Date()
            });
        }
        this.setState({
            content: ''
        })
    }

    handleSaveUsername(e) {
        this._saveName(e);
    }

    render() {
        return (
            <div className='comment-input'>
                {/*可控组件*/}
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                               onChange={this.handleUsernameChange.bind(this)}
                               ref={(input) => this.dom = input}
                               onBlur={this.handleSaveUsername.bind(this)}
                        />
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