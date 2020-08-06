import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

import landingImg from '../../assets/images/landing.png'

function Landing() {
    return (
        <View>
            <Image source={landingImg} />
            <Text>ok</Text>
        </View>
    )
}

export default Landing