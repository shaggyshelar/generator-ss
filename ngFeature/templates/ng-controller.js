(function() {
    'use strict';

    angular
        .module(APP_MODULE_NAME)
        .controller('<%= ctrlName %>Controller', <%= ctrlName %>Controller);

    <%= ctrlName %>Controller.$inject = [];
    function <%= ctrlName %>Controller() {
        var vm = this;

        activate();

        ////////////////

        function activate() { }
    }
})();