import React, {useEffect, useState} from "react";
import {Image, View, Platform} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {aboutStyles} from "../aboutStyles";

interface ILocation {
  latitude: number;
  longitude: number;
}

export const Map = () => {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);

  useEffect(() => {
    // console.log(typeof Platform.OS === 'object');
    let mounted = true;
    if (mounted) {
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

  return (
    <View>
    </View>
  );
};
