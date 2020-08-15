(function () {
'use strict'

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.foodNames = "";
    $scope.reply = "";


    $scope.displayMessage = function () {
      var numberOfFoodNames = calculateNumberOfDish ($scope.foodNames);
      //console.log("the food name is :" + $scope.foodNames);
      console.log("the number of foodNames are:"+numberOfFoodNames);
      if (numberOfFoodNames == 0) {
        $scope.reply = "Please enter data first!";
        
      } else if (numberOfFoodNames > 3) {
        $scope.reply = "Too much!";
      } else {
        $scope.reply = "Enjoy!";
      }
    }

    function calculateNumberOfDish (string){
      var splitFoodNames = string.split(',');
      if (string == "") {
        var numberOfDish = "";
      } else {
        var numberOfDish = splitFoodNames.length;
      }
      console.log(splitFoodNames.length);
      return numberOfDish;

    }

    // const splitFoodNames = $scope.FoodNames.split(,);
    // numberOfFoodNames = splitFoodNames.length();
    // if (numberOfFoodNames >3) {
    //   return "Too much!";
    //   else {
    //     return "Enjoy!"
    //   }
    //
    // }
  }


})();
