import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
export default function Product({product}) {
    return(
        <View style={{
            borderRadius:20,
            padding:15,
            borderColor:'#E5E5E5',
            borderWidth:1,
            margin:15
        }}>
            <Image 
             style={{
                width:91,
                height:91
             }}
             source={product.image} />
            <Text style={{
                fontSize:20,
                fontWeight:'bold'
            }}>{product.name}</Text>
            <Text style={{
                fontSize:12,
                fontWeight:'normal',
                color:"#BDBDBD"
            }}>by weight {product.weight}</Text>
            <View style={{
                marginTop:10,
                flexDirection:'row',
                alignItems:"center",
                justifyContent:'space-between'
            }}>
                <Text style={{
                fontSize:19,
                fontWeight:'bold'
            }}>${product.price}</Text>
            <TouchableOpacity style={{
                borderRadius:10,
                padding:5,
                borderColor:'#E5E5E5',
                borderWidth:1
            }}>
                <AntDesign name="plus" size={20} color="black" />
            </TouchableOpacity>
            </View>
        </View>
    );
}