import * as firebase from 'firebase';

function FirebaseConnect(){
    var firebaseConfig = {
        apiKey: "AIzaSyC7bTzUjTWOwSRmyWmR5YDuzNXoH6MhiTQ",
        authDomain: "my-todos-services.firebaseapp.com",
        databaseURL: "https://my-todos-services.firebaseio.com",
        projectId: "my-todos-services",
        storageBucket: "my-todos-services.appspot.com",
        messagingSenderId: "816032108141",
        appId: "1:816032108141:web:21ae69a505123f6dad3964",
        measurementId: "G-CH8HJV7Z7D"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      console.log("Success Firebase Connection!")
      console.log(firebase)
}

export default FirebaseConnect;



  