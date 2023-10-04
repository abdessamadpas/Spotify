import { View, Text , Image,StyleSheet } from 'react-native'
import React from 'react'
import { Track } from '../constants/types'
import {tracks } from '../assets/data/tracks'
import { Ionicons } from '@expo/vector-icons'
    const track = tracks[3]

const Player = () => {
    if (!track) {
        return null
    }
  return (
    <View style={styles.container}>
        <View style = {styles.player}>
            <View>
                <Image style={styles.image} source={{uri : track.album.images[0].url}} />
            </View>
            <View style={{flex:1}}>
                <Text style={styles.title}>{track.name}</Text>
                <Text style={styles.subtitle}>{track.artists[0].name}</Text>
            </View>
            <Ionicons name="heart-outline" size={22} color="white" />
            <Ionicons name="play-circle" size={22} color="white" />
            
        </View>

  </View>
  )
}

export default Player

const styles = StyleSheet.create({
    container : {
        position : 'absolute',  
        top : -80,
        padding:10,
        gap : 20,
        height : 75,
        width : '100%',
        marginVertical : 5,
    },
    player:{
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : '#34615F',  
        padding:5,
        paddingRight : 10,
        borderRadius : 5,
        gap : 15
    },
    image : {
        width : 50,
        aspectRatio : 1,
        borderRadius : 5,
        height: "100%"
    },
    title : {
        color : 'white',
        fontSize : 16,
        fontWeight : 'bold',
    },
    subtitle : {
        color : 'lightgray',
        fontSize : 14,
    }
  })