import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Accelerometer } from "expo-sensors";

const GameDashboard = () => {
  const [steps, setSteps] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [lastTimeStamp, setLastTimeStamp] = useState(0);
  const [timer, setTimer] = useState(3600); 
  const [timerActive, setTimerActive] = useState(true);

  const animationRefRunning = useRef(null);
  const animationRefSitting = useRef(null);

  
  useEffect(() => {
    let subscription;
    Accelerometer.isAvailableAsync().then((result) => {
      if (result) {
        subscription = Accelerometer.addListener((accelerometerData) => {
          const { y } = accelerometerData;
          const threshold = 0.1;
          const timestamp = new Date().getTime();

          if (
            Math.abs(y - lastY) > threshold &&
            !isCounting &&
            timestamp - lastTimeStamp > 800
          ) {
            setIsCounting(true);
            setLastY(y);
            setLastTimeStamp(timestamp);

            setSteps((prevSteps) => prevSteps + 1);

            setTimeout(() => {
              setIsCounting(false);
            }, 1200);
          }
        });
      } else {
        console.log("Accelerometer not available on this device");
      }
    });
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [isCounting, lastY, lastTimeStamp]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0 && timerActive) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        clearInterval(interval);
        setTimerActive(false);
       
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, timerActive]);

  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/walk.png")} style={styles.img} />
      <Text style={styles.title}>Step Challenge</Text>
      <Text style={styles.txt2}>
        Welcome to the Step Challenge: Walk 10,000 Steps in an Hour! Designed to
        push your limits and boost cardiovascular health, this challenge is
        perfect for fitness enthusiasts and anyone looking for a fun, active
        challenge.
      </Text>
      <Text style={styles.txt3}>Start walking to increase step count</Text>
      <View style={styles.infoContainer}>
        <View style={styles.stepsContainer}>
          <Text style={styles.stepsText}>{steps}</Text>
          <Text style={styles.stepsLabel}>Steps</Text>
        </View>
        <Text style={styles.txt1}>Time Remaining: {formatTime(timer)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  img: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    backgroundColor: "#FFBF0040",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  stepsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#FFBF0020",
    borderColor: "#FFBF00",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  stepsText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#9ACD32",
  },
  stepsLabel: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
  },
  txt1: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  txt2: {
    fontSize: 15,
    color: "#000",
    textAlign: "center",
  },
  txt3: {
    fontSize: 18,
    color: "#FFBF00",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GameDashboard;
