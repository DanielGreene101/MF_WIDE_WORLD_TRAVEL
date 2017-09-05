"use strict";

var bookapp = angular.module('bookapp', []);

app.controller("bookCtrl", function($scope, $http){
	$http.get('../data/guides.js')
	.then((data) =>{
		$scope.guides = data;
	});
});