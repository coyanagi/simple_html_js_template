
/* Consts */
var isLocal = window.location.protocol == 'file:';

/* Utils */
export function httpGet(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("GET", url, true);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status !== 0 || isLocal) {
                    //onload
                    var jsonResponse = xhr.response;
                    if(jsonResponse){
                        resolve(jsonResponse.data);
                    }else{
                        resolve([]);
                    }
                }else{
                    //onerror
                    resolve([]);
                }
            }
        }
        xhr.send(null);
    });
}
