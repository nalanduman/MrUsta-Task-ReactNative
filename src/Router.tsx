import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './types';

import Login from './screens/Login';
import JobsList from './screens/JobsList';
import JobDetails from './screens/JobDetails';

function Router() {
    const Stack = createStackNavigator<RootStackParamList>();

    const [auth, setAuth] = useState()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        getToken()
    }, [])

    async function getToken() {
        const auth = await EncryptedStorage.getItem("AUTH")
        console.log("AUTH: ", auth)
        //  @ts-ignore
        setAuth(auth)
        setLoading(true)
    }

    return (
        <NavigationContainer>
            {loading ?
                <Stack.Navigator headerMode="none">
                    {auth == "true" ?
                        <>
                            <Stack.Screen name="JobsList" component={JobsList} />
                            <Stack.Screen name="JobDetails" component={JobDetails} />
                        </>
                        :
                        <Stack.Screen name="Login" component={Login} />
                    }
                </Stack.Navigator>
                :
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#E3562A" />
                </View>
            }
        </NavigationContainer>
    )
}

export default Router