import React from 'react';
import {HomePage} from "./src/modules/HomePage";
import store from './src/store';
import login from './src/store/login';
import {Provider} from "mobx-react";
import menu from "./src/store/menu";

export default function App() {
  return (
    <Provider login={login} menu={menu}>
      <HomePage />
    </Provider>
  );
}
