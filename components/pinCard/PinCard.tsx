import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces';
import { styles } from './pinCardStyles';

interface CardProps {
    title: string;
    img: string;
    id: string;
    setPinId: (pinId: string) => void;
}

const PinCard: React.FC<CardProps> = ({ img, title, id, setPinId }) => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handlePinSelect = (selectedId: string) => {
        setPinId(selectedId);
        navigation.navigate('Pin', { pinId: selectedId });
    };

    return (
        <TouchableOpacity
            key={id + 'a'}
            style={styles.wrapper}
            onPress={() => handlePinSelect(id)}
        >
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{ uri: img }} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default PinCard;
