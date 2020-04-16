import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Dimensions} from 'react-native'
import DeckListComponent from "./DeckList.component";
import {ORANGE, WHITE} from "../utils/colors";
import TabNavComponent from "./TabNav.component";
import DeckCardDetailComponent from "./DeckCardDetail.component";

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
                    headerTintColor: WHITE,
                    headerStyle: {
                        backgroundColor: ORANGE,
                    },
                    headerTitleStyle: {width: Dimensions.get("window").width}
                }}/>
        </Stack.Navigator>
    );
}

export default MainNavComponent;
