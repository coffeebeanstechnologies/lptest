(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-wrap\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet>\r\n    </router-outlet>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/create-question/create-question.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/create-question/create-question.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section\" id=\"courses-section\">\r\n    <div class=\"container\">\r\n        <div>\r\n            <div class=\"jumbotron\">\r\n                <h1>Question</h1>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"fname\">Select Class</label>\r\n\r\n                            <select [(ngModel)]=\"question.classInformation\" class=\"form-control\">\r\n                                <option *ngFor=\"let one of classList\" [value]=\"one.classId\">{{one.className}}</option>\r\n                            </select>\r\n\r\n                            <!-- <ng-multiselect-dropdown \r\n                                [placeholder]=\"'Select Class'\"\r\n                                [data]=\"classList\"\r\n                                [(ngModel)]=\"question.classInformation\"\r\n                                [settings]=\"dropdownClassSettings\"\r\n                                (onSelect)=\"onItemSelect($event)\"\r\n                                (onSelectAll)=\"onSelectAll($event)\">\r\n                            </ng-multiselect-dropdown> -->\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"lname\">Select Board</label>\r\n                            <select [(ngModel)]=\"question.boardInformation\" class=\"form-control\">\r\n                                <option *ngFor=\"let one of boardList\" [value]=\"one.boardId\">{{one.boardName}}</option>\r\n                            </select>\r\n\r\n                            <!-- <ng-multiselect-dropdown \r\n                            [placeholder]=\"'Select Board'\"\r\n                            [data]=\"boardList\"\r\n                            [(ngModel)]=\"question.boardInformation\"\r\n                            [settings]=\"dropdownBoardSettings\"\r\n                            (onSelect)=\"onItemSelect($event)\"\r\n                            (onSelectAll)=\"onSelectAll($event)\">\r\n                        </ng-multiselect-dropdown> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"fname\">Select Subject</label>\r\n\r\n                            <select [(ngModel)]=\"question.subjectInformation\" class=\"form-control\">\r\n                                <option *ngFor=\"let one of subjectList\" [value]=\"one.subjectId\">{{one.subjectName}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"lname\">Select Topic</label>\r\n                            <select [(ngModel)]=\"question.topicId\" class=\"form-control\">\r\n                                <option *ngFor=\"let one of topicList\" [value]=\"one.topicId\">{{one.topicName}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <label for=\"lname\">Select Question type</label>\r\n                        <select [(ngModel)]=\"question.questionType\" class=\"form-control\">\r\n                            <option *ngFor=\"let one of questionType\" [value]=\"one\">{{one}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label for=\"lname\">Select Difficulty level</label>\r\n                        <select [(ngModel)]=\"question.difficultyLevel\" class=\"form-control\">\r\n                            <option *ngFor=\"let one of difficultyLevel\" [value]=\"one\">{{one}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row p-4\">\r\n                    <div>\r\n                        <input [(ngModel)]=\"question.isImageAvailable\" type=\"checkbox\"> Image based question\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"question.isImageAvailable\" class=\"row p-4\">\r\n                    <div>\r\n                        <input type=\"file\" placeholder=\"select image for upload\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"email\">Question title</label>\r\n                            <textarea [(ngModel)]=\"question.question\" class=\"form-control\" placeholder=\"Enter question title\"></textarea>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <!-- <div class=\"col-md-6\">\r\n                        <label for=\"city\">City</label>\r\n                        <input id=\"city\" class=\"form-control\" type=\"text\">\r\n                    </div> -->\r\n                    <!-- <div class=\"col-xs-12 col-sm-8 col-md-1 col-lg-1\">\r\n                        <label for=\"state\">State</label>\r\n                        <input id=\"state\" class=\"form-control\" type=\"text\">\r\n                    </div> -->\r\n                    <div class=\"col-xs-12 col-sm-8 col-md-3 col-lg-3\">\r\n                        <label for=\"state\">Time in seconds</label>\r\n                        <input [(ngModel)]=\"question.timeToSolve\" id=\"state\" class=\"form-control\" type=\"number\">\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-8 col-md-3 col-lg-3\">\r\n                        <label for=\"state\">Marks to allot</label>\r\n                        <input [(ngModel)]=\"question.maximumMarks\" id=\"state\" class=\"form-control\" type=\"number\">\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n\r\n                <h1>Answer</h1>\r\n                <div *ngIf=\"question.questionType == 'mcq'\">\r\n                    <h2>MCQ</h2>\r\n                    <table id=\"optionTable\" class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    Option\r\n                                </th>\r\n                                <th>\r\n                                    Correct\r\n                                </th>\r\n                                <th>\r\n                                    Option text\r\n                                </th>\r\n                                <th>\r\n                                    Action\r\n                                </th>\r\n\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n\r\n                            <tr *ngFor=\"let one of options;let i=index;\">\r\n                                <td>{{i + 1}}</td>\r\n                                <td>\r\n                                    <input [(ngModel)]=\"one.isCorrectAnswer\" type=\"checkbox\">\r\n                                </td>\r\n                                <td>\r\n                                    <input [(ngModel)]=\"one.optionName\" type=\"text\">\r\n                                </td>\r\n                                <!-- <td *ngIf=\"options.length > 2\">\r\n                                    <button class=\"delete-row\" (click)=\"removeRow(i)\">Remove</button>\r\n                                </td> -->\r\n                            </tr>\r\n                        </tbody>\r\n\r\n                    </table>\r\n                    <button class=\"add-row\" (click)=\"addRow()\">Add row</button>\r\n                </div>\r\n\r\n\r\n                <div *ngIf=\"question.questionType == 'tof'\">\r\n                    <h2>True or False</h2>\r\n                    <table id=\"optionTable\" class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    Option\r\n                                </th>\r\n                                <th>\r\n                                    Correct\r\n                                </th>\r\n                                <th>\r\n                                    Option text\r\n                                </th>\r\n                                <!-- <th>\r\n                                    Action\r\n                                </th> -->\r\n\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n\r\n                            <tr *ngFor=\"let one of options;let i=index;\">\r\n                                <td>{{one.optionId}}</td>\r\n                                <td>\r\n                                    <input id=\"one\" [(ngModel)]=\"one.isCorrectAnswer\"  type=\"checkbox\">\r\n                                </td>\r\n                                <td>\r\n                                    <input id=\"two\" [(ngModel)]=\"one.optionName\" type=\"text\">\r\n                                </td>\r\n                                <!-- <td *ngIf=\"options.length > 2\">\r\n                                    <button class=\"delete-row\" (click)=\"removeRow(i)\">Remove</button>\r\n                                </td> -->\r\n                            </tr>\r\n                        </tbody>\r\n\r\n                    </table>\r\n\r\n                </div>\r\n\r\n                <div *ngIf=\"question.questionType == 'match'\">\r\n                    <h2>Match the pair</h2>\r\n\r\n                    <table id=\"optionTable\" class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    Option\r\n                                </th>\r\n                                <th>\r\n                                    Option text\r\n                                </th>\r\n                                <th>\r\n                                    Option match\r\n                                </th>\r\n                                <!-- <th>\r\n                                    Action\r\n                                </th> -->\r\n\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n\r\n                            <tr *ngFor=\"let one of optionMatch;let i=index;\">\r\n                                <td>{{i +1 }}</td>\r\n                                <td>\r\n                                    <input id=\"one\" [(ngModel)]=\"one.optionText\" type=\"text\">\r\n                                </td>\r\n                                <td>\r\n                                    <input id=\"two\" [(ngModel)]=\"one.optionMatch\" type=\"text\">\r\n                                </td>\r\n                                <!-- <td *ngIf=\"options.length > 2\">\r\n                                    <button class=\"delete-row\" (click)=\"removeRow(i)\">Remove</button>\r\n                                </td> -->\r\n                            </tr>\r\n                        </tbody>\r\n\r\n                    </table>\r\n                    <button class=\"add-row\" (click)=\"addPairRow()\">Add row</button>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <button class=\"form-control\" (click)=\"addQuestion()\"> Add question</button>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/create-test/create-test.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/create-test/create-test.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section\" id=\"courses-section\">\r\n    <div class=\"container\">\r\n        <div>\r\n            <div class=\"jumbotron\">\r\n                <h1>Test</h1>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"email\">Test title</label>\r\n                            <textarea class=\"form-control\" placeholder=\"Enter test title\"></textarea>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"fname\">Select Class</label>\r\n\r\n                            <select class=\"form-control\">\r\n                                <option>10</option>\r\n                                <option>11</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"lname\">Select Board</label>\r\n                            <select class=\"form-control\">\r\n                                <option>SSC</option>\r\n                                <option>ICSC</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"fname\">Select Subject</label>\r\n\r\n                            <select class=\"form-control\">\r\n                                <option>Math</option>\r\n                                <option>Science</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"lname\">Select Date</label>\r\n                            <input class=\"form-control\" type=\"date\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <label for=\"lname\">Select Exam type</label>\r\n                        <select class=\"form-control\">\r\n                            <option>MCQ</option>\r\n                            <option>True or False</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label for=\"lname\">Select Difficulty level</label>\r\n                        <select class=\"form-control\">\r\n                            <option>Easy</option>\r\n                            <option>Medium</option>\r\n                            <option>Hard</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-xs-12 col-sm-8 col-md-3 col-lg-3\">\r\n                        <label for=\"state\">Time in seconds</label>\r\n                        <input id=\"state\" class=\"form-control\" type=\"text\">\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-8 col-md-3 col-lg-3\">\r\n                        <label for=\"state\">Marks to allot</label>\r\n                        <input id=\"state\" class=\"form-control\" type=\"text\">\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <hr>\r\n\r\n                <h1>Select Questions</h1>\r\n\r\n\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-xs-12 col-sm-8 col-md-1 col-lg-3\">\r\n                        <label for=\"state\">Select class</label>\r\n                        <select class=\"form-control\">\r\n                            <option>10</option>\r\n                            <option>11</option>\r\n                            <option>12</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-8 col-md-1 col-lg-3\">\r\n                        <label for=\"state\">Select board</label>\r\n                        <select class=\"form-control\">\r\n                            <option>SSC</option>\r\n                            <option>ICSC</option>\r\n                            <option>IB</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-8 col-md-1 col-lg-3\">\r\n                        <label for=\"state\">Select subject</label>\r\n                        <select class=\"form-control\">\r\n                            <option>Math</option>\r\n                            <option>Science</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-8 col-md-1 col-lg-3\">\r\n                        <label for=\"state\">Select difficulty</label>\r\n                        <select class=\"form-control\">\r\n                            <option>Easy</option>\r\n                            <option>Medium</option>\r\n                            <option>Hard</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"mt-3 mb-3\">\r\n                    <h2>All Questions</h2>\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                            <th>\r\n                                Select\r\n                            </th>\r\n                            <th>\r\n                                No.\r\n                            </th>\r\n                            <!-- <th>\r\n                                Id\r\n                            </th> -->\r\n                            <th>\r\n                                Title\r\n                            </th>\r\n                            <th>\r\n                                Type\r\n                            </th>\r\n                            <th>\r\n                                Class id\r\n                            </th>\r\n                            <th>\r\n                                Board Id\r\n                            </th>\r\n                            <th>\r\n                                Subject id\r\n                            </th>\r\n                            <th>\r\n                                Topic id\r\n                            </th>\r\n                            <th>\r\n                                Difficulty level\r\n                            </th>\r\n                            <th>\r\n                                Marks alloted\r\n                            </th>\r\n                            <th>\r\n                                Time to solve\r\n                            </th>\r\n\r\n\r\n                        </tr>\r\n\r\n                        <tr *ngFor=\"let one of allQuestions; let i=index\">\r\n                            <td><input type=\"checkbox\"></td>\r\n                            <td>{{i + 1}}</td>\r\n                            <!-- <td>{{one.examId}}</td> -->\r\n                            <td>{{one.questionText}}</td>\r\n                            <td>{{one.questionType}}</td>\r\n                            <td>{{one.classId}}</td>\r\n                            <td>{{one.boardId}}</td>\r\n                            <td>{{one.subjectId}}</td>\r\n                            <td>{{one.topicId}}</td>\r\n                            <td>{{one.difficultyLevel}}</td>\r\n                            <td>{{one.marks}}</td>\r\n                            <td>{{one.timeToSolve}}</td>\r\n\r\n                        </tr>\r\n\r\n                    </table>\r\n                </div>\r\n\r\n                <button class=\"btn btn-primary\">\r\n                    review\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/home/home.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/home/home.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section\" id=\"courses-section\">\r\n    <div class=\"container\">\r\n        <div>\r\n            <div class=\"jumbotron\">\r\n\r\n                <h1>Home works</h1>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/landing/landing.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/landing/landing.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"intro-section\" id=\"home-section\">\r\n\r\n    <div class=\"slide-1\" style=\"background-image: url('assets/images/hero_1.jpg');\" data-stellar-background-ratio=\"0.5\">\r\n        <div class=\"container\">\r\n            <div class=\"row align-items-center\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"row align-items-center\">\r\n                        <div class=\"col-lg-6 mb-4\">\r\n                            <h1 data-aos=\"fade-up\" data-aos-delay=\"100\">Groom your knowledge with LearningPod</h1>\r\n                            <p class=\"mb-4\" data-aos=\"fade-up\" data-aos-delay=\"200\">Learning pod provides online tests with wide verity of questions set by best teachers.</p>\r\n                            <p data-aos=\"fade-up\" data-aos-delay=\"300\"><a class=\"btn btn-primary py-3 px-5 btn-pill\">Admission Now</a></p>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-lg-5 ml-auto\" data-aos=\"fade-up\" data-aos-delay=\"500\">\r\n                            <form action=\"\" method=\"post\" class=\"form-box\">\r\n                                <h3 class=\"h4 text-black mb-4\">LogIn</h3>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"submit\" class=\"btn btn-primary btn-pill\" value=\"Log In\">\r\n                                </div>\r\n                            </form>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"site-section courses-title\" id=\"courses-section\">\r\n    <div class=\"container\">\r\n        <div class=\"row mb-5 justify-content-center\">\r\n            <div class=\"col-lg-7 text-center\" data-aos=\"fade-up\" data-aos-delay=\"\">\r\n                <h2 class=\"section-title\">Courses</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"site-section courses-entry-wrap\" data-aos=\"fade-up\" data-aos-delay=\"100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"owl-carousel col-12 nonloop-block-14\">\r\n\r\n                <div class=\"course bg-white h-100 align-self-stretch\">\r\n                    <figure class=\"m-0\">\r\n                        <a><img src=\"assets/images/img_1.jpg\" alt=\"Image\" class=\"img-fluid\"></a>\r\n                    </figure>\r\n                    <div class=\"course-inner-text py-4 px-4\">\r\n                        <span class=\"course-price\">$20</span>\r\n                        <div class=\"meta\"><span class=\"icon-clock-o\"></span>4 Lessons / 12 week</div>\r\n                        <h3><a>Study Law of Physics</a></h3>\r\n                        <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit. </p>\r\n                    </div>\r\n                    <div class=\"d-flex border-top stats\">\r\n                        <div class=\"py-3 px-4\"><span class=\"icon-users\"></span> 2,193 students</div>\r\n                        <div class=\"py-3 px-4 w-25 ml-auto border-left\"><span class=\"icon-chat\"></span> 2</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"course bg-white h-100 align-self-stretch\">\r\n                    <figure class=\"m-0\">\r\n                        <a><img src=\"assets/images/img_2.jpg\" alt=\"Image\" class=\"img-fluid\"></a>\r\n                    </figure>\r\n                    <div class=\"course-inner-text py-4 px-4\">\r\n                        <span class=\"course-price\">$99</span>\r\n                        <div class=\"meta\"><span class=\"icon-clock-o\"></span>4 Lessons / 12 week</div>\r\n                        <h3><a>Logo Design Course</a></h3>\r\n                        <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit. </p>\r\n                    </div>\r\n                    <div class=\"d-flex border-top stats\">\r\n                        <div class=\"py-3 px-4\"><span class=\"icon-users\"></span> 2,193 students</div>\r\n                        <div class=\"py-3 px-4 w-25 ml-auto border-left\"><span class=\"icon-chat\"></span> 2</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"course bg-white h-100 align-self-stretch\">\r\n                    <figure class=\"m-0\">\r\n                        <a><img src=\"assets/images/img_3.jpg\" alt=\"Image\" class=\"img-fluid\"></a>\r\n                    </figure>\r\n                    <div class=\"course-inner-text py-4 px-4\">\r\n                        <span class=\"course-price\">$99</span>\r\n                        <div class=\"meta\"><span class=\"icon-clock-o\"></span>4 Lessons / 12 week</div>\r\n                        <h3><a>JS Programming Language</a></h3>\r\n                        <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit. </p>\r\n                    </div>\r\n                    <div class=\"d-flex border-top stats\">\r\n                        <div class=\"py-3 px-4\"><span class=\"icon-users\"></span> 2,193 students</div>\r\n                        <div class=\"py-3 px-4 w-25 ml-auto border-left\"><span class=\"icon-chat\"></span> 2</div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"course bg-white h-100 align-self-stretch\">\r\n                    <figure class=\"m-0\">\r\n                        <a><img src=\"assets/images/img_4.jpg\" alt=\"Image\" class=\"img-fluid\"></a>\r\n                    </figure>\r\n                    <div class=\"course-inner-text py-4 px-4\">\r\n                        <span class=\"course-price\">$20</span>\r\n                        <div class=\"meta\"><span class=\"icon-clock-o\"></span>4 Lessons / 12 week</div>\r\n                        <h3><a>Study Law of Physics</a></h3>\r\n                        <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit. </p>\r\n                    </div>\r\n                    <div class=\"d-flex border-top stats\">\r\n                        <div class=\"py-3 px-4\"><span class=\"icon-users\"></span> 2,193 students</div>\r\n                        <div class=\"py-3 px-4 w-25 ml-auto border-left\"><span class=\"icon-chat\"></span> 2</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"course bg-white h-100 align-self-stretch\">\r\n                    <figure class=\"m-0\">\r\n                        <a><img src=\"assets/images/img_5.jpg\" alt=\"Image\" class=\"img-fluid\"></a>\r\n                    </figure>\r\n                    <div class=\"course-inner-text py-4 px-4\">\r\n                        <span class=\"course-price\">$99</span>\r\n                        <div class=\"meta\"><span class=\"icon-clock-o\"></span>4 Lessons / 12 week</div>\r\n                        <h3><a>Logo Design Course</a></h3>\r\n                        <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit. </p>\r\n                    </div>\r\n                    <div class=\"d-flex border-top stats\">\r\n                        <div class=\"py-3 px-4\"><span class=\"icon-users\"></span> 2,193 students</div>\r\n                        <div class=\"py-3 px-4 w-25 ml-auto border-left\"><span class=\"icon-chat\"></span> 2</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"course bg-white h-100 align-self-stretch\">\r\n                    <figure class=\"m-0\">\r\n                        <a><img src=\"assets/images/img_6.jpg\" alt=\"Image\" class=\"img-fluid\"></a>\r\n                    </figure>\r\n                    <div class=\"course-inner-text py-4 px-4\">\r\n                        <span class=\"course-price\">$99</span>\r\n                        <div class=\"meta\"><span class=\"icon-clock-o\"></span>4 Lessons / 12 week</div>\r\n                        <h3><a>JS Programming Language</a></h3>\r\n                        <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit. </p>\r\n                    </div>\r\n                    <div class=\"d-flex border-top stats\">\r\n                        <div class=\"py-3 px-4\"><span class=\"icon-users\"></span> 2,193 students</div>\r\n                        <div class=\"py-3 px-4 w-25 ml-auto border-left\"><span class=\"icon-chat\"></span> 2</div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-7 text-center\">\r\n                <button class=\"customPrevBtn btn btn-primary m-1\">Prev</button>\r\n                <button class=\"customNextBtn btn btn-primary m-1\">Next</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"site-section\" id=\"programs-section\">\r\n    <div class=\"container\">\r\n        <div class=\"row mb-5 justify-content-center\">\r\n            <div class=\"col-lg-7 text-center\" data-aos=\"fade-up\" data-aos-delay=\"\">\r\n                <h2 class=\"section-title\">Our Programs</h2>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row mb-5 align-items-center\">\r\n            <div class=\"col-lg-7 mb-5\" data-aos=\"fade-up\" data-aos-delay=\"100\">\r\n                <img src=\"assets/images/undraw_youtube_tutorial.svg\" alt=\"Image\" class=\"img-fluid\">\r\n            </div>\r\n            <div class=\"col-lg-4 ml-auto\" data-aos=\"fade-up\" data-aos-delay=\"200\">\r\n                <h2 class=\"text-black mb-4\">We Are Excellent In Education</h2>\r\n                <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>\r\n\r\n                <div class=\"d-flex align-items-center custom-icon-wrap mb-3\">\r\n                    <span class=\"custom-icon-inner mr-3\"><span class=\"icon icon-graduation-cap\"></span></span>\r\n                    <div>\r\n                        <h3 class=\"m-0\">22,931 Yearly Graduates</h3>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex align-items-center custom-icon-wrap\">\r\n                    <span class=\"custom-icon-inner mr-3\"><span class=\"icon icon-university\"></span></span>\r\n                    <div>\r\n                        <h3 class=\"m-0\">150 Universities Worldwide</h3>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mb-5 align-items-center\">\r\n            <div class=\"col-lg-7 mb-5 order-1 order-lg-2\" data-aos=\"fade-up\" data-aos-delay=\"100\">\r\n                <img src=\"assets/images/undraw_teaching.svg\" alt=\"Image\" class=\"img-fluid\">\r\n            </div>\r\n            <div class=\"col-lg-4 mr-auto order-2 order-lg-1\" data-aos=\"fade-up\" data-aos-delay=\"200\">\r\n                <h2 class=\"text-black mb-4\">Strive for Excellent</h2>\r\n                <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>\r\n\r\n                <div class=\"d-flex align-items-center custom-icon-wrap mb-3\">\r\n                    <span class=\"custom-icon-inner mr-3\"><span class=\"icon icon-graduation-cap\"></span></span>\r\n                    <div>\r\n                        <h3 class=\"m-0\">22,931 Yearly Graduates</h3>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex align-items-center custom-icon-wrap\">\r\n                    <span class=\"custom-icon-inner mr-3\"><span class=\"icon icon-university\"></span></span>\r\n                    <div>\r\n                        <h3 class=\"m-0\">150 Universities Worldwide</h3>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row mb-5 align-items-center\">\r\n            <div class=\"col-lg-7 mb-5\" data-aos=\"fade-up\" data-aos-delay=\"100\">\r\n                <img src=\"assets/images/undraw_teacher.svg\" alt=\"Image\" class=\"img-fluid\">\r\n            </div>\r\n            <div class=\"col-lg-4 ml-auto\" data-aos=\"fade-up\" data-aos-delay=\"200\">\r\n                <h2 class=\"text-black mb-4\">Education is life</h2>\r\n                <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>\r\n\r\n                <div class=\"d-flex align-items-center custom-icon-wrap mb-3\">\r\n                    <span class=\"custom-icon-inner mr-3\"><span class=\"icon icon-graduation-cap\"></span></span>\r\n                    <div>\r\n                        <h3 class=\"m-0\">22,931 Yearly Graduates</h3>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex align-items-center custom-icon-wrap\">\r\n                    <span class=\"custom-icon-inner mr-3\"><span class=\"icon icon-university\"></span></span>\r\n                    <div>\r\n                        <h3 class=\"m-0\">150 Universities Worldwide</h3>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"site-section\" id=\"teachers-section\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row mb-5 justify-content-center\">\r\n            <div class=\"col-lg-7 mb-5 text-center\" data-aos=\"fade-up\" data-aos-delay=\"\">\r\n                <h2 class=\"section-title\">Our Teachers</h2>\r\n                <p class=\"mb-5\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-6 col-lg-4 mb-4\" data-aos=\"fade-up\" data-aos-delay=\"100\">\r\n                <div class=\"teacher text-center\">\r\n                    <img src=\"assets/images/person_1.jpg\" alt=\"Image\" class=\"img-fluid w-50 rounded-circle mx-auto mb-4\">\r\n                    <div class=\"py-2\">\r\n                        <h3 class=\"text-black\">Benjamin Stone</h3>\r\n                        <p class=\"position\">Physics Teacher</p>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 mb-4\" data-aos=\"fade-up\" data-aos-delay=\"200\">\r\n                <div class=\"teacher text-center\">\r\n                    <img src=\"assets/images/person_2.jpg\" alt=\"Image\" class=\"img-fluid w-50 rounded-circle mx-auto mb-4\">\r\n                    <div class=\"py-2\">\r\n                        <h3 class=\"text-black\">Katleen Stone</h3>\r\n                        <p class=\"position\">Physics Teacher</p>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 mb-4\" data-aos=\"fade-up\" data-aos-delay=\"300\">\r\n                <div class=\"teacher text-center\">\r\n                    <img src=\"assets/images/person_3.jpg\" alt=\"Image\" class=\"img-fluid w-50 rounded-circle mx-auto mb-4\">\r\n                    <div class=\"py-2\">\r\n                        <h3 class=\"text-black\">Sadie White</h3>\r\n                        <p class=\"position\">Physics Teacher</p>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"site-section bg-image overlay\" style=\"background-image: url('assets/images/hero_1.jpg');\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center align-items-center\">\r\n            <div class=\"col-md-8 text-center testimony\">\r\n                <img src=\"assets/images/person_4.jpg\" alt=\"Image\" class=\"img-fluid w-25 mb-4 rounded-circle\">\r\n                <h3 class=\"mb-4\">Jerome Jensen</h3>\r\n                <blockquote>\r\n                    <p>&ldquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem soluta sit eius necessitatibus voluptate excepturi beatae ad eveniet sapiente impedit quae modi quo provident odit molestias! Rem reprehenderit assumenda &rdquo;\r\n                    </p>\r\n                </blockquote>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"site-section pb-0\">\r\n\r\n    <div class=\"future-blobs\">\r\n        <div class=\"blob_2\">\r\n            <img src=\"assets/images/blob_2.svg\" alt=\"Image\">\r\n        </div>\r\n        <div class=\"blob_1\">\r\n            <img src=\"assets/images/blob_1.svg\" alt=\"Image\">\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"row mb-5 justify-content-center\" data-aos=\"fade-up\" data-aos-delay=\"\">\r\n            <div class=\"col-lg-7 text-center\">\r\n                <h2 class=\"section-title\">Why Choose Us</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 ml-auto align-self-start\" data-aos=\"fade-up\" data-aos-delay=\"100\">\r\n\r\n                <div class=\"p-4 rounded bg-white why-choose-us-box\">\r\n\r\n                    <div class=\"d-flex align-items-center custom-icon-wrap custom-icon-light mb-3\">\r\n                        <div class=\"mr-3\"><span class=\"custom-icon-inner\"><span class=\"icon icon-graduation-cap\"></span></span>\r\n                        </div>\r\n                        <div>\r\n                            <h3 class=\"m-0\">22,931 Yearly Graduates</h3>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"d-flex align-items-center custom-icon-wrap custom-icon-light mb-3\">\r\n                        <div class=\"mr-3\"><span class=\"custom-icon-inner\"><span class=\"icon icon-university\"></span></span>\r\n                        </div>\r\n                        <div>\r\n                            <h3 class=\"m-0\">150 Universities Worldwide</h3>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"d-flex align-items-center custom-icon-wrap custom-icon-light mb-3\">\r\n                        <div class=\"mr-3\"><span class=\"custom-icon-inner\"><span class=\"icon icon-graduation-cap\"></span></span>\r\n                        </div>\r\n                        <div>\r\n                            <h3 class=\"m-0\">Top Professionals in The World</h3>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"d-flex align-items-center custom-icon-wrap custom-icon-light mb-3\">\r\n                        <div class=\"mr-3\"><span class=\"custom-icon-inner\"><span class=\"icon icon-university\"></span></span>\r\n                        </div>\r\n                        <div>\r\n                            <h3 class=\"m-0\">Expand Your Knowledge</h3>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"d-flex align-items-center custom-icon-wrap custom-icon-light mb-3\">\r\n                        <div class=\"mr-3\"><span class=\"custom-icon-inner\"><span class=\"icon icon-graduation-cap\"></span></span>\r\n                        </div>\r\n                        <div>\r\n                            <h3 class=\"m-0\">Best Online Teaching Assistant Courses</h3>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"d-flex align-items-center custom-icon-wrap custom-icon-light\">\r\n                        <div class=\"mr-3\"><span class=\"custom-icon-inner\"><span class=\"icon icon-university\"></span></span>\r\n                        </div>\r\n                        <div>\r\n                            <h3 class=\"m-0\">Best Teachers</h3>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n            <div class=\"col-lg-7 align-self-end\" data-aos=\"fade-left\" data-aos-delay=\"200\">\r\n                <img src=\"assets/images/person_transparent.png\" alt=\"Image\" class=\"img-fluid\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"site-section bg-light\" id=\"contact-section\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-7\">\r\n\r\n\r\n\r\n                <h2 class=\"section-title mb-3\">Message Us</h2>\r\n                <p class=\"mb-5\">Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>\r\n\r\n                <form method=\"post\" data-aos=\"fade\">\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-md-6 mb-3 mb-lg-0\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-md-12\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-md-12\">\r\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-md-12\">\r\n                            <textarea class=\"form-control\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Write your message here.\"></textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-md-6\">\r\n\r\n                            <input type=\"submit\" class=\"btn btn-primary py-3 px-5 btn-block btn-pill\" value=\"Send Message\">\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<footer class=\"footer-section bg-white\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <h3>About LearningPod</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.</p>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 ml-auto\">\r\n                <h3>Links</h3>\r\n                <ul class=\"list-unstyled footer-links\">\r\n                    <li><a>Home</a></li>\r\n                    <li><a>Courses</a></li>\r\n                    <li><a>Programs</a></li>\r\n                    <li><a>Teachers</a></li>\r\n                </ul>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <h3>Subscribe</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt iure iusto architecto? Numquam, natus?</p>\r\n                <form action=\"#\" class=\"footer-subscribe\">\r\n                    <div class=\"d-flex mb-5\">\r\n                        <input type=\"text\" class=\"form-control rounded-0\" placeholder=\"Email\">\r\n                        <input type=\"submit\" class=\"btn btn-primary rounded-0\" value=\"Subscribe\">\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row pt-5 mt-5 text-center\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"border-top pt-5\">\r\n                    <p>\r\n                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\r\n                        Copyright &copy;\r\n                        <script>\r\n                            document.write(new Date().getFullYear());\r\n                        </script> All rights reserved | This app is made with <i class=\"icon-heart\" aria-hidden=\"true\"></i> by <a href=\"https://coffeebeanstechnologies.com\" target=\"_blank\">Coffeebeans Technologies</a>\r\n                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</footer>\r\n\r\n\r\n\r\n\r\n<!-- .site-wrap -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/navbar/navbar.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/navbar/navbar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-mobile-menu site-navbar-target\">\r\n    <div class=\"site-mobile-menu-header\">\r\n        <div class=\"site-mobile-menu-close mt-3\">\r\n            <span class=\"icon-close2 js-menu-toggle\"></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"site-mobile-menu-body\"></div>\r\n</div>\r\n\r\n\r\n<header class=\"site-navbar py-3 js-sticky-header site-navbar-target\" style=\"background:#333131\" role=\"banner\">\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"d-flex align-items-center\">\r\n            <div class=\"site-logo\"><a style=\"color: white !important;\">LeraningPod-Test</a></div>\r\n\r\n            <div class=\"mx-auto text-center\">\r\n                <nav class=\"site-navigation position-relative text-right\" role=\"navigation\">\r\n                    <ul class=\"site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0\">\r\n                        <!-- <li><a style=\"color: white !important;\" class=\"nav-link\" [routerLink]=\"['']\">Home</a></li>\r\n                        <li><a style=\"color: white !important;\" class=\"nav-link\" [routerLink]=\"['test-bank']\">Test History</a></li> -->\r\n                        <li><a style=\"color: white !important;\" class=\"nav-link\" [routerLink]=\"['question-bank']\">Question bank</a></li>\r\n                        <!-- <li><a style=\"color: white !important;\" class=\"nav-link\" [routerLink]=\"['create-test']\">Create test</a></li> -->\r\n                        <li><a style=\"color: white !important;\" class=\"nav-link\" [routerLink]=\"['create-question']\">Create question</a></li>\r\n                        <li><a style=\"color: white !important;\" class=\"nav-link\" [routerLink]=\"['question-set']\">Question set</a></li>\r\n                        <li><a style=\"color: white !important;\" class=\"nav-link\" [routerLink]=\"['question-set-with-questions']\">Question set with questions</a></li>\r\n                    </ul>\r\n                </nav>\r\n            </div>\r\n\r\n            <div class=\"ml-auto w-25\">\r\n                <nav class=\"site-navigation position-relative text-right\" role=\"navigation\">\r\n                    <ul class=\"site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0\">\r\n                        <li class=\"cta\"><a class=\"nav-link\"><span>Contact Us</span></a></li>\r\n                    </ul>\r\n                </nav>\r\n                <a class=\"d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right\"><span class=\"icon-menu h3\"></span></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/question-bank/question-bank.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/question-bank/question-bank.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section\" id=\"courses-section\">\r\n    <div class=\"container\">\r\n        <div>\r\n            <div class=\"jumbotron\">\r\n\r\n                <div class=\"mt-3 mb-3\">\r\n                    <h2>All Questions</h2>\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                            <th>\r\n                                No.\r\n                            </th>\r\n                            <!-- <th>\r\n                                Id\r\n                            </th> -->\r\n                            <th>\r\n                                Title\r\n                            </th>\r\n                            <th>\r\n                                Type\r\n                            </th>\r\n                            <th>\r\n                                Class\r\n                            </th>\r\n                            <th>\r\n                                Board\r\n                            </th>\r\n                            <th>\r\n                                Subject\r\n                            </th>\r\n                            <!-- <th>\r\n                                Topic id\r\n                            </th> -->\r\n                            <th>\r\n                                Difficulty level\r\n                            </th>\r\n                            <th>\r\n                                Marks alloted\r\n                            </th>\r\n                            <th>\r\n                                Time to solve\r\n                            </th>\r\n                            <th>\r\n                                Action\r\n                            </th>\r\n\r\n                        </tr>\r\n\r\n                        <tr *ngFor=\"let one of allQuestions; let i=index\">\r\n                            <td>{{i + 1}}</td>\r\n                            <!-- <td>{{one.examId}}</td> -->\r\n                            <td>{{one.question}}</td>\r\n                            <td>{{one.questionType}}</td>\r\n                            <td>{{one.classInfo.className}}</td>\r\n                            <td>{{one.boardInfo.boardName}}</td>\r\n                            <td>{{one.subjectInfo.subjectName}}</td>\r\n                            <!-- <td>{{one.topicId}}</td> -->\r\n                            <td>{{one.difficultyLevel}}</td>\r\n                            <td>{{one.maximumMarks}}</td>\r\n                            <td>{{one.timeToSolve}} Sec</td>\r\n                            <td><button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#updateQuestionModal\" (click)=\"getQuestionById(one)\">Update</button></td>\r\n                        </tr>\r\n\r\n                    </table>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"updateQuestionModal\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      <div class=\"modal-content\">\r\n      \r\n        <!-- Modal Header -->\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Update Question</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        \r\n        <!-- Modal body -->\r\n        <div class=\"modal-body\">\r\n      <div *ngIf=\"questionToUpdate\" class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"fname\">Select Class</label>\r\n\r\n                    <select [(ngModel)]=\"questionToUpdate.classInformation\" class=\"form-control\">\r\n                        <option *ngFor=\"let one of classList\" [value]=\"one.classId\">{{one.className}}</option>\r\n                    </select>\r\n\r\n                    <!-- <ng-multiselect-dropdown \r\n                        [placeholder]=\"'Select Class'\"\r\n                        [data]=\"classList\"\r\n                        [(ngModel)]=\"questionToUpdate.classInformation\"\r\n                        [settings]=\"dropdownClassSettings\"\r\n                        (onSelect)=\"onClassSelect($event)\"\r\n                     >\r\n                    </ng-multiselect-dropdown> -->\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"lname\">Select Board</label>\r\n                    <select [(ngModel)]=\"questionToUpdate.boardInformation\" class=\"form-control\">\r\n                        <option *ngFor=\"let one of boardList\" [value]=\"one.boardId\">{{one.boardName}}</option>\r\n                    </select>\r\n\r\n                    <!-- <ng-multiselect-dropdown \r\n                    [placeholder]=\"'Select Board'\"\r\n                    [data]=\"boardList\"\r\n                    [(ngModel)]=\"questionToUpdate.boardInformation\"\r\n                    [settings]=\"dropdownBoardSettings\"\r\n                    (onSelect)=\"onBoardSelect($event)\"\r\n                    >\r\n                </ng-multiselect-dropdown> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"fname\">Select Subject</label>\r\n\r\n                    <select [(ngModel)]=\"questionToUpdate.subjectInformation\" class=\"form-control\">\r\n                        <option *ngFor=\"let one of subjectList\" [value]=\"one.subjectId\">{{one.subjectName}}</option>\r\n                    </select>\r\n\r\n                    <!-- <ng-multiselect-dropdown \r\n                    [placeholder]=\"'Select Subject'\"\r\n                    [data]=\"subjectList\"\r\n                    [(ngModel)]=\"questionToUpdate.subjectInformation\"\r\n                    [settings]=\"dropdownSubjectSettings\"\r\n                    (onSelect)=\"onSubjectSelect($event)\"\r\n                  >\r\n                </ng-multiselect-dropdown> -->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <label for=\"lname\">Select Question type</label>\r\n                <select disabled [(ngModel)]=\"questionToUpdate.questionType\" class=\"form-control\">\r\n                    <option *ngFor=\"let one of questionType\" [value]=\"one\">{{one}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <label for=\"lname\">Select Difficulty level</label>\r\n                <select [(ngModel)]=\"questionToUpdate.difficultyLevel\" class=\"form-control\">\r\n                    <option *ngFor=\"let one of difficultyLevel\" [value]=\"one\">{{one}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row p-4\">\r\n            <div>\r\n                <input [(ngModel)]=\"questionToUpdate.isImageAvailable\" type=\"checkbox\"> Image based question\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"questionToUpdate.isImageAvailable\" class=\"row p-4\">\r\n            <div>\r\n                <input type=\"file\" placeholder=\"select image for upload\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">Question title</label>\r\n                    <textarea [(ngModel)]=\"questionToUpdate.question\" class=\"form-control\" placeholder=\"Enter question title\"></textarea>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-xs-12 col-sm-8 col-md-3 col-lg-3\">\r\n                <label for=\"state\">Time in seconds</label>\r\n                <input [(ngModel)]=\"questionToUpdate.timeToSolve\" id=\"state\" class=\"form-control\" type=\"number\">\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-8 col-md-3 col-lg-3\">\r\n                <label for=\"state\">Marks to allot</label>\r\n                <input [(ngModel)]=\"questionToUpdate.maximumMarks\" id=\"state\" class=\"form-control\" type=\"number\">\r\n            </div>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <h1>Answer</h1>\r\n        <div *ngIf=\"questionToUpdate.questionType == 'mcq'\">\r\n            <h2>MCQ</h2>\r\n            <table id=\"optionTable\" class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            Option\r\n                        </th>\r\n                        <th>\r\n                            Correct\r\n                        </th>\r\n                        <th>\r\n                            Option text\r\n                        </th>\r\n                        <th>\r\n                            Action\r\n                        </th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let one of questionToUpdate.options;let i=index;\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>\r\n                            <input [(ngModel)]=\"one.isCorrectAnswer\" type=\"checkbox\">\r\n                        </td>\r\n                        <td>\r\n                            <input [(ngModel)]=\"one.optionName\" type=\"text\">\r\n                        </td>\r\n                        <!-- <td *ngIf=\"options.length > 2\">\r\n                            <button class=\"delete-row\" (click)=\"removeRow(i)\">Remove</button>\r\n                        </td> -->\r\n                    </tr>\r\n                </tbody>\r\n\r\n            </table>\r\n            <!-- <button class=\"add-row\" (click)=\"addRow()\">Add row</button> -->\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"questionToUpdate.questionType == 'tof'\">\r\n            <h2>True or False</h2>\r\n            <table id=\"optionTable\" class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            Option\r\n                        </th>\r\n                        <th>\r\n                            Correct\r\n                        </th>\r\n                        <th>\r\n                            Option text\r\n                        </th>\r\n                        <!-- <th>\r\n                            Action\r\n                        </th> -->\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let one of questionToUpdate.options;let i=index;\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>\r\n                            <input id=\"one\" [(ngModel)]=\"one.isCorrectAnswer\"  type=\"checkbox\">\r\n                        </td>\r\n                        <td>\r\n                            <input id=\"two\" [(ngModel)]=\"one.optionName\" type=\"text\">\r\n                        </td>\r\n                        <!-- <td *ngIf=\"options.length > 2\">\r\n                            <button class=\"delete-row\" (click)=\"removeRow(i)\">Remove</button>\r\n                        </td> -->\r\n                    </tr>\r\n                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"questionToUpdate.questionType == 'match'\">\r\n            <h2>Match the pair</h2>\r\n\r\n            <table id=\"optionTable\" class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            Option\r\n                        </th>\r\n                        <th>\r\n                            Option text\r\n                        </th>\r\n                        <th>\r\n                            Option match\r\n                        </th>\r\n                        <!-- <th>\r\n                            Action\r\n                        </th> -->\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let one of questionToUpdate.options;let i=index;\">\r\n                        <td>{{i +1 }}</td>\r\n                        <td>\r\n                            <input id=\"one\" [(ngModel)]=\"one.optionName\" type=\"text\">\r\n                        </td>\r\n                        <td>\r\n                            <input id=\"two\" [(ngModel)]=\"one.isCorrectAnswer\" type=\"text\">\r\n                        </td>\r\n                        <!-- <td *ngIf=\"options.length > 2\">\r\n                            <button class=\"delete-row\" (click)=\"removeRow(i)\">Remove</button>\r\n                        </td> -->\r\n                    </tr>\r\n                </tbody>\r\n\r\n            </table>\r\n            <!-- <button class=\"add-row\" (click)=\"addPairRow()\">Add row</button> -->\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <button class=\"btn btn-primary form-control\" data-dismiss=\"modal\" (click)=\"updateQuestion(questionToUpdate)\"> Update question</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n        </div>\r\n        \r\n        <!-- Modal footer -->\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/question-set-with-question/question-set-with-question.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/question-set-with-question/question-set-with-question.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section\" id=\"courses-section\">\n    <div class=\"container\">\n        <div>\n            <div class=\"jumbotron\">\n                <h1>Create question set with questions</h1>\n\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <label for=\"fname\">Select question paper set</label>\n\n                            <select [(ngModel)]=\"questionSetWithQuestions.questionPaperSetId\" class=\"form-control\">\n                                <option *ngFor=\"let one of allQuestionSets\" [value]=\"one.questionPaperSetId\">{{one.setName}}</option>\n                            </select>\n\n                        </div>\n                    </div>\n                </div>\n\n\n\n                <div class=\"mt-3 mb-3\">\n                    <h2>All Questions</h2>\n                    <table class=\"table\">\n                        <tr>\n                            <th>\n                                select\n                            </th>\n                            <th>\n                                No.\n                            </th>\n                            <!-- <th>\n                                Id\n                            </th> -->\n                            <th>\n                                Title\n                            </th>\n                            <th>\n                                Type\n                            </th>\n                            <th>\n                                Class\n                            </th>\n                            <th>\n                                Board\n                            </th>\n                            <th>\n                                Subject\n                            </th>\n                            <!-- <th>\n                                Topic id\n                            </th> -->\n                            <th>\n                                Difficulty level\n                            </th>\n                            <th>\n                                Marks alloted\n                            </th>\n                            <th>\n                                Time to solve\n                            </th>\n                          \n\n                        </tr>\n\n                        <tr *ngFor=\"let one of allQuestions; let i=index\">\n                            <td>\n                                <!-- <input class=\"a\" type=\"checkbox\" [(ngModel)]=\"one.questionId\" [id]=\"one.questionId\" /> -->\n                                <input type=\"checkbox\" [(checklist)]=\"questionIds\" [checklistValue]=\"one.questionId\" />\n                            </td>\n                            <td>{{i + 1}}</td>\n                            <!-- <td>{{one.examId}}</td> -->\n                            <td>{{one.question}}</td>\n                            <td>{{one.questionType}}</td>\n                            <td>{{one.classInfo.className}}</td>\n                            <td>{{one.boardInfo.boardName}}</td>\n                            <td>{{one.subjectInfo.subjectName}}</td>\n                            <!-- <td>{{one.topicId}}</td> -->\n                            <td>{{one.difficultyLevel}}</td>\n                            <td>{{one.maximumMarks}}</td>\n                            <td>{{one.timeToSolve}} Sec</td>\n                           \n                        </tr>\n\n                    </table>\n\n                    <div class=\"row\">\n<div class=\"col-md-12\">\n<button class=\"btn btn-primary\" (click)=\"getSelectedQuestions(questionSetWithQuestions)\">Add</button>\n</div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/question-set/question-set.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/question-set/question-set.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section\" id=\"courses-section\">\n    <div class=\"container\">\n        <div>\n            <div class=\"jumbotron\">\n                <h1>Create question set</h1>\n\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <label for=\"email\">Question set title</label>\n                            <textarea [(ngModel)]=\"questionSetToAdd.setName\" class=\"form-control\" placeholder=\"Enter question set title\"></textarea>\n\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"fname\">Select Class</label>\n\n                            <select [(ngModel)]=\"questionSetToAdd.classInformation\" class=\"form-control\">\n                                <option *ngFor=\"let one of classList\" [value]=\"one.classId\">{{one.className}}</option>\n                            </select>\n\n                            <!-- <ng-multiselect-dropdown \n                                [placeholder]=\"'Select Class'\"\n                                [data]=\"classList\"\n                                [(ngModel)]=\"question.classInformation\"\n                                [settings]=\"dropdownClassSettings\"\n                                (onSelect)=\"onItemSelect($event)\"\n                                (onSelectAll)=\"onSelectAll($event)\">\n                            </ng-multiselect-dropdown> -->\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"lname\">Select Board</label>\n                            <select [(ngModel)]=\"questionSetToAdd.boardInformation\" class=\"form-control\">\n                                <option *ngFor=\"let one of boardList\" [value]=\"one.boardId\">{{one.boardName}}</option>\n                            </select>\n\n                            <!-- <ng-multiselect-dropdown \n                            [placeholder]=\"'Select Board'\"\n                            [data]=\"boardList\"\n                            [(ngModel)]=\"question.boardInformation\"\n                            [settings]=\"dropdownBoardSettings\"\n                            (onSelect)=\"onItemSelect($event)\"\n                            (onSelectAll)=\"onSelectAll($event)\">\n                        </ng-multiselect-dropdown> -->\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"fname\">Select Subject</label>\n\n                            <select [(ngModel)]=\"questionSetToAdd.subjectInformation\" class=\"form-control\">\n                                <option *ngFor=\"let one of subjectList\" [value]=\"one.subjectId\">{{one.subjectName}}</option>\n                            </select>\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <label for=\"state\">Time in seconds</label>\n                        <input [(ngModel)]=\"questionSetToAdd.paperTime\" id=\"state\" class=\"form-control\" type=\"number\">\n                    </div>\n                    <div class=\"col-md-4\">\n                        <label for=\"state\">Marks to allot</label>\n                        <input [(ngModel)]=\"questionSetToAdd.totalMark\" id=\"state\" class=\"form-control\" type=\"number\">\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <button class=\"btn btn-primary\" (click)=\"addQuestionSet(questionSetToAdd)\">Add question set</button>\n                    </div>\n                  \n                </div>\n\n                <div class=\"mt-3 mb-3\">\n                    <h2>All Questions</h2>\n                    <table class=\"table\">\n                        <tr>\n                            <th>\n                                Id\n                            </th>\n                            <th>\n                              Set name\n                            </th>\n\n                            <th>\n                                Class\n                            </th>\n                            <th>\n                                Board\n                            </th>\n                            <th>\n                                Subject\n                            </th>\n                            <th>\n                                Marks\n                            </th>\n                            <th>\n                                Time\n                            </th>\n                            <th>\n                                Action\n                            </th>\n\n                        </tr>\n\n                        <tr *ngFor=\"let one of allQuestionSets; let i=index\">\n                           \n                            <td>{{one.questionPaperSetId}}</td>\n                            <td>{{one.setName}}</td>\n                            <td>{{one.classInfo.className}}</td>\n                            <td>{{one.boardInfo.boardName}}</td>\n                            <td>{{one.subjectInfo.subjectName}}</td>\n                            <!-- <td>{{one.topicId}}</td> -->\n                            <td>{{one.totalMark}}</td>\n                            <td>{{one.paperTime}} Sec</td>\n                            <td><input type=\"checkbox\" /></td>\n                            \n                        </tr>\n\n                    </table>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/test-bank/test-bank.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/test-bank/test-bank.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section\" id=\"courses-section\">\r\n    <div class=\"container\">\r\n        <div>\r\n            <div class=\"jumbotron\">\r\n\r\n\r\n                <div class=\"mt-3 mb-3\">\r\n                    <h2>All tests</h2>\r\n                    <table class=\"table\">\r\n                        <tr>\r\n                            <th>\r\n                                No.\r\n                            </th>\r\n                            <!-- <th>\r\n                                Id\r\n                            </th> -->\r\n                            <th>\r\n                                Title\r\n                            </th>\r\n                            <th>\r\n                                Type\r\n                            </th>\r\n                            <th>\r\n                                Scheduled on\r\n                            </th>\r\n                            <th>\r\n                                Class id\r\n                            </th>\r\n                            <th>\r\n                                Board Id\r\n                            </th>\r\n                            <th>\r\n                                Subject id\r\n                            </th>\r\n                            <th>\r\n                                Total questions\r\n                            </th>\r\n                            <th>\r\n                                Total marks\r\n                            </th>\r\n                            <th>\r\n                                Duration\r\n                            </th>\r\n\r\n                        </tr>\r\n\r\n                        <tr *ngFor=\"let one of allTests; let i=index\">\r\n                            <td>{{i + 1}}</td>\r\n                            <!-- <td>{{one.examId}}</td> -->\r\n                            <td>{{one.examName}}</td>\r\n                            <td>{{one.examType}}</td>\r\n                            <td>{{one.date}}</td>\r\n                            <td>{{one.classId}}</td>\r\n                            <td>{{one.boardId}}</td>\r\n                            <td>{{one.subjectId}}</td>\r\n                            <td>{{one.totalQuestions}}</td>\r\n                            <td>{{one.totalMarks}}</td>\r\n                            <td>{{one.duration}}</td>\r\n                        </tr>\r\n\r\n                    </table>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/landing/landing.component */ "./src/app/component/landing/landing.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_test_bank_test_bank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/test-bank/test-bank.component */ "./src/app/component/test-bank/test-bank.component.ts");
/* harmony import */ var _component_question_bank_question_bank_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/question-bank/question-bank.component */ "./src/app/component/question-bank/question-bank.component.ts");
/* harmony import */ var _component_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/create-question/create-question.component */ "./src/app/component/create-question/create-question.component.ts");
/* harmony import */ var _component_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/create-test/create-test.component */ "./src/app/component/create-test/create-test.component.ts");
/* harmony import */ var _component_question_set_question_set_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/question-set/question-set.component */ "./src/app/component/question-set/question-set.component.ts");
/* harmony import */ var _component_question_set_with_question_question_set_with_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/question-set-with-question/question-set-with-question.component */ "./src/app/component/question-set-with-question/question-set-with-question.component.ts");











