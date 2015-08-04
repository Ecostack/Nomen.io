'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', 'UsernameService', function ($scope, UsernameService) {
        $scope.generateUsernames = function () {
            $scope.usernames = UsernameService.generateUsernames(20);

            var lcUsernamesForTable = [];
            for (var i = 0; i < $scope.usernames.length; i += 3) {
                var lcTemp = {};
                lcTemp.first = $scope.usernames[i];
                lcTemp.second = i + 1 < $scope.usernames.length ? $scope.usernames[i + 1] : '';
                lcTemp.third = i + 2 < $scope.usernames.length ? $scope.usernames[i + 2] : '';
                lcUsernamesForTable.push(lcTemp);
            }
            $scope.usernamesForTable = lcUsernamesForTable;
        }

        $scope.generateUsernames();


    }]);