import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DEFAULT_HEIGHT_SIZE, WIDTH } from '../../utils/constant';

export const styles = StyleSheet.create({
    input: {
        borderRadius: 12,
        height: RFValue(56, DEFAULT_HEIGHT_SIZE),
        width: WIDTH / 1.09,
        borderWidth: 1,
        borderColor: '#F1F1FA',
        alignSelf: 'center',
        paddingHorizontal: WIDTH / 23.43,
        marginVertical: RFValue(12, DEFAULT_HEIGHT_SIZE)
    }
})