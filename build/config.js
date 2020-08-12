const path = require('path');
// const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const Components = require('../components.json');
console.log(111, path.resolve(__dirname, '../src'))
// const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
// const mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
let externals = {};

Object.keys(Components).forEach(function (key) {
    externals[`xg-ui/packages/${key}`] = `xg-ui/lib/${key}`;
});

// utilsList.forEach(function (file) {
//     file = path.basename(file, '.js');
//     externals[`xg-ui/src/utils/${file}`] = `xg-ui/lib/utils/${file}`;
// });
// mixinsList.forEach(function (file) {
//     file = path.basename(file, '.js');
//     externals[`xg-ui/src/mixins/${file}`] = `xg-ui/lib/mixins/${file}`;
// });

externals = [Object.assign({
    vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
    'vue$': 'vue/dist/vue.esm.js',
    main: path.resolve(__dirname, '../src'),
    packages: path.resolve(__dirname, '../packages'),
    examples: path.resolve(__dirname, '../examples'),
    'xg-ui': path.resolve(__dirname, '../')
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
