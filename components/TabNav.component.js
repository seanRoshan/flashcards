import React, {Component} from 'react';
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DeckListComponent from "../Views/DeckList.component";
import {ORANGE, WHITE} from "../utils/colors";
import AddDeckComponent from "../Views/AddDeck.component";
import {Platform} from 'react-native';

class TabNavComponent extends Component {
    render() {
        const Tabs =
            Platform.OS === "ios"
                ? createBottomTabNavigator()
                : createMaterialTopTabNavigator();

        return (
            <Tabs.Navigator
                initialRouteName="Decks"
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        switch (route.name) {
                            case "Decks": {
                                return <MaterialCommunityIcons name="cards-outline" size={size} color={color}/>
                            }
                            case "Add Deck": {
                                return <FontAwesome name="plus-square" size={size} color={color}/>
                            }
                            default:
                                return ""
                        }
                    }
                })}
                tabBarOptions={{
                    header: null,
                    activeTintColor: WHITE,
                    showIcon: Platform.OS === "ios",
                    indicatorStyle: {
                        backgroundColor: WHITE,
                    },
                    style: {
                        height: Platform.OS === "ios" ? 80 : 50,
                        backgroundColor: ORANGE,
                        shadowColor: "rgba(0, 0, 0, 0.24)",
                        shadowOffset: {
                            width: 0,
                            height: 3
                        },
                        shadowRadius: 6,
                        shadowOpacity: 1
                    }
                }}
            >
                <Tabs.Screen name="Decks" component={DeckListComponent}/>
                <Tabs.Screen name="Add Deck" component={AddDeckComponent}/>
            </Tabs.Navigator>
        );
    }
}

export default TabNavComponent;
