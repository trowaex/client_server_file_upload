(function () {
    'use strict';
    var myApp = angular.module('app');
    myApp.service('fileUploadService', function ($http, $q) {

        this.uploadFileToUrl = function (file, uploadUrl) {
            //FormData, object of key/value pair for form fields and values
            var fileFormData = new FormData();
            fileFormData.append('file', file);

            var deffered = $q.defer();
            $http.post(uploadUrl, fileFormData, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}

            }).then(function successCallback(response) {
                console.log("[RSP]"+response);
                // this callback will be called asynchronously
                // when the response is available
              }, function errorCallback(response) {
                console.log("[ERR][RSP]"+response);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
  /*.success(function (response) {
                deffered.resolve(response);

            }).error(function (response) {
                deffered.reject(response);
            });*/

            return deffered.promise;
        }
    });
})();
