this["Formbuilder"] = this["Formbuilder"] || {};
this["Formbuilder"]["templates"] = this["Formbuilder"]["templates"] || {};

this["Formbuilder"]["templates"]["edit/base"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p +=
((__t = ( Formbuilder.templates['edit/base_header']() )) == null ? '' : __t) +
'\n<div class="well">\n  ' +
((__t = ( Formbuilder.templates['edit/common']({ rf : rf, editStructure : editStructure, commonCheckboxes : commonCheckboxes, repeatable : repeatable, repeating : repeating }) )) == null ? '' : __t) +
'\n</div>\n';
 if (Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].edit({rf: rf})){ ;
__p += '\n  <div class="well">\n    ' +
((__t = ( Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].edit({rf: rf}) )) == null ? '' : __t) +
'\n  </div>\n';
 } ;
__p += '\n\n';

}
return __p
};

this["Formbuilder"]["templates"]["edit/base_header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'fb-field-label\'>\n  <span data-rv-text="model.' +
((__t = ( Formbuilder.options.mappings.LABEL )) == null ? '' : __t) +
'"></span>\n</div>';

}
return __p
};

this["Formbuilder"]["templates"]["edit/base_non_input"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( Formbuilder.templates['edit/base_header']() )) == null ? '' : __t) +
'\n' +
((__t = ( Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].edit({rf: rf}) )) == null ? '' : __t) +
'\n';

}
return __p
};

this["Formbuilder"]["templates"]["edit/checkboxes"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<label class="fb-required">\n  <input type=\'checkbox\' data-rv-checked=\'model.' +
((__t = ( Formbuilder.options.mappings.REQUIRED )) == null ? '' : __t) +
'\' />\n  Required\n</label>\n<label class="fb-immediately">\n  <input type=\'checkbox\' data-rv-checked=\'model.' +
((__t = ( Formbuilder.options.mappings.VALIDATE_IMMEDIATELY )) == null ? '' : __t) +
'\' />\n  Validate Immediately\n</label>\n<label class="fb-admin_only">\n    <input type=\'checkbox\' data-rv-checked=\'model.' +
((__t = ( Formbuilder.options.mappings.ADMIN_ONLY )) == null ? '' : __t) +
'\' />\n    Admin only (Note: Admin fields will not appear in the client app.)\n</label>\n';
 if (repeatable){ ;
__p += '\n  <label class="fb-repeating">\n    <input type=\'checkbox\' data-rv-checked=\'model.' +
((__t = ( Formbuilder.options.mappings.REPEATING )) == null ? '' : __t) +
'\' />\n    Repeating\n  </label>\n  <label class="fb-repititions">\n    Min\n    ';
 var disabled = (repeating===true) ? "" : "disabled"; ;
__p += '\n    <input class="minReps" type="text" ' +
((__t = ( disabled )) == null ? '' : __t) +
' data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.MINREPITIONS )) == null ? '' : __t) +
' | number" style="width: 30px" />\n    Max\n    <input class="maxReps" type="text" ' +
((__t = ( disabled )) == null ? '' : __t) +
' data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.MAXREPITIONS)) == null ? '' : __t) +
' | number" style="width: 30px" />\n  </label>\n';
 } ;
__p += '\n';

}
return __p
};

this["Formbuilder"]["templates"]["edit/common"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'fb-common-wrapper\'>\n  <div class=\'fb-label-description\'>\n    ' +
((__t = ( Formbuilder.templates['edit/label_description']({ rf : rf, editStructure : editStructure }) )) == null ? '' : __t) +
'\n  </div>\n  ';
 if (commonCheckboxes){ ;
__p += '\n  <div class=\'fb-common-checkboxes\'>\n    ' +
((__t = ( Formbuilder.templates['edit/checkboxes']({repeatable : repeatable, repeating : repeating}) )) == null ? '' : __t) +
'\n  </div>\n  ';
 } ;
__p += '\n\n  <div class=\'fb-clear\'></div>\n</div>\n';

}
return __p
};

this["Formbuilder"]["templates"]["edit/integer_only"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--<div class=\'fb-edit-section-header\'>Integer only</div>-->\n<!--<label>-->\n  <!--<input type=\'checkbox\' data-rv-checked=\'model.' +
((__t = ( Formbuilder.options.mappings.INTEGER_ONLY )) == null ? '' : __t) +
'\' />-->\n  <!--Only accept integers-->\n<!--</label>-->\n';

}
return __p
};

this["Formbuilder"]["templates"]["edit/label_description"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (editStructure) { ;
__p += '\n  <div class=\'fb-edit-section-header\'>Name</div>\n  <input type=\'text\' data-rv-input=\'model.' +
((__t = ( Formbuilder.options.mappings.LABEL )) == null ? '' : __t) +
'\' />\n';
 } ;
__p += '\n';
 if (Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].valueField !== false) { ;
__p += '\n  <div class=\'fb-edit-section-header\'>' +
((__t = ( Formbuilder.options.mappings.VALUE_HEADER )) == null ? '' : __t) +
'</div>\n  <input type=\'text\' data-rv-input=\'model.' +
((__t = ( Formbuilder.options.mappings.VALUE )) == null ? '' : __t) +
'\' />\n';
 } ;
__p += '\n<div class="fb-field-description">\n  <div class=\'fb-edit-section-header\'>' +
((__t = ( Formbuilder.options.mappings.DESCRIPTION_TITLE )) == null ? '' : __t) +
'</div>\n  <textarea data-rv-input=\'model.' +
((__t = ( Formbuilder.options.mappings.DESCRIPTION )) == null ? '' : __t) +
'\'\n    placeholder=\'' +
((__t = ( Formbuilder.options.mappings.DESCRIPTION_PLACEHOLDER )) == null ? '' : __t) +
'\'></textarea>\n</div>\n<label class="fb-field-description">\n    <div class=\'fb-edit-section-header\'>Field Code</div>\n    <input type=\'text\' data-rv-input=\'model.' +
((__t = ( Formbuilder.options.mappings.FIELD_CODE )) == null ? '' : __t) +
'\' />\n</label>';

}
return __p
};

this["Formbuilder"]["templates"]["edit/min_max"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'fb-edit-section-header\'>Minimum / Maximum</div>\n\nMin\n<input type="text" data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.MIN )) == null ? '' : __t) +
' | number" style="width: 30px" />\n\n&nbsp;&nbsp;\n\nMax\n<input type="text" data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.MAX )) == null ? '' : __t) +
' | number" style="width: 30px" />\n\n<select data-rv-value="model.' +
((__t = ( Formbuilder.options.mappings.LENGTH_UNITS )) == null ? '' : __t) +
'" style="width: auto;">\n  <option value="value">Value</option>\n</select>\n';

}
return __p
};

this["Formbuilder"]["templates"]["edit/min_max_length"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="fb-configure-length">\n  <div class=\'fb-edit-section-header\'>Length Limit</div>\n\n  Min\n  <input type="text" data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.MIN )) == null ? '' : __t) +
' | number" style="width: 30px" />\n\n  &nbsp;&nbsp;\n\n  Max\n  <input type="text" data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.MAX)) == null ? '' : __t) +
' | number" style="width: 30px" />\n\n  &nbsp;&nbsp;\n\n  <select data-rv-value="model.' +
((__t = ( Formbuilder.options.mappings.LENGTH_UNITS )) == null ? '' : __t) +
'" style="width: auto;">\n    <option value="characters">characters</option>\n  </select>\n</div>\n';

}
return __p
};

this["Formbuilder"]["templates"]["edit/min_max_options"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (rf.get(Formbuilder.options.mappings.REQUIRED) === true){ ;
__p += '\n<div class="fb-configure-length">\n  <div class=\'fb-edit-section-header\'>Selected Options Limit</div>\n\n  Min\n  <input type="text" data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.MIN )) == null ? '' : __t) +
' | number" style="width: 30px" />\n\n  &nbsp;&nbsp;\n\n  Max\n  <input type="text" data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.MAX)) == null ? '' : __t) +
' | number" style="width: 30px" />\n</div>\n';
 } ;
__p += '\n';

}
return __p
};

this["Formbuilder"]["templates"]["edit/min_max_step"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'fb-edit-section-header\'>Minimum / Maximum</div>\n\nMin\n<input type="text" data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.MIN )) == null ? '' : __t) +
' | number" style="width: 30px" />\n\n&nbsp;&nbsp;\n\nMax\n<input type="text" data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.MAX )) == null ? '' : __t) +
' | number" style="width: 30px" />\n\nStep Size\n<input type="text" data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.STEP_SIZE )) == null ? '' : __t) +
' | number" style="width: 30px" />';

}
return __p
};

