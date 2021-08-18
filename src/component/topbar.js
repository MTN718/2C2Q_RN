import React, { Component } from 'react';
import { Keyboard, ScrollView, KeyboardAvoidingView, Platform, Dimensions, Animated, FlatList, TouchableOpacity, StyleSheet, StatusBar, View, Image, Text, TextInput } from 'react-native';
import styles from '../common/style';

export default function Topbar(props) {

    return (
        <View style={styles.topVw}>
            {/* <TouchableOpacity onPress={()=> openMenu()}>
                <Image source={require('../assets/back_arrow.png')} style={[styles.imgTopIcon,{marginLeft:24}]} />
            </TouchableOpacity> */}
            <TouchableOpacity >
                <Image source={require('../assets/home.png')} style={[styles.imgTopIcon,{marginLeft:24}]} />
            </TouchableOpacity>
            <View style={{flex:1,alignItems:'center'}}>
                <Text style={[styles.topbarTitle]}>2COOL 2Q</Text>
            </View>
            <TouchableOpacity onPress={()=> openMenu()}>
                <Image source={require('../assets/menu.png')} style={[styles.imgTopIcon,{marginRight:24}]} />
            </TouchableOpacity>
        </View>
    );
}