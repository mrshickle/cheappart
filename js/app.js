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
        .state('contact', {
            url: "/contact",
            templateUrl: "/views/contact.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "/views/about.html"
        })
        .state('parts', {
            url: "/parts",
            templateUrl: "/views/parts.html"
        })
        .state('coming-soon', {
            url: "/coming-soon",
            templateUrl: "/views/coming-soon.html"
        })


})
