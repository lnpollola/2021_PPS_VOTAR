export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCbnNdos4TdDLTOAJ0a-ejK7paS4niHotc",
  authDomain: "salajuegos-fda51.firebaseapp.com",
  databaseURL: "https://salajuegos-fda51.firebaseio.com",
  projectId: "salajuegos-fda51",
  storageBucket: "salajuegos-fda51.appspot.com",
  messagingSenderId: "791373762821",
  appId: "1:791373762821:web:32804ed253810950"
};

export const snapshotToArray = snapshot => {
  let returnArray = [];
  snapshot.forEach(element => {
    let item = element.val();
    item.key = element.key;
    returnArray.push(item);
  });

  return returnArray;
}