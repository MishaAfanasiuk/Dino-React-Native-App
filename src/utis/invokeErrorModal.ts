import { Alert } from 'react-native';

export const invokeErrorModal = (errorMessage: string) => {
  Alert.alert('Unexpected error occurred, please, try again latter', errorMessage);
};
