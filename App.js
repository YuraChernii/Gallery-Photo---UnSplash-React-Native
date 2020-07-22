import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import  {Header, ImageCard} from './src/components/uikit'
import {h, w} from './constants'
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';



const url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0' // на github проблемы c запросом, поэтому ссылку поменял
//const url ='https://www.youtube.com/redirect?event=video_description&v=MHCrQExp3S4&q=https%3A%2F%2Fgitlab.com%2FgHashTag%2Freact-native-init%2Fraw%2Fmaster%2Fdb.json&redir_token=QUFFLUhqbHNuOFlkVzRWR1VId0FIdVhZelB6Zk5lWHU2UXxBQ3Jtc0tsakJVcXZSUklWZXhwWUY3clJfRkV2bklhLWhjM0daT21xMWJ3TFF0dm5wNjZpSjZ4ZFVuWkNuczFRVHNWMzNzN29WM1hyX1M1ckRlSTNWWkVjY2o0ZjYtV2llMjFDU1hWYjJFVUpVYzFFZTZyWFlPVQ%3D%3D'
//const Stack = createStackNavigator();

export default class App extends Component {
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
        console.log('state', this.state)
        return (

            <View>
                HomeScr
                <Header title={title} />
                <ScrollView>
                    <View style={styles.container}>
                        {data.map(item=>(
                            <ImageCard data={item} key={item.id}/>
                        ))}
                    </View>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
        container:{
            marginTop:30,
            flexDirection:'row',
            flexWrap:'wrap',
            flexShrink:2,
            justifyContent:'space-around',
            marginBottom:150,
        }
    }
)