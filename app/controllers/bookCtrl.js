"use strict";

var app = angular.module('bookapp', []);

// app.config(function($routeProvider){
// 	$routeProvider
// 	.when('/',{
// 		templateUrl: 'index.html',
// 		controller: "bookCtrl"
// 	});
// });
app.factory("bookFactory", function($q, $http){
	console.log("Step 1 done");
	let getBooks = () => {
		return $q ((resolve, reject) =>{
			$http.get('data/guides.json')
			.then((itemObject) =>{
				let itemCollection = itemObject.data;
				console.log(itemObject.data);;
				resolve(itemCollection.guides)
			})
			.catch((error)=>{
				reject(error);
				console.log("NO BOOKS");
			});
		});
	};
	return {getBooks};
});

app.controller("bookCtrl", function($scope, bookFactory){
	console.log("got into controller");
	bookFactory.getBooks()
	.then(function(itemCollection){
		let bookArray = [];
		let books = Object.keys(itemCollection);
		books.forEach((book) =>{
			bookArray.push(itemCollection[book]);
		});
		$scope.books = bookArray;
		console.log("books", bookArray);
	});
});
