import React, {useEffect, useState} from "react";
import {Image, View} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {aboutStyles} from "../aboutStyles";

interface ILocation {
  latitude: number;
  longitude: number;
}
export const Map= () => {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);

  useEffect(() => {
    let mounted = true;
    if(mounted) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation({
            latitude,
            longitude,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }

    return () => mounted = false;
  }, []);

  console.log(location);
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={aboutStyles.mapStyle}
        initialRegion={{
          latitude: 50.46266761,
          longitude: 30.52001953,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15,
        }}>
        {(location &&
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />)}
        <Marker
          coordinate={{
            latitude: 50.46266761,
            longitude: 30.52001953,
          }}
        >
          <Image
            source={require('../../../assets/images/dinoGeo.png')}
            style={aboutStyles.dinoMarker}
          />
        </Marker>
      </MapView>
    </View>
  );
};
