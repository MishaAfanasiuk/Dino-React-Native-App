import React from 'react';
import {Text, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {homeStyles} from "../HomePage/styles";
import MapView from 'react-native-maps';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 500,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const Locations = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
