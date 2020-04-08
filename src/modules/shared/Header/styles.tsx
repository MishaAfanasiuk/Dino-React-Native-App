import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  headerText: {
    fontSize: 40,
    letterSpacing: 1,
    color: 'black',
    fontWeight: 'bold',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 15,
    zIndex: 100,
  },
  countImg: {
    width: 25,
    height: 25,
  },
  count: {
    fontSize: 25,
  },
  coinWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 13,
    paddingRight: 15,
  }
});
