import React, { Component } from 'react';
import { 
  Text,
  View, 
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  } from 'react-native';


 
export default class Timeline extends Component {
    render(){
        return(
            <View style={Styles.container}>
                <ScrollView style={{flex:1,}}>
                    <ScrollView horizontal={true} style={{flexDirection:'row', marginTop:10,}}>
                        <TouchableOpacity style={Styles.itemDestination}>
                            <Image style={{width:  70, height :70, }} source={require('../images/gunung.jpg')}></Image>
                            <Text>Gunung</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.itemDestination}>
                            <Image style={{width:  70, height :70, }} source={require('../images/danau.jpg')}></Image>
                            <Text>Danau</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.itemDestination}>
                            <Image style={{width:  70, height :70, }} source={require('../images/pantai.jpg')}></Image>
                            <Text>Laut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.itemDestination}>
                            <Image style={{width:  70, height :70, }} source={require('../images/wahana.jpg')}></Image>
                            <Text>Wahana</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.itemDestination}>
                            <Image style={{width:  70, height :70, }} source={require('../images/forest.jpg')}></Image>
                            <Text>Hutan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.itemDestination}>
                            <Image style={{width:  70, height :70, }} source={require('../images/city.jpg')}></Image>
                            <Text>Kota</Text>
                        </TouchableOpacity>
                        
                    </ScrollView>
                    <View style={{marginVertical:20}}>
                        <View  style={{flexDirection:'row'}}>
                            <View style={{marginRight:10}}>
                                <Image style={{width:  50, height :50, }} source={require('../images/profil.png')}></Image>
                            </View>
                            <View>
                                <Text style={{fontSize:18,fontWeight:'700'}}>Banjar Nahorr </Text>
                                <Text>Danau toba, Samosir</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image style={{width: '100%', height:300 }} source={require('../images/toba.jpg')}></Image>
                        </TouchableOpacity>
                        <View>
                            <View style={{height:54,  flexDirection:'row',}}>
                                <View style={{ alignItems:'center',justifyContent:'center',flex:1}}>
                                    <TouchableOpacity onPress={()=>alert('kamu menyukainya')} >
                                        <Image style={Styles.iconpost} source={require('../icon/star.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems:'center',justifyContent:'center',flex:1}}>
                                    <TouchableOpacity >
                                        <Image style={Styles.iconpost} source={require('../icon/coment.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems:'center',justifyContent:'center',flex:1}}>
                                    <TouchableOpacity >
                                        <Image style={Styles.iconpost} source={require('../icon/share.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontWeight:'700'}}>Jumlah like</Text>
                        </View>
                        <View>
                            <Text>Danau Toba terletak di pegunungan Bukit Barisan, Sumatera Utara. Luasnya 1.145 kilometer persegi yang menjadikannya danau terluas se-Asia Tenggara dan luasnya lebih besar dari Singapura [716 km].</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'700'}}>Komentar(100)</Text>
                        </View>
                    </View>

                    <View >
                        <View  style={{flexDirection:'row'}}>
                            <View style={{marginRight:10}}>
                                <Image style={{width:  50, height :50, }} source={require('../images/profil.png')}></Image>
                            </View>
                            <View>
                                <Text style={{fontSize:18,fontWeight:'700'}}>Banjar Nahor </Text>
                                <Text>Bali, Indonesia</Text>
                            </View>
                        </View>
                        <View>
                            <Image style={{width: '100%', height:300 }} source={require('../images/bali.jpg')}></Image>
                        </View>
                        <View>
                            <View style={{height:54,  flexDirection:'row',}}>
                                <View style={{ alignItems:'center',justifyContent:'center',flex:1}}>
                                    <View >
                                        <Image style={Styles.iconpost} source={require('../icon/star.png')}></Image>
                                    </View>
                                </View>
                                <View style={{ alignItems:'center',justifyContent:'center',flex:1}}>
                                    <View >
                                        <Image style={Styles.iconpost} source={require('../icon/coment.png')}></Image>
                                    </View>
                                </View>
                                <View style={{ alignItems:'center',justifyContent:'center',flex:1}}>
                                    <View >
                                        <Image style={Styles.iconpost} source={require('../icon/share.png')}></Image>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontWeight:'700'}}>Jumlah like</Text>
                        </View>
                        <View>
                            <Text>Pura Campuhan Windhu menyuguhkan panorama langsung mengarah ke samudera. Air percampuran sungai dan laut inilah yang menjadi sarana tradisi Melukat di Pura Campuhan Windhu.</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'700'}}>Komentar(200)</Text>
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
    itemDestination:{
        marginHorizontal:10,
        alignItems:'center',
        justifyContent:'center'
    },
    iconpost:{
        width: 30,
        height:30,
        marginLeft:10
    },
    iconmenu:{
        width: 30,
        height:30,
    }
  });