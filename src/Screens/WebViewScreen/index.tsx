import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormDV1Cua from '@/Components/Form/DynamicForm'
import { HEIGHT, getWidth } from '@/Config'
import HeaderBase from '@/Components/Header/HeaderBase'
import ButtonBase from '@/Components/Button'
import { WebView } from 'react-native-webview'
const WebViewScreen = (props: any) => {
  const url = props?.route?.params?.url
  const title = props?.route?.params?.title
  return (
    <View style={{ flex: 1 }}>
      <HeaderBase title={title ?? ''} />
      <WebView
        source={{
          uri: url,
        }}
        // scalesPageToFit={true}
        ignoreSslError={true}
        style={{ width: getWidth() }}
        pullToRefreshEnabled
        showsVerticalScrollIndicator={false}
        bounces={false}
        injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
        scalesPageToFit={false}
      />
    </View>
  )
}

export default WebViewScreen

const styles = StyleSheet.create({
  formContainer: { marginTop: HEIGHT(16) },
})