const routes = [
    { path: "", component: _component_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: "home", component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "test-bank", component: _component_test_bank_test_bank_component__WEBPACK_IMPORTED_MODULE_5__["TestBankComponent"] },
    { path: "question-bank", component: _component_question_bank_question_bank_component__WEBPACK_IMPORTED_MODULE_6__["QuestionBankComponent"] },
    { path: "create-question", component: _component_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_7__["CreateQuestionComponent"] },
    { path: "create-test", component: _component_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_8__["CreateTestComponent"] },
    { path: "question-set", component: _component_question_set_question_set_component__WEBPACK_IMPORTED_MODULE_9__["QuestionSetComponent"] },
    { path: "question-set-with-questions", component: _component_question_set_with_question_question_set_with_question_component__WEBPACK_IMPORTED_MODULE_10__["QuestionSetWithQuestionComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'test';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/landing/landing.component */ "./src/app/component/landing/landing.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _component_question_bank_question_bank_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/question-bank/question-bank.component */ "./src/app/component/question-bank/question-bank.component.ts");
/* harmony import */ var _component_test_bank_test_bank_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/test-bank/test-bank.component */ "./src/app/component/test-bank/test-bank.component.ts");
/* harmony import */ var _component_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/create-question/create-question.component */ "./src/app/component/create-question/create-question.component.ts");
/* harmony import */ var _component_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/create-test/create-test.component */ "./src/app/component/create-test/create-test.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-checklist */ "./node_modules/angular-checklist/dist/index.js");
/* harmony import */ var angular_checklist__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular_checklist__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _component_question_set_question_set_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/question-set/question-set.component */ "./src/app/component/question-set/question-set.component.ts");
/* harmony import */ var _component_question_set_with_question_question_set_with_question_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/question-set-with-question/question-set-with-question.component */ "./src/app/component/question-set-with-question/question-set-with-question.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _component_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
            _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _component_question_bank_question_bank_component__WEBPACK_IMPORTED_MODULE_9__["QuestionBankComponent"],
            _component_test_bank_test_bank_component__WEBPACK_IMPORTED_MODULE_10__["TestBankComponent"],
            _component_create_question_create_question_component__WEBPACK_IMPORTED_MODULE_11__["CreateQuestionComponent"],
            _component_create_test_create_test_component__WEBPACK_IMPORTED_MODULE_12__["CreateTestComponent"],
            _component_question_set_question_set_component__WEBPACK_IMPORTED_MODULE_16__["QuestionSetComponent"],
            _component_question_set_with_question_question_set_with_question_component__WEBPACK_IMPORTED_MODULE_17__["QuestionSetWithQuestionComponent"]
        ],
        imports: [
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__["NgMultiSelectDropDownModule"].forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angular_checklist__WEBPACK_IMPORTED_MODULE_14__["ChecklistModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/create-question/create-question.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/create-question/create-question.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jcmVhdGUtcXVlc3Rpb24vY3JlYXRlLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/create-question/create-question.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/create-question/create-question.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestionComponent", function() { return CreateQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dal.service */ "./src/app/services/dal.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let CreateQuestionComponent = class CreateQuestionComponent {
    // dropdownClassSettings:IDropdownSettings = {
    //   singleSelection: false,
    //   idField: 'classId',
    //   textField: 'className',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
    // dropdownBoardSettings:IDropdownSettings = {
    //   singleSelection: false,
    //   idField: 'boardid',
    //   textField: 'boardName',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
    // dropdownSubjectSettings:IDropdownSettings = {
    //   singleSelection: false,
    //   idField: 'subjectId',
    //   textField: 'subjectName',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
    constructor(dal) {
        this.dal = dal;
        this.question = {
            subjectInformation: null,
            classInformation: null,
            boardInformation: null,
            question: "",
            isImageAvailable: false,
            imageUrl: "",
            questionType: "",
            difficultyLevel: "",
            maximumMarks: null,
            timeToSolve: null,
            isOptionAvailable: false,
            options: []
        };
        this.topicList = [
            {
                topicId: 1,
                topicName: "topic 1"
            },
            {
                topicId: 1,
                topicName: "topic 2"
            }
        ];
        this.questionType = ["tof", "mcq", "match"];
        this.difficultyLevel = ["easy", "medium", "hard"];
        this.options = [
            {
                optionName: "",
                isCorrectAnswer: false
            },
            {
                optionName: "",
                isCorrectAnswer: false
            }
        ];
        this.optionMatch = [
            {
                optionId: 1,
                optionText: "",
                optionMatch: ""
            }
        ];
    }
    ngOnInit() {
        this.getAllClasses();
        this.getAllSubjects();
        this.getAllBoards();
    }
    addRow() {
        let opt = { optionName: "", isCorrectAnswer: false };
        this.options.push(opt);
    }
    addPairRow() {
        let opt = { optionId: this.optionMatch.length + 1, optionText: "", optionMatch: "" };
        this.optionMatch.push(opt);
    }
    removeRow(id) {
        // this.options = this.options.filter(x=> x.optionId != id);
    }
    getAllClasses() {
        this.dal.getAllClasses().subscribe(x => {
            this.classList = x;
            console.log("classlist", x);
        });
    }
    getAllBoards() {
        this.dal.getAllBoards().subscribe(x => {
            this.boardList = x;
            console.log("boardlist", x);
        });
    }
    getAllSubjects() {
        this.dal.getallSubjects().subscribe(x => {
            this.subjectList = x;
            console.log("subjectlist", x);
        });
    }
    addQuestion() {
        if (this.question.questionType == 'match') {
            this.question.options = this.optionMatch;
        }
        else {
            this.question.options = this.options;
        }
        if (this.question.options.length >= 2) {
            this.question.isOptionAvailable = true;
        }
        this.question.classInformation = parseInt(this.question.classInformation);
        this.question.boardInformation = parseInt(this.question.boardInformation);
        this.question.subjectInformation = parseInt(this.question.subjectInformation);
        this.dal.addQuestion(this.question).subscribe(x => {
            if (x.status == "success") {
                console.log("question added res:", x);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Question added successfully!',
                    timer: 2000
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: x.message,
                    timer: 2000
                });
            }
        });
        console.log("question to add", this.question);
    }
};
CreateQuestionComponent.ctorParameters = () => [
    { type: src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_2__["DalService"] }
];
CreateQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-question',
        template: __webpack_require__(/*! raw-loader!./create-question.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/create-question/create-question.component.html"),
        styles: [__webpack_require__(/*! ./create-question.component.css */ "./src/app/component/create-question/create-question.component.css")]
    })
], CreateQuestionComponent);



