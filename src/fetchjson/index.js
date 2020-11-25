"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    console.log("the todo with ID: " + id + "\n     has a title of: " + title + "\n     is it finished yet:" + finished + "\n    ");
});
