// Importa lo necesario de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 🔥 Firestore para guardar datos

// Configuración de tu proyecto en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBftNoZ1v76hXsYYHuPuGzQEIw326UjgZY",
  authDomain: "serenaviafit-8ffa0.firebaseapp.com",
  projectId: "serenaviafit-8ffa0",
  storageBucket: "serenaviafit-8ffa0.firebasestorage.app",
  messagingSenderId: "1004683072146",
  appId: "1:1004683072146:web:a97a553bb842b867b78c4b"
};

// Inicializa la app
const app = initializeApp(firebaseConfig);

// Exporta Firestore para usarlo en otras partes
export const db = getFirestore(app);

