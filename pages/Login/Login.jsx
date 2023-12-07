import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { COLORS, FontSizes, Spacing } from '../../configs/styles'
import ImageIcon from '../../components/ImageIcon'

export default function Login({navigation}) {
  return (
    <View style={{
        justifyContent:"space-between",
        flex:1,
        backgroundColor:"#ffffff",
        paddingVertical:Spacing.xl,
        paddingHorizontal:Spacing.md
        
    }}>
        <View>
        <Text style={
            {
                fontSize:FontSizes.xl
            }
        }>Login</Text>
        <Text style={
            {
                marginTop:Spacing.xl,
                fontSize:FontSizes.sm,
                fontWeight:"300"
            }
        }>Hello there 👋 !!</Text>
        <Text style={
            {
                fontSize:FontSizes.md,
                fontWeight:"500"
            }
        }>welcome Back</Text>
        </View>
        
        <View>
        <View style={
            {
                justifyContent:"flex-end",
                alignItems:"flex-end"
            }
        }>
        <Text style={
            {
                marginTop:Spacing.xl,
                fontSize:FontSizes.lg
            }
        }>By,</Text>
        <Text style={
            {
                fontSize:FontSizes.xsm,

            }
        }>Email & Password</Text>
        </View>
            <TextInput style={
                {
                    borderColor:'#000000',
                    borderBottomWidth:1,
                    fontSize:FontSizes.xsm,
                    padding:Spacing.sm
                }
            } placeholder='Email' value='' onChangeText={()=>{}} onChange={()=>{}}  keyboardType='email-address'/>
            <TextInput style={
                {
                    borderColor:'#000000',
                    borderBottomWidth:1,
                    fontSize:FontSizes.xsm,
                    padding:Spacing.sm
                }
            } placeholder='Password' value='' onChangeText={()=>{}} onChange={()=>{}} />
            <View style={{
                flexDirection:"row",
                alignItems:"center"
            }}>
            <Text style={{fontSize:FontSizes.xsm, padding:Spacing.xsm, color:COLORS.gray}}>forgot password?</Text>
            <TouchableOpacity><Text style={{color:COLORS.black,fontWeight:"800"}}>Reset Password</Text></TouchableOpacity>
            </View>
        </View>      
        
        <View>
        <TouchableOpacity style={{
            backgroundColor:COLORS.primary,
            alignSelf:"center",
            paddingHorizontal:Spacing.xxxl,
            paddingVertical:Spacing.sm,
            borderRadius:Spacing.sm
        }}>
            <Text style={{
                fontSize:FontSizes.xsm,
                fontWeight:"500"
            }}>Login</Text>
        </TouchableOpacity>
        <View style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                margin:Spacing.md
            }}>
        <Text style={{fontSize:FontSizes.xsm, color:COLORS.gray}}>dont have an account? </Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("Signup")
        }}><Text style={{color:COLORS.black,fontWeight:"800"}}>Sign Up</Text></TouchableOpacity>

        </View>
        </View>

        <View style={{
            padding:Spacing.xl
        }}>
        <Text style={{ textAlign:"center",fontSize:FontSizes.xsm, padding:Spacing.xsm,fontWeight:"800", color:COLORS.black}}>or, <Text style={{fontWeight:"normal",color:COLORS.gray}}>continue with</Text></Text>
        <View style={
            {
                justifyContent:"center",
                alignItems:"center",
                gap:Spacing.xl,
                flexDirection:"row"
            }
        }>
        <ImageIcon path={require("../../assets/Icons/google.png")} />
        <ImageIcon path={require("../../assets/Icons/facebook.png")} />
        </View>
        </View>
        
    </View>
  )
}
