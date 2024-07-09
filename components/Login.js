import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
  } from "react-native";
  import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
            <View><Text style = {styles.txt1}>Login</Text></View>
          
          <View style={styles.formInput}>
            <Text style={styles.txt}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email Address"
              keyboardType="email-address"
              placeholderTextColor=" #7B7979"
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.txt}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor=" #7B7979"
            />
          </View>
        
        </View>
       
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
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
    txt1:{
        fontSize:30,
        fontWeight:"bold",
        marginBottom:40,
    },
    formInput: {
      height: "auto",
      width: "80%",
    },
    input: {
      height: 50,
      width: "100%",
      borderColor: "#ccc",
      color: "white",
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
    //   marginTop: 120,
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
  
