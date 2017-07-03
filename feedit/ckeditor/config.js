/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

    // http://ckeditor.com/latest/samples/toolbarconfigurator/index.html

    config.extraPlugins = 'sourcedialog,save,dialog,dialogui,menu,contextmenu,panel,floatpanel,liststyle,menubutton,button,htmlbuttons,justify';
    config.extraAllowedContent = 'ul(*);ol(*);p(*);div(*);span(*);';

	config.toolbarGroups = [
		{ name: 'save', groups: [ 'save' ] },
		{ name: 'document', groups: [ 'document', 'mode', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		'/',
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];
    
    config.format_tags = 'p;div;h1;h2;h3;h4';
    
	config.removeButtons = 'NewPage,Preview,Print,Templates,PasteFromWord,Find,SelectAll,Scayt,Form,Textarea,Select,Checkbox,Radio,Button,TextField,ImageButton,Strike,CopyFormatting,Subscript,Superscript,JustifyBlock,BidiLtr,BidiRtl,Language,Image,Flash,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,Font,FontSize,TextColor,BGColor,Maximize,ShowBlocks,About';

};

