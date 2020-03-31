import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {styles} from "./styles"
import {inject, observer} from 'mobx-react';

export const HeaderBlock = ({
  title
}) => <Text style={styles.headerText}>{title}</Text>