/***/ }),

/***/ "./src/app/component/create-test/create-test.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/create-test/create-test.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jcmVhdGUtdGVzdC9jcmVhdGUtdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/create-test/create-test.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/create-test/create-test.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTestComponent", function() { return CreateTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dal.service */ "./src/app/services/dal.service.ts");



let CreateTestComponent = class CreateTestComponent {
    constructor(dal) {
        this.dal = dal;
    }
    ngOnInit() {
        this.getAllQuestions();
    }
    getAllQuestions() {
        this.dal.getAllQuestions().subscribe(x => {
            this.allQuestions = x;
            console.log("all questions", x);
        });
    }
};
CreateTestComponent.ctorParameters = () => [
    { type: src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_2__["DalService"] }
];
CreateTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-test',
        template: __webpack_require__(/*! raw-loader!./create-test.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/create-test/create-test.component.html"),
        styles: [__webpack_require__(/*! ./create-test.component.css */ "./src/app/component/create-test/create-test.component.css")]
    })
], CreateTestComponent);



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dal.service */ "./src/app/services/dal.service.ts");




let HomeComponent = class HomeComponent {
    constructor(dal) {
        this.dal = dal;
    }
    ngOnInit() {
        this.getAllQuestions();
        this.getAllTests();
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#sidebarCollapse').on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#sidebar').toggleClass('active');
            });
        });
    }
    getAllQuestions() {
        this.dal.getAllQuestions().subscribe(x => {
            this.allQuestions = x;
            console.log("all questions", x);
        });
    }
    getAllTests() {
        this.dal.getAllTests().subscribe(x => {
            this.allTests = x;
            console.log("all tests", x);
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_3__["DalService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/component/landing/landing.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/landing/landing.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/landing/landing.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/landing/landing.component.ts ***!
  \********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/landing/landing.component.html"),
        styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/component/landing/landing.component.css")]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/component/navbar/navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".site-navbar {\r\n    color: white;\r\n}\r\n\r\n.site-navbar .container-fluid {\r\n    padding-left: 3rem;\r\n    padding-right: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLW5hdmJhciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zaXRlLW5hdmJhciAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/component/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/component/question-bank/question-bank.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/question-bank/question-bank.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9xdWVzdGlvbi1iYW5rL3F1ZXN0aW9uLWJhbmsuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/question-bank/question-bank.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/question-bank/question-bank.component.ts ***!
  \********************************************************************/
/*! exports provided: QuestionBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBankComponent", function() { return QuestionBankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dal.service */ "./src/app/services/dal.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_updateQuestion_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/updateQuestion.model */ "./src/app/models/updateQuestion.model.ts");





let QuestionBankComponent = class QuestionBankComponent {
    constructor(dal) {
        this.dal = dal;
        this.dropdownClassSettings = {
            singleSelection: true,
            idField: 'classId',
            textField: 'className',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.dropdownBoardSettings = {
            singleSelection: true,
            idField: 'boardId',
            textField: 'boardName',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.dropdownSubjectSettings = {
            singleSelection: true,
            idField: 'subjectId',
            textField: 'subjectName',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.questionType = ["tof", "mcq", "match"];
        this.difficultyLevel = ["easy", "medium", "hard"];
        this.questionToUpdate = new _models_updateQuestion_model__WEBPACK_IMPORTED_MODULE_4__["UpdatedQuestion"]();
    }
    ngOnInit() {
        this.getAllQuestions();
        this.getAllClasses();
        this.getAllBoards();
        this.getAllSubjects();
    }
    getAllQuestions() {
        this.dal.getAllQuestions().subscribe(x => {
            this.allQuestions = x.questions;
            console.log("all questions", x.questions);
        });
    }
    getAllClasses() {
        this.dal.getAllClasses().subscribe(x => {
            this.classList = x;
            console.log("classlist", x);
        });
    }
    getAllBoards() {
        this.dal.getAllBoards().subscribe(x => {
            this.boardList = x;
            console.log("boardlist", x);
        });
    }
    getAllSubjects() {
        this.dal.getallSubjects().subscribe(x => {
            this.subjectList = x;
            console.log("subjectlist", x);
        });
    }
    getQuestionById(data) {
        this.questionToUpdate.questionId = data.questionId;
        this.questionToUpdate.question = data.question;
        this.questionToUpdate.isImageAvailable = data.isImageAvailable;
        this.questionToUpdate.imageUrl = data.imageUrl || "";
        this.questionToUpdate.questionType = data.questionType;
        this.questionToUpdate.difficultyLevel = data.difficultyLevel;
        this.questionToUpdate.maximumMarks = data.maximumMarks;
        this.questionToUpdate.timeToSolve = data.timeToSolve;
        this.questionToUpdate.isOptionAvailable = data.isOptionAvailable;
        this.questionToUpdate.subjectInformation = data.subjectInfo.subjectId;
        this.questionToUpdate.classInformation = data.classInfo.classId;
        this.questionToUpdate.boardInformation = data.boardInfo.boardId;
        this.questionToUpdate.options = data.options;
        console.log("question data by id", this.questionToUpdate);
    }
    onSubjectSelect(event, data) {
        data = event;
        console.log("on subject select", event);
    }
    onClassSelect(event) {
        //UpdatedQuestion.classInfo = event
        console.log("on class select", event);
    }
    onBoardSelect(event) {
        console.log("on board select", event);
    }
    updateQuestion(data) {
        this.questionToUpdate.questionId = data.questionId;
        this.questionToUpdate.question = data.question;
        this.questionToUpdate.isImageAvailable = data.isImageAvailable;
        this.questionToUpdate.imageUrl = data.imageUrl || "";
        this.questionToUpdate.questionType = data.questionType;
        this.questionToUpdate.difficultyLevel = data.difficultyLevel;
        this.questionToUpdate.maximumMarks = data.maximumMarks;
        this.questionToUpdate.timeToSolve = data.timeToSolve;
        this.questionToUpdate.isOptionAvailable = data.isOptionAvailable;
        this.questionToUpdate.subjectInformation = parseInt(data.subjectInformation);
        this.questionToUpdate.classInformation = parseInt(data.classInformation);
        this.questionToUpdate.boardInformation = parseInt(data.boardInformation);
        this.questionToUpdate.options = data.options;
        console.log("updated question", this.questionToUpdate);
        this.dal.updateQuestion(data).subscribe(x => {
            if (x.status == "success") {
                console.log("question updated success", x);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    icon: 'success',
                    title: 'Success',
                    text: x.message,
                    timer: 3000
                });
                this.getAllQuestions();
            }
        });
    }
    addRow() {
        let opt = { optionName: "", isCorrectAnswer: false };
        this.questionToUpdate.options.push(opt);
    }
    addPairRow() {
        let opt = { optionName: "", isCorrectAnswer: false };
        this.questionToUpdate.options.push(opt);
    }
};
QuestionBankComponent.ctorParameters = () => [
    { type: src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_2__["DalService"] }
];
QuestionBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-bank',
        template: __webpack_require__(/*! raw-loader!./question-bank.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/question-bank/question-bank.component.html"),
        styles: [__webpack_require__(/*! ./question-bank.component.css */ "./src/app/component/question-bank/question-bank.component.css")]
    })
], QuestionBankComponent);



/***/ }),

/***/ "./src/app/component/question-set-with-question/question-set-with-question.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/component/question-set-with-question/question-set-with-question.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9xdWVzdGlvbi1zZXQtd2l0aC1xdWVzdGlvbi9xdWVzdGlvbi1zZXQtd2l0aC1xdWVzdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/question-set-with-question/question-set-with-question.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/component/question-set-with-question/question-set-with-question.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: QuestionSetWithQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSetWithQuestionComponent", function() { return QuestionSetWithQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_queSetWithQuestions_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/queSetWithQuestions.model */ "./src/app/models/queSetWithQuestions.model.ts");
/* harmony import */ var src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dal.service */ "./src/app/services/dal.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let QuestionSetWithQuestionComponent = class QuestionSetWithQuestionComponent {
    constructor(dal) {
        this.dal = dal;
        this.questionSetWithQuestions = new _models_queSetWithQuestions_model__WEBPACK_IMPORTED_MODULE_2__["queSetWithQuestions"]();
    }
    ngOnInit() {
        this.getAllSetList();
        this.getAllQuestions();
    }
    getAllSetList() {
        this.dal.getAllSetList().subscribe(x => {
            this.allQuestionSets = x.questionSets;
            console.log("all set list", x);
        });
    }
    getAllQuestions() {
        this.dal.getAllQuestions().subscribe(x => {
            this.allQuestions = x.questions;
            console.log("all questions", x.questions);
        });
    }
    getSelectedQuestions(data) {
        if (data.questionPaperSetId == undefined) {
            alert("select set id");
        }
        else {
            if (this.questionIds == undefined || !this.questionIds.length) {
                alert("select questions");
                this.questionSetWithQuestions.questions = [];
                this.questionSetWithQuestions.questionPaperSetId = parseInt(data.questionPaperSetId);
            }
            else {
                // console.log("selected que ids",this.questionIds)
                let questions = this.questionIds.map(x => {
                    return { "questionId": parseInt(x) };
                });
                //console.log("selected que ids after transform",questions)
                this.questionSetWithQuestions.questionPaperSetId = parseInt(data.questionPaperSetId);
                this.questionSetWithQuestions.questions = questions;
                console.log("selected question for save", this.questionSetWithQuestions);
                this.dal.saveQuestionPaperSetWithQuestions(this.questionSetWithQuestions).subscribe(x => {
                    if (x.status == "success") {
                        console.log("question set with que saves success", x);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            icon: 'success',
                            title: "Success!",
                            text: "Question set with question added successfully!",
                            timer: 3000
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            icon: 'error',
                            title: "Error!",
                            text: x.message,
                            timer: 3000
                        });
                    }
                });
            }
        }
    }
};
QuestionSetWithQuestionComponent.ctorParameters = () => [
    { type: src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_3__["DalService"] }
];
QuestionSetWithQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-set-with-question',
        template: __webpack_require__(/*! raw-loader!./question-set-with-question.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/question-set-with-question/question-set-with-question.component.html"),
        styles: [__webpack_require__(/*! ./question-set-with-question.component.css */ "./src/app/component/question-set-with-question/question-set-with-question.component.css")]
    })
], QuestionSetWithQuestionComponent);



