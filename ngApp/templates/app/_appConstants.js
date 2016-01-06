(function () {
    'use strict';

    angular.module(APP_MODULE_NAME)
        .constant('PROJECT_INFO', {
            'TITLE': 'Status Report',
            'DESCRIPTION': 'Pilot project for Status Report'
        })
        .constant('RUNTIME_INFO', {
            'ENV': {
                'DEV': 'dev',
                'PROD': 'prod',
                'TESTING': 'testing',
                'CURRENT': 'dev'
            }
        })
        .constant('ROUTE_PATTERNS', {
            'DASHBOARD': { 'STATE': 'dashboard', 'URL': '/dashboard' },
            'USERDETAILS': { 'STATE': 'userDetails', 'URL': '/userDetails' }
        })
        .constant('EVENTS', {
            'HTTP': {
                'SUCCESS': 'EVENT_HTTP_SUCCESS',
                'ERROR': 'EVENT_HTTP_ERROR'
            },
            'AUTH': {
                'LOGIN': {
                    'SUCCESS': 'EVENT_AUTH_LOGIN_SUCCESS',
                    'ERROR': 'EVENT_AUTH_LOGIN_ERROR',
                    'REQUIRED': 'EVENT_AUTH_LOGIN_REQUIRED',
                    'ACCESS_DENIED': 'EVENT_AUTH_LOGIN_ACCESS_DENIED'
                },
                'LOGOUT': {
                    'SUCCESS': 'EVENT_AUTH_LOGOUT_SUCCESS',
                    'ERROR': 'EVENT_AUTH_LOGOUT_ERROR'
                }
            }
        });
})();