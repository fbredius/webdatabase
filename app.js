var main = function () {
	"use strict";

alert('hey');

var addItemFromInputBox = function () {
	var $new_comment;

	if ($(".item-input input").val() !== "") {
	$new_comment = $("<p>").text($(".item-input input").val());
	$new_comment.hide();
	$(".items").append($new_comment);
	$new_comment.fadeIn();
	$(".item-input input").val("");

	}
};	

// For pressing the + button of the search bar
$(".item-input button").on("click", function (event) {
	addItemFromInputBox();
});	

// For pressing enter in the search bar
$(".item-input input").on("keypress", function (event) {
	if (event.keyCode === 13) {
		addItemFromInputBox();
	}
});

};