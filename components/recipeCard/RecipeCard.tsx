import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './recipeCardStyles';

interface CardProps {
    name: string;
    img: string;
}

const RecipeCard: React.FC<CardProps> = ({ img, name }) => {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.image} source={{ uri: img }} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default RecipeCard;
