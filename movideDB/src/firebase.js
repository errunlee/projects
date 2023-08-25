
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// auth
import { getAuth, updateProfile} from "firebase/auth";
// db
import { getFirestore } from "firebase/firestore";
// storage
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDht1NcXp81_xUVWP5RPM-kOpmbSsw4sbY",
  authDomain: "leecinemas-7774a.firebaseapp.com",
  projectId: "leecinemas-7774a",
  storageBucket: "leecinemas-7774a.appspot.com",
  messagingSenderId: "353264019972",
  appId: "1:353264019972:web:80e67805ba725e1c3f6351",
  measurementId: "G-BK5HXGE4W0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig, {
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
});

const analytics = getAnalytics(app);

//Auth
const auth = getAuth(app);
// db
const db = getFirestore(app);

// storage cloud
const storage = getStorage(app);


export {auth,db,storage};


// custom hook

const upload=async (file,currentUser,setLoading,setImageUrl)=>{
  const fileRef=ref(storage,currentUser.uid+'.png')
  setLoading(true)
  const snapshot=await uploadBytes(fileRef,file)
  const photoURL=await getDownloadURL(fileRef)
  updateProfile(currentUser,{photoURL})
  setImageUrl(photoURL)
  console.log(currentUser.photoURL)
  setLoading(false)
  alert('upload success')
}
export {upload}