/***/ }),

/***/ "./src/app/component/question-set/question-set.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/question-set/question-set.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9xdWVzdGlvbi1zZXQvcXVlc3Rpb24tc2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/question-set/question-set.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/question-set/question-set.component.ts ***!
  \******************************************************************/
/*! exports provided: QuestionSetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSetComponent", function() { return QuestionSetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dal.service */ "./src/app/services/dal.service.ts");
/* harmony import */ var _models_questionSet_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/questionSet.model */ "./src/app/models/questionSet.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let QuestionSetComponent = class QuestionSetComponent {
    constructor(dal) {
        this.dal = dal;
        this.questionSetToAdd = new _models_questionSet_model__WEBPACK_IMPORTED_MODULE_3__["questionSet"]();
    }
    ngOnInit() {
        this.getAllSetList();
        this.getAllClasses();
        this.getAllBoards();
        this.getAllSubjects();
    }
    getAllSetList() {
        this.dal.getAllSetList().subscribe(x => {
            this.allQuestionSets = x.questionSets;
            console.log("all set list", x);
        });
    }
    getAllClasses() {
        this.dal.getAllClasses().subscribe(x => {
            this.classList = x;
            //console.log("classlist",x)
        });
    }
    getAllBoards() {
        this.dal.getAllBoards().subscribe(x => {
            this.boardList = x;
            //console.log("boardlist",x)
        });
    }
    getAllSubjects() {
        this.dal.getallSubjects().subscribe(x => {
            this.subjectList = x;
            //console.log("subjectlist",x)
        });
    }
    addQuestionSet(data) {
        data.classInformation = parseInt(data.classInformation);
        data.boardInformation = parseInt(data.boardInformation);
        data.subjectInformation = parseInt(data.subjectInformation);
        console.log("add question set data", data);
        this.dal.saveQuestionPaperSet(data).subscribe(x => {
            if (x.status == "success") {
                console.log("set saved success!", x);
                this.questionSetToAdd = new _models_questionSet_model__WEBPACK_IMPORTED_MODULE_3__["questionSet"]();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'success',
                    title: "Success!",
                    text: "Question set added successfully!",
                    timer: 3000
                });
                this.getAllSetList();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'error',
                    title: "Error!",
                    text: x.message,
                    timer: 3000
                });
            }
        });
    }
};
QuestionSetComponent.ctorParameters = () => [
    { type: src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_2__["DalService"] }
];
QuestionSetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-set',
        template: __webpack_require__(/*! raw-loader!./question-set.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/question-set/question-set.component.html"),
        styles: [__webpack_require__(/*! ./question-set.component.css */ "./src/app/component/question-set/question-set.component.css")]
    })
], QuestionSetComponent);



