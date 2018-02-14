/*
 * Licensed Materials - Property of IBM
 * 5724-Y04
 * (c) Copyright IBM Corporation 2005,2011. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 */

if (_oplZone != 'main') {
  fail("ODM Scripting objects can only be used in a main block.");
}

function __ODMAPI_toString() {
  return "[java object " + this._javaRef + "]";
};

function IloMainScriptSolveController(masterModel) {
    if (arguments.length != 1) { return; }
  this._javaRef = IloOplCallJava("ilog.odm.scripting.IloMainScriptSolveController", "<init>", "(Lilog/opl/IloOplModel;)V", masterModel);
};



function __IloMainScriptSolveController_generate(subModel) {
  return IloOplCallJava(this._javaRef, "generate", "(Lilog/opl/IloOplModel;)Z", subModel);
};
IloMainScriptSolveController.prototype.generate = __IloMainScriptSolveController_generate;

function __IloMainScriptSolveController_solve(subModel) {
  return IloOplCallJava(this._javaRef, "solve", "(Lilog/opl/IloOplModel;)Z", subModel);
};
IloMainScriptSolveController.prototype.solve = __IloMainScriptSolveController_solve;

function __IloMainScriptSolveController_getScenario() {
    var result = new IloScenario();
        result._javaRef = IloOplCallJava(this._javaRef, "getScenario", "()Lilog/odm/scripting/IloScenario;");
  return result;  
};
IloMainScriptSolveController.prototype.getScenario = __IloMainScriptSolveController_getScenario;

function __IloMainScriptSolveController_publishCurrentResults() {
  IloOplCallJava(this._javaRef, "publishCurrentResults", "()V");
};
IloMainScriptSolveController.prototype.publishCurrentResults = __IloMainScriptSolveController_publishCurrentResults;

IloMainScriptSolveController.prototype.toString = __ODMAPI_toString;


function IloOdmProject(path) {
  if (arguments.length != 1) { return; } this._javaRef =
                 IloOplCallJava("ilog.odm.scripting.IloOdmProject", "<init>",
                 "(Ljava/lang/String;)V", thisOplModel.resolvePath(path));
};



function __IloOdmProject_login(login, password, force) {
  IloOplCallJava(this._javaRef, "login", "(Ljava/lang/String;Ljava/lang/String;Z)V", login, password, force);
};
IloOdmProject.prototype.login = __IloOdmProject_login;

function __IloOdmProject_logout() {
  IloOplCallJava(this._javaRef, "logout", "()V");
};
IloOdmProject.prototype.logout = __IloOdmProject_logout;

function __IloOdmProject_getAllWorkspaces() {
    var result = new IloList();
        result._type = 'IloWorkspace';
    result._javaRef = IloOplCallJava(this._javaRef, "getAllWorkspaces", "()Ljava/util/Collection;");
  return result;  
};
IloOdmProject.prototype.getAllWorkspaces = __IloOdmProject_getAllWorkspaces;

function __IloOdmProject_newWorkspace(name) {
    var result = new IloWorkspace();
        result._javaRef = IloOplCallJava(this._javaRef, "newWorkspace", "(Ljava/lang/String;)Lilog/odm/datasvc/IloWorkspace;", name);
  return result;  
};
IloOdmProject.prototype.newWorkspace = __IloOdmProject_newWorkspace;

function __IloOdmProject_populateDefaultScenario(scenario) {
  IloOplCallJava(this._javaRef, "populateDefaultScenario", "(Lilog/odm/datasvc/IloScenario;)V", scenario._javaRef);
};
IloOdmProject.prototype.populateDefaultScenario = __IloOdmProject_populateDefaultScenario;

function __IloOdmProject_check(scenario) {
  return IloOplCallJava(this._javaRef, "check", "(Lilog/odm/datasvc/IloScenario;)Z", scenario._javaRef);
};
IloOdmProject.prototype.check = __IloOdmProject_check;

function __IloOdmProject_solve(scenario) {
  IloOplCallJava(this._javaRef, "solve", "(Lilog/odm/datasvc/IloScenario;)V", scenario._javaRef);
};
IloOdmProject.prototype.solve = __IloOdmProject_solve;

function __IloOdmProject_setTimeout(seconds) {
  IloOplCallJava(this._javaRef, "setTimeout", "(I)V", seconds);
};
IloOdmProject.prototype.setTimeout = __IloOdmProject_setTimeout;

function __IloOdmProject_setUsingSolveAnyway(useSolveAnyway) {
  IloOplCallJava(this._javaRef, "setUsingSolveAnyway", "(Z)V", useSolveAnyway);
};
IloOdmProject.prototype.setUsingSolveAnyway = __IloOdmProject_setUsingSolveAnyway;

function __IloOdmProject_findGoalBounds(scenario, goal) {
  IloOplCallJava(this._javaRef, "findGoalBounds", "(Lilog/odm/datasvc/IloScenario;Ljava/lang/String;)V", scenario._javaRef, goal);
};
IloOdmProject.prototype.findGoalBounds = __IloOdmProject_findGoalBounds;

function __IloOdmProject_end() {
  IloOplCallJava(this._javaRef, "end", "()V");
};
IloOdmProject.prototype.end = __IloOdmProject_end;

IloOdmProject.prototype.toString = __ODMAPI_toString;



function IloList() {
}


function __IloList_size() {
  return IloOplCallJava("ilog.odm.scripting.IloList$Helper", "size",
          "(Ljava/util/List;)I", this._javaRef);
};
IloList.prototype.size = __IloList_size;

function __IloList_get(index) {
  var result; if (this._type) { result = eval('new ' + this._type + '()');
          result._javaRef = IloOplCallJava("ilog.odm.scripting.IloList$Helper", "get",
          "(Ljava/util/List;I)Ljava/lang/Object;", this._javaRef, index); } else { result =
          __ODMAPI_newObject(IloOplCallJava("ilog.odm.scripting.IloList$Helper", "get",
          "(Ljava/util/List;I)Ljava/lang/Object;", this._javaRef, index)); } return result;
};
IloList.prototype.get = __IloList_get;

IloList.prototype.toString = __ODMAPI_toString;



function IloIterator() {
}


function __IloIterator_hasNext() {
  return IloOplCallJava(this._javaRef, "hasNext", "()Z");
};
IloIterator.prototype.hasNext = __IloIterator_hasNext;

function __IloIterator_next() {
  var result; if (this._type) { result = eval('new ' + this._type + '()');
          result._javaRef = IloOplCallJava(this._javaRef, "next", "()Ljava/lang/Object;"); }
          else { result = IloOplCallJava(this._javaRef, "next", "()Ljava/lang/Object;"); }
          return result;
};
IloIterator.prototype.next = __IloIterator_next;

IloIterator.prototype.toString = __ODMAPI_toString;



function IloSchema() {
}


