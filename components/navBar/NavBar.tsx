import React from 'react';

// Native components
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faUtensils,
    faCalendar,
    faBasketShopping,
} from '@fortawesome/free-solid-svg-icons';

// Styles
import { styles } from './navBarStyles';

const icons = [faUtensils, faCalendar, faBasketShopping];

const NavBar: React.FC<BottomTabBarProps> = ({
    state,
    descriptors,
    navigation,
}) => {
    return (
        <View style={styles.container}>
            {state?.routes?.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.iconWrapper}
                    >
                        <FontAwesomeIcon
                            icon={icons[index]}
                            size={25}
                            style={
                                isFocused
                                    ? styles.activeIcon
                                    : styles.inactiveIcon
                            }
                        />
                        <Text
                            style={
                                isFocused
                                    ? styles.iconNameActive
                                    : styles.iconNameInactive
                            }
                        >
                            {label.toString()}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default NavBar;
