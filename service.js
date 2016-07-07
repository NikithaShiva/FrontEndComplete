/**
 * Created by ttandale on 6/30/2016.
 */
app1.service("filmService",function ($http) {
    return function (callback) {
        $http({
            method: "GET",
            url: "film.json"
        }).then(function (response) {
            callback(response.data);
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        });
    }



});