this["Formbuilder"]["templates"]["edit/options"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'fb-edit-section-header\'>Options</div>\n\n';
 if (typeof includeDatasource !== 'undefined'){ ;
__p += '\n  <label class="includeDataSource">\n    ';
 var checked = (rf.get(Formbuilder.options.mappings.DATASOURCE_TYPE)==='dataSource') ? "checked" : ""; ;
__p += '\n      <input type=\'checkbox\' ' +
((__t = (checked)) == null ? '' : __t) +
' />\n      Use a Data Source to populate field options?\n  </label>\n\n ';
 var disabled = (rf.get(Formbuilder.options.mappings.DATASOURCE_TYPE)==='dataSource') ? "" : "disabled"; ;
__p += '\n  <div class=\'ds-dd\'>\n    <select ' +
((__t = (disabled)) == null ? '' : __t) +
' class=\'ds-select\'></select>\n  </div>\n\n  <div class=\'datasource-data-view\'></div>\n';
 } ;
__p += '\n\n';
 if (typeof includeBlank !== 'undefined'){ ;
__p += '\n  <label class="includeBlank">\n    <input type=\'checkbox\' data-rv-checked=\'model.' +
((__t = ( Formbuilder.options.mappings.INCLUDE_BLANK )) == null ? '' : __t) +
'\' />\n    Include blank\n  </label>\n';
 } ;
__p += '\n\n';
 var isHidden = (rf.get(Formbuilder.options.mappings.DATASOURCE_TYPE)==='dataSource') ? "hidden" : "" ;
__p += '\n<div class=\'option-wrapper ' +
((__t = (isHidden)) == null ? '' : __t) +
'\'>\n  <div class=\'option\' data-rv-each-option=\'model.' +
((__t = ( Formbuilder.options.mappings.OPTIONS )) == null ? '' : __t) +
'\'>\n    ';
 if (typeof noCheckboxes === 'undefined'){ ;
__p += '\n      <input type="checkbox" class=\'js-default-updated\' data-rv-checked="option:checked" />\n    ';
 } ;
__p += '\n    <input type="text" data-rv-input="option:label" class=\'option-label-input\' />\n    <div class="btn-group">\n      <a class="btn btn-success btn-small js-add-option" title="Add Option"><i class=\'icon-plus-sign\'></i></a>\n      <a class="btn btn-danger btn-small js-remove-option" title="Remove Option"><i class=\'icon-minus-sign\'></i></a>\n    </div>\n  </div>\n\n  ';
 if (typeof includeOther !== 'undefined'){ ;
__p += '\n    <label class="includeOther">\n      <input type=\'checkbox\' data-rv-checked=\'model.' +
((__t = ( Formbuilder.options.mappings.INCLUDE_OTHER )) == null ? '' : __t) +
'\' />\n      Include "other"\n    </label>\n  ';
 } ;
__p += '\n  <div class=\'fb-bottom-add\'>\n    <a class="js-add-option ' +
((__t = ( Formbuilder.options.BUTTON_CLASS )) == null ? '' : __t) +
'">Add option</a>\n  </div>\n</div>\n';

}
return __p
};

this["Formbuilder"]["templates"]["edit/readonly"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'fb-edit-section-header\'>Options</div>\n\n<label class="includeDataSource">\n  ';
 var checked = (rf.get(Formbuilder.options.mappings.DATASOURCE_TYPE)==='dataSource') ? "checked" : ""; ;
__p += '\n    <input type=\'checkbox\' ' +
((__t = (checked)) == null ? '' : __t) +
' />\n    Use a Data Source to populate field options?\n</label>\n\n';
 var disabled = (rf.get(Formbuilder.options.mappings.DATASOURCE_TYPE)==='dataSource') ? "" : "disabled"; ;
__p += '\n<div class=\'ds-dd\'>\n  <select ' +
((__t = (disabled)) == null ? '' : __t) +
' class=\'ds-select\'></select>\n</div>\n\n<div class=\'datasource-data-view\'></div>\n\n';
 var isHidden = (rf.get(Formbuilder.options.mappings.DATASOURCE_TYPE)==='dataSource') ? "hidden" : "" ;
__p += '\n<div class=\'option-wrapper ' +
((__t = (isHidden)) == null ? '' : __t) +
'\'>\n  <div class=\'option\' data-rv-each-option=\'model.' +
((__t = ( Formbuilder.options.mappings.OPTIONS )) == null ? '' : __t) +
'\'>\n    <textarea type="text" data-rv-input="option:label" class=\'option-label-input\' /></textarea>\n  </div>\n</div>\n';

}
return __p
};

