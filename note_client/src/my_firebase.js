import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCxCQ8gcKmRE4iikFKTRLc09k1Abb_5lfk',
  authDomain: 'takenotesapp-4338f.firebaseapp.com',
  databaseURL: 'https://takenotesapp-4338f.firebaseio.com',
  projectId: 'takenotesapp-4338f',
  storageBucket: 'takenotesapp-4338f.appspot.com',
  messagingSenderId: '842007317761'
};

const myFireBase = firebase.initializeApp(config);

export default myFireBase;
