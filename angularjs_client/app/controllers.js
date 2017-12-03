(function () {
    'use strict';
    var myApp = angular.module('app');
    myApp.controller('FileUploadController', function ($scope, fileUploadService) {

        $scope.uploadFile = function () {
            var file = $scope.myFile;
            //var uploadUrl = "../server/service.php", //Url of webservice/api/server
            var uploadUrl = "http://localhost:3000/savedata", //Url of webservice/api/server
                promise = fileUploadService.uploadFileToUrl(file, uploadUrl);

            promise.then(function (response) {
                $scope.serverResponse = response;
            }, function () {
                $scope.serverResponse = 'An error has occurred';
            })
        };
    });

})();
