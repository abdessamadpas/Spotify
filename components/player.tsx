import { View, Text , Image,StyleSheet } from 'react-native'
import React from 'react'
import { Track } from '../constants/types'
import {tracks } from '../assets/data/tracks'
import { Ionicons } from '@expo/vector-icons'
import { usePlayerContext } from '../providers/PlayerProvider'
import { AVPlaybackStatus, Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio'

// const track = tracks[3]

const Player = () => {
    const { track } = usePlayerContext();
    const [sound, setSound] = React.useState< Sound|undefined>()
    const [status, setStatus] = React.useState(false);
   React.useEffect(() => {
        playSound();
    }, [track]);

    async function playSound() {
        if (!track?.preview_url) {
            return null
        }
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync({
            uri : track?.preview_url
            });
        setSound(sound);
        sound.setOnPlaybackStatusUpdate(OnPlaybackStatusUpdate);
        await sound.playAsync();
            
        console.log('Playing Sound track id :', track?.id );
        
        }
    const OnPlaybackStatusUpdate =( status: AVPlaybackStatus)=>{
        console.log('Playback Status Update', status);
        if (!status.isLoaded ) {
            return;
        }
        setStatus(status.isPlaying)
    }
    React.useEffect(() => {
        return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
            }
        : undefined;
    }, [sound]);
    if (!track) {
        return null
    }
     const onPlayPause = async () => {
        if (status) {
            await sound?.pauseAsync();
        }else{
            await sound?.playAsync();
        }
    }
  return (
    <View style={styles.container}>
        <View style = {styles.player}>
            <View>
                <Image style={styles.image} source={{uri : track?.album.images[0].url}} />
            </View>
            <View style={{flex:1}}>
                <Text style={styles.title}>{track?.name}</Text>
                <Text style={styles.subtitle}>{track?.artists[0].name}</Text>
            </View>
            <Ionicons  name="heart-outline" size={22} color="white" />
            <Ionicons onPress={onPlayPause} name={status ?"pause" :"play"}  size={22} color="white" />

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
        fontSize : 15,
        fontWeight : 'bold',
    },
    subtitle : {
        color : 'lightgray',
        fontSize : 12,
    }
  })