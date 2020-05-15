import {Dimensions, StyleSheet} from "react-native";
import {bordo} from "../../sharedStyles/styles";

export const menuStyles = StyleSheet.create({
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width*0.9,
    paddingBottom:5,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: bordo
  },
  foodTitle: {
    paddingLeft: 3,
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  menuImage: {
    height: 45,
    width: 45,
    marginRight: 15,
    marginTop: 15,
  },
  menuTitle: {
    fontSize: 30,
    paddingLeft: 10,
    marginTop: 15,
  },
  foodImage: {
    height: 55,
    width: 65,
    marginRight:5,
    marginTop: 15,
  },
  foodInfo: {
    width: '75%'
  },
  foodCounts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodCount: {
    marginLeft: 10,
    fontSize: 20,
  }
});
