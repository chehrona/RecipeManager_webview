import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TouchableOpacity } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import { styles } from './newRecipeStyles';

const AddNewButton: React.FC = () => {
    return (
        <SafeAreaView style={styles.addButton}>
            <TouchableOpacity>
                <FontAwesome6 style={styles.addIcon} name="add"></FontAwesome6>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default AddNewButton;
