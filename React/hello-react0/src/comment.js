import React, { Component } from 'react';

class Comment extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    render(){
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default Comment;