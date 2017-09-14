(function () {
    var module = angular.module("githubViewer");
    module.factory("github", function ($http) {
        return {
            getUsers: function (userName) {
                return $http.get("https://api.github.com/users/" + userName)
                            .then(function (response) {
                                return response.data;
                            });
            },
            getRepos: function (user) {
                return $http.get(user.repos_url)
                            .then(function (response) {
                                return response.data;
                            });
            },
            getReposDetails: function (userName, repoName) {
                var repo;
                var repoUrl = "https://api.github.com/repos/" + userName + "/" + repoName;

                return $http.get(repoUrl)
                            .then(function (response) {
                                repo = response.data;
                                return $http.get(repoUrl + "/assignees");
                            })
                            .then(function (response) {
                                repo.assignees = response.data;
                                return repo;
                            })
            }
        }
    });
})();