import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BasicButton from '../../components/BasicButton';
import BasicInput from '../../components/BasicInput';
import user from '../../api/user';
import { styles } from './styles';

const Login = () => {
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    async function login() {
        const data = await user.postLogin(userName, password)
        console.log("Login: ", data)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Welcome</Text>

            <Image
                style={styles.image}
                source={require('../../assets/hello.png')}
            />

            <BasicInput
                value={userName}
                type="email"
                placeholder="Username"
                onChangeText={(value) => setUserName(value)}
            />

            <BasicInput
                value={password}
                type="password"
                placeholder="Password"
                onChangeText={(value) => setPassword(value)}
            />

            <BasicButton
                title="Login"
                onPress={() => login()}
            />
        </SafeAreaView>
    )
}

export default Login