var app = angular.module('carPartsApp', [
    'ui.router',
    'angular-flexslider'
])

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "/views/home.html"
        })
        .state('deposit', {
            url: "/deposit",
            templateUrl: "/views/deposit.html"
        })

})
