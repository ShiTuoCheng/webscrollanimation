/**
 * Created by shituocheng on 2016/9/17.
 */

function onLoadEvent(func) {
    var onLoad = window.onload;
    if (typeof window.onload !== 'function'){
        window.onload = func;
    }else{
        window.onload = function () {
            onLoad();
            func();
        }
    }
}