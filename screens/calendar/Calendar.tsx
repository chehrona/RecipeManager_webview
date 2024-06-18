import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import Header from '../../components/header/Header';

import { styles } from '../../appStyles';

const Calendar: React.FC = () => {
    return (
        <SafeAreaView style={styles.recipeContainer}>
            <Header />
        </SafeAreaView>
    );
};

export default Calendar;
