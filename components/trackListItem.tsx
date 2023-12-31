import { View, Text , Image,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Track } from '../constants/types'
import { usePlayerContext } from '../providers/PlayerProvider'
type TrackProps = {
  track : Track
}

const TrackListItem = ({track} :TrackProps ) => {
  const { setTrack} = usePlayerContext();
  return (
    <Pressable onPress={()=>setTrack(track)} style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri : track.album.images[0].url}} />
      </View>
      <View>
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.subtitle}>{track.artists[0].name}</Text>
      </View>
    </Pressable>
  )
}

export default TrackListItem
const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
    padding:5,
    gap : 20,
    marginVertical : 5,
  },
  image : {
    width : 50,
    aspectRatio : 1,
    borderRadius : 5,
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