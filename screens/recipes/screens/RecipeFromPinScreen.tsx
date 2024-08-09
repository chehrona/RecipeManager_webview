import React, { useState, useEffect } from 'react';

// Services
import { getPin } from '../../services';

// Native components
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ActivityIndicator, Image, Text, FlatList } from 'react-native';

// Styles
import { styles } from './screensStyles';
import { styles as loaderStyles } from '../../../appStyles';

import { Pin } from '../../../interfaces';
import ToggleButton from '../../../components/common/toggleButton/ToggleButton';
import CustomCheckBox from '../../../components/common/checkBox/CheckBox';

interface PinProps {
    pinId: string;
}

const RecipeFromPinScreen: React.FC<PinProps> = ({ pinId }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [pin, setPin] = useState<Pin>();
    const [selectedItems, setSelectedItems] = useState<string[]>();

    useEffect(() => {
        const handleGetPin = async (id: string) => {
            setLoading(true);

            if (id?.length) {
                try {
                    const data = await getPin(id);

                    console.log(data, 'data ********');
                    if (data) {
                        setPin(data);
                    }
                } catch (error: any) {
                    console.error('Invalid pin id:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        handleGetPin(pinId);
    }, [pinId]);

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <View style={loaderStyles.loader}>
                    <ActivityIndicator size={'large'} color={'#f5f5f5'} />
                </View>
            ) : (
                <View style={styles.bodyContainer}>
                    <Image
                        source={{ uri: pin?.media }}
                        style={styles.mainImage}
                    />
                    <Text style={styles.title}>{pin?.title}</Text>
                    <ToggleButton
                        text1={'Ingredients'}
                        text2={'Instructions'}
                    />
                    <FlatList
                        data={pin?.product_tags}
                        renderItem={({ item }) => (
                            <View style={styles.ingredient}>
                                <CustomCheckBox
                                    item={item}
                                    setSelectedItems={setSelectedItems}
                                />
                                <Text>{item}</Text>
                            </View>
                        )}
                        contentContainerStyle={styles.list}
                        keyExtractor={(item) => item}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

export default RecipeFromPinScreen;
