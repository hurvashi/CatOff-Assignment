import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isFieldEmpty = (field) => {
  return field.trim() === "";
};

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      if (!isValidEmail(email)) {
        throw new Error("Please enter a valid email address.");
      }

      if (isFieldEmpty(fullName) || isFieldEmpty(password)) {
        throw new Error("Please fill out all fields.");
      }

      await createUserWithEmailAndPassword(auth, email, password);

      Alert.alert("Success", "You have successfully registered!");
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.txt1}>SignUp</Text>
        </View>
        <View style={styles.formInput}>
          <Text style={styles.txt}>Full Name*</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Full Name"
            placeholderTextColor="#7B7979"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        <View style={styles.formInput}>
          <Text style={styles.txt}>Email Address*</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
            keyboardType="email-address"
            placeholderTextColor="#7B7979"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.formInput}>
          <Text style={styles.txt}>Password*</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#7B7979"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  subContainer: {
    width: "100%",
    height: "auto",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    top: "15%",
  },
  txt1: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  formInput: {
    height: "auto",
    width: "80%",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    color: "black",
    borderRadius: 5,
    marginBottom: 30,
    borderBottomWidth: 2,
    marginRight: 15,
    fontSize: 18,
  },
  txt: {
    color: "#7B7979",
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    backgroundColor: "#9ACD32",
    height: 64,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
