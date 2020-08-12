import Button from '../packages/button/index.js';
import Loading from '../packages/loading/index.js'

const components = [
    Button
];

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
    Vue.use(Loading.directive);

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '1.0.0',
    install,
    Button,
    Loading
};
