import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  View,
} from 'react-native'
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { HEIGHT, WIDTH } from '@/Config'
import R from '@/Assets/R'

const ImagesPicker = () => {
  const [anhDaiDien, setAnhDaiDien] = useState('')
  const [avatar, setAvatar] = useState('')
  const dispatch = useDispatch()
  const getAvatarUri = async () => {
    setAvatar('')
  }

  const launchImageLib = async () => {
    try {
      const options: any = {
        title: 'Select Image',
        //customButtons: [{ name: "customOptionKey", title: "Choose Photo from Custom Option" }],
        //noData: true,
        //quality: 0.1,
        includeBase64: true,
        // storageOptions: {
        //   skipBackup: true,
        //   path: "images",
        //   img: [
        //     {
        //       url: "",
        //       freeHeight: true,
        //     },
        //   ],
        // },
      }
      launchImageLibrary(options, (response): any => {
        if (!response?.didCancel && !response?.errorCode) {
          setAvatar(response?.assets[0]?.base64)
        }
      })
    } catch (error) {}
  }

  const avatarSource = avatar
    ? { uri: `data:image/gif;base64,${avatar}` }
    : R.images.defaultAvatar

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrapperImage}
        onPress={launchImageLib}
        activeOpacity={0.8}
      >
        <Image
          source={avatarSource}
          style={styles.imgAvatar}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  )
}

export default ImagesPicker

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: R.colors.primaryColor,
    borderWidth: WIDTH(1),
    height: WIDTH(168),
    justifyContent: 'center',
    // marginTop: HEIGHT(50),
    width: WIDTH(128),
  },
  imgAvatar: {
    // borderRadius: WIDTH(105) / 2,
    height: WIDTH(160),
    width: WIDTH(120),
  },
  wrapperImage: {
    alignItems: 'center',
    backgroundColor: R.colors.white,
    borderRadius: WIDTH(110) / 2,
    height: WIDTH(110),
    justifyContent: 'center',

    width: WIDTH(110),
  },
})
