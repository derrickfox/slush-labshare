// src/ui/demoModule/module.js - Main file where module defined, routes added, menu items added
define([
    'angular',
    'angular-ui-router'
], function(angular) {
    return angular.module('labshare.__package-name__.home',['ui.router']).config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('labshare-__package-name__-home', {
                data: {
                    rolesRequired: ["user", "staff", "admin"]
                },
                url: '/__package-name__/home',
                templateUrl: 'packages/__package-name__/ui/home/index.html',
                controller: 'labshare.__package-name__.HomeCtrl',
                title: 'Home - __package-name__'
            });
        }])
});