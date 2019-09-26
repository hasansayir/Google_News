import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity, Platform,  } from 'react-native';
import Constants from 'expo-constants';

export default class Home extends React.Component {

static navigationOptions={
title:"Ana Sayfa",
}
  

    fncOpenKategori=() =>{
     this.props.navigation.navigate('kategori');
    }

  render() {
    return (
      
      <View style={styles.container}>
      
        <Image style={styles.imageStyle} source={require('./assets/resim.jpg') } />
        <TouchableOpacity onPress={ this.fncOpenKategori }> 

          {Platform.OS === ('android' || Platform.OS === 'ios') &&
           <Text style={styles.btn}>Kategoriler</Text>
          }

        </TouchableOpacity>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    
    padding: 8,
  },


btn: {
  width:'100%',
  padding: 10,
  fontSize: 30,
  textAlign:'center',
  borderWidth:1,
  borderColor: '#fa0202',
  backgroundColor: '#fa0223',
  borderRadius:10,
  marginTop:Platform.OS==='ios' ? 10:20,

},
 imageStyle:{
   width:400,
   height:100,
   marginTop:5,
   borderRadius:20,

 }
});