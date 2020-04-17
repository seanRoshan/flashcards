import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ORANGE, WHITE} from "../utils/colors";
import TabNavComponent from "./TabNav.component";
import DeckCardDetailComponent from "../Views/DeckCardDetail.component";

const Stack = createStackNavigator();


function MainNavComponent() {
    return (
        <Stack.Navigator headerMode="screen">
            <Stack.Screen
                name="Home"
                component={TabNavComponent}
                options={{
                    headerShown: false,
                }}/>
            <Stack.Screen
                name="DeckCardDetail"
                component={DeckCardDetailComponent}
                options={{
                    title: "",
                    headerTintColor: WHITE,
                    headerStyle: {
                        backgroundColor: ORANGE,
                    },
                    headerStatusBarHeight: 0,
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    );
}

export default MainNavComponent;
