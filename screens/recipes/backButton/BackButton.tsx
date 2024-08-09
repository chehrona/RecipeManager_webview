import React from 'react';

// Hooks
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Native components
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

// Types
import { RootStackParamList } from '../../../interfaces';

// Styles
import { styles } from './backButtonStyles';

const BackButton: React.FC = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.backButton}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome6
                    style={styles.backIcon}
                    name="left"
                ></FontAwesome6>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default BackButton;
