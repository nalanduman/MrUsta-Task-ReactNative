import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import JobsList from './screens/JobsList';
import JobDetails from './screens/JobDetails';

function Router() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Login" component={Login} />
                {/* <Stack.Screen name="JobsList" component={JobsList} />
                <Stack.Screen name="JobDetails" component={JobDetails} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router