import {Dimensions, StyleSheet} from "react-native";
import {bordo} from "../../sharedStyles/styles";

export const userStyles = StyleSheet.create({
  userpick: {
    marginTop: 20,
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
  },
  editIconWrap: {
    top: Dimensions.get('window').width * 0.17,
    right: -Dimensions.get('window').width * 0.27,
    width: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').width * 0.08,
  },
  editIcon: {
    width: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').width * 0.08,
  },
  coinBlock: {
    flexDirection: 'row',
    width: '90%',
    borderBottomWidth: 2,
    alignItems: 'center',
    borderBottomColor: bordo,
    borderTopWidth: 2,
    borderTopColor: bordo,
    justifyContent: 'center',
    marginBottom: 20
  },
  countImg: {
    marginBottom: 10,
    marginTop: 10,
    width: 25,
    height: 25,
  },
  userInfoBlock: {
    width: Dimensions.get("window").width*0.9,
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: bordo,
    paddingBottom: 5,
  },
  userInfoValue: {
    fontSize: 25,
    marginTop: 5,
  },
  userInfoTitle: {
    fontSize: 20
  },
  userCard: {
    width: Dimensions.get("window").width*0.9,
    borderTopColor: 'black',
    borderLeftColor: 'black',
    borderRightColor: 'black',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    backgroundColor: 'white',
    paddingLeft: Dimensions.get("window").width*0.045,
    paddingRight: Dimensions.get("window").width*0.045,
    marginTop: Dimensions.get("window").width*0.12

  },
  userCardQR: {
    marginTop: Dimensions.get("window").width*0.03,
    width: Dimensions.get("window").width*0.8,
    height: Dimensions.get("window").width*0.8,
  },
  userCardTitle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
  }
});
