import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import axios from "axios";

export default class Kategori extends React.Component {

static navigationOptions={
title:'Kategori Seç'
}
  

    fncOpenBusiness=() =>{
        
    const url="https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=48cc1876aa9f4b228a311427f9956e49"
       const data ={
        country:"tr",
        category:"business",
        apiKey:"48cc1876aa9f4b228a311427f9956e49"
      }
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
       this.props.navigation.navigate('detay',{url:url});
       
    
      })
    }

     fncOpenEntertainment=() =>{
      const url="https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=48cc1876aa9f4b228a311427f9956e49"
     const data={
         country:"tr",
         category:"entertainment",
         apiKey:"48cc1876aa9f4b228a311427f9956e49"

     } 
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
       this.props.navigation.navigate('detay',{url:url});
      
      })
    }
     fncOpenHealth=() =>{
      const url="https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=48cc1876aa9f4b228a311427f9956e49"
     const data={
         country:"tr",
         category:"health",
         apiKey:"48cc1876aa9f4b228a311427f9956e49"

     } 
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
       this.props.navigation.navigate('detay',{url:url});
      })
    }

     fncOpenScience=() =>{
      const url="https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=48cc1876aa9f4b228a311427f9956e49"
     const data={
         country:"tr",
         category:"science",
         apiKey:"48cc1876aa9f4b228a311427f9956e49"

     } 
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
      this.props.navigation.navigate('detay',{url:url});
      })
    }
     fncOpenSports=() =>{
      const url="https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=48cc1876aa9f4b228a311427f9956e49"
     const data={
         country:"tr",
         category:"sports",
         apiKey:"48cc1876aa9f4b228a311427f9956e49"

     } 
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
      this.props.navigation.navigate('detay',{url:url});
      })
    }
     fncOpenTechnology=() =>{
      const url="https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=48cc1876aa9f4b228a311427f9956e49"
     const data={
         country:"tr",
         category:"technology",
         apiKey:"48cc1876aa9f4b228a311427f9956e49"

     } 
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
       this.props.navigation.navigate('detay',{url:url});
      })
    }

  render() {
    return (
      <View style={styles.container}>
       <ScrollView keyboardShouldPersistTaps={'always'}>
       
       <TouchableOpacity onPress={this.fncOpenBusiness}> 
          <Text style ={[styles.txt,{borderWidth:5}]}>BUSINESS
          </Text>
          </TouchableOpacity>

         <TouchableOpacity onPress={this.fncOpenEntertainment}> 
          <Text style ={[styles.txt,{borderWidth:5}]}>ENTERTAIMEN 
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.fncOpenHealth}> 
          <Text style ={[styles.txt,{borderWidth:5}]}>HEALTH 
          </Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={this.fncOpenScience}> 
          <Text style ={[styles.txt,{borderWidth:5}]}>SCIENCE 
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.fncOpenSports}> 
          <Text style ={[styles.txt,{borderWidth:5}]}>SPORTS 
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.fncOpenTechnology}> 
          <Text style ={[styles.txt,{borderWidth:5}]}>TECHNOLOGY 
          </Text>
          </TouchableOpacity>
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
    
    fontSize: 20,
    textAlign:'center',
    width:'50%',
    borderRadius:10,
    
  },
 txt:{
  width:'100%',
  padding: 5,
  fontSize: 20,
  textAlign:'center',
  borderRadius:50,
  marginBottom:5,
  
  },

 
});