function __IloSchema_getKeyColumns() {
  var result = IloOplCallJava(this._javaRef, "getKeyColumns", "()[Lilog/odm/scenario/data/IloColumn;");
  for (i = 0; i < result.length; i++) {
    object = new IloColumn();
    object._javaRef = result[i];
    result[i] = object;
  }
  return result;  
};
IloSchema.prototype.getKeyColumns = __IloSchema_getKeyColumns;

function __IloSchema_getKeyColumnsIndexes() {
  return IloOplCallJava(this._javaRef, "getKeyColumnsIndexes", "()[I");
};
IloSchema.prototype.getKeyColumnsIndexes = __IloSchema_getKeyColumnsIndexes;

function __IloSchema_foreignKeyDescriptorIds() {
    var result = new IloIterator();
        result._javaRef = IloOplCallJava(this._javaRef, "foreignKeyDescriptorIds", "()Ljava/util/Iterator;");
  return result;  
};
IloSchema.prototype.foreignKeyDescriptorIds = __IloSchema_foreignKeyDescriptorIds;

function __IloSchema_getColumnAt(index) {
    var result = new IloColumn();
        result._javaRef = IloOplCallJava(this._javaRef, "getColumnAt", "(I)Lilog/odm/scenario/data/IloColumn;", index);
  return result;  
};
IloSchema.prototype.getColumnAt = __IloSchema_getColumnAt;

function __IloSchema_getColumnIndex(name) {
  return IloOplCallJava(this._javaRef, "getColumnIndex", "(Ljava/lang/String;)I", name);
};
IloSchema.prototype.getColumnIndex = __IloSchema_getColumnIndex;

function __IloSchema_getColumnsCount() {
  return IloOplCallJava(this._javaRef, "getColumnsCount", "()I");
};
IloSchema.prototype.getColumnsCount = __IloSchema_getColumnsCount;

function __IloSchema_getDisplayName(column) {
  return IloOplCallJava(this._javaRef, "getDisplayName", "(I)Ljava/lang/String;", column);
};
IloSchema.prototype.getDisplayName = __IloSchema_getDisplayName;

function __IloSchema_getForeignKeyDescriptorById(id) {
    var result = new IloForeignKeyDescriptor();
        result._javaRef = IloOplCallJava(this._javaRef, "getForeignKeyDescriptorById", "(Ljava/lang/String;)Lilog/odm/scenario/data/IloForeignKeyDescriptor;", id);
  return result;  
};
IloSchema.prototype.getForeignKeyDescriptorById = __IloSchema_getForeignKeyDescriptorById;

function __IloSchema_getForeignKeyDescriptorsForCol(colIdx) {
  var result = IloOplCallJava(this._javaRef, "getForeignKeyDescriptorsForCol", "(I)[Lilog/odm/scenario/data/IloForeignKeyDescriptor;", colIdx);
  for (i = 0; i < result.length; i++) {
    object = new IloForeignKeyDescriptor();
    object._javaRef = result[i];
    result[i] = object;
  }
  return result;  
};
IloSchema.prototype.getForeignKeyDescriptorsForCol = __IloSchema_getForeignKeyDescriptorsForCol;

function __IloSchema_getId() {
  return IloOplCallJava(this._javaRef, "getId", "()Ljava/lang/String;");
};
IloSchema.prototype.getId = __IloSchema_getId;

IloSchema.prototype.toString = __ODMAPI_toString;



function IloColumn() {
}


function __IloColumn_getName() {
  return IloOplCallJava(this._javaRef, "getName", "()Ljava/lang/String;");
};
IloColumn.prototype.getName = __IloColumn_getName;

function __IloColumn_isNullable() {
  return IloOplCallJava(this._javaRef, "isNullable", "()Z");
};
IloColumn.prototype.isNullable = __IloColumn_isNullable;

function __IloColumn_getDisplayName() {
  return IloOplCallJava(this._javaRef, "getDisplayName", "()Ljava/lang/String;");
};
IloColumn.prototype.getDisplayName = __IloColumn_getDisplayName;

IloColumn.prototype.toString = __ODMAPI_toString;



function IloTable() {
}


function __IloTable_getSchema() {
    var result = new IloSchema();
        result._javaRef = IloOplCallJava(this._javaRef, "getSchema", "()Lilog/odm/scenario/data/IloSchema;");
  return result;  
};
IloTable.prototype.getSchema = __IloTable_getSchema;

function __IloTable_getRowAt(index) {
    var result = new IloRow();
        result._javaRef = IloOplCallJava(this._javaRef, "getRowAt", "(I)Lilog/odm/scenario/data/IloRow;", index);
  return result;  
};
IloTable.prototype.getRowAt = __IloTable_getRowAt;

function __IloTable_getRowAtKey(key) {
    var result = new IloRow();
        result._javaRef = IloOplCallJava(this._javaRef, "getRowAtKey", "(Lilog/odm/scenario/data/IloRowKey;)Lilog/odm/scenario/data/IloRow;", key._javaRef);
  return result;  
};
IloTable.prototype.getRowAtKey = __IloTable_getRowAtKey;

function __IloTable_insertRowAtIndex(row, index) {
  IloOplCallJava(this._javaRef, "insertRowAtIndex", "(Lilog/odm/scenario/data/IloRow;I)V", row._javaRef, index);
};
IloTable.prototype.insertRowAtIndex = __IloTable_insertRowAtIndex;

function __IloTable_addRow(row) {
  IloOplCallJava(this._javaRef, "addRow", "(Lilog/odm/scenario/data/IloRow;)V", row._javaRef);
};
IloTable.prototype.addRow = __IloTable_addRow;

function __IloTable_removeRow(row) {
  IloOplCallJava(this._javaRef, "removeRow", "(Lilog/odm/scenario/data/IloRow;)V", row._javaRef);
};
IloTable.prototype.removeRow = __IloTable_removeRow;

function __IloTable_removeRowByKey(key) {
  IloOplCallJava(this._javaRef, "removeRowByKey", "(Lilog/odm/scenario/data/IloRowKey;)V", key._javaRef);
};
IloTable.prototype.removeRowByKey = __IloTable_removeRowByKey;

function __IloTable_removeRowAtIndex(index) {
  IloOplCallJava(this._javaRef, "removeRowAtIndex", "(I)V", index);
};
IloTable.prototype.removeRowAtIndex = __IloTable_removeRowAtIndex;

function __IloTable_getRowCount() {
  return IloOplCallJava(this._javaRef, "getRowCount", "()I");
};
IloTable.prototype.getRowCount = __IloTable_getRowCount;

function __IloTable_makeNewRow() {
    var result = new IloRow();
        result._javaRef = IloOplCallJava(this._javaRef, "makeNewRow", "()Lilog/odm/scenario/data/IloRow;");
  return result;  
};
IloTable.prototype.makeNewRow = __IloTable_makeNewRow;

function __IloTable_makeRowCopy(readOnlyRow) {
    var result = new IloRow();
        result._javaRef = IloOplCallJava(this._javaRef, "makeRowCopy", "(Lilog/odm/scenario/data/IloRow;)Lilog/odm/scenario/data/IloRow;", readOnlyRow._javaRef);
  return result;  
};
IloTable.prototype.makeRowCopy = __IloTable_makeRowCopy;

