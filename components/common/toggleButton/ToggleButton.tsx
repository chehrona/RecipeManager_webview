import React, { useState } from 'react';

// Native components
import { View, Text, TouchableOpacity } from 'react-native';

// Styles
import { styles } from './toggleButtonStyles';

interface ButtonProps {
    text1: string;
    text2: string;
}

const ToggleButton: React.FC<ButtonProps> = ({ text1, text2 }) => {
    const [toggleId, setToggleId] = useState<number>(1);

    const handleToggle = (id: number) => {
        setToggleId(id);
    };

    return (
        <View style={styles.subtitleToggle}>
            <TouchableOpacity
                onPress={() => handleToggle(1)}
                accessibilityRole="button"
                style={
                    toggleId === 1
                        ? styles.toggleButtonActive
                        : styles.toggleButton
                }
            >
                <Text
                    style={
                        toggleId === 1 ? styles.subtitleActive : styles.subtitle
                    }
                >
                    {text1}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                accessibilityRole="button"
                onPress={() => handleToggle(2)}
                style={
                    toggleId === 2
                        ? styles.toggleButtonActive
                        : styles.toggleButton
                }
            >
                <Text
                    style={
                        toggleId === 2 ? styles.subtitleActive : styles.subtitle
                    }
                >
                    {text2}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ToggleButton;
