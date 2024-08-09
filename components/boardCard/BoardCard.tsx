import React from 'react';

// Hooks
import { useNavigation } from '@react-navigation/native';

// Native components
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Custom
import { styles } from './boardCardStyles';
import { RootStackParamList } from '../../interfaces';

interface CardProps {
    name: string;
    img: string;
    id: string;
    setBoardId: (boardId: string) => void;
}

const BoardCard: React.FC<CardProps> = ({ img, name, id, setBoardId }) => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleBoardSelect = (boardId: string) => {
        setBoardId(boardId);
        navigation.navigate('Pins', { boardId: boardId });
    };

    return (
        <TouchableOpacity
            key={id + 'a'}
            style={styles.wrapper}
            onPress={() => handleBoardSelect(id)}
        >
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{ uri: img }} />
            </View>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    );
};

export default BoardCard;
