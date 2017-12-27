export const getData = (method, url, data, ascny = true) => {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.onload = function () {
            if (xml.readyState === 4) {
                if ((xml.status >= 200 && xml.status < 300) || xml === 304) {
                    var data = xml.responseText;
                    data = JSON.parse(data);
                    resolve(data);
                } else {
                    reject(xml.statusText);
                }
            } else {
                reject(xml.readyState);
            }
        };

        method = method.toUpperCase();

        xml.open(method, url, ascny);
        // xml.responseType = 'json';
        xml.send(data);
    })
};