function __IloTable_iterator() {
    var result = new IloIterator();
        result._type = 'IloRow';
    result._javaRef = IloOplCallJava(this._javaRef, "iterator", "()Ljava/util/Iterator;");
  return result;  
};
IloTable.prototype.iterator = __IloTable_iterator;

IloTable.prototype.toString = __ODMAPI_toString;



function IloRow() {
}


function __IloRow_getRowKey(schema) {
    var result = new IloRowKey();
        result._javaRef = IloOplCallJava(this._javaRef, "getRowKey", "(Lilog/odm/scenario/data/IloSchema;)Lilog/odm/scenario/data/IloRowKey;", schema._javaRef);
  return result;  
};
IloRow.prototype.getRowKey = __IloRow_getRowKey;

function __IloRow_getIntValue(index) {
  return IloOplCallJava(this._javaRef, "getIntValue", "(I)I", index);
};
IloRow.prototype.getIntValue = __IloRow_getIntValue;

function __IloRow_getDoubleValue(index) {
  return IloOplCallJava(this._javaRef, "getDoubleValue", "(I)D", index);
};
IloRow.prototype.getDoubleValue = __IloRow_getDoubleValue;

function __IloRow_getBooleanValue(index) {
  return IloOplCallJava(this._javaRef, "getBooleanValue", "(I)Z", index);
};
IloRow.prototype.getBooleanValue = __IloRow_getBooleanValue;

function __IloRow_getStringValue(index) {
  return IloOplCallJava(this._javaRef, "getStringValue", "(I)Ljava/lang/String;", index);
};
IloRow.prototype.getStringValue = __IloRow_getStringValue;

function __IloRow_getColumnCount() {
  return IloOplCallJava(this._javaRef, "getColumnCount", "()I");
};
IloRow.prototype.getColumnCount = __IloRow_getColumnCount;

function __IloRow_makeRowKey(fkDesc) {
    var result = new IloRowKey();
        result._javaRef = IloOplCallJava(this._javaRef, "makeRowKey", "(Lilog/odm/scenario/data/IloForeignKeyDescriptor;)Lilog/odm/scenario/data/IloRowKey;", fkDesc._javaRef);
  return result;  
};
IloRow.prototype.makeRowKey = __IloRow_makeRowKey;

function __IloRow_setIntValue(index, value) {
  IloOplCallJava(this._javaRef, "setIntValue", "(II)V", index, value);
};
IloRow.prototype.setIntValue = __IloRow_setIntValue;

function __IloRow_setDoubleValue(index, value) {
  IloOplCallJava(this._javaRef, "setDoubleValue", "(ID)V", index, value);
};
IloRow.prototype.setDoubleValue = __IloRow_setDoubleValue;

function __IloRow_setBooleanValue(index, value) {
  IloOplCallJava(this._javaRef, "setBooleanValue", "(IZ)V", index, value);
};
IloRow.prototype.setBooleanValue = __IloRow_setBooleanValue;

function __IloRow_setStringValue(index, value) {
  IloOplCallJava(this._javaRef, "setStringValue", "(ILjava/lang/String;)V", index, value);
};
IloRow.prototype.setStringValue = __IloRow_setStringValue;

function __IloRow_setValue(index, value) {
  IloOplCallJava(this._javaRef, "setValue", "(ILjava/io/Serializable;)V", index, value);
};
IloRow.prototype.setValue = __IloRow_setValue;

function __IloRow_getValues() {
  return IloOplCallJava(this._javaRef, "getValues", "()[Ljava/io/Serializable;");
};
IloRow.prototype.getValues = __IloRow_getValues;

IloRow.prototype.toString = __ODMAPI_toString;



function IloRowKey() {
}


IloRowKey.prototype.toString = __ODMAPI_toString;



function IloForeignKeyDescriptor() {
}


function __IloForeignKeyDescriptor_getId() {
  return IloOplCallJava(this._javaRef, "getId", "()Ljava/lang/String;");
};
IloForeignKeyDescriptor.prototype.getId = __IloForeignKeyDescriptor_getId;

function __IloForeignKeyDescriptor_getTargetTableId() {
  return IloOplCallJava(this._javaRef, "getTargetTableId",
          "()Lilog/odm/scenario/data/IloTableId;").toString();
};
IloForeignKeyDescriptor.prototype.getTargetTableId = __IloForeignKeyDescriptor_getTargetTableId;

function __IloForeignKeyDescriptor_getSourceColumnIndexAt(i) {
  return IloOplCallJava(this._javaRef, "getSourceColumnIndexAt", "(I)I", i);
};
IloForeignKeyDescriptor.prototype.getSourceColumnIndexAt = __IloForeignKeyDescriptor_getSourceColumnIndexAt;

function __IloForeignKeyDescriptor_getTargetColumnIndexAt(i) {
  return IloOplCallJava(this._javaRef, "getTargetColumnIndexAt", "(I)I", i);
};
IloForeignKeyDescriptor.prototype.getTargetColumnIndexAt = __IloForeignKeyDescriptor_getTargetColumnIndexAt;

function __IloForeignKeyDescriptor_getSize() {
  return IloOplCallJava(this._javaRef, "getSize", "()I");
};
IloForeignKeyDescriptor.prototype.getSize = __IloForeignKeyDescriptor_getSize;

function __IloForeignKeyDescriptor_getDisplay() {
  return IloOplCallJava(this._javaRef, "getDisplay", "()Ljava/lang/String;");
};
IloForeignKeyDescriptor.prototype.getDisplay = __IloForeignKeyDescriptor_getDisplay;

IloForeignKeyDescriptor.prototype.toString = __ODMAPI_toString;



function IloWorkspaceItem() {
}


function __IloWorkspaceItem_getParentFolder() {
    var result = new IloWorkspaceFolder();
        result._javaRef = IloOplCallJava(this._javaRef, "getParentFolder", "()Lilog/odm/datasvc/IloWorkspaceFolder;");
  return result;  
};
IloWorkspaceItem.prototype.getParentFolder = __IloWorkspaceItem_getParentFolder;

function __IloWorkspaceItem_getName() {
  return IloOplCallJava(this._javaRef, "getName", "()Ljava/lang/String;");
};
IloWorkspaceItem.prototype.getName = __IloWorkspaceItem_getName;

function __IloWorkspaceItem_destroy() {
  IloOplCallJava(this._javaRef, "delete", "()V");
};
IloWorkspaceItem.prototype.destroy = __IloWorkspaceItem_destroy;

function __IloWorkspaceItem_exportAsScenarioSet(destination) {
  IloOplCallJava(this._javaRef, "exportAsScenarioSet", "(Ljava/io/File;)V", destination._javaRef);
};
IloWorkspaceItem.prototype.exportAsScenarioSet = __IloWorkspaceItem_exportAsScenarioSet;

IloWorkspaceItem.prototype.toString = __ODMAPI_toString;



function IloWorkspaceFolder() {
}

