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
import { useNavigation, useRoute } from "@react-navigation/native";
import { BackIcon, SquaresIcon } from "../../../components/icons";
import { ScrollView } from "react-native-gesture-handler";

export default function About() {
  const navigation = useNavigation();
  const route = useRoute() as any;
  const { name, image, symbol } = route.params.coin;
  console.log(route.params.coin);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <BackIcon />
            </Pressable>
            <Text style={styles.name}>Trade {name}</Text>
            <Pressable>
              <SquaresIcon />
            </Pressable>
          </View>
          <View style={styles.body}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.imageBox}>
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: "contain",
                  }}
                />
              </View>

              <Text style={styles.symbol}>{symbol}</Text>
            </View>
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

    fontSize: ms(12),
  },
  imageBox: {
    width: 46,
    height: 46,
    backgroundColor: colors.lightbg,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: ms(5),
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
