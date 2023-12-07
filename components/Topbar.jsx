import { View } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Spacing } from "../configs/styles";

export default function Topbar() {
    return(
        <View style={{
            justifyContent:'space-between',
            paddingVertical:Spacing.sm,
            flexDirection:"row",
            width:'100%'
        }}>
            <FontAwesome name="angle-left" size={24} color="black" />
            {/* <Entypo name="menu" size={24} color="black" /> */}
            {/* <MaterialCommunityIcons name="face-man-profile" size={24} color="black" /> */}
        </View>
    );
}