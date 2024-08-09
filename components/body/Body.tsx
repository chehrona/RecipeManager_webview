import React, { useState } from 'react';
import { Board, RootStackParamList } from '../../interfaces';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BoardsScreen from '../../screens/recipes/screens/BoardsScreen';
import PinsScreen from '../../screens/recipes/screens/PinsScreen';
import RecipeFromPinScreen from '../../screens/recipes/screens/RecipeFromPinScreen';
import CustomHeader from '../common/header/CustomHeader';

interface BodyProps {
    boards: Board[];
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Body: React.FC<BodyProps> = ({ boards }) => {
    const [boardId, setBoardId] = useState<string>('');
    const [pinId, setPinId] = useState<string>('');

    return (
        <Stack.Navigator
            initialRouteName="Boards"
            screenOptions={{
                header: (props) => <CustomHeader {...props} />,
            }}
        >
            <Stack.Screen name="Boards">
                {() => <BoardsScreen boards={boards} setBoardId={setBoardId} />}
            </Stack.Screen>
            <Stack.Screen name="Pins">
                {() => <PinsScreen boardId={boardId} setPinId={setPinId} />}
            </Stack.Screen>
            <Stack.Screen
                name="Pin"
                options={{
                    headerShown: false,
                }}
            >
                {() => <RecipeFromPinScreen pinId={pinId} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default Body;
