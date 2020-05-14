import {StyleSheet} from "react-native";
import {bordo, lightGreen} from "../../sharedStyles/styles";

export const aboutStyles = StyleSheet.create({
  background: {
    width: '100%',
    height: 130,
    alignItems: 'center',
  },
  logo: {
    top: '60%',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  titleBlock: {
    marginTop: 25,
    width: '80%',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: bordo
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBlock: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textBlock: {
    margin: 15,
  },
  scrollWrapper: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: 350,
    height: 450,
    margin: 0
  },
  dinoMarker: {
    bottom: 0,
    left: 0,
    height: 45,
    width: 35,
  },
  popup: {
    backgroundColor: lightGreen,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
  },
  contactsBlock: {
    justifyContent: 'center',
    width: 250,
    marginTop: 15,
    marginBottom: 15
  },
  phone: {
    fontSize: 20,
    margin: 7,
    textAlign: 'center',
  }
});
