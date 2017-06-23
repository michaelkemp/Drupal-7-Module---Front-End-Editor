CKEDITOR.plugins.add( 'save', {
    icons: 'save',
    
    init: function( editor ) {
        
        editor.addCommand( 'saveAjax', {
            modes : { wysiwyg:1, source:1 }, 
            exec: function( editor ) {
                saveAjaxCall(editor);
            },
            startDisabled: true
        });
        
        editor.ui.addButton('Save', {
            label: 'Save',
            command: 'saveAjax',
            toolbar: 'doctools',
        });
    },
    
});

function saveAjaxCall(editor) {
    var name = editor.name;
    var div = document.getElementById(name);
    var baseUrl = div.dataset.url;
    var node = div.dataset.node;
    var field = div.dataset.field;
    var html = editor.getData();
    
    var postData = new Object;
    postData['node'] = node;
    postData['field'] = field;
    postData['html'] = html;
    
    var json = JSON.stringify(postData);
    
    //console.log(json, name, node, field, html);
    
    // =============== AJAX SEND DATA ==============
    if (editor.checkDirty()) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText.trim();
                if (response == "ok") {
                    editor.resetDirty();
                    editor.getCommand('saveAjax').disable();
                } else {
                    console.log("response", response);
                }
            }
        };
        xhttp.open("POST", baseUrl + "/feeditAjaxSave", true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(json);                
    }

}