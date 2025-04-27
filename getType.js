export function getType(data){
      // 获取到 "[object Type]"，其中 Type 是 Null、Undefined、Array、Function、Error、Boolean、Number、String、Date、RegExp 等。
    const originType = Object.prototype.toString.call(data)
      // 可以直接截取第8位和倒数第一位，这样就获得了 Null、Undefined、Array、Function、Error、Boolean、Number、String、Date、RegExp 等
    const type = originType.slice(8,-1)
    return type.toLowerCase()
}