// dashboard.js
import { db, auth } from './firebase.js';
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.24.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";

// ✅ Protect dashboard: only allow logged-in users
onAuthStateChanged(auth, user => {
  if (!user) {
    alert("Please login first.");
    window.location.href = "login.html";
  }
});

// Upload event
document.getElementById("upload-event")?.addEventListener("click", async () => {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  try {
    await addDoc(collection(db, "events"), {
      title,
      description: desc,
      createdAt: new Date()
    });
    alert("Event uploaded!");
  } catch (err) {
    alert(err.message);
  }
});

// Fetch events
const eventList = document.getElementById("event-list");
if (eventList) {
  const snapshot = await getDocs(collection(db, "events"));
  snapshot.forEach(doc => {
    const e = doc.data();
    eventList.innerHTML += `<li><strong>${e.title}</strong>: ${e.description}</li>`;
  });
}