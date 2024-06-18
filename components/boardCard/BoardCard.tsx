import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './boardCardStyles';

interface CardProps {
    name: string;
    img: string;
    id: string;
}

const BoardCard: React.FC<CardProps> = ({ img, name, id }) => {
    const getPins = (boardId: string) => {
        console.log(boardId, 'board');
    };

    return (
        <TouchableOpacity
            key={id + 'a'}
            style={styles.wrapper}
            onPress={() => getPins(id)}
        >
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{ uri: img }} />
            </View>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    );
};

export default BoardCard;
