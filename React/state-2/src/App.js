import React, {Component} from 'react';
import ajax from '../getData';

const userAjaxGetData = (wrapperComponent, etx) => {
    class AjaxGetData extends Component {
        constructor() {
            super();
            this.state = {
                users: []
            }
        }

        componentWillMount() {
            ajax('get', '../data.' + etx, '').then((resolve) => {
                this.setState({
                    users: resolve.users
                })
            }, (reject) => {
                throw new Error('获取数据失败');
            })
        }

        render() {
            return (
                <wrapperComponent users={this.state.users}/>
            )
        }
    }

    return AjaxGetData;
};

@userAjaxGetData
class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                {this.props.users.map((user, index) => {
                    return <span>{user.name}--{user.sex}</span>
                })}
            </div>
        )
    }
}


export default App;