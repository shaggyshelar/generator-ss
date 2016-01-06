(function () {
    'use strict';

    angular.module(APP_MODULE_NAME)
        .config(Config);

    Config.$inject = ['$translateProvider'];
    function Config($translateProvider) {
        $translateProvider.translations('en', {
            'DAILYSTATUS_TODAYTASK': 'This week Task',
            'EC_1000': 'This email address does not exit in database',
            'EC_1001': 'Something went wrong on server'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);
    }

})();