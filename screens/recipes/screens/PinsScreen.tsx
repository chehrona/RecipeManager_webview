import React, { useState, useEffect } from 'react';

import { Pin } from '../../../interfaces';

// Native components
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View, ActivityIndicator } from 'react-native';

// Components
import PinCard from '../../../components/pinCard/PinCard';
import SearchBar from '../../../components/searchBar/SearchBar';

// Styles
import { styles } from './screensStyles';
import { getPins } from '../../services';
import { styles as loaderStyles } from '../../../appStyles';
import { useGlobal } from '../../../App';

interface PinsProps {
    boardId: string;
    setPinId: (pinId: string) => void;
}

const PinsScreen: React.FC<PinsProps> = ({ boardId, setPinId }) => {
    const [pins, setPins] = useState<Pin[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { setTitle } = useGlobal();

    useEffect(() => {
        setTitle('Pins');
    });

    useEffect(() => {
        const handleGetPins = async (id: string) => {
            setLoading(true);

            if (boardId?.length) {
                try {
                    const data = await getPins(id);

                    if (data.items) {
                        setPins(data.items);
                    }
                } catch (error: any) {
                    console.error('Invalid board id:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        handleGetPins(boardId);
    }, [boardId]);

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <View style={loaderStyles.loader}>
                    <ActivityIndicator size={'large'} color={'#f5f5f5'} />
                </View>
            ) : (
                <View>
                    <SearchBar />
                    <FlatList
                        data={pins}
                        renderItem={({ item }) => {
                            const firstImageKey = item?.media?.images
                                ? Object.keys(item.media.images)[0]
                                : undefined;
                            const firstImageUrl = firstImageKey
                                ? item.media.images[firstImageKey]?.url
                                : undefined;

                            return (
                                <PinCard
                                    title={item.title}
                                    id={item.id}
                                    setPinId={setPinId}
                                    img={firstImageUrl}
                                />
                            );
                        }}
                        contentContainerStyle={styles.cardList}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

export default PinsScreen;
