function merge (target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i] || {};
        for (let prop in source) {
            // eslint-disable-next-line no-prototype-builtins
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }

    return target;
}

var a = merge({a:1,b:{e:1,f:3}}, {c:1,d:1})
console.log(a)
console.log(1111111111111)

