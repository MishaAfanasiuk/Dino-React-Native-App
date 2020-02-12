import React from 'react';
import {homeStyles} from "./styles";
import { Text, View } from 'react-native';

export function HomePage() {
    return (
        <View style={homeStyles.container}>
            <Text>
                Hello world!
            </Text>
        </View>
    );
}
