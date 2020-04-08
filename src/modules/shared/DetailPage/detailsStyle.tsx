import {StyleSheet} from "react-native";
import {bordo} from "../../../sharedStyles/styles";

export const detailStyles = StyleSheet.create({
  image: {
    backgroundColor: '#756',
    height: 210,
    width: '100%',
  },
  wrapper: {
    alignItems: 'center'

  },
  border: {
    width: '90%',
    borderColor: 'black',
    borderBottomWidth: 2,
    alignContent: 'center',
    alignItems: 'center',
    borderBottomColor: bordo
  },
  informationBlock: {
    width: '90%',
    alignContent: 'center',
    marginBottom: 70,
  }
});
