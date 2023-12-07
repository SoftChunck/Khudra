import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home/Home';
import { SafeAreaView } from 'react-native-web';
import Login from './pages/Login/Login';
import { COLORS, Spacing } from './configs/styles';
import Topbar from './components/Topbar';
import SignUp from './pages/SignUp/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      {/* <View style={
            {
              flex:1,
              background:"#ffffff",
              justifyContent:'flex-start',
              alignContent:'flex-start',
              paddingVertical:Spacing.xl,
              paddingHorizontal:Spacing.md
            }
          }> 
            <StatusBar 
            style={
              {
                background:"#ffffff"
              }
            }
            />
            {/* <Home /> */}
            {/* <SignUp /> */}
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Signup" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

