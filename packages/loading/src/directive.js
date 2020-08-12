import Vue from 'vue'
import Loading from './loading'
import { addClass, getStyle } from 'xg-ui/src/utils/dom';
const Mask = Vue.extend(Loading)
const loadingDirective = {}
loadingDirective.install = Vue => {
    const insertDom = (parent, el, binding) => {
        if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
            if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
                addClass(parent, 'xg-loading-parent--relative');
            }
            if (binding.modifiers.fullscreen && binding.modifiers.lock) {
                addClass(parent, 'xg-loading-parent--hidden');
            }
            el.domVisible = true;

            parent.appendChild(el.mask);
            Vue.nextTick(() => {
                if (el.instance.hiding) {
                    el.instance.$emit('after-leave');
                } else {
                    el.instance.visible = true;
                }
            });
            el.domInserted = true;
        } else if (el.domVisible && el.instance.hiding === true) {
            el.instance.visible = true;
            el.instance.hiding = false;
        }
    };
    Vue.directive('loading', {
        bind: function (el, binding, vnode) {
            // eslint-disable-next-line no-debugger
            debugger;
            const textExr = el.getAttribute('xg-loading-text')
            const vm = vnode.context;
            const mask = new Mask({
                el: document.createElement('div'),
                data: {
                    text: vm && vm[textExr] || textExr
                }
            })
            el.instance = mask
            el.mask = mask.$el
            if (binding.value) {
                Vue.nextTick(() => {
                    el.originalPosition = getStyle(el, 'position');
                    insertDom(el, el, binding);
                })
            }
        },
        update: function (el, binding) {
            el.instance.setText(el.getAttribute('xg-loading-text'))
            if (binding.oldValue !== binding.value) {
                console.log(binding.oldValue, binding.value)
            }
        }
    })
}

export default loadingDirective;
