// src/ui/demoModule/demo-ctrl.js - example controller that extends angular module
define(['./module'], function(module) {
    return module.controller('labshare.__package-name__.HomeCtrl', ['$scope', function($scope) {
        $scope.message = 'LabShare.__package-name__.Home';
    }]);
});