console.log('js');

var app = angular.module('PetHotelApp', []);

app.controller('PetHotelController', ['$http', function($http){
    console.log('Pet controller has been loaded');
    var self = this;
    self.petNames= [];
    self.getPets = function() {
        $http({
            method: 'GET',
            url: '/pet'
    }).then(function(response){
            console.log(response);
            console.log(response.data);
            self.petNames = response.data;
            
    }); //end of http
    }; // end of getPets

self.getPets();




}]);

