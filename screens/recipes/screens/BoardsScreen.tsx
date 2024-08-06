import React from 'react';

// Native components
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';

import { Board } from '../../../interfaces';

// Components
import BoardCard from '../../../components/boardCard/BoardCard';

// Styles
import { styles } from './screensStyles';

interface BoardsProps {
    boards: Board[];
    setBoardId: (boardId: string) => void;
}

const BoardsScreen: React.FC<BoardsProps> = ({ boards, setBoardId }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={boards}
                renderItem={({ item }) => (
                    <BoardCard
                        img={item.media.image_cover_url}
                        name={item.name}
                        id={item.id}
                        setBoardId={setBoardId}
                    />
                )}
                contentContainerStyle={styles.cardList}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};

export default BoardsScreen;
