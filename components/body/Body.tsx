import React from 'react';
import { FlatList } from 'react-native';
import { styles } from './bodyStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BodyProps } from '../../interfaces';
import BoardCard from '../boardCard/BoardCard';

const Body: React.FC<BodyProps> = ({ boards }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={boards}
                renderItem={({ item }) => (
                    <BoardCard
                        img={item.media.image_cover_url}
                        name={item.name}
                        id={item.id}
                    />
                )}
                contentContainerStyle={styles.cardList}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default Body;
