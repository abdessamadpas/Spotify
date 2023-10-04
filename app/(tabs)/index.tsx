import { StyleSheet } from 'react-native';
import {tracks} from '../../assets/data/tracks'
import { Text, View } from '../../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
import TrackListItem from '../../components/trackListItem';
import Player  from '../../components/player';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tracks}
        renderItem={({item})=>(
          <TrackListItem track={item}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'black',  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
