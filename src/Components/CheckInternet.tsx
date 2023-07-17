/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useToast } from 'native-base'

// config
import { showToast } from '@/Config'

// components
import Toast from './Toast'

const CheckInternet = () => {
  const toast = useToast()

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        showToast(
          toast,
          <Toast
            type="error"
            content="No internet connection. Please try again!"
          />,
          'top',
        )
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return null
}

export default CheckInternet
