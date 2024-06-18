import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';

import { styles } from './groceriesStyles';
import { View } from 'react-native';

const Calendar: React.FC = () => {
    return (
        <SafeAreaView>
            <View style={styles.dropDownHeader}>
                <View>Date</View>
                <View>Day</View>
            </View>
        </SafeAreaView>
    );
};

export default Calendar;
