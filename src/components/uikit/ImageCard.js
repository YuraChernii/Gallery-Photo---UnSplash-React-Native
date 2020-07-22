import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { w } from '../../../constants'

const styles = StyleSheet.create({
    container: {
        width: w / 2.1,
paddingVertical:10,

    },
    sub: {
        padding: 10,
        shadowColor: '#000',
        //borderRadius: 8,
        //backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4
    },
    h1: {
        //paddingTop: 10,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,

    },
    h2: {
        //paddingTop: 10,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 10,

    },
    cover: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10
    }
})

const ImageCard = ({data, onPress}) => {
    const {sub, container, h1, cover, h2 } = styles
    const { urls, user } = data
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={container}>
            <View style={sub}>
                <Image style={cover} source={{ uri: urls.raw }} />
            </View>

            <Text style={h1}>{user.username}:</Text>
            <Text style={h2}>{data.alt_description}</Text>
        </View>
        </TouchableOpacity>
    )
}


export { ImageCard }