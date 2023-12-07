import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { COLORS, FontSizes, Spacing } from '../../configs/styles'
import ImageIcon from '../../components/ImageIcon'

export default function SignUp({navigation}) {
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
        }>SignUp</Text>
        <Text style={
            {
                marginTop:Spacing.xl,
                fontSize:FontSizes.sm,
                fontWeight:"300"
            }
        }>welcome 👋</Text>
        <Text style={
            {
                fontSize:FontSizes.md,
                fontWeight:"500"
            }
        }>become a Member</Text>
        </View>
        
        <View>
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            gap:Spacing.xl
        }}>
            <View style={{
                flex:1
            }}>
                <TextInput style={
                {
                    borderColor:'#000000',
                    borderBottomWidth:1,
                    fontSize:FontSizes.xsm,
                    padding:Spacing.sm
                }
            } placeholder='First Name' value='' onChangeText={()=>{}} onChange={()=>{}} />
            <TextInput style={
                {
                    borderColor:'#000000',
                    borderBottomWidth:1,
                    fontSize:FontSizes.xsm,
                    padding:Spacing.sm
                }
            } placeholder='Last Name' value='' onChangeText={()=>{}} onChange={()=>{}} />
                
            </View>
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
        }>Just,</Text>
        <Text style={
            {
                fontSize:FontSizes.xsm,

            }
        }>one step away</Text>
        </View>

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
            }
            placeholder='Password' value='' onChangeText={()=>{}} onChange={()=>{}} />
            <View style={{
                flexDirection:"column",
                alignItems:"flex-start",
                justifyContent:"flex-start",
                marginTop:5
            }}>
            <Text style={{fontSize:FontSizes.xxsm, color:COLORS.gray}}><Image source={require("../../assets/Icons/done.png")} /> 8 character long</Text>
            <Text style={{fontSize:FontSizes.xxsm, color:COLORS.gray}}><Image source={require("../../assets/Icons/done.png")} /> capital and small latters</Text>
            <Text style={{fontSize:FontSizes.xxsm, color:COLORS.gray}}><Image source={require("../../assets/Icons/done.png")} /> numbers and special characters $%#...</Text>
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
            }}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                margin:Spacing.md
            }}>
        <Text style={{fontSize:FontSizes.xsm, color:COLORS.gray}}>already have an account? </Text>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Login")
        }}><Text style={{color:COLORS.black,fontWeight:"800"}}>Login</Text></TouchableOpacity>

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
