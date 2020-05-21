import {Dimensions, StyleSheet} from "react-native";
import {bordo, green} from "../../sharedStyles/styles";

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
    borderWidth: 2,
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
    fontSize: 20,
  },
  buttonBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  button: {
    width:Dimensions.get("window").width*0.32,
    borderWidth: 2,
    borderColor: 'black',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize:25,
    color: 'black',
    textAlign: 'center'
  },
  green: {
    backgroundColor: green,
    opacity: 0.8
  },
  red: {
    backgroundColor: bordo,
    opacity: 0.6
  },
  logout: {
    width:Dimensions.get("window").width*0.35,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
  }
});
