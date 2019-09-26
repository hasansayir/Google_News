import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default class Haberler extends React.Component {



  render() {
    const item=this.props.navigation.getParam("item",null);

    return (
      <View style={styles.container}>
      <ScrollView>
            <Text style={styles.title,{textAlign:'left',fontSize:20}}>Kaynak: {item.author}</Text>
           <Image style={styles.title1} source={{uri:item.urlToImage}}/>
           
           
           <Text style={styles.title,{textAlign:'left',fontSize:20, fontWeight:'bold', }}>{item.description} </Text>
           <Text style={styles.title,{textAlign:'left',fontSize:15, fontWeight:'italic', }}>{item.content} </Text>

           <Text style={styles.title,{textAlign:'left',fontSize:15,  }}>{item.publishedAt} </Text>
         
      </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fcfafb',
    padding: 8,
  },
 title:{
     fontSize:20,
     textAlign:'center',
 },
   title1:{
     fontSize:200,
     textAlign:'center',
     width:"100%",
     height:200,
     marginTop:5
     
 },
 
 
});