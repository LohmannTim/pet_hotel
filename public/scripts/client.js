console.log('js');

var app = angular.module('PetHotelApp', []);

app.controller('PetHotelController', ['$http', function($http){
    console.log('PetHotel controller loaded')
    var self = this;



    self.addPet = function() {
        console.log('add button clicked');
        console.log('self.newPet', self.newPet)
        console.log('name', self.newPet.name);
        $http({
          method: 'POST',
          url: '/pet',
          data: self.newPet
        }).then(function(response){
          console.log(response);
          //self.getPets();
        })
      }



}]);