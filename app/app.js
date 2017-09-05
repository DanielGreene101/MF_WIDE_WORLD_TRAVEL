console.log("Connected");

var app = angular.module('bookapp', []);

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