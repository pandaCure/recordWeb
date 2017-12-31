import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const connect = (mapStateToProps, mapDispatchToProps) => (WrapperComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        };

        constructor() {
            super();
            this.state = {
                allProps: ''
            }
        }

        componentWillMount() {
            const {store} = this.context;
            this._getData();
            store.subscribe(() => this._getData());
        }

        _getData() {
            const {store} = this.context;
            const state = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {};
            const methods = mapDispatchToProps ? mapDispatchToProps(store, this.props) : {};
            this.setState({
                allProps: {
                    ...state,
                    ...methods,
                    ...this.props
                }
            })
        }


        render() {
            return (
                <WrapperComponent {...this.state.allProps}/>
            )
        }
    }

    return Connect;
};

export class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    };

    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}