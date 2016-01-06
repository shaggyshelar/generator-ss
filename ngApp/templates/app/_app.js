(function () {
    'use strict';
    angular.module(APP_MODULE_NAME, [
        'ui.bootstrap',
        'ui.router'
    ]);

    angular.module(APP_MODULE_NAME).config(['$stateProvider', '$urlRouterProvider', Config]);

    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm',
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'vm',
            });

        $urlRouterProvider.otherwise('/');
    }

    angular.module(APP_MODULE_NAME).run(['$state', function ($state) {
        // Include $state to kick start the router.
    }]);
})();