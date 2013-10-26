'use strict';

angular.module('summonerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.compile = function (){
        var opts = {};
        if($scope.customName){
            opts.CustomName = $scope.customName;
            opts.CustomNameVisible = 1
        }
        $scope.output = JSON.stringify(opts).replace(/\"([^(\")"]+)\":/g,"$1:");
    };
  });