this["Formbuilder"]["templates"]["edit/size"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--<div class=\'fb-edit-section-header\'>Size</div>-->\n<!--<select data-rv-value="model.' +
((__t = ( Formbuilder.options.mappings.SIZE )) == null ? '' : __t) +
'">-->\n  <!--<option value="small">Small</option>-->\n  <!--<option value="medium">Medium</option>-->\n  <!--<option value="large">Large</option>-->\n<!--</select>-->\n';

}
return __p
};

this["Formbuilder"]["templates"]["edit/units"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--<div class=\'fb-edit-section-header\'>Units</div>\n<input type="text" data-rv-input="model.' +
((__t = ( Formbuilder.options.mappings.UNITS )) == null ? '' : __t) +
'" />\n-->';

}
return __p
};

this["Formbuilder"]["templates"]["page"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( Formbuilder.templates['partials/save_button']() )) == null ? '' : __t) +
'\n' +
((__t = ( Formbuilder.templates['partials/left_side']({ editStructure : editStructure }) )) == null ? '' : __t) +
'\n' +
((__t = ( Formbuilder.templates['partials/right_side']({ editStructure : editStructure, fieldsEnabled : fieldsEnabled, fieldsEnabledNonInput : fieldsEnabledNonInput}) )) == null ? '' : __t) +
'\n<div class=\'fb-clear\'></div>';

}
return __p
};

this["Formbuilder"]["templates"]["partials/add_field"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'fb-tab-pane active\' id=\'addField\'>\n  <div class=\'fb-add-field-types\'>\n    <div class=\'section\'>\n      ';
 for (i in fieldsEnabled) { ;
__p += '\n        <a data-field-type="' +
((__t = ( i )) == null ? '' : __t) +
'" class="btn btn-primary btn-' +
((__t = ( i )) == null ? '' : __t) +
'">\n          ' +
((__t = ( fieldsEnabled[i].addButton )) == null ? '' : __t) +
'\n        </a>\n      ';
 } ;
__p += '\n    </div>\n\n    <div class=\'section\'>\n      ';
 for (i in fieldsEnabledNonInput) { ;
__p += '\n        <a data-field-type="' +
((__t = ( i )) == null ? '' : __t) +
'" class="btn btn-primary btn-' +
((__t = ( i )) == null ? '' : __t) +
'">\n          ' +
((__t = ( fieldsEnabledNonInput[i].addButton )) == null ? '' : __t) +
'\n        </a>\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>';

}
return __p
};

this["Formbuilder"]["templates"]["partials/ds_options"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<option value="prompt">Select a Data Source</option>\n';
 for (i in datasources) { ;
__p += '\n    ';
 var selected = datasources[i]._id == datasource ? "selected" : "";  ;
__p += '\n    <option value="' +
((__t = (datasources[i]._id)) == null ? '' : __t) +
'" ' +
((__t = ( selected )) == null ? '' : __t) +
'>' +
((__t = (datasources[i].name)) == null ? '' : __t) +
'</option>\n';
 };
__p += '\n';

}
return __p
};

this["Formbuilder"]["templates"]["partials/edit_field"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'fb-tab-pane\' id=\'editField\'>\n  <div class=\'fb-edit-field-wrapper\'></div>\n</div>\n';

}
return __p
};

this["Formbuilder"]["templates"]["partials/left_side"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'span6 middle\'>\n  <div class=\'fb-no-response-fields\'>No response fields</div>\n  <div class=\'fb-response-fields\'></div>\n</div>';

}
return __p
};

