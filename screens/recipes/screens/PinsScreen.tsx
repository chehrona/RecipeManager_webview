import React from 'react';

// Native components
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';

// Components
import PinCard from '../../../components/pinCard/PinCard';

// Styles
import { styles } from './screensStyles';

interface PinsProps {
    pins: object;
    setPinId: (pinId: string) => void;
}

const PinsScreen: React.FC<PinsProps> = ({ pins, setPinId }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={pins}
                renderItem={({ item }) => (
                    <PinCard
                        title={item.title}
                        id={item.id}
                        setPinId={setPinId}
                        img={
                            item.media.images['600x'].url ||
                            item.media.images['1200x'].url
                        }
                    />
                )}
                contentContainerStyle={styles.cardList}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};

export default PinsScreen;
