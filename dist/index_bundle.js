/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/dragdrop/drag.js":
/*!******************************!*\
  !*** ./app/dragdrop/drag.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragDrop\": () => (/* binding */ dragDrop)\n/* harmony export */ });\n/* harmony import */ var _localstorages_updateStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localstorages/updateStorage */ \"./app/localstorages/updateStorage.js\");\n\n\nfunction dragDrop(deleteElem, moveToComplete, moveToProgress) {\n  let dragged;\n  document.addEventListener(\"drag\", function (event) {}, false);\n  document.addEventListener(\"dragstart\", function (event) {\n    // store a ref. on the dragged elem\n    if (event.target.className == 'task_item') {\n      dragged = event.target;\n    } else if (event.target.parentElement.className == 'task_item') {\n      dragged = event.target.parentElement;\n    } // make it half transparent\n\n  }, false);\n  document.addEventListener(\"dragend\", function (event) {\n    // reset the transparency\n    dragged.style.opacity = \"\";\n  }, false);\n  /* events fired on the drop targets */\n\n  document.addEventListener(\"dragover\", function (event) {\n    // prevent default to allow drop\n    event.preventDefault();\n  }, false);\n  document.addEventListener(\"dragenter\", function (event) {\n    // highlight potential drop target when the draggable element enters it\n    if (event.target.classList.contains(\"td_item\")) {\n      event.target.style.background = \"#b3b3b3\";\n    }\n  }, false);\n  document.addEventListener(\"dragleave\", function (event) {\n    // reset background of potential drop target when the draggable element leaves it\n    if (event.target.classList.contains(\"td_item\")) {\n      event.target.style.background = \"\";\n    }\n  }, false);\n  document.addEventListener(\"drop\", function (event) {\n    // prevent default action (open as link for some elements)\n    event.preventDefault(); // move dragged elem to the selected drop target\n\n    if (event.target.classList.contains(\"progress_list\") && dragged.parentElement.parentElement.classList.contains('task_list')) {\n      event.target.style.background = \"\";\n      dragged.style.marginBottom = '0 px';\n      console.log('1');\n      moveToProgress(dragged, event.target.querySelector('.task_list_inner'), deleteElem, _localstorages_updateStorage__WEBPACK_IMPORTED_MODULE_0__.updateStorage);\n    } else if (event.target.classList.contains(\"complete_list\") && dragged.parentElement.parentElement.classList.contains('progress_list')) {\n      event.target.style.background = \"\";\n      dragged.style.marginBottom = '0 px';\n      console.log();\n      moveToComplete(dragged, event.target.querySelector('.task_list_inner'), deleteElem, _localstorages_updateStorage__WEBPACK_IMPORTED_MODULE_0__.updateStorage);\n    } else {\n      event.target.style.background = \"\";\n    }\n  }, false);\n}\n\n\n\n//# sourceURL=webpack:///./app/dragdrop/drag.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task_classTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task/classTask */ \"./app/task/classTask.js\");\n/* harmony import */ var _task_createAddBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task/createAddBtn */ \"./app/task/createAddBtn.js\");\n/* harmony import */ var _task_createInputTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task/createInputTask */ \"./app/task/createInputTask.js\");\n/* harmony import */ var _task_deleteTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/deleteTask */ \"./app/task/deleteTask.js\");\n/* harmony import */ var _progress_moveToComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress/moveToComplete */ \"./app/progress/moveToComplete.js\");\n/* harmony import */ var _task_moveToProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/moveToProgress */ \"./app/task/moveToProgress.js\");\n/* harmony import */ var _dragdrop_drag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dragdrop/drag */ \"./app/dragdrop/drag.js\");\n/* harmony import */ var _localstorages_localstor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localstorages/localstor */ \"./app/localstorages/localstor.js\");\n/* harmony import */ var _localstorages_addToStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localstorages/addToStorage */ \"./app/localstorages/addToStorage.js\");\n/* harmony import */ var _localstorages_updateStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./localstorages/updateStorage */ \"./app/localstorages/updateStorage.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction deleteElem(elem) {\n  elem.parentElement.removeChild(elem);\n}\n\nfunction show(elem) {\n  elem.style.display = 'block';\n}\n\nfunction getDate() {\n  let today = new Date();\n  let dd = String(today.getDate()).padStart(2, '0');\n  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\n\n  let yyyy = today.getFullYear();\n  today = mm + '/' + dd + '/' + yyyy;\n  return today;\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_localstorages_localstor__WEBPACK_IMPORTED_MODULE_7__.checkstorage)(_task_classTask__WEBPACK_IMPORTED_MODULE_0__.Task, _task_moveToProgress__WEBPACK_IMPORTED_MODULE_5__.moveToProgress, _progress_moveToComplete__WEBPACK_IMPORTED_MODULE_4__.moveToComplete, deleteElem);\n  const td_area = document.querySelector('.td_inner');\n  const task_inner = document.querySelector('.task_list_inner');\n  const progress_area = document.querySelector('.progress_list .task_list_inner');\n  const complete_area = document.querySelector('.complete_list .task_list_inner');\n  (0,_task_deleteTask__WEBPACK_IMPORTED_MODULE_3__.deleteTask)(td_area, deleteElem);\n  (0,_task_createAddBtn__WEBPACK_IMPORTED_MODULE_1__.createAddBtn)(_task_createInputTask__WEBPACK_IMPORTED_MODULE_2__.createInputTask, task_inner, getDate, deleteElem, _task_classTask__WEBPACK_IMPORTED_MODULE_0__.Task, _localstorages_addToStorage__WEBPACK_IMPORTED_MODULE_8__.addToStorage);\n  (0,_dragdrop_drag__WEBPACK_IMPORTED_MODULE_6__.dragDrop)(deleteElem, _progress_moveToComplete__WEBPACK_IMPORTED_MODULE_4__.moveToComplete, _task_moveToProgress__WEBPACK_IMPORTED_MODULE_5__.moveToProgress);\n  progress_area.addEventListener('click', e => {\n    if (e.target.classList.contains('progress_check')) {\n      let cur_task = e.target.parentElement;\n      (0,_progress_moveToComplete__WEBPACK_IMPORTED_MODULE_4__.moveToComplete)(cur_task, complete_area, deleteElem, _localstorages_updateStorage__WEBPACK_IMPORTED_MODULE_9__.updateStorage);\n    }\n  });\n  task_inner.addEventListener('click', e => {\n    if (e.target.classList.contains('task_gear')) {\n      let cur_task = e.target.parentElement;\n      (0,_task_moveToProgress__WEBPACK_IMPORTED_MODULE_5__.moveToProgress)(cur_task, progress_area, deleteElem, _localstorages_updateStorage__WEBPACK_IMPORTED_MODULE_9__.updateStorage);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/localstorages/addToStorage.js":
