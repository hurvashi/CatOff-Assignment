import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const isFieldEmpty = (field) => {
    return field.trim() === '';
  };

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      
      if (!isValidEmail(email)) {
        throw new Error("Please enter a valid email address.");
      }

      if (isFieldEmpty(email) || isFieldEmpty(password)) {
        throw new Error("Please fill out all fields.");
      }
      
      await signInWithEmailAndPassword(auth, email, password);

      
      Alert.alert("Success", "You have successfully logged in!");
      navigation.navigate("Home");
    } catch (error) {
      
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View><Text style={styles.txt1}>Login</Text></View>
        <View style={styles.formInput}>
          <Text style={styles.txt}>Email Address</Text>
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
          <Text style={styles.txt}>Password</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.text1}>Don't have an account? </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.text2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  bottomContainer: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "condensed",
    color: "black",
  },
  text2: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#9ACD32",
  },
});
