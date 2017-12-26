import React, {Component} from 'react'

class CommentInput extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            username: '',
            content: '',
            cbox: '男',
            checked: false,
            city: '',
            love: false
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

    handleSexChange(e) {
        console.log(e.target.checked);
        this.setState({
            checked: !this.state.checked
        })
    }

    handleCityChange(e) {
        console.log(e.target.value);
        this.setState({
            city: e.target.valeu
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
                <div className='comment-field'>
                    <span className='comment-field-name'>性别：</span>
                    <div className='comment-field-input'>
                        <input type="checkbox" value={this.state.cbox} checked={this.state.checked}
                               onChange={this.handleSexChange.bind(this)}/>
                        <input type="radio" value={this.state.cbox} checked={this.state.checked}
                               onChange={this.handleSexChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>城市：</span>
                    <div className='comment-field-input'>
                        <select name="city" id="city" value={this.state.city}
                                onChange={this.handleCityChange.bind(this)}>
                            <option value="">请选择城市</option>
                            <option value="dalian">大连</option>
                            <option value="shenyang">沈阳</option>
                            <option value="tieling">铁岭</option>
                        </select>
                    </div>
                </div>
                {/*非可控组件*/}
                <div className='comment-field'>
                    <span className='comment-field-name'>爱好：</span>
                    <div className='comment-field-input'>
                        <input type="radio" defaultChecked={this.state.love} name='j'/>
                        <input type="radio" defaultChecked={this.state.love} name='j'/>
                        <input type="radio" defaultChecked={this.state.love} name='j'/>
                        <input type="radio" defaultChecked={this.state.love} name='j'/>
                        <input type="radio" defaultChecked={this.state.love}/>
                        <input type="radio"/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>爱好：</span>
                    <div className='comment-field-input'>
                        <input type="text" defaultValue={this.state.love}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;