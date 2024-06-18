import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActivityIndicator, View } from 'react-native';

// Components
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';

import { styles } from '../../appStyles';

const Recipes: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <SafeAreaView style={styles.recipeContainer}>
            <Header />
            {loading ? (
                <View style={styles.loader}>
                    <ActivityIndicator size={'large'} color={'#f5f5f5'} />
                </View>
            ) : (
                <Body />
            )}
        </SafeAreaView>
    );
};

export default Recipes;
