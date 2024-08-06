import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './pinCardStyles';

interface CardProps {
    title: string;
    img: string;
    id: string;
    setPinId: (pinId: string) => void;
}

const PinCard: React.FC<CardProps> = ({ img, title, id, setPinId }) => {
    return (
        <TouchableOpacity
            key={id + 'a'}
            style={styles.wrapper}
            onPress={() => setPinId(id)}
        >
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{ uri: img }} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default PinCard;
