var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http)
{



$scope.choices = [{id: 'choice1'}];
  
  $scope.addNewChoice = function() {
    var newItemNo = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newItemNo});
  };
    
  $scope.removeChoice = function() {
    var lastItem = $scope.choices.length-1;
    $scope.choices.splice(lastItem);
  };


var refresh=function(){
$http.get('/contactlist').success(function(response){

	console.log("in m new controler now");
	$scope.contactlist=response;
	//$scope.contact="";
});
};

refresh();
$scope.addcontact=function(object)
{
console.log(object.contact);
$http.post('/contactlist',object.contact).success(function(response)

{

	console.log(response);
	refresh();
});

};



});