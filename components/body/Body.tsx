import React, { useState } from 'react';
import { Board } from '../../interfaces';
import BoardsScreen from '../../screens/recipes/screens/BoardsScreen';
import PinsScreen from '../../screens/recipes/screens/PinsScreen';
import { createStackNavigator } from 'react-navigation-stack';

interface BodyProps {
    boards: Board[];
}

createStackNavigator({
    Boards: {
        screen: BoardsScreen,
    },
    Pins: {
        screen: PinsScreen,
    },
});

const Body: React.FC<BodyProps> = ({ boards }) => {
    const [boardId, setBoardId] = useState<string>('');
    return <BoardsScreen boards={boards} setBoardId={setBoardId} />;
};

export default Body;