IloWorkspaceFolder.prototype = new IloWorkspaceItem;

function __IloWorkspaceFolder_setName(name) {
  IloOplCallJava(this._javaRef, "setName", "(Ljava/lang/String;)V", name);
};
IloWorkspaceFolder.prototype.setName = __IloWorkspaceFolder_setName;

function __IloWorkspaceFolder_moveChild(index, item) {
  IloOplCallJava(this._javaRef, "moveChild", "(ILilog/odm/datasvc/IloWorkspaceItem;)V", index, item._javaRef);
};
IloWorkspaceFolder.prototype.moveChild = __IloWorkspaceFolder_moveChild;

function __IloWorkspaceFolder_getChildren() {
    var result = new IloList();
        result._javaRef = IloOplCallJava(this._javaRef, "getChildren", "()Ljava/util/List;");
  return result;  
};
IloWorkspaceFolder.prototype.getChildren = __IloWorkspaceFolder_getChildren;

function __IloWorkspaceFolder_importScenarioSet(source) {
    var result = new IloWorkspaceItem();
        result._javaRef = IloOplCallJava(this._javaRef, "importScenarioSet", "(Ljava/io/File;)Lilog/odm/datasvc/IloWorkspaceItem;", source._javaRef);
  return result;  
};
IloWorkspaceFolder.prototype.importScenarioSet = __IloWorkspaceFolder_importScenarioSet;

function __IloWorkspaceFolder_exportAsScenarioSet(destination) {
  IloOplCallJava(this._javaRef, "exportAsScenarioSet", "(Ljava/io/File;)V", destination._javaRef);
};
IloWorkspaceFolder.prototype.exportAsScenarioSet = __IloWorkspaceFolder_exportAsScenarioSet;

function __IloWorkspaceFolder_createChildScenario(index) {
    var result = new IloScenarioLink();
        result._javaRef = IloOplCallJava(this._javaRef, "createChildScenario", "(I)Lilog/odm/datasvc/IloScenarioLink;", index);
  return result;  
};
IloWorkspaceFolder.prototype.createChildScenario = __IloWorkspaceFolder_createChildScenario;

function __IloWorkspaceFolder_createChildScenarioCopy(index, source) {
    var result = new IloScenarioLink();
        result._javaRef = IloOplCallJava(this._javaRef, "createChildScenario", "(ILIloScenario;)Lilog/odm/datasvc/IloScenarioLink;", index, source._javaRef);
  return result;  
};
IloWorkspaceFolder.prototype.createChildScenarioCopy = __IloWorkspaceFolder_createChildScenarioCopy;

function __IloWorkspaceFolder_createChildScenarioLink(index, source) {
    var result = new IloScenarioLink();
        result._javaRef = IloOplCallJava(this._javaRef, "createChildScenarioLink", "(ILIloScenario;)Lilog/odm/datasvc/IloScenarioLink;", index, source._javaRef);
  return result;  
};
IloWorkspaceFolder.prototype.createChildScenarioLink = __IloWorkspaceFolder_createChildScenarioLink;

function __IloWorkspaceFolder_createChildFolder(index) {
    var result = new IloWorkspaceFolder();
        result._javaRef = IloOplCallJava(this._javaRef, "createChildFolder", "(I)Lilog/odm/datasvc/IloWorkspaceFolder;", index);
  return result;  
};
IloWorkspaceFolder.prototype.createChildFolder = __IloWorkspaceFolder_createChildFolder;

IloWorkspaceFolder.prototype.toString = __ODMAPI_toString;



function IloScenarioLink() {
}

IloScenarioLink.prototype = new IloWorkspaceItem;

function __IloScenarioLink_getScenario() {
    var result = new IloScenario();
        result._javaRef = IloOplCallJava(this._javaRef, "getScenario", "()LIloScenario;");
  return result;  
};
IloScenarioLink.prototype.getScenario = __IloScenarioLink_getScenario;

IloScenarioLink.prototype.toString = __ODMAPI_toString;



function IloWorkspace() {
}

IloWorkspace.prototype = new IloWorkspaceFolder;

function __IloWorkspace_destroy() {
  IloOplCallJava(this._javaRef, "delete", "()V");
};
IloWorkspace.prototype.destroy = __IloWorkspace_destroy;

function __IloWorkspace_addLock(type) {
    var result = new IloLock();
        result._javaRef = IloOplCallJava(this._javaRef, "addLock", "(I)Lilog/odm/datasvc/IloLock;", type);
  return result;  
};
IloWorkspace.prototype.addLock = __IloWorkspace_addLock;

function __IloWorkspace_removeLock(lock) {
  IloOplCallJava(this._javaRef, "removeLock", "(Lilog/odm/datasvc/IloLock;)V", lock._javaRef);
};
IloWorkspace.prototype.removeLock = __IloWorkspace_removeLock;

IloWorkspace.prototype.toString = __ODMAPI_toString;



function IloLock() {
}


IloLock.prototype.toString = __ODMAPI_toString;



function IloScenario() {
}


function __IloScenario_getInput() {
    var result = new IloScenarioInput();
        result._javaRef = IloOplCallJava(this._javaRef, "getInput", "()Lilog/odm/scenario/IloScenarioInput;");
  return result;  
};
IloScenario.prototype.getInput = __IloScenario_getInput;

function __IloScenario_getOutput() {
    var result = new IloSolutionReport();
        result._javaRef = IloOplCallJava(this._javaRef, "getOutput", "()Lilog/odm/scenario/report/IloSolutionReport;");
  return result;  
};
IloScenario.prototype.getOutput = __IloScenario_getOutput;

function __IloScenario_getSchema(tableId) {
    var result = new IloSchema();
        result._javaRef = IloOplCallJava(this._javaRef, "getSchema", "(Ljava/lang/String;)Lilog/odm/scenario/data/IloSchema;", tableId);
  return result;  
};
IloScenario.prototype.getSchema = __IloScenario_getSchema;

function __IloScenario_getTable(tableId) {
    var result = new IloTable();
        result._javaRef = IloOplCallJava(this._javaRef, "getLegacyTable", "(Ljava/lang/String;)Lilog/odm/scenario/data/IloTable;", tableId);
  return result;  
};
IloScenario.prototype.getTable = __IloScenario_getTable;

function __IloScenario_makeNewRow(tableId) {
    var result = new IloRow();
        result._javaRef = IloOplCallJava(this._javaRef, "makeNewRow", "(Ljava/lang/String;)Lilog/odm/scenario/data/IloRow;", tableId);
  return result;  
};
IloScenario.prototype.makeNewRow = __IloScenario_makeNewRow;

function __IloScenario_tableIdsIterator() {
    var result = new Iterator();
        result._javaRef = IloOplCallJava(this._javaRef, "tableIdsIterator", "()Ljava/util/Iterator;");
  return result;  
};
IloScenario.prototype.tableIdsIterator = __IloScenario_tableIdsIterator;

