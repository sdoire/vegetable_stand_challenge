var myApp = angular.module("vegetableApp", []);

myApp.controller("MainController", ['$scope', '$http', function($scope, $http){
    $scope.vegetables = [];
    $scope.totalCost = 0;
    $scope.cart = {
        numAsparagus : 0,
        numBroccoli : 0,
        numCarrot : 0,
        numKale : 0,
        numLettuce : 0,
        numPepper : 0
    };
    $scope.cartOpen = false;

    $scope.getVegetables = function(){
        return $http.get('/data').
            success(function(data){
                $scope.vegetables = data;
                return $scope.vegetables;
            });
    };
    $scope.getVegetables();


    $scope.buyFruit = function(){
        switch (this.vegetable.name){
            case "Asparagus":
                $scope.cart.numAsparagus++;
                $scope.totalCost += $scope.vegetables.asparagus.price;
                break;
            case "Broccoli":
                $scope.cart.numBroccoli++;
                $scope.totalCost += $scope.vegetables.broccoli.price;
                break;
            case "Carrot":
                $scope.cart.numCarrot++;
                $scope.totalCost += $scope.vegetables.carrot.price;
                break;
            case "Kale":
                $scope.cart.numKale++;
                $scope.totalCost += $scope.vegetables.kale.price;
                break;
            case "Lettuce":
                $scope.cart.numLettuce++;
                $scope.totalCost += $scope.vegetables.lettuce.price;
                break;
            case "Pepper":
                $scope.cart.numPepper++;
                $scope.totalCost += $scope.vegetables.pepper.price;
                break;
            default :
                return;
        }
    };

    $scope.getTotalCost = function(){
        $scope.totalCost = (($scope.cart.numAsparagus * $scope.vegetables.asparagus.price) + ($scope.cart.numBroccoli * $scope.vegetables.broccoli.price) + ($scope.cart.numCarrot * $scope.vegetables.carrot.price) + ($scope.cart.numKale * $scope.vegetables.kale.price) + ($scope.cart.numLettuce * $scope.vegetables.lettuce.price) + ($scope.cart.numPepper * $scope.vegetables.pepper.price));
    };

    $scope.openCart = function(){
        $scope.cartOpen = true;
    };

    $scope.closeCart = function(){
        $scope.cartOpen = false;
    };

}]);