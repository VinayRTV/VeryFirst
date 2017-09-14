(function () {
    var app = angular.module("githubViewer");

    app.controller("UserController", ["$scope", "github", "$routeParams", function ($scope, github, $routeParams) {

        var onUserSearch = function (data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function (data) {
            $scope.repos = data;
        };

        var onError = function (error) {
            $scope.error = "There's an error";
        };

        $scope.userName = $routeParams.userName;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUsers($scope.userName).then(onUserSearch, onError);

    }]);
})();