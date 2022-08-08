import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { fonts } from "../../../../constants/fonts";
import { ms, mvs, vs } from "react-native-size-matters";
import { colors } from "../../../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useCoins } from "../../../../data/coins";
import { useNavigation } from "@react-navigation/native";

export default function Portfolio() {
  const { data, isLoading, isFetched } = useCoins();
  const navigation = useNavigation() as any
  return (
    <View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>My Portfolio</Text>
        <Pressable
          onPress={() => console.log(12)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "transparent",
            },
          ]}
        >
          <Text style={styles.view}>View all</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        {isLoading ? (
          <View style={{ flexDirection: "row" }}>
            <LinearGradient
              colors={["#4766F9", "#3653DD"]}
              style={styles.load}
            ></LinearGradient>
            <LinearGradient
              colors={["#4766F9", "#3653DD"]}
              style={[styles.load, { marginLeft: ms(20) }]}
            ></LinearGradient>
            <LinearGradient
              colors={["#4766F9", "#3653DD"]}
              style={[styles.load, { marginLeft: ms(20) }]}
            ></LinearGradient>
          </View>
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            data={data.slice(0, 4)}
            snapToInterval={ms(292)}
            snapToAlignment="center"
            contentContainerStyle={{ paddingHorizontal: ms(15) }}
            renderItem={({ item }) => (
              <View style={styles.coinCard}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.symbol}>{item.symbol}</Text>
                  </View>
                  <View style={styles.imageBox}>
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: 25, height: 25, resizeMode: "contain" }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: vs(28),
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
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>

      <View style={{ marginTop: vs(29) }}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Last seen</Text>
        </View>
        <View style={styles.content}>
          {isLoading ? (
            <View style={{ paddingHorizontal: ms(15) }}>
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
              contentContainerStyle={{ paddingHorizontal: ms(15) }}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.coinSeenCard}
                  onPress={() =>
                    navigation.navigate("About", { coin: item.name })
                  }
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
                </Pressable>
              )}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: ms(15),
  },
  title: {
    fontFamily: fonts.SB,
  },
  view: {
    fontFamily: fonts.SB,
    fontSize: ms(12),
    color: colors.blue,
  },
  content: {
    marginTop: vs(17),
  },
  load: {
    backgroundColor: colors.blue,
    height: vs(82),
    width: ms(132),
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  coinCard: {
    width: ms(192),
    borderRadius: 25,
    backgroundColor: colors.white,
    padding: ms(19),
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
