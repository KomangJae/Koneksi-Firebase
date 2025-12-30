import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";

export default function Details({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <View style={styles.headerCircle}>
          <Text style={styles.initials}>NW</Text>
        </View>

        <Text style={styles.title}>Detail Profil Mahasiswa</Text>
        
        <View style={styles.infoBox}>
          <Text style={styles.label}>Nama Lengkap:</Text>
          <Text style={styles.value}>I Nyoman Wira Kesuma</Text>
          
          <Text style={styles.label}>Program Studi:</Text>
          <Text style={styles.value}>Teknik Informatika</Text>
          
          <Text style={styles.label}>Angkatan:</Text>
          <Text style={styles.value}>2023</Text>

          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>Mahasiswa Aktif</Text>
          
          <Text style={styles.description}>
            Sedang menempuh mata kuliah Praktikum Pemrograman Mobile nihh, walaupun agak stress tapi tak pe lahhh wkwkwk.
          </Text>
        </View>
        
        <Pressable 
          style={styles.backBtn} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnText}>Kembali ke Beranda</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  headerCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#4f46e5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  initials: { color: "white", fontSize: 30, fontWeight: "bold" },
  title: { 
    fontSize: 22, 
    fontWeight: "800", 
    color: "#111827", 
    marginBottom: 20 
  },
  infoBox: {
    width: "100%",
    marginBottom: 25,
  },
  label: { fontSize: 12, color: "#9ca3af", fontWeight: "700", textTransform: "uppercase" },
  value: { fontSize: 16, color: "#1f2937", fontWeight: "600", marginBottom: 15 },
  description: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 22,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10,
    backgroundColor: "#f9fafb",
    padding: 10,
    borderRadius: 10
  },
  backBtn: {
    backgroundColor: "#4f46e5",
    width: "100%",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: { color: "white", fontWeight: "700", fontSize: 15 },
});