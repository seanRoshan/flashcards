import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ORANGE, WHITE} from "../utils/colors";
import TabNavComponent from "./TabNav.component";
import DeckCardDetailComponent from "../Views/DeckCardDetail.component";
import AddCardComponent from "../Views/AddCard.component";
import QuizComponent from "../Views/Quiz.component";

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
            <Stack.Screen
                name="AddCard"
                component={AddCardComponent}
                options={{
                    title: "Add Card",
                    headerTintColor: WHITE,
                    headerStyle: {
                        backgroundColor: ORANGE,
                    },
                    headerStatusBarHeight: 0,
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name="Quiz"
                component={QuizComponent}
                options={{
                    title: "Quiz",
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
