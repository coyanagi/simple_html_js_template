/* Consts */
var isLocal = window.location.protocol == 'file:';

/* Utils */
function httpGet(url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.send(null);
    return xhr;
}

/* Components */
Vue.component('category-list-view', {
    props: ['categories'],
    methods: {
        onClickCategory: function(id) {
            this.$emit('on-change-category', id);
        }
    },
    template: 
        '<div>' +
            '<h2>Categories</h2>' +
            '<div v-if="categories.length > 0">' +
                '<a v-for="category in categories" href="javascript:void(0)" v-on:click="onClickCategory(category.id)">{{category.label}}</a>' +
            '</div>' +
            '<div v-else>' +
                '<div>No category</div>' +
            '</div>' +
        '</div>'
});

Vue.component('document-list-view', {
    props: ['documents'],
    template: 
        '<div>' + 
            '<h2>Documents</h2>' +
            '<div v-if="documents.length > 0">' +
                '<div v-for="document in documents">{{document.label}}</div>' +
            '</div>' +
            '<div v-else>' +
                '<div>No document</div>' +
            '</div>' +
        '</div>'
});

/* Main */
var vm = new Vue({
    el: "#main",
    data: {
        categories: [],
        documents: []
    },
    mounted: function() {
        this.retrieveCategories();
    },
    methods: {
        retrieveCategories: function() {
            var self = this;
            var xhr = httpGet('categories.json');
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4) {
                    if(xhr.status !== 0 || isLocal) {
                        //onload
                        var jsonResponse = xhr.response;
                        if(jsonResponse){
                            self.categories = jsonResponse.data;
                        }else{
                            self.categories = [];
                        }
                    }else{
                        //onerror
                        self.categories = [];
                    }
                }
            }
        },
        retrieveDocuments: function(categoryId) {
            var self = this;
            var xhr = httpGet('documents_' + categoryId + '.json');
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4) {
                    if(xhr.status !== 0 || isLocal) {
                        //onload
                        var jsonResponse = xhr.response;
                        if(jsonResponse){
                            self.documents = jsonResponse.data;
                        }else{
                            self.documents = [];
                        }
                    }else{
                        //onerror
                        self.documents = [];
                    }
                }
            }
        }
    },
    template: '<div class="container">' +
        '<div class="left-nav">' +
            '<category-list-view v-bind:categories="categories" v-on:on-change-category="retrieveDocuments"></category-list-view>' +
        '</div>' +
        '<div class="right-nav">' +
            '<document-list-view v-bind:documents="documents"></document-list-view>' +
        '</div>' +
    '</div>'
});

