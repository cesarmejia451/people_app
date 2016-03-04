(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope){
    $scope.peoples = [
          
          {
            name: "Cesar Mejia", 
            bio: "Awesome",
            bioVisible: false
          },{
            name: "Ivy", 
            bio: "Trouble",
            bioVisible: false
          },{
            name: "Derrick Rose",
            bio: "General Soreness",
            bioVisible: false
          }];

          $scope.toggleVisible = function(people) {
            people.bioVisible = !people.bioVisible;
          };

    $scope.addPeople = function(newName, newBio){
      var newPeople = {
        name: newName,
        bio: newBio
      };

      $scope.peoples.push(newPeople);

      $scope.newPeopleName = "";
      $scope.newPeopleBio = "";
      $scope.newPeopleBioVisible = "";

      };

      window.scope = $scope;

  });
  

}());