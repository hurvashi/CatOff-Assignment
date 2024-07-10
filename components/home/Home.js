import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LogOutModal from "./LogOutModal";
import Card from "./Card";

const Home = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setModalVisible(false);
    });
    return unsubscribe;
  }, [navigation]);

  const handleLogout = () => {
    setModalVisible(false);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
        <View style = {styles.txtContainer}>
        <Text style = {styles.txt}>TRENDING</Text>
        </View>
       
      <View  style={styles.cardContainer}>
        <Card />
        <Card />
        
      </View>

      <LogOutModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onLogout={handleLogout}
      />
        <View style={styles.btnContainer}>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    gap:10,
  },
  txtContainer:{
    justifyContent: "center",
    alignItems: "flex-start",
    width:'90%',
    marginTop:20,
    
  },
  txt: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
    textAlign: "center",
  },
  cardContainer:{
    flex: 1,
    width:'100%',
    justifyContent: "flex-start",
    alignItems: "center",
    gap:10,
    
  },
  btnContainer:{
    width:'100%',
    height:80,
    justifyContent: "center",
    alignItems: "center",
    
  },
  logoutButton: {
    backgroundColor: "#FFBF00",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
