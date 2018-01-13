var myApp=angular.module('myApp',[
    'ngRoute',
    'myControllers'
]);//include the dependencies ngroute and mycontrollers
//routeProvider template  will manage the routes
//when the url of the webside has '/' at end then do the below
myApp.config(['$routeProvider',function($routeProvider){
             $routeProvider
             .when('/',{
             templateUrl:'js/partials/search.html',
             controller:'SearchController'
             })
             .when('/details/:itemId',{
             templateUrl:'js/partials/details.html',
             controller:'DetailsController'
             });//include the itemId to link for that specific item
    
    
    
             }]);//this configuaration need to be specified in an array.
//specify a controller for above module