function __IloScenario_setName(name) {
  IloOplCallJava(this._javaRef, "setName", "(Ljava/lang/String;)V", name);
};
IloScenario.prototype.setName = __IloScenario_setName;

function __IloScenario_getName() {
  return IloOplCallJava(this._javaRef, "getName", "()Ljava/lang/String;");
};
IloScenario.prototype.getName = __IloScenario_getName;

function __IloScenario_addLock(type) {
    var result = new IloLock();
        result._javaRef = IloOplCallJava(this._javaRef, "addLock", "(I)Lilog/odm/datasvc/IloLock;", type);
  return result;  
};
IloScenario.prototype.addLock = __IloScenario_addLock;

function __IloScenario_removeLock(lock) {
  IloOplCallJava(this._javaRef, "removeLock", "(Lilog/odm/datasvc/IloLock;)V", lock._javaRef);
};
IloScenario.prototype.removeLock = __IloScenario_removeLock;

function __IloScenario_save() {
  IloOplCallJava(this._javaRef, "save", "()V");
};
IloScenario.prototype.save = __IloScenario_save;

IloScenario.prototype.toString = __ODMAPI_toString;



function IloScenarioInput() {
}


function __IloScenarioInput_setGoalActive(goal, active) {
  IloOplCallJava(this._javaRef, "setGoalActive", "(Ljava/lang/String;Z)V", goal, active);
};
IloScenarioInput.prototype.setGoalActive = __IloScenarioInput_setGoalActive;

function __IloScenarioInput_isGoalActive(goal) {
  return IloOplCallJava(this._javaRef, "isGoalActive", "(Ljava/lang/String;)Z", goal);
};
IloScenarioInput.prototype.isGoalActive = __IloScenarioInput_isGoalActive;

function __IloScenarioInput_setGoalWeight(goal, weight) {
  IloOplCallJava(this._javaRef, "setGoalWeight", "(Ljava/lang/String;D)V", goal, weight);
};
IloScenarioInput.prototype.setGoalWeight = __IloScenarioInput_setGoalWeight;

function __IloScenarioInput_getGoalWeight(goal) {
  return IloOplCallJava(this._javaRef, "getGoalWeight", "(Ljava/lang/String;)D", goal);
};
IloScenarioInput.prototype.getGoalWeight = __IloScenarioInput_getGoalWeight;

function __IloScenarioInput_setGoalConstraintMin(goal, min) {
  IloOplCallJava(this._javaRef, "setGoalConstraintMin", "(Ljava/lang/String;D)V", goal, min);
};
IloScenarioInput.prototype.setGoalConstraintMin = __IloScenarioInput_setGoalConstraintMin;

function __IloScenarioInput_getGoalConstraintMin(goal) {
  return IloOplCallJava(this._javaRef, "getGoalConstraintMin", "(Ljava/lang/String;)D", goal);
};
IloScenarioInput.prototype.getGoalConstraintMin = __IloScenarioInput_getGoalConstraintMin;

function __IloScenarioInput_clearGoalConstraintMin(goal) {
  IloOplCallJava(this._javaRef, "clearGoalConstraintMin", "(Ljava/lang/String;)V", goal);
};
IloScenarioInput.prototype.clearGoalConstraintMin = __IloScenarioInput_clearGoalConstraintMin;

function __IloScenarioInput_setGoalConstraintMax(goal, max) {
  IloOplCallJava(this._javaRef, "setGoalConstraintMax", "(Ljava/lang/String;D)V", goal, max);
};
IloScenarioInput.prototype.setGoalConstraintMax = __IloScenarioInput_setGoalConstraintMax;

function __IloScenarioInput_getGoalConstraintMax(goal) {
  return IloOplCallJava(this._javaRef, "getGoalConstraintMax", "(Ljava/lang/String;)D", goal);
};
IloScenarioInput.prototype.getGoalConstraintMax = __IloScenarioInput_getGoalConstraintMax;

function __IloScenarioInput_clearGoalConstraintMax(goal) {
  IloOplCallJava(this._javaRef, "clearGoalConstraintMax", "(Ljava/lang/String;)V", goal);
};
IloScenarioInput.prototype.clearGoalConstraintMax = __IloScenarioInput_clearGoalConstraintMax;

function __IloScenarioInput_setGoalConstraintPriority(goal, priority) {
  IloOplCallJava(this._javaRef, "setGoalConstraintPriority", "(Ljava/lang/String;Ljava/lang/String;)V", goal, priority);
};
IloScenarioInput.prototype.setGoalConstraintPriority = __IloScenarioInput_setGoalConstraintPriority;

function __IloScenarioInput_getGoalConstraintPriority(goal) {
  return IloOplCallJava(this._javaRef, "getGoalConstraintPriority", "(Ljava/lang/String;)Ljava/lang/String;", goal);
};
IloScenarioInput.prototype.getGoalConstraintPriority = __IloScenarioInput_getGoalConstraintPriority;

function __IloScenarioInput_setGoalBoundIgnorePriority(goal, ignorePriorityUnder) {
  IloOplCallJava(this._javaRef, "setGoalBoundIgnorePriority", "(Ljava/lang/String;Ljava/lang/String;)V", goal, ignorePriorityUnder);
};
IloScenarioInput.prototype.setGoalBoundIgnorePriority = __IloScenarioInput_setGoalBoundIgnorePriority;

function __IloScenarioInput_getGoalBoundIgnorePriority(goal) {
  return IloOplCallJava(this._javaRef, "getGoalBoundIgnorePriority", "(Ljava/lang/String;)Ljava/lang/String;", goal);
};
IloScenarioInput.prototype.getGoalBoundIgnorePriority = __IloScenarioInput_getGoalBoundIgnorePriority;

function __IloScenarioInput_getModifiedRequirementRoots() {
  return IloOplCallJava(this._javaRef, "getModifiedRequirementRoots", "()[Ljava/lang/String;");
};
IloScenarioInput.prototype.getModifiedRequirementRoots = __IloScenarioInput_getModifiedRequirementRoots;

function __IloScenarioInput_getModifiedRequirementChildren(parentId) {
  return IloOplCallJava(this._javaRef, "getModifiedRequirementChildren", "(Ljava/lang/String;)[Ljava/lang/String;", parentId);
};
IloScenarioInput.prototype.getModifiedRequirementChildren = __IloScenarioInput_getModifiedRequirementChildren;

function __IloScenarioInput_getModifiedRequirementExplanation(requirementId) {
  return IloOplCallJava(this._javaRef, "getModifiedRequirementExplanation", "(Ljava/lang/String;)Ljava/lang/String;", requirementId);
};
IloScenarioInput.prototype.getModifiedRequirementExplanation = __IloScenarioInput_getModifiedRequirementExplanation;

function __IloScenarioInput_getModifiedRequirementRelaxationMessage(requirementId) {
  return IloOplCallJava(this._javaRef, "getModifiedRequirementRelaxationMessage", "(Ljava/lang/String;)Ljava/lang/String;", requirementId);
};
IloScenarioInput.prototype.getModifiedRequirementRelaxationMessage = __IloScenarioInput_getModifiedRequirementRelaxationMessage;

