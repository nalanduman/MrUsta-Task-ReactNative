import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EncryptedStorage from 'react-native-encrypted-storage';

import BasicButton from '../../components/BasicButton';
import BasicInput from '../../components/BasicInput';
import user from '../../api/user';
import { styles } from './styles';
import { LoginProps } from '../../types';

const Login: React.FC<LoginProps> = ({ navigation, route }) => {
    const [username, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    async function login() {
        const data = await user.postLogin("usta@test.com", "123123")
        if (data) {
            await EncryptedStorage.setItem("ACCESS_TOKEN", data.access_token)
            await EncryptedStorage.setItem("AUTH", JSON.stringify(true))
            navigation.navigate("JobsList")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Welcome</Text>

            <Image
                style={styles.image}
                source={require('../../assets/hello.png')}
            />

            <BasicInput
                value={username}
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