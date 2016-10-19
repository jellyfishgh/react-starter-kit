'use strict';

function fetch(url, data, method, timeout, successHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = 'json';
    xhr.timeout = timeout;
    xhr.ontimeout = function () {
        errorHandler(new Error('请求超时，请稍后重试。'));
    };
    xhr.onerror = function (err) {
        errorHandler(err);
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                successHandler(xhr.response);
            } else {
                errorHandler(new Error('Error: ' + xhr.status));
            }
        }
    };
    xhr.send(data);
}