function __IloScenarioInput_getModifiedRequirementPriority(requirementId) {
  return IloOplCallJava(this._javaRef, "getModifiedRequirementPriority", "(Ljava/lang/String;)Ljava/lang/String;", requirementId);
};
IloScenarioInput.prototype.getModifiedRequirementPriority = __IloScenarioInput_getModifiedRequirementPriority;

function __IloScenarioInput_changeRequirementPriority(requirementId, priority, applyToChildren) {
  IloOplCallJava(this._javaRef, "changeRequirementPriority", "(Ljava/lang/String;Ljava/lang/String;Z)V", requirementId, priority, applyToChildren);
};
IloScenarioInput.prototype.changeRequirementPriority = __IloScenarioInput_changeRequirementPriority;

function __IloScenarioInput_resetRequirementPriority(requirementId, applyToChildren) {
  IloOplCallJava(this._javaRef, "resetRequirementPriority", "(Ljava/lang/String;Z)V", requirementId, applyToChildren);
};
IloScenarioInput.prototype.resetRequirementPriority = __IloScenarioInput_resetRequirementPriority;

function __IloScenarioInput_addRule(ruleCategoryId, ruleTemplateId, folderId, values, priority) {
  return IloOplCallJava(this._javaRef, "addRule", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;[Ljava/io/Serializable;Ljava/lang/String;)Ljava/lang/String;", ruleCategoryId, ruleTemplateId, folderId, values, priority);
};
IloScenarioInput.prototype.addRule = __IloScenarioInput_addRule;

function __IloScenarioInput_addRuleFolder(ruleCategoryId, parentFolderId, name) {
  return IloOplCallJava(this._javaRef, "addRuleFolder", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", ruleCategoryId, parentFolderId, name);
};
IloScenarioInput.prototype.addRuleFolder = __IloScenarioInput_addRuleFolder;

function __IloScenarioInput_removeRule(ruleCategoryId, ruleTemplateId, ruleId) {
  IloOplCallJava(this._javaRef, "removeRule", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", ruleCategoryId, ruleTemplateId, ruleId);
};
IloScenarioInput.prototype.removeRule = __IloScenarioInput_removeRule;

function __IloScenarioInput_removeRuleFolder(ruleCategoryId, ruleFolderId) {
  IloOplCallJava(this._javaRef, "removeRuleFolder", "(Ljava/lang/String;Ljava/lang/String;)V", ruleCategoryId, ruleFolderId);
};
IloScenarioInput.prototype.removeRuleFolder = __IloScenarioInput_removeRuleFolder;

function __IloScenarioInput_getRuleFolderRoot(ruleCategoryId) {
  return IloOplCallJava(this._javaRef, "getRuleFolderRoot", "(Ljava/lang/String;)Ljava/lang/String;", ruleCategoryId);
};
IloScenarioInput.prototype.getRuleFolderRoot = __IloScenarioInput_getRuleFolderRoot;

function __IloScenarioInput_getRuleFolderRules(ruleCategoryId, ruleTemplateId, ruleFolderId) {
  return IloOplCallJava(this._javaRef, "getRuleFolderRules", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)[Ljava/lang/String;", ruleCategoryId, ruleTemplateId, ruleFolderId);
};
IloScenarioInput.prototype.getRuleFolderRules = __IloScenarioInput_getRuleFolderRules;

function __IloScenarioInput_getRuleFolderChildren(ruleCategoryId, ruleFolderId) {
  return IloOplCallJava(this._javaRef, "getRuleFolderChildren", "(Ljava/lang/String;Ljava/lang/String;)[Ljava/lang/String;", ruleCategoryId, ruleFolderId);
};
IloScenarioInput.prototype.getRuleFolderChildren = __IloScenarioInput_getRuleFolderChildren;

function __IloScenarioInput_setRuleFolderName(ruleCategoryId, ruleFolderId, name) {
  IloOplCallJava(this._javaRef, "setRuleFolderName", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", ruleCategoryId, ruleFolderId, name);
};
IloScenarioInput.prototype.setRuleFolderName = __IloScenarioInput_setRuleFolderName;

function __IloScenarioInput_getRuleFolderName(ruleCategoryId, ruleFolderId) {
  return IloOplCallJava(this._javaRef, "getRuleFolderName", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", ruleCategoryId, ruleFolderId);
};
IloScenarioInput.prototype.getRuleFolderName = __IloScenarioInput_getRuleFolderName;

function __IloScenarioInput_setRuleFolderPriority(ruleCategoryId, ruleFolderId, priority, applyToChildren) {
  IloOplCallJava(this._javaRef, "setRuleFolderPriority", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)V", ruleCategoryId, ruleFolderId, priority, applyToChildren);
};
IloScenarioInput.prototype.setRuleFolderPriority = __IloScenarioInput_setRuleFolderPriority;

function __IloScenarioInput_setRuleFolderActive(ruleCategoryId, ruleFolderId, active, applyToChildren) {
  IloOplCallJava(this._javaRef, "setRuleFolderActive", "(Ljava/lang/String;Ljava/lang/String;ZZ)V", ruleCategoryId, ruleFolderId, active, applyToChildren);
};
IloScenarioInput.prototype.setRuleFolderActive = __IloScenarioInput_setRuleFolderActive;

function __IloScenarioInput_isRuleFolderActive(ruleCategoryId, ruleFolderId) {
  return IloOplCallJava(this._javaRef, "isRuleFolderActive", "(Ljava/lang/String;Ljava/lang/String;)Z", ruleCategoryId, ruleFolderId);
};
IloScenarioInput.prototype.isRuleFolderActive = __IloScenarioInput_isRuleFolderActive;

function __IloScenarioInput_setRuleActive(ruleCategoryId, ruleTemplateId, ruleId, active) {
  IloOplCallJava(this._javaRef, "setRuleActive", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)V", ruleCategoryId, ruleTemplateId, ruleId, active);
};
IloScenarioInput.prototype.setRuleActive = __IloScenarioInput_setRuleActive;

function __IloScenarioInput_isRuleActive(ruleCategoryId, ruleTemplateId, ruleId) {
  return IloOplCallJava(this._javaRef, "isRuleActive", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Z", ruleCategoryId, ruleTemplateId, ruleId);
};
IloScenarioInput.prototype.isRuleActive = __IloScenarioInput_isRuleActive;

function __IloScenarioInput_getRuleFolderPriority(ruleCategoryId, ruleFolderId) {
  return IloOplCallJava(this._javaRef, "getRuleFolderPriority", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", ruleCategoryId, ruleFolderId);
};
IloScenarioInput.prototype.getRuleFolderPriority = __IloScenarioInput_getRuleFolderPriority;

function __IloScenarioInput_setRulePriority(ruleCategoryId, ruleTemplateId, ruleId, priority) {
  IloOplCallJava(this._javaRef, "setRulePriority", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", ruleCategoryId, ruleTemplateId, ruleId, priority);
};
IloScenarioInput.prototype.setRulePriority = __IloScenarioInput_setRulePriority;

function __IloScenarioInput_getRulePriority(ruleCategoryId, ruleTemplateId, ruleId) {
  return IloOplCallJava(this._javaRef, "getRulePriority", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", ruleCategoryId, ruleTemplateId, ruleId);
};
IloScenarioInput.prototype.getRulePriority = __IloScenarioInput_getRulePriority;

function __IloScenarioInput_setRuleValues(ruleCategoryId, ruleTemplateId, ruleId, values) {
  IloOplCallJava(this._javaRef, "setRuleValues", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;[Ljava/io/Serializable;)V", ruleCategoryId, ruleTemplateId, ruleId, values);
};
IloScenarioInput.prototype.setRuleValues = __IloScenarioInput_setRuleValues;

function __IloScenarioInput_getRuleValues(ruleCategoryId, ruleTemplateId, ruleId) {
  return IloOplCallJava(this._javaRef, "getRuleValues", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)[Ljava/io/Serializable;", ruleCategoryId, ruleTemplateId, ruleId);
};
IloScenarioInput.prototype.getRuleValues = __IloScenarioInput_getRuleValues;

IloScenarioInput.prototype.toString = __ODMAPI_toString;



function IloSolutionReport() {
}


function __IloSolutionReport_getGoalValue(goal) {
  return IloOplCallJava(this._javaRef, "getGoalValue", "(Ljava/lang/String;)D", goal);
};
IloSolutionReport.prototype.getGoalValue = __IloSolutionReport_getGoalValue;

function __IloSolutionReport_getBestObjective() {
  return IloOplCallJava(this._javaRef, "getBestObjective", "()D");
};
IloSolutionReport.prototype.getBestObjective = __IloSolutionReport_getBestObjective;

function __IloSolutionReport_getCurrentObjective() {
  return IloOplCallJava(this._javaRef, "getCurrentObjective", "()D");
};
IloSolutionReport.prototype.getCurrentObjective = __IloSolutionReport_getCurrentObjective;

function __IloSolutionReport_getBestGoalValue(goal) {
  return IloOplCallJava(this._javaRef, "getBestGoalValue", "(Ljava/lang/String;)D", goal);
};
IloSolutionReport.prototype.getBestGoalValue = __IloSolutionReport_getBestGoalValue;

function __IloSolutionReport_isBestGoalValueOptimal(goal) {
  return IloOplCallJava(this._javaRef, "isBestGoalValueOptimal", "(Ljava/lang/String;)Z", goal);
};
IloSolutionReport.prototype.isBestGoalValueOptimal = __IloSolutionReport_isBestGoalValueOptimal;

function __IloSolutionReport_getWorstGoalValue(goal) {
  return IloOplCallJava(this._javaRef, "getWorstGoalValue", "(Ljava/lang/String;)D", goal);
};
IloSolutionReport.prototype.getWorstGoalValue = __IloSolutionReport_getWorstGoalValue;

function __IloSolutionReport_isWorstGoalValueOptimal(goal) {
  return IloOplCallJava(this._javaRef, "isWorstGoalValueOptimal", "(Ljava/lang/String;)Z", goal);
};
IloSolutionReport.prototype.isWorstGoalValueOptimal = __IloSolutionReport_isWorstGoalValueOptimal;

function __IloSolutionReport_getGoalBreakdownRoot(goal) {
  return IloOplCallJava(this._javaRef, "getGoalBreakdownRoot", "(Ljava/lang/String;)Ljava/lang/String;", goal);
};
IloSolutionReport.prototype.getGoalBreakdownRoot = __IloSolutionReport_getGoalBreakdownRoot;

function __IloSolutionReport_getGoalBreakdownChildren(parentId) {
  return IloOplCallJava(this._javaRef, "getGoalBreakdownChildren", "(Ljava/lang/String;)[Ljava/lang/String;", parentId);
};
IloSolutionReport.prototype.getGoalBreakdownChildren = __IloSolutionReport_getGoalBreakdownChildren;

function __IloSolutionReport_getGoalBreakdownValue(nodeId) {
  return IloOplCallJava(this._javaRef, "getGoalBreakdownValue", "(Ljava/lang/String;)D", nodeId);
};
IloSolutionReport.prototype.getGoalBreakdownValue = __IloSolutionReport_getGoalBreakdownValue;

function __IloSolutionReport_getGoalBreakdownExplanation(nodeId) {
  return IloOplCallJava(this._javaRef, "getGoalBreakdownExplanation", "(Ljava/lang/String;)Ljava/lang/String;", nodeId);
};
IloSolutionReport.prototype.getGoalBreakdownExplanation = __IloSolutionReport_getGoalBreakdownExplanation;

function __IloSolutionReport_getGoalRequirementForConstraintMin(goal) {
  return IloOplCallJava(this._javaRef, "getGoalRequirementForConstraintMin", "(Ljava/lang/String;)Ljava/lang/String;", goal);
};
IloSolutionReport.prototype.getGoalRequirementForConstraintMin = __IloSolutionReport_getGoalRequirementForConstraintMin;

function __IloSolutionReport_getGoalRequirementForConstraintMax(goal) {
  return IloOplCallJava(this._javaRef, "getGoalRequirementForConstraintMax", "(Ljava/lang/String;)Ljava/lang/String;", goal);
};
IloSolutionReport.prototype.getGoalRequirementForConstraintMax = __IloSolutionReport_getGoalRequirementForConstraintMax;

function __IloSolutionReport_getRequirementRoots() {
  return IloOplCallJava(this._javaRef, "getRequirementRoots", "()[Ljava/lang/String;");
};
IloSolutionReport.prototype.getRequirementRoots = __IloSolutionReport_getRequirementRoots;

function __IloSolutionReport_getRequirementChildren(parentId) {
  return IloOplCallJava(this._javaRef, "getRequirementChildren", "(Ljava/lang/String;)[Ljava/lang/String;", parentId);
};
IloSolutionReport.prototype.getRequirementChildren = __IloSolutionReport_getRequirementChildren;

function __IloSolutionReport_getRequirementExplanation(nodeId) {
  return IloOplCallJava(this._javaRef, "getRequirementExplanation", "(Ljava/lang/String;)Ljava/lang/String;", nodeId);
};
IloSolutionReport.prototype.getRequirementExplanation = __IloSolutionReport_getRequirementExplanation;

function __IloSolutionReport_getRequirementRelaxationMessage(nodeId) {
  return IloOplCallJava(this._javaRef, "getRequirementRelaxationMessage", "(Ljava/lang/String;)Ljava/lang/String;", nodeId);
};
IloSolutionReport.prototype.getRequirementRelaxationMessage = __IloSolutionReport_getRequirementRelaxationMessage;

function __IloSolutionReport_getRequirementPriority(nodeId) {
  return IloOplCallJava(this._javaRef, "getRequirementPriority", "(Ljava/lang/String;)Ljava/lang/String;", nodeId);
};
IloSolutionReport.prototype.getRequirementPriority = __IloSolutionReport_getRequirementPriority;

function __IloSolutionReport_getRuleAssociatedWithRequirement(requirementId) {
  return IloOplCallJava(this._javaRef, "getRuleAssociatedWithRequirement", "(Ljava/lang/String;)[Ljava/lang/String;", requirementId);
};
IloSolutionReport.prototype.getRuleAssociatedWithRequirement = __IloSolutionReport_getRuleAssociatedWithRequirement;

function __IloSolutionReport_getGoalAssociatedWithRequirement(requirementId) {
  return IloOplCallJava(this._javaRef, "getGoalAssociatedWithRequirement", "(Ljava/lang/String;)Ljava/lang/String;", requirementId);
};
IloSolutionReport.prototype.getGoalAssociatedWithRequirement = __IloSolutionReport_getGoalAssociatedWithRequirement;

function __IloSolutionReport_getRuleRequirement(ruleCategoryId, ruleTemplateId, ruleId) {
  return IloOplCallJava(this._javaRef, "getRuleRequirement", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", ruleCategoryId, ruleTemplateId, ruleId);
};
IloSolutionReport.prototype.getRuleRequirement = __IloSolutionReport_getRuleRequirement;

function __IloSolutionReport_getExecutionTimeMillis() {
  return IloOplCallJava(this._javaRef, "getExecutionTimeMillis", "()J");
};
IloSolutionReport.prototype.getExecutionTimeMillis = __IloSolutionReport_getExecutionTimeMillis;

function __IloSolutionReport_hasRelaxation() {
  return IloOplCallJava(this._javaRef, "hasRelaxation", "()Z");
};
IloSolutionReport.prototype.hasRelaxation = __IloSolutionReport_hasRelaxation;

function __IloSolutionReport_hasSolution() {
  return IloOplCallJava(this._javaRef, "hasSolution", "()Z");
};
IloSolutionReport.prototype.hasSolution = __IloSolutionReport_hasSolution;

function __IloSolutionReport_isOptimal() {
  return IloOplCallJava(this._javaRef, "isOptimal", "()Z");
};
IloSolutionReport.prototype.isOptimal = __IloSolutionReport_isOptimal;

function __IloSolutionReport_isSuccess() {
  return IloOplCallJava(this._javaRef, "isSuccess", "()Z");
};
IloSolutionReport.prototype.isSuccess = __IloSolutionReport_isSuccess;

IloSolutionReport.prototype.toString = __ODMAPI_toString;


function __ODMAPI_newObject(javaRef) {
  var result;
  if (javaRef.getClass().getName() == "ilog.odm.datasvc.impl.IloWorkspaceFolderImpl") {
  	result = new IloWorkspaceFolder();
  	result._javaRef = javaRef;
  	return result;
  } else if (javaRef.getClass().getName() == "ilog.odm.datasvc.impl.IloScenarioLinkImpl") {
  	result = new IloScenarioLink();
  	result._javaRef = javaRef;
  	return result;
  } else {
    return result;
  }
}

function __IloOdmProject_makePath(base, pathToResolve) {
  return IloOplCallJava("ilog.odm.scripting.IloOdmProject", "makePath",
	"(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",
	base, pathToResolve);
}

// overriden to use Lilog/odm/datasvc/ instead of ilog/odm/scripting
function __IloWorkspaceFolder_createChildScenarioCopy(index, source) {
    var result = new IloScenarioLink();
        result._javaRef = IloOplCallJava(this._javaRef, "createChildScenario", "(ILilog/odm/datasvc/IloScenario;)Lilog/odm/datasvc/IloScenarioLink;", index, source._javaRef);
  return result;  
};
IloWorkspaceFolder.prototype.createChildScenarioCopy = __IloWorkspaceFolder_createChildScenarioCopy;

// overriden to use Lilog/odm/datasvc/ instead of ilog/odm/scripting
function __IloWorkspaceFolder_createChildScenarioLink(index, source) {
    var result = new IloScenarioLink();
        result._javaRef = IloOplCallJava(this._javaRef, "createChildScenarioLink", "(ILilog/odm/datasvc/IloScenario;)Lilog/odm/datasvc/IloScenarioLink;", index, source._javaRef);
  return result;  
};
IloWorkspaceFolder.prototype.createChildScenarioLink = __IloWorkspaceFolder_createChildScenarioLink;

// overriden to use Lilog/odm/datasvc/ instead of ilog/odm/scripting
function __IloScenarioLink_getScenario() {
    var result = new IloScenario();
        result._javaRef = IloOplCallJava(this._javaRef, "getScenario", "()Lilog/odm/datasvc/IloScenario;");
  return result;  
};
IloScenarioLink.prototype.getScenario = __IloScenarioLink_getScenario;

// overriden to use Lilog/odm/datasvc/ instead of ilog/odm/scripting
function __IloMainScriptSolveController_getScenario() {
    var result = new IloScenario();
        result._javaRef = IloOplCallJava(this._javaRef, "getScenario", "()Lilog/odm/scripting/IloScenario;");
  return result;  
};
IloMainScriptSolveController.prototype.getScenario = __IloMainScriptSolveController_getScenario;

// import scenario set
function __IloWorkspaceFolder_importScenarioSet(source) {
  IloOplCallJava(this._javaRef, "importScenarioSet", "(Ljava/io/File;)V",
    __IloOdmProject_makePath(thisOplModel.modelDefinition.modelSource.name, source));
};
IloWorkspaceFolder.prototype.importScenarioSet = __IloWorkspaceFolder_importScenarioSet;

// export scenario set
function __IloWorkspaceFolder_exportAsScenarioSet(destination) {
  IloOplCallJava(this._javaRef, "exportAsScenarioSet", "(Ljava/io/File;)V",
    __IloOdmProject_makePath(thisOplModel.modelDefinition.modelSource.name, destination));
};
IloWorkspaceFolder.prototype.exportAsScenarioSet = __IloWorkspaceFolder_exportAsScenarioSet;

// BEGIN implementation of scripting scenario API not supported directly by java ilog.odm.datasvc.IloScenarioImpl:

function __IloScenario_getInput() {
    var result = new IloScenarioInput();
        result._javaRef = IloOplCallJava("ilog.odm.scenario.IloScenarioHelper", "getScenarioInput", "",this._javaRef);
  return result;  
};
IloScenario.prototype.getInput = __IloScenario_getInput;

function __IloScenario_getOutput() {
    var result = new IloSolutionReport();
        result._javaRef = IloOplCallJava("ilog.odm.scenario.IloScenarioHelper", "getSolveReport", "",this._javaRef);
  return result;  
};
IloScenario.prototype.getOutput = __IloScenario_getOutput;

// END implementation of scripting scenario API not supported directly by java ilog.odm.datasvc.IloScenarioImpl

// constants for lock
NO_LOCK = 0;
USE_LOCK = 1;
EXCLUSIVE_WRITE_LOCK = 2;

thisOdm = new IloMainScriptSolveController(thisOplModel);
