import { Alert } from 'react-native';

export const invokeErrorModal = (errorMessage: string | object) => {
  let message = typeof errorMessage === 'string' ? errorMessage : errorMessage.toString();
  console.dir(message);
  Alert.alert('Unexpected error occurred, please, try again latter', message);
};
