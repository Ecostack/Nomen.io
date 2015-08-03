'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', 'UsernameService', 'lodash', function ($scope, UsernameService, lodash) {
        $scope.generateUsernames = function () {
            // var lcNames = '';
            var lcGenerated = UsernameService.generateUsernames(20).join('\n');
            $scope.usernames = lcGenerated;
        }

    }]);