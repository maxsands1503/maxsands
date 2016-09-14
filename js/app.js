var app = angular.module('portfolio', ['ui.router', 'ngAnimate']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state("about", {
    url:"/",
    templateUrl: "../templates/about.html",
    controller: "AboutController"
  })
  .state("gallery", {
    url:"/gallery",
    templateUrl: "../templates/gallery.html",
    controller: "GalleryController"
  })
})
