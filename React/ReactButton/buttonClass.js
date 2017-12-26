const DOM =
    `
        <button>
            <span class='button-text'>点赞</span>
            <span>👍</span>
        </button>
        `;

const createDOMFromString = domString => {
    let div = document.createElement('div');
    div.innerHTML = domString;
    return div;
}

class Button {
    constructor() {
        this.state = { isLiked: false };
    }

    render() {
        this.el = createDOMFromString(DOM);
        this.el.addEventListener('click', this.changeState.bind(this), false);
        return this.el;
    }

    changeState() {
        // 这里面的this是指向这个元素
        const text = document.querySelector('.button-text');
        this.state.isLiked = !this.state.isLiked;
        text.innerHTML = this.state.isLiked ? '点赞' : '取消';
    }
}

