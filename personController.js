var myapp = angular.module("myApp", []);
myapp.controller('personCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'},
    ];
});