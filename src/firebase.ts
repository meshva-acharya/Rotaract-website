import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAl7koZJtN-f8DLLVHBlOlX4rabFlkZXCA",
  authDomain: "rotaract-club-website.firebaseapp.com",
  databaseURL: "https://rotaract-club-website-default-rtdb.firebaseio.com", // ✅ This is critical
  projectId: "rotaract-club-website",
  storageBucket: "rotaract-club-website.appspot.com",
  messagingSenderId: "91128724259",
  appId: "1:91128724259:web:8d33d9dad789935050aa96"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };
