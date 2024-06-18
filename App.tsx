import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';

// Components
import NavBar from './components/navBar/NavBar';
import Recipes from './screens/recipes/Recipes';
import NewRecipe from './screens/calendar/Calendar';

import { styles } from './appStyles.tsx';
import AddNewButton from './screens/newRecipe/AddNewButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import Auth from './screens/auth/Auth.tsx';

enableScreens();

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
    const [boards, setBoards] = useState<object[]>([]);

    return (
        <NavigationContainer>
            <SafeAreaView style={styles.container}>
                {!boards.length ? (
                    <Auth setBoards={setBoards} />
                ) : (
                    <Tab.Navigator tabBar={(props) => <NavBar {...props} />}>
                        <Tab.Screen
                            name="Recipes"
                            children={() => <Recipes boards={boards} />}
                            options={{
                                headerRight: () => <AddNewButton />,
                            }}
                        />
                        <Tab.Screen name="Calendar" component={NewRecipe} />
                        <Tab.Screen name="Groceries" component={NewRecipe} />
                    </Tab.Navigator>
                )}
            </SafeAreaView>
        </NavigationContainer>
    );
}

export default App;
