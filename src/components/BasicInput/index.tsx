import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

interface BasicInputType extends TextInputProps {
    value: string;
    placeholder: string;
    type: "email" | "password" | "basic"
}

const BasicInput: React.FC<BasicInputType> = ({ value, type, placeholder, ...rest }) => {
    return (
        <TextInput
            {...rest}
            style={styles.input}
            value={value}
            secureTextEntry={type == "password" ? true : false}
            placeholder={placeholder}
            keyboardType={type == "email" ? "email-address" : "default"}
        />
    )
}

export default BasicInput