this["Formbuilder"]["templates"]["partials/right_side"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'span4 right\'>\n  <ul class=\'fb-tabs nav nav-tabs compact \'>\n    ';
 if(editStructure){ ;
__p += '\n      <li class=\'active addfield\'><a data-target=\'#addField\'><i class="icon-plus"></i> Field</a></li>\n      <li class="configurefield"><a data-target=\'#editField\'><i class="icon-cog"></i> Field</a></li>\n    ';
 }else{ ;
__p += '\n      <li class="active configurefield"><a data-target=\'#editField\'><i class="icon-cog"></i> Field</a></li>\n    ';
 } ;
__p += '\n  </ul>\n\n  <div class=\'fb-tab-content\'>\n    ';
 if(editStructure){ ;
__p += '\n      ' +
((__t = ( Formbuilder.templates['partials/add_field']( { fieldsEnabledNonInput : fieldsEnabledNonInput, fieldsEnabled : fieldsEnabled } ) )) == null ? '' : __t) +
'\n    ';
 } ;
__p += '\n    ' +
((__t = ( Formbuilder.templates['partials/edit_field']() )) == null ? '' : __t) +
'\n  </div>\n</div>';

}
return __p
};

this["Formbuilder"]["templates"]["partials/save_button"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'fb-save-wrapper\'>\n  <button class=\'js-save-form ' +
((__t = ( Formbuilder.options.BUTTON_CLASS )) == null ? '' : __t) +
'\'></button>\n</div>';

}
return __p
};

this["Formbuilder"]["templates"]["view/base"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'subtemplate-wrapper\'>\n  ';
 if (rf.get(Formbuilder.options.mappings.FIELD_ERROR)){ ;
__p += '\n    <p class="text-error">\n      ' +
((__t = ( rf.get(Formbuilder.options.mappings.FIELD_ERROR) )) == null ? '' : __t) +
'\n    </p>\n  ';
 } ;
__p += '\n  <div class=\'cover\'></div>\n  ';
 if(editStructure){  ;
__p += '\n  ' +
((__t = ( Formbuilder.templates['view/duplicate_remove']({rf: rf}) )) == null ? '' : __t) +
'\n  ';
 } ;
__p += '\n  <span class="icon icon-inline ' +
((__t = ( Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].icon )) == null ? '' : __t) +
'">' +
((__t = ( Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].iconText )) == null ? '' : __t) +
'</span>\n  ' +
((__t = ( Formbuilder.templates['view/label']({rf: rf}) )) == null ? '' : __t) +
'\n\n  ' +
((__t = ( Formbuilder.templates['view/description']({rf: rf}) )) == null ? '' : __t) +
'\n\n  ' +
((__t = ( Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].view({rf: rf}) )) == null ? '' : __t) +
'  \n\n</div>\n';

}
return __p
};

this["Formbuilder"]["templates"]["view/base_non_input"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'subtemplate-wrapper\'>\n  <div class=\'cover\'></div>\n  ' +
((__t = ( Formbuilder.templates['view/duplicate_remove']({rf: rf}) )) == null ? '' : __t) +
'\n  <span class="icon icon-inline ' +
((__t = ( Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].icon )) == null ? '' : __t) +
'"></span>' +
((__t = ( Formbuilder.fields[rf.get(Formbuilder.options.mappings.FIELD_TYPE)].view({rf: rf}) )) == null ? '' : __t) +
'\n</div>\n';

}
return __p
};

this["Formbuilder"]["templates"]["view/description"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class=\'help-block\'>\n  ' +
((__t = ( Formbuilder.helpers.simple_format(rf.get(Formbuilder.options.mappings.DESCRIPTION)) )) == null ? '' : __t) +
'\n</span>\n';

}
return __p
};

this["Formbuilder"]["templates"]["view/duplicate_remove"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'actions-wrapper btn-group\'>\n  <a class="js-duplicate btn btn-small btn-success" title="Duplicate Field"><i class=\'icon-plus-sign\'></i></a>\n  <a class="js-clear btn btn-small btn-danger" title="Remove Field"><i class=\'icon-minus-sign\'></i></a>\n</div>';

}
return __p
};

this["Formbuilder"]["templates"]["view/label"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<label class="fb-field-title">\n  <span>' +
((__t = ( Formbuilder.helpers.simple_format(rf.get(Formbuilder.options.mappings.LABEL)) )) == null ? '' : __t) +
'\n  ';
 if (rf.get(Formbuilder.options.mappings.REQUIRED)) { ;
__p += '\n    <abbr title=\'required\'>*</abbr>\n  ';
 } ;
__p += '\n</label>\n';

}
return __p
};