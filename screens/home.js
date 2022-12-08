import { View,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
           <Button title='Make a call' onPress={()=>navigation.navigate('callpage')}/> 
        </View>
    )
}