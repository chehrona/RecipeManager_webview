import React from 'react';

// Native components
import { View, Text } from 'react-native';

// Hooks
import { useGlobal } from '../../../App';

// Styles
import { styles } from './headerStyles';

const CustomHeader: React.FC = () => {
    const { title } = useGlobal();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default CustomHeader;
