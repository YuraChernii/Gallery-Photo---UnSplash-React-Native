import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Button } from 'react-native'
import  {Header, ImageCard,Layout} from '../components/uikit'
import {h, w} from '../../constants'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {STARGATE_DETAILS} from "../route";




const url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'



export default class HomeScr extends Component {
    state = {
        title: 'STAR GATE',
        data: []
    }

    componentDidMount = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            this.setState({ data })
        } catch (e) {
            console.warn('e', e) // eslint-disable-line
            throw e
        }
    }


    render() {
        const { title, data } = this.state
        const {navigation}=this.props

        return (
            <View>

                <Header />
                <ScrollView>
                    <Layout>
                        {data.map(item=>(

                            <ImageCard
                                data={item}
                                key={item.id}
                            onPress={()=>navigation.navigate(STARGATE_DETAILS, (item))}

                            />
                        ))}
                    </Layout>
                </ScrollView>
            </View>

        )
    }
}
