import {StyleSheet} from "react-native";
import {bordo} from "../../sharedStyles/styles";

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
    marginBottom: 70,
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
    width: 400,
    height: 400,
  },
  dinoMarker: {
    bottom: 0,
    left: 0,
    height: 45,
    width: 35,
  },
  contacts: {
    display: 'none',
  },
  showContacts: {

  },
});
