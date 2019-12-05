import React, { Component } from 'react';
import { 
  Text,
  View, 
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity
  } from 'react-native';

  export default class Profil extends Component{
      render(){
          return(
            <View style={Styles.container}>
                <ScrollView style={{flex:1,}}>
                    <View>
                        <View>
                            <ImageBackground source={require('../images/bali.jpg')} style={{height:200, backgroundColor:'yellow',justifyContent:'flex-end',alignItems:'center'}}>
                                <View>
                                    <Image style={{width:  150, height :140,  }} source={require('../images/profil.png')}></Image>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{alignItems:'center',marginVertical:5,width:320,}}>
                                <Text>Marbun Banjarnahor</Text>
                                <Text>Medan,Indonesia</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity style={{backgroundColor:'#D2B48C'}}>
                                    <Text style={{margin:3}}>Edit Profil</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{height:50,flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')} style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                                <Image style={Styles.iconmenu} source={require('../icon/box.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfilStar')} style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'#D2B48C'}}>
                                <Image style={Styles.iconmenu} source={require('../icon/star.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View> 
                   
                </ScrollView>

                <View style={{height:54, backgroundColor:'#F5FFFA', flexDirection:'row',}}>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Timeline')}>
                            <Image style={Styles.iconmenu} source={require('../icon/home.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity >
                            <Image style={Styles.iconmenu} source={require('../icon/search.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity >
                            <Image style={Styles.iconmenu} source={require('../icon/plus.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')} >
                            <Image style={Styles.iconmenu} source={require('../icon/user.png')}></Image>
                        </TouchableOpacity>
                    </View> 
                </View>

            </View>

          )
      }
  }

  const Styles =StyleSheet.create({
    container:{
      flex: 1,

    },
    iconpost:{
        width: 35,
        height:35,
        marginLeft:10
    },
    iconmenu:{
        width: 30,
        height:30,
    }
  });