console.log('js');

var app = angular.module('PetHotelApp', []);

app.controller('PetHotelController', ['$http', function($http) {
    console.log('PetHotel controller loaded')
    var self = this;

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