console.log('js');

var app = angular.module('PetHotelApp', []);

app.controller('PetHotelController', ['$http', function($http) {
    console.log('PetHotel controller loaded')
    var self = this;
    self.petNames = [];
    self.getPets = function() {
        $http({
            method: 'GET',
            url: '/pet'
        }).then(function(response) {
            console.log(response);
            console.log(response.data);
            self.petNames = response.data;

        }); //end of http
    }; // end of getPets

    self.getPets();





    self.newPet = {};

    self.addPet = function() {
        console.log('add button clicked');
        console.log('self.newPet', self.newPet)
        console.log('name', self.newPet.name);
        $http({
            method: 'POST',
            url: '/pet',
            data: self.newPet
        }).then(function(response) {
            console.log(response);
            self.newPet = {};
            //self.getPets();

        })
    }


    self.newOwner = {};
    // self.newOwner = function(firstname, lastname) {

    // };

    self.postNewOwner = function() {
        console.log('post has been hit');

        $http({
            method: 'POST',
            url: '/owner',
            data: self.newOwner
        }).then(function(response) {
            console.log(response.data);
            self.newOwner = {};
        });
    }


}]);