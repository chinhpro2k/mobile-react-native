import { HEIGHT, WIDTH, getFontSize, getHeight } from '@/Config'
import { Text, View, Pressable } from 'native-base'
import React from 'react'
import R from '@/Assets/R'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { reset } from '@/Navigators/navigationServices'
import ScreenName from '@/Navigators/screenNames'

const OhNo = props => {
  const { resetError } = props
  return (
    <View>
      <View
        backgroundColor="error.500"
        height={getHeight() * 0.4}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <AntDesign
          size={WIDTH(80)}
          name={'closecircleo'}
          color={R.colors.white100}
        />
      </View>
      <Text
        alignSelf={'center'}
        marginTop={HEIGHT(40)}
        fontWeight={'semibold'}
        fontSize={getFontSize(24)}
      >
        Oh no!
      </Text>
      <Text
        alignSelf={'center'}
        marginTop={HEIGHT(12)}
        fontWeight={'normal'}
        fontSize={getFontSize(20)}
        numberOfLines={5}
        textAlign={'center'}
        width={WIDTH(200)}
      >
        {"Your invitation \ncouldn't be sent out!"}
      </Text>
      <Pressable
        alignSelf={'center'}
        width={WIDTH(200)}
        backgroundColor={'error.500'}
        alignItems={'center'}
        justifyContent={'center'}
        height={HEIGHT(40)}
        borderRadius={'3xl'}
        marginTop={HEIGHT(40)}
        onPress={() => {
          resetError && resetError()
          setTimeout(() => {
            reset(ScreenName.TabMain)
          }, 300)
        }}
      >
        <Text color={'white'} bold fontSize={getFontSize(16)}>
          Go back
        </Text>
      </Pressable>
    </View>
  )
}

export default OhNo
