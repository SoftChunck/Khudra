import { FlatList, ScrollView, Text, View } from "react-native";
import HomeStyles from "./HomeStyles";
import Topbar from "../../components/Topbar";
import Product from "../../components/Product";

export default function Home() {
    const productsList = [
        {
            name:'Banana',
            price:12.3,
            weight:'10kg',
            image:require('../../assets/Fruits/banana.png')
        },
        {
            name:'Cabbage',
            price:10,
            weight:'10kg',
            image:require('../../assets/Fruits/Cabadge.png')
        },
        {
            name:'Tomatto',
            price:10,
            weight:'10kg',
            image:require('../../assets/Fruits/Tomato.png')
        },
        {
            name:'Potato',
            price:10,
            weight:'10kg',
            image:require('../../assets/Fruits/Potato.png')
        },
        {
            name:'Egg Plant',
            price:10,
            weight:'10kg',
            image:require('../../assets/Fruits/Aswad.png')
        },
        {
            name:'Lettuce',
            price:10,
            weight:'10kg',
            image:require('../../assets/Fruits/Khass.png')
        },
    ] 
    return(
        <View style={HomeStyles.conatiner}>
            <Text style={HomeStyles.topText}>Fruits & {'\n'}Vegitables</Text>     
            <View style={
                {
                    justifyContent:"center",
                    alignItems:"center"
                }
            }>
            <FlatList 
            data={productsList}
            renderItem={({item,index})=>(
                <Product product={item} key={index} />
            )}
            numColumns="2"
            
            />
            </View>
        </View>
    );
}