import Vue from 'vue'
import Loading from "./loading";
import {addClass} from "xg-ui/src/utils/dom";

const Mask = Vue.extend(Loading)

const LoadingDirective = {}
LoadingDirective.install = Vue => {
    function toggle(el, value) {
        el.maskInstance.visible = value
    }
    Vue.directive('Loading', {
        // eslint-disable-next-line no-unused-vars
        bind(el, binding, vnode) {
            const text = el.getAttribute('xg-loading-text')
            let mask = new Mask({
                el: document.createElement('div'),
                data: {
                    text: text || 'loading...'
                }
            })
            el.maskInstance = mask
            el.maskDom = mask.$el
            if (binding.modifiers.fullscreen) {
                addClass(el.maskDom, 'is-fullscreen')
            } else {
                addClass(el, 'xg-loading-parent--relative')
            }
            el.append(el.maskDom)
            toggle(el, binding.value)
        },
        update(el, binding) {
            const text = el.getAttribute('xg-loading-text')
            if (text) el.maskInstance.setText(text)
            toggle(el, binding.value)
        },
        unbind(el) {
            el.maskInstance && el.maskInstance.$destroy()
        }
    })
}
export default LoadingDirective
