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
import { Coins } from "../../../types/index";
import {
  LineChart,
} from "react-native-chart-kit";
import { useState } from "react";

export default function About() {
  const navigation = useNavigation();
  const route = useRoute() as { params: { coin: Coins } };
  const [choice, setChoice] = useState<"h" | "d" | "w" | "m" | "y">("h");
  const {
    name,
    image,
    symbol,
    current_price,
    market_cap,
    high_24h,
    total_supply,
    max_supply,
  } = route.params.coin;
  console.log(route.params.coin);
  function selectChoice(choice: "h" | "d" | "w" | "m" | "y") {
    setChoice(choice);
  }
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 5],
        color: (opacity = 1) => `rgba(71, 102, 249, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(71, 102, 249, ${opacity})`,
    strokeWidth: 12, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
            <View style={styles.amount}>
              <Text style={styles.name}>{current_price}</Text>
              <View style={styles.percent}>
                <Text style={styles.change}>
                  {route.params.coin.price_change_percentage_24h.toFixed(2)}%
                </Text>
              </View>
            </View>
            <View style={styles.button}>
              <Pressable
                style={[
                  styles.btn,
                  {
                    backgroundColor:
                      choice === "h" ? colors.white : "transparent",
                  },
                ]}
                onPress={() => selectChoice("h")}
              >
                <Text
                  style={[
                    styles.btnText,
                    { color: choice === "h" ? colors.blue : "#494D58" },
                  ]}
                >
                  1h
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.btn,
                  {
                    backgroundColor:
                      choice === "d" ? colors.white : "transparent",
                  },
                ]}
                onPress={() => selectChoice("d")}
              >
                <Text
                  style={[
                    styles.btnText,
                    { color: choice === "d" ? colors.blue : "#494D58" },
                  ]}
                >
                  1d
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.btn,
                  {
                    backgroundColor:
                      choice === "w" ? colors.white : "transparent",
                  },
                ]}
                onPress={() => selectChoice("w")}
              >
                <Text
                  style={[
                    styles.btnText,
                    { color: choice === "w" ? colors.blue : "#494D58" },
                  ]}
                >
                  1w
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.btn,
                  {
                    backgroundColor:
                      choice === "m" ? colors.white : "transparent",
                  },
                ]}
                onPress={() => selectChoice("m")}
              >
                <Text
                  style={[
                    styles.btnText,
                    { color: choice === "m" ? colors.blue : "#494D58" },
                  ]}
                >
                  1m
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.btn,
                  {
                    backgroundColor:
                      choice === "y" ? colors.white : "transparent",
                  },
                ]}
                onPress={() => selectChoice("y")}
              >
                <Text
                  style={[
                    styles.btnText,
                    { color: choice === "y" ? colors.blue : "#494D58" },
                  ]}
                >
                  1y
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                marginTop: vs(18),
                backgroundColor: "white",
                borderRadius: 20,
                padding: ms(10),
              }}
            >
              <LineChart
                data={data}
                width={Dimensions.get("screen").width}
                height={256}
                verticalLabelRotation={30}
                chartConfig={chartConfig}
                bezier
                withHorizontalLabels={false}
                withVerticalLabels={false}
                withHorizontalLines={false}
                withInnerLines={false}
                hidePointsAtIndex={
                  choice === "h"
                    ? [0, 1, 2, 3, 5, 6]
                    : choice === "d"
                    ? [2, 5, 6, 4]
                    : choice === "w"
                    ? [1, 3, 4, 5]
                    : choice === "m"
                    ? [3, 4, 5, 6]
                    : [1, 3, 4, 6]
                }
              />
            </View>

            <View style={styles.stats}>
              <Text style={styles.statsTitle}>Statistics</Text>
              <View style={{ marginTop: vs(16) }}>
                <View style={styles.detailBox}>
                  <Text style={styles.detail}>Current Price</Text>
                  <Text style={styles.value}>{current_price}</Text>
                </View>
                <View style={styles.detailBox}>
                  <Text style={styles.detail}>Market Cap</Text>
                  <Text style={styles.value}>{market_cap}</Text>
                </View>
                <View style={styles.detailBox}>
                  <Text style={styles.detail}>Volume 24h</Text>
                  <Text style={styles.value}>{high_24h}</Text>
                </View>
                <View style={styles.detailBox}>
                  <Text style={styles.detail}>Available Supply</Text>
                  <Text style={styles.value}>{total_supply}</Text>
                </View>
                <View style={styles.detailBox}>
                  <Text style={styles.detail}>Max Supply</Text>
                  <Text style={styles.value}>{max_supply}</Text>
                </View>
              </View>
            </View>

            <View style={styles.actionButtons}>
              <Pressable style={styles.sell}>
                <Text style={styles.sellText}>Sell</Text>
              </Pressable>
              <Pressable style={styles.buy}>
                <Text style={styles.buyText}>Buy</Text>
              </Pressable>
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
    justifyContent: "space-between",
  },
  amount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  percent: {
    backgroundColor: colors.white,
    padding: ms(5),
    paddingHorizontal: ms(8),
    borderRadius: 8,
  },
  change: {
    textTransform: "uppercase",
    fontFamily: fonts.TB,
    color: colors.blue,
    fontSize: ms(12),
  },
  button: {
    flexDirection: "row",
    marginTop: 18,
  },
  btn: {
    marginRight: ms(20),
    paddingHorizontal: ms(16),
    paddingVertical: vs(8),
    borderRadius: 8,
  },
  btnText: {
    fontFamily: fonts.SB,
    color: colors.light,
    fontSize: ms(12),
  },
  stats: {
    marginTop: vs(26),
  },
  statsTitle: {
    fontFamily: fonts.TB,
    fontSize: ms(18),
    color: colors.dark,
  },
  detailBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  detail: {
    fontFamily: fonts.TR,
    fontSize: ms(12),
    color: colors.dark,
  },
  value: {
    fontFamily: fonts.TR,
    fontSize: ms(14),
    color: colors.light,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent:"space-between",
  },
  sell:{
    backgroundColor:colors.danger,
    height:vs(40),
    marginRight:10,
    borderRadius:12,
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  buy:{
    backgroundColor:colors.darkBlue,
    height:vs(40),
    borderRadius:12,
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  sellText:{
    color:colors.dangerText,
    fontFamily:fonts.TB,
    fontSize:ms(14)
  },
  buyText:{
    color:colors.white,
    fontFamily:fonts.TB,
    fontSize:ms(14)
  }
});
