import 'react-native-gesture-handler';
import React from 'react';
import {loginStore} from './src/store/login';
import {Provider} from "mobx-react";
import {menuStore} from "./src/store/menu";
import {newsStore} from "./src/store/news";
import {eventStore} from "./src/store/event";
import { View } from 'react-native';
import FooterComponent from "./src/modules/shared/Footer";
import {navigate} from "./src/navigation/rootNavigation";
import {Router} from "./src/modules/Router";
import {appStore} from "./src/store/appStore";

export default function App() {
  return (
    <View style={{display: 'flex', width: '100%', height: '100%'}}>
      <View style={{height: '100%', paddingBottom: 60}}>
        <Provider appStore={appStore} login={loginStore} menuStore={menuStore} newsStore={newsStore} eventStore={eventStore}>
          <Router />
        </Provider>
      </View>
      <FooterComponent navigate={navigate} />
    </View>
  );
}
// const componentDidMount = () => {
//   return Font.loadAsync({'Solway-Regular': require('./src/assets/fonts/Solway-Regular.ttf')})
// };
// export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);
  //
  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={componentDidMount}
  //       onFinish={() => {
  //         setFontLoaded(true);
  //       }}
  //     />
  //   );
  // }
