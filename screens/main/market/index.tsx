import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { vs, ms, mvs } from "react-native-size-matters";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";
import { useCoins } from "../../../data/coins";
import { LinearGradient } from "expo-linear-gradient";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { memo } from "react";

function Market() {
  const { data, isLoading, isFetched } = useCoins();
  return (
    <SafeAreaView style={styles.container}>

          <View>
            {isLoading ? (
              <View>
                <LinearGradient
                  colors={["#4766F9", "#3653DD"]}
                  style={[styles.loadSeen, { marginBottom: ms(20) }]}
                ></LinearGradient>
                <LinearGradient
                  colors={["#4766F9", "#3653DD"]}
                  style={[styles.loadSeen, { marginBottom: ms(20) }]}
                ></LinearGradient>
                <LinearGradient
                  colors={["#4766F9", "#3653DD"]}
                  style={styles.loadSeen}
                ></LinearGradient>
              </View>
            ) : (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  ItemSeparatorComponent={() => (
                    <View style={{ height: mvs(16) }} />
                  )}
                  data={data}
                  contentContainerStyle={{ paddingHorizontal: ms(15), paddingBottom:20}}
               
                  renderItem={({ item }) => (
                    <View style={styles.coinSeenCard}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <View
                            style={[
                              styles.imageBox,
                              {
                                marginRight: ms(16),
                              },
                            ]}
                          >
                            <Image
                              source={{ uri: item.image }}
                              style={{
                                width: 25,
                                height: 25,
                                resizeMode: "contain",
                              }}
                            />
                          </View>
                          <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.symbol}>{item.symbol}</Text>
                          </View>
                        </View>

                        <View
                          style={{
                            alignItems: "center",
                          }}
                        >
                          <Text style={[styles.name, { fontSize: 20 }]}>
                            {item.current_price.toFixed(2)}
                          </Text>
                          <Text style={styles.symbol}>
                            {item.ath_change_percentage.toFixed(2)}%
                          </Text>
                        </View>
                      </View>

                      <View style={{marginTop:vs(25)}}>
                        <LineChart
                          data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                            datasets: [
                              {
                                data: [20, 45, 28, 80, 99, 43],
                                color: (opacity = 1) =>
                                  `rgba(71, 102, 249, ${opacity})`, // optional
                                strokeWidth: 2, // optional
                              },
                            ],
                          }}
                          width={Dimensions.get("screen").width - 80}
                          height={220}
                          chartConfig={{
                            backgroundGradientFrom: "red",
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientTo: "red",
                            backgroundGradientToOpacity: 0,
                            backgroundColor: "white",
                            color: (opacity = 1) =>
                              `rgba(71, 102, 249, ${opacity})`,
                            strokeWidth: 2, // optional, default 3
                            barPercentage: 0.5,
                            useShadowColorFromDataset: false, // optional
                          }}
                        />
                      </View>
                    </View>
                  )}
                  keyExtractor={(item) => item.id}
                />
            )}
          </View>
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? vs(50) : vs(15),
    backgroundColor: "#F5F8FE",
   // paddingHorizontal: ms(15),
  },
  name: {
    fontFamily: fonts.SB,
    color: colors.dark,
    fontSize: ms(14),
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


export default memo(Market)