import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.welcomeText}>Selamat Datang,</Text>
        <Text style={styles.nameText}>I Nyoman Wira Kesuma</Text>
        <View style={styles.divider} />
        
        <Text style={styles.infoText}>
          Kamu berhasil masuk sejauh ini wirrrr!! Silahkan buka detailnya dong!!!
        </Text>

        <View style={styles.buttonContainer}>
          <Pressable 
            style={styles.detailBtn} 
            onPress={() => navigation.navigate('detail')}
          >
            <Text style={styles.btnTextWhite}>Buka Detail Profil</Text>
          </Pressable>

          <Pressable 
            style={styles.logoutBtn} 
            onPress={() => FIREBASE_AUTH.signOut()}
          >
            <Text style={styles.btnTextRed}>Keluar (Logout)</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f3f4f6", 
    justifyContent: "center", 
    padding: 20 
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  welcomeText: { 
    fontSize: 16, 
    color: "#6b7280", 
    fontWeight: "600" 
  },
  nameText: { 
    fontSize: 22, 
    fontWeight: "800", 
    color: "#111827",
    marginTop: 5,
    textAlign: "center"
  },
  divider: {
    height: 3,
    width: 50,
    backgroundColor: "#4f46e5",
    marginVertical: 20,
    borderRadius: 10
  },
  infoText: {
    fontSize: 14,
    color: "#4b5563",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 30
  },
  buttonContainer: {
    width: "100%",
  },
  detailBtn: {
    backgroundColor: "#4f46e5",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  logoutBtn: {
    backgroundColor: "transparent",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#ef4444",
  },
  btnTextWhite: { color: "white", fontWeight: "700", fontSize: 16 },
  btnTextRed: { color: "#ef4444", fontWeight: "700", fontSize: 16 },
});

export default Home;