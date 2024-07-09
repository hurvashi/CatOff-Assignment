import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function Description() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.txt1}>Starts on 25/07/2024</Text>
        <Text style={styles.txt2}>Walking Challenge</Text>
        <View style={styles.tagsContainer}>
          <View style={styles.tags}>
            <Text style={styles.tagTxt}>MULTIPLAYER</Text>
          </View>
          <View style={styles.tags}>
            <Text style={styles.tagTxt}>FITNESS</Text>
          </View>
          <View style={styles.tags}>
            <Text style={styles.tagTxt}>WALKING</Text>
          </View>
        </View>
      </View>
      <Image source = {require('../../assets/walk.png')}
      style = {styles.img}
      />
      <View style={styles.txtContainer}>
        <Text style={styles.txt3}>ABOUT THE CHALLENGE</Text>
        <Text style={styles.txt4}>walking 10k steps within an hour</Text>
        <TouchableOpacity >
            <Text style={styles.link}>Read More</Text>
        </TouchableOpacity>
        <Text style={styles.txt3}>IMPORTANT NOTES</Text>
        <Text style={styles.txt4}>- Outdoor Challenge</Text>
        <Text style={styles.txt4}>- Tracking devices should be on</Text>
        <Text style={styles.txt4}>- Malpractices will not be engaged</Text>
      </View>
      <View style ={styles.container1}>
        <View style ={styles.rowItems}>
            <View style = {styles.imgTxtContainer}>
                <View style = {styles.imgContainer}>
                <Image source = {require('../../assets/person1.png')}
                    style = {styles.img1}
                    />
                     <Image source = {require('../../assets/person2.png')}
                    style = {styles.img1}
                    />
                </View>
                <Text style ={styles.joined}> 2 Players Joined</Text>
            </View>
            <Text style ={styles.joined1}> of 2 Total </Text>
        </View>
        <View style = {styles.completeBar}></View>
        
      </View>
      <View style = {styles.bottomContainer}>
      <View style = {styles.bottomTxtContainer}>
        <Text>Wager Amount</Text>
        <Text style = {styles.btnTxt1}>30 Credits</Text>
      </View>
            <TouchableOpacity  onPress={()=>navigation.navigate('Home')}
            style = {styles.btn}
            >
                <Text style = {styles.btnTxt}>JOIN NOW</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    flex: 1,
    gap: 40,
  },
  txtContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
  },
  txt1: {
    fontSize: 16,
    color: "grey",
  },
  txt2: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
  },
  tagsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
  },
  tags: {
    width: "auto",
    borderRadius: 18,
    backgroundColor:'#FFBF0020',
    padding: 8,
  },
  tagTxt: {
    fontWeight: "500",
    color: "#000",
  },
  img:{
    width:'100%',
    height:140,
    resizeMode:'contain',
    backgroundColor:'#FFBF0040',
  },
  
  txt3: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  txt4: {
    fontSize: 15,
    color: "#000",
    fontWeight: "600",
  },
  link: {
    fontSize: 16,
    color: "#9ACD32",
    fontWeight: "bold",
  },

  container1:{
    width:'90%',
    height:80,
    borderRadius:18,
    backgroundColor:'#FFBF0020',
    justifyContent: "center",
    alignItems: "center",
  },
  rowItems:{
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems: "center",
    width:'90%',
    height:40,
  },

  imgTxtContainer:{
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems: "center",
    gap:10,
  },
  imgContainer:{
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
    
  },
  img1:{
    borderRadius:20,
    height:30,
    width:30,
    borderColor:'#9ACD32',
    borderWidth:2,
  },
  joined:{
    fontSize: 14,
    color: "#000",
    fontWeight:'bold',
  },
  joined1:{
    fontSize: 14,
    color: "#000",
    
  },
  completeBar:{
        width:'90%',
        height:10,
        borderRadius:20,
        backgroundColor:'#FFBF00'
  },

  bottomContainer:{
    flexDirection:'row',
    width:'90%',
    height:60,
    justifyContent:'space-between',
    alignItems:'center',
  },
  btn:{
    width:120,
    height:50,
    justifyContent:'center',
    alignItems:'center',
     backgroundColor:'#FFBF00',
     borderRadius:30,
     

  },
  btnTxt:{
    fontSize:16,
    color:"#000",
    fontWeight:'bold'
  },
  btnTxt1:{
    fontSize:18,
    color:"#000",
    fontWeight:'bold'
  },

});
