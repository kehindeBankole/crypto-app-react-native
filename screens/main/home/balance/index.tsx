import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { vs, ms } from "react-native-size-matters";
import { colors } from "../../../../constants/colors";
import { fonts } from "../../../../constants/fonts";
import { LinearGradient } from "expo-linear-gradient";

export default function Balance() {
  return (
    <>
     <Image
        source={require("../../../../assets/user.jpg")}
        style={{
          position: "absolute",
          top: -15,
          zIndex:9,
          alignSelf:'center',
          height:ms(58),
          width:ms(58),
          borderRadius:15,
        }}
      />
    <LinearGradient
      colors={["#4766F9", "#3653DD"]}
      style={styles.card}
    >
      <Text style={styles.text}>Current Balance</Text>
      <Text style={styles.balance}> $143,421.20</Text>
      <Text style={styles.profit}>Weekly profit : 35%</Text>
     
      <Image
        source={require("../../../../assets/circle.png")}
        style={{
          position: "absolute",
          left: 0,
        }}
      />
      <Image
        source={require("../../../../assets/circle.png")}
        style={{
          position: "absolute",
          right: 0,
          transform:[{rotate:'180deg'}]
        }}
      />
      <Image
        source={require("../../../../assets/circle.png")}
        style={{
          position: "absolute",
          top: vs(-59),
          transform:[{rotate:'90deg'}]
        }}
      />
       <Image
        source={require("../../../../assets/circle.png")}
        style={{
          position: "absolute",
          bottom: vs(-59),
          transform:[{rotate:'270deg'}]
        }}
      />
    </LinearGradient>
  </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.blue,
    height: vs(199),
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position:"relative",
    zIndex:-1
  },
  text: {
    fontFamily: fonts.SB,
    color: colors.white,
  },
  profit: {
    fontFamily: fonts.TB,
    color: colors.white,
  },
  balance: {
    fontFamily: fonts.TB,
    color: colors.white,
    fontSize: ms(28),
  },
  circle: {
    position: "absolute",
    left: 0,
  },
});
