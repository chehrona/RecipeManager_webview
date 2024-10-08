import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import Body from '../../components/body/Body';

import { styles } from '../../appStyles';

const NewRecipe: React.FC = () => {
    return (
        <SafeAreaView style={styles.recipeContainer}>
            <Body />
        </SafeAreaView>
    );
};

export default NewRecipe;
