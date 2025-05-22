// Inisialisasi Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inisialisasi Firebase dan Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fungsi untuk menambahkan data ke Firestore
async function tambahData(temperature, humidity, latitude, longitude) {
  try {
    const docRef = await addDoc(collection(db, "sensorData"), {
      temperature: temperature,
      humidity: humidity,
      latitude: latitude,
      longitude: longitude,
      timestamp: new Date()
    });

    // Notifikasi sukses
    alert(`✅ Data berhasil ditambahkan!\nLokasi: [${latitude}, ${longitude}]`);
    console.log("Data berhasil ditambahkan dengan ID:", docRef.id);
  } catch (e) {
    // Notifikasi gagal
    alert(`❌ Gagal menambahkan data ke database!\nLokasi: [${latitude}, ${longitude}]`);
    console.error("Error menambahkan data:", e);
  }
}

// Contoh pemanggilan fungsi
tambahData(28.5, 60, -6.200000, 106.816666);

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
// const pushTokenString = (await Notifications.getExpoPushTokenAsync({ projectId })).data;