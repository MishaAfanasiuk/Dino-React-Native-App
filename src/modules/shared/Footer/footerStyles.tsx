import {StyleSheet} from "react-native";
import {green} from "../../../sharedStyles/styles";

export const styles = StyleSheet.create({
  footer: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    width: '100%',
    backgroundColor: green,
  },
  icon: {
    height: 40,
    width: 40,
  }
});
