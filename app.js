var app = angular.module('app', []);

app.controller('ctrl', function($scope, $http){
	$scope.first = 1;
	$scope.second = 1;
	
	$scope.updateValue = function(){
		$scope.calculation = $scope.first + ' + ' + $scope.second +
			' = ' + (+$scope.first + +$scope.second);
	};
	
	$scope.getNameData = function(){
		$http.get("https://data.cityofnewyork.us/api/views/kku6-nxdu/rows.json?accessType=DOWNLOAD")
			.then(function(response){
				$scope.data = response.data;
		});
	};
	
	$scope.clearData = function(){
		$scope.data = [];
	};
});
