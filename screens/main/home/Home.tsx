import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import { vs, ms } from "react-native-size-matters";
import { fonts } from "../../../constants/fonts";
import Balance from "./balance";
import Portfolio from "./portfolio";

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={styles.header}>
          <Text style={styles.name}>kehinde bankole</Text>
          <Text style={styles.welcome}>Welcome Back 👋</Text>
          <View style={styles.balanceCard}>
            <Balance />
          </View>
        </View>
        <View style={styles.portfolio}>
          <Portfolio/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? vs(50) : vs(15),
    backgroundColor: "#F5F8FE",
  },
  header: {
    paddingHorizontal: ms(15),
  },
  name: {
    fontFamily: fonts.TB,
    fontSize: ms(18),
  },
  welcome: {
    fontFamily: fonts.TR,
    fontSize: ms(12),
  },
  balanceCard: {
    marginTop: ms(29),
  },
  portfolio: {
    marginTop: ms(29),
  },
});
