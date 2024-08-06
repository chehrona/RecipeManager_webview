import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActivityIndicator, View } from 'react-native';

// Components
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';

import { styles } from '../../appStyles';
import { Board } from '../../interfaces';

interface RecipesProps {
    boards: Board[];
    loading: boolean;
}

const Recipes: React.FC<RecipesProps> = ({ boards, loading }) => {
    return (
        <SafeAreaView style={styles.recipeContainer}>
            <Header />
            {loading ? (
                <View style={styles.loader}>
                    <ActivityIndicator size={'large'} color={'#f5f5f5'} />
                </View>
            ) : (
                <Body boards={boards} />
            )}
        </SafeAreaView>
    );
};

export default Recipes;
