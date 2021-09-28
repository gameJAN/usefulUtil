// 功能：将浮点数四舍五入，取小数点后2位，如果不足2位则补0,这个函数返回的是字符串的格式
 function changeTwoDecimal(x) {
    let f_x = parseFloat(x)
    if (isNaN(f_x)) {
        return '0'
    }
    f_x = Math.round(f_x * 100) / 100
    let s_x = f_x.toString()
    let pos_decimal = s_x.indexOf('.')
    if (pos_decimal < 0) {
        pos_decimal = s_x.length
        s_x += '.'
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0'
    }
    return s_x
}

// 小数点限制输入
function inputLimitNum(data, num) {
    if (!num) { //正整数
        return data.replace(/[^0-9]+/g, '');
    } else {
        let re = new RegExp("^\\d{1,}(\\.?\\d{0," + num + "})", "g");
        return (data.match(re) ? data.match(re)[0] : null) || null;
    }
}

// 功能：将浮点数四舍五入，取小数点后2位
function changeTwoDecimal2(x) {
    let f_x = parseFloat(x)
    if (isNaN(f_x)) {
        return '0';
    }
    f_x = Math.round(f_x * 100) / 100;
    return f_x;
}
