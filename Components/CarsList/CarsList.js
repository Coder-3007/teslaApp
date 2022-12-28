import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import CarItem from "../CarItem/CarItem";
import styles from "./styles";
import Cars from "./Cars";

function CarsList(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={Cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
}

export default CarsList;
