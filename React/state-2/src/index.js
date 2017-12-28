// const appState = {
//     title: {
//         text: 'React 学习中。。。',
//         color: 'red'
//     },
//     content: {
//         text: '2017减肥成功',
//         color: 'blue'
//     }
// };

function renderTitle(oldState, newState) {
    const title = document.getElementById('title');
    title.innerHTML = state.text;
    title.style.color = state.color;
}

function renderContent(oldState, newState) {
    const content = document.getElementById('content');
    content.innerHTML = state.text;
    content.style.color = state.color;
}

function renderApp(oldState, newState) {
    renderTitle(oldState.title, newState.title);
    renderContent(oldState.content, newState.title);
}

// renderApp(appState);
//
// // dispatch 这个函数是修改共享数据内容的  你想去修改必须dispatch
//
// function stateChange(action, state) {
//     switch (action.type) {
//         case 'UPDATE_TITLE_TEXT':
//             state.title.text = action.text;
//             break;
//         case 'UPDATE_CONTENT_COLOR':
//             state.content.color = action.color;
//             break;
//         default:
//             break;
//     }
//
// }
//
// //  store   管理dispatch store
//
// function createStore(state, stateChange) {
//     const listeners = [];
//     const getState = () => state;
//     const subscribe = (listener) => listeners.push(listener);
//     const dispatch = (action) => {
//         stateChange(action, state);
//         listeners.forEach((listener) => listener());
//     };
//     return {getState, dispatch, subscribe};
// }
//
// const store = createStore(appState,stateChange);
// store.subscribe(() => renderApp(store.getState()));
// renderApp(store.getState());

// 创建相关的reducer这个是数据的管理中心，通过dispatch来改变这里的数据，这里的数据需要注意的是数据的状态共享

function themeReducer(state, action) {
    if (!state) {
        return {
            title: {
                text: 'React 学习中。。。',
                color: 'red'
            },
            content: {
                text: '2017减肥成功',
                color: 'blue'
            }
        }
    }

    switch (action.type) {
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: 'yellow'
                }
            };
        case 'UPDATE_CONTENT_TEXT':
            return {
                ...state,
                content: {
                    ...state.content,
                    text: '展望2018年'
                }
            };
        default:
            return state;
    }
}

function createStore(reducer) {
    let state = null;
    const listeners = [];
    const getState = () => state;
    const subscribe = (listener) => listeners.push(listener);
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };
    dispatch({});
    return {getState, subscribe, dispatch}
}