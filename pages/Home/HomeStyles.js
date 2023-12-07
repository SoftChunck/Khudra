import { StyleSheet } from "react-native";
import { COLORS } from "../../configs/styles";

const HomeStyles = StyleSheet.create({
    conatiner:{
        marginTop:20,
        flex:1,
        backgroundColor: COLORS.background,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        color:COLORS.text,
        paddingHorizontal:15
    },
    topText:{
        fontSize:32,
        fontWeight:"bold",
    }
})

export default HomeStyles;