import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DEFAULT_HEIGHT_SIZE, WIDTH } from '../../utils/constant';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    image: {
        width: WIDTH / 1.09,
        height: WIDTH / 1.09,
        resizeMode: 'contain'
    },
    header: {
        fontSize: RFValue(30, DEFAULT_HEIGHT_SIZE),
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: RFValue(30, DEFAULT_HEIGHT_SIZE),
        color: '#E3562A'
    }
})