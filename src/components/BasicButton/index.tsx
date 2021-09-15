import React from 'react';
import { ButtonProps, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface BasicButtonType extends ButtonProps {
    title: string
}

const BasicButton: React.FC<BasicButtonType> = ({ title, ...rest }) => {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default BasicButton