var app = angular.module('app', ['ngRoute', 'angular-loading-bar']);
app.config(['$routeProvider', function config($routeProvider) {
    $routeProvider
        .when('/bank-list', {
            templateUrl:'pages/bank-list.page.html',
        })
        .otherwise('/bank-list')
}])
app.controller('appCtrl', ['$scope', function appCtrl($scope) {
}]);
