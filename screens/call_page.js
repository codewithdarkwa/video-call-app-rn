import React,{Component} from 'react';
import ZegoUIKitPrebuiltCall, {GROUP_VIDEO_CALL_CONFIG} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {View} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function CallPage() {

const navigation = useNavigation();

  return (
      <View style={{flex: 1}}>
          <ZegoUIKitPrebuiltCall
            appID={1638232801}
            appSign='a9ccfd452c3e48c960255681a4a7c01e6f5aeedadb8330b92c999849da22acfc'
            userID={"1234"} //userID can be something like phone number or the user id on your own user system.
            userName={'codewithdarkwa'}
            callID ={'darkwa_01'} //CallID can be any unique string.

            config={{
              //You can also use ONE_ON_ONE_VIDEO_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG  to make more types of calls
              ...GROUP_VIDEO_CALL_CONFIG,
             
              onHangUp: () => {navigation.navigate('home')},
            }}
          />
      </View>
  )
}