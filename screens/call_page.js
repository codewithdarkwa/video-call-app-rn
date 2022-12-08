import {View} from 'react-native';
import ZegoUIKitPrebuiltCall, {GROUP_VOICE_CALL_CONFIG} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import { useNavigation } from '@react-navigation/native';

export default function CallPage() {
  randomUserID = String(Math.floor(Math.random() * 100000))

const navigation = useNavigation();
  return (
      <View style={{flex: 1}}>
          <ZegoUIKitPrebuiltCall
            appID={1638232801}
            appSign='a9ccfd452c3e48c960255681a4a7c01e6f5aeedadb8330b92c999849da22acfc'
            userID={"codewithdarkwa"}
            userName={'user_'+randomUserID}

            config={{
              ...GROUP_VOICE_CALL_CONFIG,
              onHangUp: () => {navigation.navigate('Home')},
            }}
          />
      </View>
  )
}