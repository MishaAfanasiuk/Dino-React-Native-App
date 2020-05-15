import {StyleSheet} from "react-native";
import {black} from "../../../../sharedStyles/styles";

export const loginButtonStyles = StyleSheet.create({
  text: {
    color: black,
    fontWeight: 'bold'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    borderColor: black,
    borderWidth: 2,
    borderRadius: 15,
  }
});
