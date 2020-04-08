import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {styles} from "./styles"
import {inject, observer} from 'mobx-react';
import {CustomText} from "../CustomText";

export const HeaderBlock = ({
  title
}) => <CustomText styles={styles.headerText} text={title} />;

