import React from 'react'
import axios from 'axios'
import { Alert } from 'react-native'

const errorHandler = (error) => {
  Alert.alert(
    'Error !',
    'Something wrong, please try again.',
    [
      {
        text: 'OK',
        onPress: () => true,
        style: 'OK',
      },
    ],
    { cancelable: false },
  );
}

export const configAxios = () => {
  axios.interceptors.request.use(async (config) => {
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  axios.interceptors.response.use(
    response => response,
    errorHandler
  );
}
