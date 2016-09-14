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
  .state("resume", {
    url:"/resume",
    templateUrl: "../templates/resume.html",
    controller: "ResumeController"
  })
})
