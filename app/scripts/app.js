( function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name reggieClientApp
   * @description
   * # reggieClientApp
   *
   * Main module of the application.
   */
  angular
    .module( 'reggieClientApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ] )
    .config( function ( $routeProvider ) {
      $routeProvider
        .when( '/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        } )
        .when( '/signin', {
          templateUrl: 'views/signin.html',
          controller: 'SigninCtrl',
          controllerAs: 'signin'
        })
        .when( '/events', {
          templateUrl: 'views/events.html',
          controller: 'EventsCtrl',
          controllerAs: 'events'
        })
        .otherwise( {
          redirectTo: '/'
        } );
    } );

} )();
