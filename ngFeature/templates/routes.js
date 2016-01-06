angular.module(APP_MODULE_NAME).config(function Config($stateProvider, ROUTE_PATTERNS) {
    $stateProvider
        .state(ROUTE_PATTERNS.<%= featureNameCapital %>.STATE, {
            url: ROUTE_PATTERNS.<%= featureNameCapital %>.URL,
            controller: '<%= featureNameCamelCase %>Controller',
            controllerAs: 'vm',
            templateUrl: 'app/features/<%= featureNameCamelCase %>/<%= featureNameCamelCase %>.html'
        });
});
