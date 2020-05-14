import {StyleSheet} from "react-native";
import {bordo} from "../../../sharedStyles/styles";

export const dishCountsStyles = StyleSheet.create({
  wrapper: {
    margin: 5,
    flexDirection: 'row',
    width: '90%',
    borderBottomWidth: 2,
    alignItems: 'center',
    borderBottomColor: bordo,
    justifyContent: 'space-around',
    paddingBottom: 5,
    marginBottom: 10,
  },
  count: {
    fontSize: 30,
  },
});
