import bb from './components/b'
import Vue from 'vue'

const vueInstance = propreties => {
  const _prop = {num: 10}
  const instance = new Vue({
    data: _prop,
    render(h) {
      return h('div', {
        props: {
          name: '111'
        }
      }, [
        h('h1', this)
      ])
    }
  })

  const component = instance.$mount()
  return component
}

export default vueInstance
