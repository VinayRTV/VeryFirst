(function () {
    var app = angular.module("githubViewer");

    app.controller("MainController", ["$scope", "$location", "$interval", function ($scope, $location, $interval) {
        $scope.title = "GitHub Viewer";
        $scope.countdown = "";
        $scope.userName = "angular";
        var countdownInterval = null;

        var decrementCountdown = function () {
            $scope.countdown--;
            if ($scope.countdown < 1) {
                $scope.search($scope.userName);
            }
        };

        var startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function (userName) {
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + userName);
        };

        //startCountdown();

    }]);
})();