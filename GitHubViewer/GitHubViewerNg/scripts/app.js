(function () {
    var app = angular.module("githubViewer", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/user/:userName", {
                templateUrl: "userDetails.html",
                controller: "UserController"
            })
            .when("/repos/:userName/:repoName", {
                templateUrl: "repoDetails.html",
                controller: "RepoController"
            })
            .otherwise({ redirectTo: "/main" });



    });

})();