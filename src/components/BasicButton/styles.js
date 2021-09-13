import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { DEFAULT_HEIGHT_SIZE, WIDTH } from "../../utils/constant";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        height: RFValue(56, DEFAULT_HEIGHT_SIZE),
        width: WIDTH / 1.09,
        backgroundColor: '#E3562A',
        alignSelf: 'center',
        paddingHorizontal: WIDTH / 23.43,
        marginVertical: RFValue(8, DEFAULT_HEIGHT_SIZE),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: RFValue(20, DEFAULT_HEIGHT_SIZE)
    }
})