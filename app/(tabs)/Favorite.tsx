import {useState} from 'react'
import { StyleSheet } from 'react-native';
import {tracks} from '../../assets/data/tracks'
import { Text, View } from '../../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
import TrackListItem from '../../components/trackListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import {FontAwesome} from '@expo/vector-icons';
import { TextInput } from 'react-native';
export default function FavorateScreen() {
  const [search, setSearch] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <FontAwesome  name= 'search' size={16} color='gray'/>
        <TextInput value={search} 
          onChange={()=>setSearch("")}
        style={styles.searchBar} placeholder='search in favorites...'/>
        <Text> Cancel</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({item})=>(
          <TrackListItem track={item}/>
        )}
        showsVerticalScrollIndicator={false}
      />
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchBarContainer : {
    flexDirection : 'row',
    alignItems : 'center',
    gap : 10,
    width : '95%',
    padding : 10,
    borderRadius : 5,
    margin : 10,
  },
  searchBar : {
    flex : 1,
    backgroundColor : '#121314',
    padding : 3,
    borderRadius  : 5,
    color : 'white'

  }
});
