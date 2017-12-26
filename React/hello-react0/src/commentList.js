import React, {Component} from 'react';
import Comment from './comment';

class CommentList extends Component {
    static defaultProps = {
        comments: [
            {
                username: 'zzy',
                content: 'i love you'
            }
        ]
    };

    constructor(props, context) {
        super(props, context);
        console.log(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                {
                    this.props.comments.map((comment,index) => {
                        return <Comment comment={comment} key={index}/>
                    })
                }
            </div>
        )
    }
}

export default CommentList;