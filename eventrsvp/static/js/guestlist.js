var app = angular.module("guest-list", []);
app.controller("guest_list_ctrl", function($scope) {
    var config = { 
        apiKey: 'AIzaSyCmC0oZ_kfWWcf5SrNHXZdFJUkPsh15EJM',
        authDomain: "wedding-rsvp-40b8d.firebaseapp.com",
        databaseURL: 'https://wedding-rsvp-40b8d.firebaseio.com',
        projectId: "wedding-rsvp-40b8d",
        storageBucket: "wedding-rsvp-40b8d.appspot.com",
        messagingSenderId: "545226112552"
    };
    
    var app = firebase.initializeApp(config);
    var db = firebase.firestore(app);
    
    $scope.sortAll = (list) => {
        list.sort(function(a, b){
            var x = a.last.toLowerCase();
            var y = b.last.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
    }
    
    
    $scope.guests = {};
    $scope.guests.attending = [];
    $scope.guests.not_attending = [];
    var doc = db.collection('kimandcole').where('rsvp', '==',true)
    doc.get().then((querySnapshot) => {
        querySnapshot.forEach(function(guest) {
            $scope.$apply(function() {
                if (guest.data().attending) {
                    $scope.guests.attending.push(guest.data());
                    $scope.sortAll($scope.guests.attending);
                    
                } else {
                    $scope.guests.not_attending.push(guest.data());
                    $scope.sortAll($scope.guests.not_attending);
                }
            });
        });
    });
    
    $scope.guests.norsvp = [];
    var doc2 = db.collection('kimandcole').where('rsvp', '==',false)
    doc2.get().then((querySnapshot) => {
        querySnapshot.forEach(function(guest) {
            $scope.$apply(function() {
                $scope.guests.norsvp.push(guest.data());
                $scope.sortAll($scope.guests.norsvp);
            });
        });
    });


    
});
