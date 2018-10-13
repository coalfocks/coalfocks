//const firebase = require("firebase");
//require("firebase/firestore");
// Required for side-effects
            firebase.initializeApp({
              apiKey: 'AIzaSyCj9mQJ071RZib6c0w',
 //             authDomain: '### FIREBASE AUTH DOMAIN ###',
              projectId: 'picshaire'
            });

            // Initialize Cloud Firestore through Firebase
            var db = firebase.firestore();

            // Disable deprecated features
            db.settings({
              timestampsInSnapshots: true
            });
            
const ids = ['0001','0002','0003','0004'];
for (var id in ids) {
    id = ids[id];
    var ref = db.collection("media").doc(id).get().then((doc) => {
        const photo_uris = doc.data().photos;
        const video_uris = doc.data().videos;

        let all_media = {...photo_uris, ...video_uris};
        console.log(all_media);
        for (var m in all_media) {
            var url = all_media[m];
            var img = document.createElement('img');
            img.src = url;
            img.width = 600;
            img.height = 800;
            var el = 'team' + doc.id.slice(-1);
            document.getElementById(el).appendChild(img);
        }
    });
}
