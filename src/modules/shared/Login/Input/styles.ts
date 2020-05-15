import {StyleSheet} from "react-native";
import {bordo, black, white} from "../../../../sharedStyles/styles";

export const loginInputStyles = StyleSheet.create({
  label: {
    color: bordo,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: white,
    padding: 10,
    borderColor: black,
    borderWidth: 2,
    borderRadius: 15,
  }
});
