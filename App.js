import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navbar from "./src/components/Gallery/Navbar/Navbar";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import ListPhotos from "./src/components/Gallery/ListPhotos/ListPhotos";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from "./src/components/Gallery/Gallery";
import FullSizePhoto from "./src/components/FullSizePhoto/FullSizePhoto";

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Gallery">
                    <Stack.Screen name="Gallery" component={Gallery}/>
                    <Stack.Screen name="Photo">
                        {props => {
                            return <FullSizePhoto link={props.route.params}/>
                        }}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};


export default App;
