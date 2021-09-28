/**
 * 防抖
 * 注意this的指向问题
 * */
function _debounce(fn, delay = 1000) {
    var timer;
    return function () {
        let that = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(that, args)
            timer = null;
        }, delay);
    };
}

/**
 * 节流
 */

function _throttle(fn, interval = 1000) {
    var last;
    var timer;
    return function () {
        let that = this;
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(that, args);
            }, interval);
        } else {
            last = now;
            fn.apply(that, args);
        }
    }
}