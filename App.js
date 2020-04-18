import React, {Component} from 'react';
import {View} from 'react-native';
import {ORANGE} from "./utils/colors";
import AppStatusBarComponent from "./components/AppStatusBar.component";
import {createStore} from "redux";
import reducer from './reducers';
import middleware from './middlewares';
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import MainNavComponent from "./components/MainNav.component";
import {setLocalNotifications} from "./utils/helpers";


export default class App extends Component {

    componentDidMount() {
        setLocalNotifications();
    }

    render() {
        return (
            <Provider store={createStore(reducer, middleware)}>
                <View style={{flex: 1}}>
                    <NavigationContainer>
                        <AppStatusBarComponent backgroundColor={ORANGE}/>
                        <MainNavComponent/>
                    </NavigationContainer>
                </View>
            </Provider>
        );
    }


}
