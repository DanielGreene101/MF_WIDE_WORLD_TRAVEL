console.log("Connected");

var app = angular.module('bookapp', []);

// app.config(function($routeProvider){
// 	$routeProvider
// 	.when('/',{
// 		templateUrl: 'index.html',
// 		controller: "bookCtrl"
// 	});
// });

// app.factory("bookFactory", function($scope, $q, $http){
// 	console.log("Step 1 done");
// 	let booksBuild = () => {
// 		let books = [];
// 		return $q ((resolve, reject) =>{
// 			$http.get('../../data/guides.js')
// 			.then((data) =>{
// 				console.log("data", data);
// 				let dataCollection = data.data;
// 				Object.keys(dataCollection).forEach((key) =>{
// 					books.push(dataCollection[key]);
// 				});
// 				resolve(books);
// 				console.log("books", books);

// 				$scope.guides = data;
// 			})
// 			.catch((error)=>{
// 				reject(error);
// 				console.log("NO BOOKS");
// 			});
// 		});
// 	}
// });