/*!*******************************************!*\
  !*** ./app/localstorages/addToStorage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToStorage\": () => (/* binding */ addToStorage)\n/* harmony export */ });\nfunction addToStorage(text, date, pos) {\n  let storage = window.localStorage;\n  let cur_id = storage.getItem('counter');\n  storage.setItem(storage.getItem('counter'), `${text}@$${date}@$${pos}`);\n  storage.setItem('counter', `${parseInt(storage.getItem('counter')) + 1}`);\n  return cur_id;\n}\n\n\n\n//# sourceURL=webpack:///./app/localstorages/addToStorage.js?");

/***/ }),

/***/ "./app/localstorages/localstor.js":
/*!****************************************!*\
  !*** ./app/localstorages/localstor.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkstorage\": () => (/* binding */ checkstorage)\n/* harmony export */ });\n/* harmony import */ var _updateStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStorage */ \"./app/localstorages/updateStorage.js\");\n\n\nfunction checkstorage(Task, moveToProgress, moveToComplete, deleteElem) {\n  let storage = window.localStorage;\n\n  if (storage.getItem('counter') == null) {\n    storage.setItem('counter', '0');\n  }\n\n  const progress_area = document.querySelector('.progress_list');\n  const complete_area = document.querySelector('.complete_list');\n\n  if (storage != 0) {\n    for (let index = 0; index < parseInt(storage.getItem('counter')); index++) {\n      console.log(index);\n      let element = storage.getItem(index.toString());\n\n      if (element == null) {} else {\n        let elemTextEnd = element.indexOf('@$', 0);\n        let text = element.slice(0, elemTextEnd);\n        let dateEnd = element.indexOf('@$', elemTextEnd + 1);\n        let date = element.slice(elemTextEnd + 2, dateEnd);\n        let pos = element.slice(dateEnd + 2);\n        let task = new Task(text, date);\n        let cur_task = task.getHtml();\n        cur_task.id = `${index}`;\n\n        if (pos == 'progress_list') {\n          moveToProgress(cur_task, progress_area, deleteElem, _updateStorage__WEBPACK_IMPORTED_MODULE_0__.updateStorage);\n        } else if (pos == 'complete_list') {\n          cur_task.removeChild(cur_task.querySelector('.task_gear'));\n          cur_task.removeChild(cur_task.querySelector('.task_delete'));\n          let to_del = document.createElement('div');\n          to_del.className = 'progress_check';\n          cur_task.append(to_del);\n          moveToComplete(cur_task, complete_area, deleteElem, _updateStorage__WEBPACK_IMPORTED_MODULE_0__.updateStorage);\n        } else {\n          document.querySelector(`.${pos} .task_list_inner`).append(cur_task);\n        }\n      }\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack:///./app/localstorages/localstor.js?");

