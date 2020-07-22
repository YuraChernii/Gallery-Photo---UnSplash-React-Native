import React, { PureComponent } from 'react'
import {Text, StyleSheet, View, ScrollView, Button, Image} from 'react-native'
import  {Header} from '../components/uikit'
import {w,h} from "../../constants";






export default class DatailsScr extends PureComponent {
    render() {
        //const { title, data } = this.props
        //const{alt_description} = this.props.navigation.state.params
        //const{navigation}=this.props
        //console.log('myyyyyyyy')
        //console.log('state', this.props.navigation.state.params)

        return (

            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.container}>
                    <Image
                        resizeMode="contain"
                        source={{ uri: this.props.navigation.state.params.urls.raw }}
                        style={styles.canvas} />
                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        position: 'relative'
    },
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    cover: {

        width: w ,
        height: h ,
        borderRadius: 10
    }
})