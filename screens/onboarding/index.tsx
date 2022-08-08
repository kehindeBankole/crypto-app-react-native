import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";
import { s, vs, ms, mvs } from "react-native-size-matters";
import ArrowRight from "../../components/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Onboarding({navigation}:any) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/onboard.png")} />
        <View style={styles.textSection}>
          <Text style={styles.title}>Easy Way to Invest in Crypto</Text>
          <Text style={styles.subtitle}>
            A new way to manage and trade all your crypto easily and fastest in
            the market
          </Text>
          <Pressable style={styles.button} onPress={async()=>{
             try {
              await AsyncStorage.setItem('hasVisited', "true")
              navigation.replace("Landing")
            } catch (e) {
              // saving error
            }
            }}>
            <ArrowRight/>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: "center",
  },
  textSection: {
    paddingHorizontal: ms(25),
    marginTop: vs(24),
  },
  title: { fontFamily: "TB", fontSize: 32, color: colors.white},
  subtitle: {
    fontFamily: "SR",
    fontSize: ms(13),
    color: colors.white,
    marginTop: vs(10),
  },
  button: {
    marginTop:vs(24),
    backgroundColor: colors.white,
    borderRadius: 100,
    width: ms(60),
    height: ms(60),
    justifyContent:'center',
    alignItems:"center"
  },
});
