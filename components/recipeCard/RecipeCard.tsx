import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { styles } from './recipeCardStyles';

interface CardProps {
    name: string;
    img: string;
}

const RecipeCard: React.FC<CardProps> = ({ img, name }) => {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.image} source={{ uri: img }} />
        </View>
    );
};

export default RecipeCard;
