import React, {Component} from 'react';
import Comment from './Comment';
import PropsType from 'prop-types';

class CommentList extends Component {
    static propsDefault = {
        comments: []
    };

    static propsType = {
        comments: PropsType.array,
        deleteEvent: PropsType.func
    };

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, index) => {
                    return <Comment comment={comment} key={index} index={index}
                                    deleteEvent={this.props.deleteEvent.bind(this)}/>
                })}
            </div>
        )
    }
}

export default CommentList;