/***/ }),

/***/ "./src/app/component/test-bank/test-bank.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/test-bank/test-bank.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90ZXN0LWJhbmsvdGVzdC1iYW5rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/test-bank/test-bank.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/test-bank/test-bank.component.ts ***!
  \************************************************************/
/*! exports provided: TestBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestBankComponent", function() { return TestBankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dal.service */ "./src/app/services/dal.service.ts");



let TestBankComponent = class TestBankComponent {
    constructor(dal) {
        this.dal = dal;
    }
    ngOnInit() {
        this.getAllTests();
    }
    getAllTests() {
        this.dal.getAllTests().subscribe(x => {
            this.allTests = x;
            console.log("all tests", x);
        });
    }
};
TestBankComponent.ctorParameters = () => [
    { type: src_app_services_dal_service__WEBPACK_IMPORTED_MODULE_2__["DalService"] }
];
TestBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-bank',
        template: __webpack_require__(/*! raw-loader!./test-bank.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/test-bank/test-bank.component.html"),
        styles: [__webpack_require__(/*! ./test-bank.component.css */ "./src/app/component/test-bank/test-bank.component.css")]
    })
], TestBankComponent);



/***/ }),

/***/ "./src/app/models/queSetWithQuestions.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/queSetWithQuestions.model.ts ***!
  \*****************************************************/
