import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Fungsi Login
  const signIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan Password tidak boleh kosong!");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email.trim(), password);
    } catch (err: any) {
      Alert.alert("Login Gagal", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fungsi Register
  const signUp = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan Password tidak boleh kosong!");
      return;
    }
    const cleanEmail = email.trim();
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, cleanEmail, password);
      Alert.alert("Berhasil", "Akun " + response.user.email + " berhasil dibuat! Silakan klik Login.");
    } catch (error: any) {
      if (error.code === 'invalid-email') {
        Alert.alert("Format Salah", "Pastikan format email benar (contoh: nama@mail.com)");
      } else if (error.code === 'email-already-in-use') {
        Alert.alert("Sudah Ada", "Email ini sudah terdaftar.");
      } else {
        Alert.alert("Gagal", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Silahkan Login Boss!!</Text>
        <Text style={styles.subtitle}>Tugas Mobile - Praktikum Firebase</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email Address"
          placeholderTextColor="#9ca3af"
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#9ca3af"
          autoCapitalize="none"
          secureTextEntry
          style={styles.input}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#4f46e5" style={{ marginTop: 20 }} />
        ) : (
          <View style={styles.buttonGroup}>
            <Pressable style={styles.btnPrimary} onPress={signIn}>
              <Text style={styles.btnText}>Login</Text>
            </Pressable>

            <Pressable style={styles.btnSecondary} onPress={signUp}>
              <Text style={[styles.btnText, { color: "#4f46e5" }]}>Create Account</Text>
            </Pressable>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 20, 
    backgroundColor: "#f3f4f6" // Latar belakang abu-abu muda
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 30,
    // Shadow untuk iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    // Shadow untuk Android
    elevation: 8,
  },
  title: { 
    fontSize: 28, 
    fontWeight: "800", 
    marginBottom: 5, 
    textAlign: "center",
    color: "#111827"
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 55,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f9fafb",
    fontSize: 16,
    color: "#1f2937",
  },
  buttonGroup: {
    marginTop: 10,
  },
  btnPrimary: {
    width: "100%",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4f46e5", // Indigo color
    marginBottom: 12,
  },
  btnSecondary: {
    width: "100%",
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#4f46e5",
    backgroundColor: "transparent",
  },
  btnText: { 
    color: "white", 
    fontWeight: "700", 
    fontSize: 16 
  },
});