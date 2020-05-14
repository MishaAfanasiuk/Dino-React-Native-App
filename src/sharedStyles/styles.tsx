import {StyleSheet} from "react-native";
export const lightGreen = '#F0FDF6';
export const green = '#99F4C3';
export const blue = '#99D9F4';
export const bordo = '#8C0B0B'

export const sharedStyles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: lightGreen,
    alignItems: 'center',
  },
  scrollBody: {
    flex: 1,
    backgroundColor: lightGreen,
  },
  bigTitle: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
  }
});