/*! exports provided: queSetWithQuestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queSetWithQuestions", function() { return queSetWithQuestions; });
class queSetWithQuestions {
}


/***/ }),

/***/ "./src/app/models/questionSet.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/questionSet.model.ts ***!
  \*********************************************/
/*! exports provided: questionSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionSet", function() { return questionSet; });
class questionSet {
}


/***/ }),

/***/ "./src/app/models/updateQuestion.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/updateQuestion.model.ts ***!
  \************************************************/
/*! exports provided: UpdatedQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatedQuestion", function() { return UpdatedQuestion; });
class UpdatedQuestion {
    constructor() {
        this.options = [];
    }
}


/***/ }),

/***/ "./src/app/services/custom-http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/custom-http.service.ts ***!
  \*************************************************/
/*! exports provided: CustomHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpService", function() { return CustomHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CustomHttpService = class CustomHttpService {
    constructor(http) {
        this.http = http;
        this.setheaders();
    }
    setheaders() {
        this.authHeaders =
            new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcmFzYWQgY29hY2hpbmcgZGVtbyBjaGFuZ2VkQDI1NzdAY2MiLCJleHAiOjE1ODcyMDkyNDF9.ojEVMiEJvAFx5dWEMYG6__xWuaQwbmFbyxI2sepzJ_vDc8KAB3vjYtGX3WVXNnmxaq9vJr6GGLfHg8eMvLQ6YQ',
            });
    }
    get(url) {
        return this.http.get(url, { headers: this.authHeaders });
    }
    put(url, payload) {
        return this.http.put(url, payload, { headers: this.authHeaders });
    }
    post(url, payload) {
        return this.http.post(url, payload, { headers: this.authHeaders });
    }
};
CustomHttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomHttpService);



/***/ }),

