import React, {Component} from 'react';
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DeckListComponent from "./DeckList.component";
import {ORANGE, WHITE} from "../utils/colors";

class TabNavComponent extends Component {
    render() {
        const Tabs =
            Platform.OS === "ios"
                ? createBottomTabNavigator()
                : createMaterialTopTabNavigator();

        return (
            <Tabs.Navigator
                initialRouteName="AddEntry"
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        switch (route.name) {
                            case "Add Entry": {
                                return <FontAwesome name="plus-square" size={size} color={color}/>
                            }
                            case "History": {
                                return <Ionicons name="ios-bookmarks" size={size} color={color}/>
                            }
                            case "Live": {
                                return <Ionicons name="ios-speedometer" size={size} color={color}/>
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
                <Tabs.Screen name="Add Entry" component={DeckListComponent}/>
                <Tabs.Screen name="History" component={DeckListComponent}/>
                <Tabs.Screen name="Live" component={DeckListComponent}/>
            </Tabs.Navigator>
        );
    }
}

export default TabNavComponent;
