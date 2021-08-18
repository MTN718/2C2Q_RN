import React, {useState} from 'react';
import {View,TouchableOpacity,Text,Image} from 'react-native';
import styles from '../common/style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Constants} from '../config/constants'

export default function Sidebar(props) {

    return (
        <View style={{backgroundColor:'#fff',flex:1}}>
            <View style={{marginTop:10}}>
                <TouchableOpacity>
                    <View style={[styles.menuVw,{marginTop:30}]}>
                        <Text style={[styles.menuText]}>Home</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:'#efefef',height:1,marginLeft:24,marginRight:24,marginTop:10}}/>
                <TouchableOpacity onPress={() => props.onMenuClicked(0)}>
                    <View style={[styles.menuVw]}>
                        <Text style={[styles.menuText]}>Privacy Policy</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:'#efefef',height:1,marginLeft:24,marginRight:24,marginTop:10}}/>

                <TouchableOpacity >
                    <View style={[styles.menuVw]}>
                        <Text style={[styles.menuText]}>Contact Us</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row',backgroundColor:'#efefef',height:1,marginLeft:24,marginRight:24,marginTop:10}}/>

                <TouchableOpacity>
                    <View style={[styles.menuVw]}>
                        <Text style={[styles.menuText]}>Settings</Text>
                    </View>
                </TouchableOpacity>

                <View style={{flexDirection:'row',backgroundColor:'#efefef',height:1,marginLeft:24,marginRight:24,marginTop:10}}/>

                <TouchableOpacity onPress={() => props.onMenuClicked(4)}>
                    <View style={[styles.menuVw]}>
                        <Text style={[styles.menuText]}>Logout</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
}
