// src/ui/app.js - The main AngularJS module
define([
    'angular',
    './home/index'
], function (angular) {
    'use strict';
    return angular.module('labshare.__package-name__', [
        'labshare.__package-name__.home'
    ]);
});