export function deepClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments deepClone')
    }
    const targetObj = source.constructor === Array ? [] : {}
    Object.keys(source).forEach(keys => {
        if (source[keys] && typeof source[keys] === 'object') {
            targetObj[keys] = deepClone(source[keys])
        } else {
            targetObj[keys] = source[keys]
        }
    })
    return targetObj
}

export function cloneDeep(source ,hash = new WeakMap()){
    if(!isObject(source)) return source
    if(hash.has(source)) return hash.get(source)
    var target = Array.isArray(source)? []:{}
    hash.set(source,target)
    for (var key in source){
        if(Object.prototype.hasOwnProperty.call(source,key)){
            if(isObject(source[key])){
                target[key] = cloneDeep(source[key],hash)
            }else{
                target[key] = source[key]
            }
        }
    }
    return target
}