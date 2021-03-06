import React from 'react';
import { Text, View, Image} from 'react-native';
import {styles} from "../styles"
import {inject, observer} from 'mobx-react';

export const CoinCounter = inject('loginStore')(observer(({ navigation, loginStore}) => {
  return (
    <View style={styles.coinWrapper}>
      <Image style={styles.countImg} source={require('../../../../assets/images/price-tag.png')}/>
      <Text style={styles.count}>{loginStore.user ? loginStore.user.coins : 0}</Text>
    </View>
)}));

