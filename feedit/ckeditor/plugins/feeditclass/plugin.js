/**
 * @file Plugin for Adding Classed Spans. 
 */
( function() {

    CKEDITOR.plugins.add('feeditclass', {
       
        init: function( editor ) {

            // ================== GREY LINK BUTTON BUTTON ==================
            editor.addCommand( 'insertGreyButton', {
                exec: function( editor ) {
                    var theHREF = "#";
                    var selected_text = editor.getSelection().getSelectedText();
                    var start_element = editor.getSelection().getStartElement();
                    if (start_element.hasAttribute('href')) {
                        theHREF = start_element.getAttribute('href');
                    }
                    var newElement = new CKEDITOR.dom.element.createFromHtml("<a href='" +theHREF+ "' class='feedit-button-anchor-class'><span class='feedit-button-class'>" +selected_text+ "</span></a>");
                    editor.insertElement(newElement);
                }
            });
            editor.ui.addButton( 'insertGreyButton', {
                label: 'Insert Grey Button',
                command: 'insertGreyButton',
                icon: this.path + 'images/button.png'
            });

            // ================== HASHTAG BUTTON ==================
            editor.addCommand( 'insertHashTag', {
                exec: function( editor ) {
                    var selected_text = editor.getSelection().getSelectedText();
                    var newElement = new CKEDITOR.dom.element("span");
                    newElement.setAttributes({'class':'feedit-span-class'});
                    newElement.setText(selected_text);
                    editor.insertElement(newElement);
                }
            });
            editor.ui.addButton( 'insertHashTag', {
                label: 'Insert Hash Tag',
                command: 'insertHashTag',
                icon: this.path + 'images/hash.png'
            });
        }
    });

} )();
