import 'react-native-gesture-handler';
import Home from './screens/home';
import CallPage from './screens/call_page';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
export default function App(){

  const Stack = createNativeStackNavigator();
  return(
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home}/>
      <Stack.Screen name="callpage" component={CallPage}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}