(function () {
    var app = angular.module("githubViewer");

    app.controller("RepoController", ["$scope", "github", "$routeParams", function ($scope, github, $routeParams) {
        $scope.title = "Assignees";
        var onRepo = function (data) {
            $scope.repo = data;
        }

        var onError = function (reason) {
            $scope.error = reason;
        }

        github.getReposDetails($routeParams.userName, $routeParams.repoName).then(onRepo, onError);

    }]);
})();