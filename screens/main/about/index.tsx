import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import { fonts } from "../../../constants/fonts";
import { ms, mvs, vs } from "react-native-size-matters";
import { colors } from "../../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useCoins } from "../../../data/coins";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BackIcon, SquaresIcon } from "../../../components/icons";
import { ScrollView } from "react-native-gesture-handler";

export default function About() {
  const navigation = useNavigation();
  const route = useRoute() as any;
  console.log(route.params);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <BackIcon />
            </Pressable>
            <Text style={styles.name}>Trade {route.params.coin}</Text>
            <Pressable>
              <SquaresIcon />
            </Pressable>
          </View>
          <View style={styles.body}>
            <Text style={styles.name}>Trade {route.params.coin}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? vs(50) : vs(15),
    backgroundColor: "#F5F8FE",
    paddingHorizontal: ms(15),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontFamily: fonts.TB,
    color: colors.dark,
    fontSize: ms(18),
  },
  body: {
    marginTop: vs(25),
  },
  symbol: {
    textTransform: "uppercase",
    fontFamily: fonts.SR,
    color: colors.light,
    marginTop: 5,
    fontSize: ms(12),
  },
  imageBox: {
    width: 36,
    height: 36,
    backgroundColor: colors.lightbg,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  loadSeen: {
    height: 82,
    borderRadius: 25,
  },
  coinSeenCard: {
    borderRadius: 25,
    backgroundColor: colors.white,
    padding: ms(19),
    //  flexDirection: "row",
    justifyContent: "space-between",
  },
});
