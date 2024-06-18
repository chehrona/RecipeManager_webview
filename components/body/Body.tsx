import React from 'react';
import { FlatList } from 'react-native';
import { styles } from './bodyStyles';
import RecipeCard from '../recipeCard/RecipeCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const recipes = [
    {
        name: 'Chicken enchiladas',
        img: 'https://i.pinimg.com/564x/43/ff/2f/43ff2fe3ee234faa7313725adc82cb60.jpg',
    },
    { name: 'Greek meatballs', img: './path/to/image.png' },
    { name: 'Greek meatballs-2', img: './path/to/image.png' },
];

const Body: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={recipes}
                renderItem={({ item }) => (
                    <RecipeCard img={item.img} name={item.name} />
                )}
                contentContainerStyle={styles.cardList}
                keyExtractor={(item) => item.name}
            />
        </SafeAreaView>
    );
};

export default Body;
