import React, {Component} from 'react';
import PropsType from 'prop-types';

class Comment extends Component {
    static propsType = {
        comment: PropsType.object,
        deleteEvent: PropsType.func
    };

    constructor() {
        super();
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._getTimeString();
        this._timer = setInterval(
            this._getTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    _getTimeString() {
        const comment = this.props.comment;
        const duration = (+Date.now() - comment.nowDate) / 1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    handleDeleteEvent() {
        if (this.props.deleteEvent) {
            this.props.deleteEvent(this.props.index);
        }
    }


    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.handleDeleteEvent.bind(this)}>
                    删除
                </span>
            </div>
        )
    }
}

export default Comment;