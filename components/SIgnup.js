import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
  } from "react-native";
  import { NavigationContainer, useNavigation } from "@react-navigation/native";
 
  
  function Signup() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
            <View><Text style = {styles.txt1}>SignUp</Text></View>
          <View style={styles.formInput}>
            <Text style={styles.txt}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Full Name"
              placeholderTextColor=" #7B7979"
            />
          </View>
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
          {/* <View style={styles.formInput}>
            <Text style={styles.txt}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              placeholderTextColor=" #7B7979"
            />
          </View>
  
          <View style={styles.formInput}>
            <Text style={styles.txt}>Gender</Text>
            <TextInput
              style={styles.input}
              placeholder="Gender"
              placeholderTextColor=" #7B7979"
            />
          </View> */}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
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
      marginBottom: 5,
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
      marginTop: 120,
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
  
  export default Signup;
  