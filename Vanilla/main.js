/* local props */
var isLocal = window.location.protocol == 'file:';

function httpGet(url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.send(null);
    return xhr;
}

var xhr = httpGet('categories.json');
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) {
        if(xhr.status !== 0 || isLocal) {
            //onload
            var jsonResponse = xhr.response;
            if(jsonResponse){
                refreshCategoriesViewNode(jsonResponse.data);
            }else{
                refreshCategoriesViewNode([]);
            }
        }else{
            //onerror
            refreshCategoriesViewNode([]);
        }
    }
}

/* DOM Event handler */
function onClickCategory(id) {
    var xhr = httpGet('documents_' + id + '.json');
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4) {
            if(xhr.status !== 0 || isLocal) {
                //onload
                var jsonResponse = xhr.response;
                if(jsonResponse){
                    refreshDocumentsViewNode(jsonResponse.data);
                }else{
                    refreshDocumentsViewNode([]);
                }
            }else{
                //onerror
                refreshDocumentsViewNode([]);
            }
        }
    }
}

function refreshCategoriesViewNode(categories) {
    var categoriesViewNode = document.getElementById('categories-view');
    var html = '';
    if(categories.length > 0){
        for (var i = 0; i < categories.length; i++) {
            html += '<a href="javascript:void(0)" onclick="onClickCategory(' + categories[i].id + ')">' + categories[i].label + '</a>';
        }
    }else{
        html = '<div>No category</div>';
    }
    if(html) {
        categoriesViewNode.innerHTML = html;
    }
}

function refreshDocumentsViewNode(documents) {
    var docsViewNode = document.getElementById('docs-view');
    var html = '';
    if(documents.length > 0){
        for (var i = 0; i < documents.length; i++) {
            html += '<div>' + documents[i].label + '</div>';
        }
    }else {
        html = '<div>No document</div>';
    }
    if(html) {
        docsViewNode.innerHTML = html;
    }
}