/***/ }),

/***/ "./app/localstorages/removeFromStorage.js":
/*!************************************************!*\
  !*** ./app/localstorages/removeFromStorage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeFromStorage\": () => (/* binding */ removeFromStorage)\n/* harmony export */ });\nfunction removeFromStorage(item_id) {\n  let storage = window.localStorage;\n  storage.removeItem(item_id); // storage.setItem('counter', `${parseInt(storage.getItem('counter')) - 1}`)\n}\n\n\n\n//# sourceURL=webpack:///./app/localstorages/removeFromStorage.js?");

/***/ }),

/***/ "./app/localstorages/updateStorage.js":
/*!********************************************!*\
  !*** ./app/localstorages/updateStorage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateStorage\": () => (/* binding */ updateStorage)\n/* harmony export */ });\nfunction updateStorage(task, pos) {\n  let id = task.id;\n  let text = task.querySelector('.task_text').innerHTML;\n  let date = task.querySelector('.task_date').innerHTML;\n  let storage = window.localStorage;\n  storage.setItem(id, `${text}@$${date}@$${pos}`);\n}\n\n\n\n//# sourceURL=webpack:///./app/localstorages/updateStorage.js?");

/***/ }),

/***/ "./app/progress/moveToComplete.js":
/*!****************************************!*\
  !*** ./app/progress/moveToComplete.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveToComplete\": () => (/* binding */ moveToComplete)\n/* harmony export */ });\nfunction moveToComplete(cur_task, complete_area, deleteElem, updateStorage) {\n  let del_btn = document.createElement('i');\n  del_btn.className = 'task_delete fa-solid fa-circle-minus';\n  deleteElem(cur_task.querySelector('.progress_check'));\n  cur_task.append(del_btn);\n  updateStorage(cur_task, 'complete_list');\n  complete_area.append(cur_task);\n}\n\n\n\n//# sourceURL=webpack:///./app/progress/moveToComplete.js?");

/***/ }),

/***/ "./app/task/classTask.js":
/*!*******************************!*\
  !*** ./app/task/classTask.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(text, date, id) {\n    this.text = text;\n    this.date = date;\n    this.html = document.createElement('div');\n    this.html.className = 'task_item';\n    this.html.draggable = true;\n    this.html.innerHTML = `\n            <i class=\"fa-solid fa-caret-down\"></i>\n            <div class=\"task_text td_text disable-select\">${this.text}</div>\n            <div class=\"task_date disable-select\">${this.date}</div>\n            <i class=\"fa-solid fa-gears task_gear\"></i>\n            <i class=\"task_delete fa-solid fa-circle-minus\"></i>\n        `;\n  }\n\n  getHtml() {\n    return this.html;\n  }\n\n  getText() {\n    return this.text;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/task/classTask.js?");

/***/ }),

