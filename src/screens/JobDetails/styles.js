import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DEFAULT_HEIGHT_SIZE, WIDTH } from '../../utils/constant';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    header: {
        fontSize: RFValue(30, DEFAULT_HEIGHT_SIZE),
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: RFValue(30, DEFAULT_HEIGHT_SIZE),
        color: '#E3562A'
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: WIDTH / 15,
    },
    leftImage: {
        height: RFValue(20, DEFAULT_HEIGHT_SIZE),
        width: RFValue(20, DEFAULT_HEIGHT_SIZE),
        resizeMode: 'contain',
        tintColor: '#3C3A36',
        marginRight: WIDTH / 15
    },
    title: {
        color: '#E3562A',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: RFValue(30, DEFAULT_HEIGHT_SIZE),
        paddingRight: WIDTH / 15,
        flex: 1
    },
    container2: {
        paddingHorizontal: WIDTH / 15
    },
    date: {
        textAlign: 'right',
        marginBottom: RFValue(10, DEFAULT_HEIGHT_SIZE)
    },
    image: {
        width: WIDTH / 5,
        height: WIDTH / 5,
        marginVertical: RFValue(3, DEFAULT_HEIGHT_SIZE),
        borderRadius: 100,
        alignSelf: 'flex-end',
    },
    customerText: {
        textAlign: 'right'
    },
    locationText: {
        fontWeight: 'bold',
        marginTop: RFValue(20, DEFAULT_HEIGHT_SIZE)
    },
    dateText: {
        fontWeight: 'bold',
        marginTop: RFValue(20, DEFAULT_HEIGHT_SIZE)
    },

})