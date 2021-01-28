import firebase from 'firebase/app';
import 'firebase/firestore'; 

const config = {
    apiKey: "AIzaSyAUHXRGhEq3uuisZ8XGaqqtprGB-ZPvaWQ",
    authDomain: "crm-react-cb47d.firebaseapp.com",
    projectId: "crm-react-cb47d",
    storageBucket: "crm-react-cb47d.appspot.com",
    messagingSenderId: "228934931151",
    appId: "1:228934931151:web:bcf5518b9cd22431d99dba",
    measurementId: "G-3GSQ6391QV"
};
firebase.initializeApp(config);

export default firebase;