/***/ "./app/task/createAddBtn.js":
/*!**********************************!*\
  !*** ./app/task/createAddBtn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAddBtn\": () => (/* binding */ createAddBtn)\n/* harmony export */ });\nfunction createAddBtn(createInputTask, task_inner, getDate, deleteElem, Task, addToStorage) {\n  let add_btn = document.createElement('div');\n  add_btn.className = 'task_add_btn';\n  add_btn.innerHTML = `<div class=\"task_add_inner\">\n    <i class=\"fa-solid fa-plus\"></i>\n    <div class=\"div\">Add new task</div>\n    </div>`;\n  task_inner.append(add_btn);\n  add_btn.addEventListener('click', () => {\n    createInputTask(task_inner, getDate, deleteElem, add_btn, Task, createAddBtn, addToStorage);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./app/task/createAddBtn.js?");

/***/ }),

/***/ "./app/task/createInputTask.js":
/*!*************************************!*\
  !*** ./app/task/createInputTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createInputTask\": () => (/* binding */ createInputTask)\n/* harmony export */ });\nfunction createInputTask(task_inner, getDate, deleteElem, task_add, Task, createAddBtn, addToStorage) {\n  let task_input = document.createElement('div');\n  task_input.className = 'task_input';\n  task_input.innerHTML = `<input type=\"text\" class=\"task_input_text\"></input>\n                                <div class=\"task_input_date\">${getDate()}</div>\n                            <i class=\"fa-solid fa-check task_check_input\"></i>`;\n  task_inner.append(task_input);\n  deleteElem(task_add);\n  document.querySelector('.task_check_input').addEventListener('click', () => {\n    let task = new Task(document.querySelector('.task_input_text').value, getDate());\n    deleteElem(task_input);\n    task_inner.append(task.getHtml());\n    createAddBtn(createInputTask, task_inner, getDate, deleteElem, Task);\n  });\n  document.querySelector('.task_check_input').addEventListener('click', () => {\n    let task = new Task(document.querySelector('.task_input_text').value, getDate());\n    deleteElem(task_input);\n    let text = task.getText();\n    let id = addToStorage(text, getDate(), 'task_list');\n    let task_cur = task.getHtml();\n    task_cur.id = id;\n    task_inner.append(task_cur);\n    createAddBtn(createInputTask, task_inner, getDate, deleteElem, Task, addToStorage);\n  });\n  document.querySelector('.task_input_text').addEventListener('keypress', e => {\n    if (e.key === 'Enter') {\n      let task = new Task(document.querySelector('.task_input_text').value, getDate());\n      let text = task.getText();\n      let id = addToStorage(text, getDate(), 'task_list');\n      deleteElem(task_input);\n      let task_cur = task.getHtml();\n      task_cur.id = id;\n      task_inner.append(task_cur);\n      createAddBtn(createInputTask, task_inner, getDate, deleteElem, Task, addToStorage);\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack:///./app/task/createInputTask.js?");

/***/ }),

/***/ "./app/task/deleteTask.js":
/*!********************************!*\
  !*** ./app/task/deleteTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _localstorages_removeFromStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localstorages/removeFromStorage */ \"./app/localstorages/removeFromStorage.js\");\n\n\nfunction deleteTask(task_inner, deleteElem) {\n  task_inner.addEventListener('click', e => {\n    if (e.target.classList.contains('task_delete')) {\n      (0,_localstorages_removeFromStorage__WEBPACK_IMPORTED_MODULE_0__.removeFromStorage)(e.target.parentElement.id);\n      deleteElem(e.target.parentElement);\n    }\n  });\n}\n\n\n\n//# sourceURL=webpack:///./app/task/deleteTask.js?");

/***/ }),

/***/ "./app/task/moveToProgress.js":
/*!************************************!*\
  !*** ./app/task/moveToProgress.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveToProgress\": () => (/* binding */ moveToProgress)\n/* harmony export */ });\nfunction moveToProgress(cur_task, area, deleteElem, updateStorage) {\n  let check_btn = document.createElement('i');\n  check_btn.className = 'fa-solid fa-check progress_check';\n  deleteElem(cur_task.querySelector('.task_delete'));\n  deleteElem(cur_task.querySelector('.task_gear'));\n  updateStorage(cur_task, 'progress_list');\n  cur_task.append(check_btn);\n  area.append(cur_task);\n}\n\n\n\n//# sourceURL=webpack:///./app/task/moveToProgress.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ })()
;