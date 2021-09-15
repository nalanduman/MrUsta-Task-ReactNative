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
    itemContainer: {
        width: WIDTH / 1.1,
        marginVertical: RFValue(10, DEFAULT_HEIGHT_SIZE),
        alignSelf: 'center',
        borderRadius: 10,
        padding: RFValue(10, DEFAULT_HEIGHT_SIZE),
        borderColor: '#E3562A',
        borderWidth: 1
    },
    itemImage: {
        width: WIDTH / 1.1,
        height: 100,
        resizeMode: 'contain',
        marginVertical: RFValue(3, DEFAULT_HEIGHT_SIZE)
    },
    itemTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E3562A',
        marginVertical: RFValue(3, DEFAULT_HEIGHT_SIZE)
    },
    itemDate: {
        textAlign: 'right',
        marginVertical: RFValue(3, DEFAULT_HEIGHT_SIZE)
    },
    itemText: {
        marginVertical: RFValue(3, DEFAULT_HEIGHT_SIZE)
    },
    sortImage: {
        width: RFValue(20, DEFAULT_HEIGHT_SIZE),
        height: RFValue(20, DEFAULT_HEIGHT_SIZE),
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        marginRight: WIDTH / 15,
        marginVertical: RFValue(20, DEFAULT_HEIGHT_SIZE)
    }
})