/***/ "./src/app/services/dal.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/dal.service.ts ***!
  \*****************************************/
/*! exports provided: DalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DalService", function() { return DalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _custom_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-http.service */ "./src/app/services/custom-http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let DalService = class DalService {
    constructor(customHttp) {
        this.customHttp = customHttp;
        this.setheaders();
    }
    setheaders() {
        this.authHeaders =
            new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('access_token'),
            });
    }
    getAllQuestions() {
        // return this.customHttp.get("https://jsonblob.com/api/jsonBlob/1cadca1c-7974-11ea-94ef-757fcd002724");
        return this.customHttp.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/test/questions`);
    }
    getAllTests() {
        return this.customHttp.get("https://jsonblob.com/api/jsonBlob/cc50e0a3-6521-11ea-b5e4-8b65720bbff7");
    }
    addQuestion(payload) {
        //return this.customHttp.put("https://jsonblob.com/api/jsonBlob/0ea53492-6523-11ea-b5e4-dbfd6dfa8e4d",payload)
        return this.customHttp.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/test/question`, payload);
    }
    updateQuestion(payload) {
        return this.customHttp.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/test/question`, payload);
    }
    getAllClasses() {
        return this.customHttp.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/master/class`);
    }
    saveQuestionPaperSet(payload) {
        return this.customHttp.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/test/set`, payload);
    }
    getAllSetList() {
        return this.customHttp.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/test/set`);
    }
    saveQuestionPaperSetWithQuestions(payload) {
        return this.customHttp.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/test/question/set`, payload);
    }
    getAllSetQuestionsWithSetId(setId) {
        return this.customHttp.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/test/question/set/${setId}`);
    }
    getAllBoards() {
        return this.customHttp.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/board`);
    }
    getallSubjects() {
        return this.customHttp.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url}/master/subject`);
    }
};
DalService.ctorParameters = () => [
    { type: _custom_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomHttpService"] }
];
DalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DalService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //url: "https://lpbackend.co.in:8443/learningpod-api",
    url: "https://lpbackend.in:8443/learningpod-api-test",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\coffeebeans\angularWorkspace\lp-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map