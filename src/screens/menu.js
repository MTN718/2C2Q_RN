
import React, { useState, useEffect }from 'react';
import {View,ScrollView,Text,Image,TouchableOpacity} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../common/style';
import {Globals} from '../config/globals';

export default function MenuScreen(props) {

    useEffect(() => {
        // setTimeout(() => {
        //     props.navigation.navigate('ChooseUserType');        
        // }, 2000);
        console.log(Globals.userName);
    });

    actionPlayer = () => {
        props.navigation.navigate('JoinGame');
    }

    actionBanker = () => {
        props.navigation.navigate('CreateGame');
    }

    return (
      <View style={[styles.primaryFullBG,{alignItems:'center'}]}>
        <StatusBar hidden={true} />
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:200,height:90,marginTop:20}}
                source={require('../assets/logo.png')}
                resizeMode="stretch"
            />
            <Text style={[styles.primaryText,{marginTop:40,fontSize:30,fontWeight:'400'}]}>Start New Game</Text>
        </View>

        <View style={{width:'100%',paddingLeft:20,paddingRight:20,paddingBottom:80}}>
            <Text style={[styles.primaryText,{fontSize:20,textAlign:'center',fontWeight:'200'}]}>Initiate Game</Text>
            <TouchableOpacity style={{marginTop:8}} onPress={() => actionBanker()}>
                <View style={[styles.primaryBtn]}>
                    <Text style={[styles.darkText,{fontWeight:'200'}]}>Banker</Text>
                </View>
            </TouchableOpacity>  


            <Text style={[styles.primaryText,{fontSize:20,textAlign:'center',marginTop:30,fontWeight:'200'}]}>Join Game</Text>

            <TouchableOpacity style={{marginTop:8}} onPress={() => actionPlayer()}>
                <View style={[styles.primaryBtn]}>
                    <Text style={[styles.darkText,{fontWeight:'200'}]}>Player</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    );
}
