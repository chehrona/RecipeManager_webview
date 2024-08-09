import React, { useState, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';

// Components
import NavBar from './components/navBar/NavBar';
import Recipes from './screens/recipes/Recipes';
import NewRecipe from './screens/calendar/Calendar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Auth from './screens/auth/Auth';
import { Board } from './interfaces';

import { styles } from './appStyles';

enableScreens();

const Tab = createBottomTabNavigator();

// 1. Create Context
const GlobalData = createContext({
    title: 'Boards',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setTitle: (title: string) => {},
});

// 2. Custom hook to use the context
export const useGlobal = () => useContext(GlobalData);

function App(): React.JSX.Element {
    const [boards, setBoards] = useState<Board[]>([]);
    const [title, setTitle] = useState<string>('Boards');
    const [loading, setLoading] = useState<boolean>(false);

    return (
        // 3. Provide the context to the entire app
        <GlobalData.Provider value={{ title, setTitle }}>
            <NavigationContainer>
                <SafeAreaView style={styles.container}>
                    {!boards.length ? (
                        <Auth setBoards={setBoards} setLoading={setLoading} />
                    ) : (
                        <Tab.Navigator
                            tabBar={(props) => <NavBar {...props} />}
                        >
                            <Tab.Screen
                                name="Recipes"
                                options={{
                                    headerShown: false,
                                }}
                            >
                                {() => (
                                    <Recipes
                                        boards={boards}
                                        loading={loading}
                                    />
                                )}
                            </Tab.Screen>
                            <Tab.Screen name="Calendar" component={NewRecipe} />
                            <Tab.Screen
                                name="Groceries"
                                component={NewRecipe}
                            />
                        </Tab.Navigator>
                    )}
                </SafeAreaView>
            </NavigationContainer>
        </GlobalData.Provider>
    );
}

export default App;
