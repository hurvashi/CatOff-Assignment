import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
  } from "react-native";
  import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function Card(){
    const navigation = useNavigation();
    return(
    <TouchableOpacity onPress={()=>navigation.navigate('Description')}
    style = {styles.card}>
    <View style = {styles.rowItems}>
    <View style = {styles.text}>
        <Text style = {styles.status}>UPCOMING</Text>
        <Text style = {styles.name}>Walking Challenge</Text>
        <Text style = {styles.description}>walikng 10 steps for a minute</Text>
    </View>
    <View style ={styles.imgContainer}>
        <Image source={require('../../assets/game.png')}
        style = {styles.img}/>
        <Text style = {styles.joined}>2/2 Joined</Text>
    </View>
    </View>
    <View style ={styles.credits}>
        <View style={styles.line}></View>
        <View style={styles.rowItems1}>
        <View style={styles.creditContainer}>
            <Text style = {styles.txt1}>Minimum Wager</Text>
            <Text style = {styles.txt2}>30 Credits</Text>
        </View>
        <View style={styles.creditContainer}>
            <Text style = {styles.txt1}>Winning Amount </Text>
            <Text style = {styles.txt2}>100 Credits</Text>
        </View>
        <View style={styles.creditContainer}>
            <Text style = {styles.txt1}>Creator </Text>
            <Text style = {styles.txt2}>Anna Stone</Text>
        </View>
        </View>
    </View>
   </TouchableOpacity>
   );
    
}


const styles = StyleSheet.create({

    card:{
        width:'90%',
        height:200,
        backgroundColor:'#fff',
        borderColor:'#d5d5d5',
        borderWidth:1,
        borderRadius:18,
        shadowColor:'#000',
        justifyContent:'center',
        alignItems:'center',
    },
    rowItems:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%',
        height:'60%',
    },
    text:{
        justifyContent:'center',
        alignItems:'flex-start',
        gap:5,
    },
    status:{
            fontSize:14,
            color:'#9ACD32',
            fontWeight:"500",
    },
    name:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold',
    },
    
    description:{
        fontSize:14,
        color:'grey',
    },
    imgContainer:{
        justifyContent:'space-between',
        alignItems:'center',
        gap:5,
    },
    img:{
        resizeMode: "cover",
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: "grey",
        borderWidth: 1,
    },
    joined:{
        fontSize:12,
        fontWeight:'bold',
    },
    credits:{
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:'40%',
        gap:10,
    
    },
    line:{
        width:'100%',
        height:1,
        backgroundColor:'#d5d5d5',
        borderRadius:10,
    },
    rowItems1:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
        
    },
    creditContainer:{
        justifyContent:'center',
        alignItems:'center',
      
    },
    txt1:{
        fontSize:10,
        color:'grey',
        
    },
    txt2:{
        fontSize:16,
        color:'#000',
        fontWeight:'bold'
    },
})