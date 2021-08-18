
import React, { useState, useEffect }from 'react';
import {KeyboardAvoidingView,View,ActivityIndicator,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../common/style';
import {serviceLogin} from '../service/api';
import Modal from "react-native-modal";
import {Globals} from '../config/globals';
import DefaultPreference from 'react-native-default-preference';
import Icon from 'react-native-vector-icons/FontAwesome';
import Switch from 'react-native-switch-pro'


export default function LoginScreen(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [iInfo, setIndicator] = useState({isActive:false,msg:"Signing User..."});
    const [errInfo, setError] = useState({isActive:false,msg:""});

    useEffect(() => {
        DefaultPreference.getMultiple(['userNo','userName','userEmail']).then(function(values) 
        {          
            if (values[0] != null)
            {                
                Globals.userNo = values[0];
                Globals.userName = values[1];
                Globals.userEmail = values[2];

                props.navigation.navigate('Menu');
            }            
        })
        .catch(err=>{            
            
        });
    },[]);

    actionCreate = () => {
        props.navigation.navigate('Register');
    }

    successLogin = (res) => {
        let un = res.data.firstname + ' ' + res.data.lastname;
        DefaultPreference.setMultiple({userNo:res.data.no.toString(),userName:un,userEmail:res.data.email}).then(function(values) 
        {  
            console.log(res.data.no.toString());
            setUserName('');
            setPassword('');
            props.navigation.navigate('Menu');
            
        })
        .catch(err=>{
            
        });
    }
    actionLogin = () => {
        // if (userName == '')
        // {
        //     setError({isActive:true,msg:"Please fill username"});
        //     return;
        // }
        // if (password == '')
        // {
        //     setError({isActive:true,msg:"Please fill password"});
        //     return;
        // }
        // let params = {
        //     email:userName,
        //     password:password
        // };
        // setIndicator({isActive:true,msg:'Signing User'});
        // serviceLogin(params)
        // .then(res=>{ 
        //     console.log(res);
        //     setIndicator({isActive:false,msg:''});
        //     successLogin(res);
        // })
        // .catch(err=>{
        //   setIndicator({isActive:false,msg:''});
        // });
        //props.navigation.navigate('Menu');
        props.navigation.navigate('Main');
    }
    
    return (
      <KeyboardAvoidingView style={[styles.primaryFullBG,{alignItems:'center'}]}>
        <StatusBar hidden={true} />
        {
            iInfo.isActive == true &&
            <View style={styles.loading}>
                <View style={styles.loaderView}>
                    <ActivityIndicator color="#d84c41" style={styles.activityIndicator}/>
                    <Text style={styles.loadingText}>{iInfo.msg}</Text>
                </View>
            </View>
        }
        <View style={[styles.vwTopLogo]}>
            <Image style={styles.imgTopLogo}
                source={require('../assets/2c2q.png')}
                resizeMode="contain"
            />
        </View>
        <View style={styles.vwInputContainer}>
            <Text style={[styles.primaryText]}>Email Address</Text>
            <TextInput
                style={[styles.primaryInput]}
                value={userName} 
                onChangeText={text => setUserName(text)}
            />

            <Text style={[styles.primaryText,styles.topMarginLarge]}>Password</Text>
            <TextInput
                style={[styles.primaryInput]}
                value={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            />
            <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                <View style={{flexDirection:'row',flex:1}}>
                    <Switch 
                        style={{}}
                        circleColorActive={'#FFFFFF'}
                        circleColorInactive={'#FFFFFF'}
                        backgroundActive={'#0D97DF'}
                        backgroundInactive={'#7E7E7E'}
                    />
                    <Text style={[styles.primaryLightText,{marginLeft:10}]}>Remember me</Text>
                </View>
                <View style={[styles.vwRightAlign,{flex:1}]}>
                    <TouchableOpacity>
                        <Text style={[styles.primaryLightText]}>Forgot password?</Text>
                    </TouchableOpacity>  
                </View>
            </View>
            <View>

            </View>

            

            <TouchableOpacity style={{marginTop:80}} onPress={() => actionLogin()}>
                <View style={[styles.primaryBtn]}>
                    <Text style={[styles.btnText]}>Log in</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.separator}></View>  

            <TouchableOpacity style={{marginTop:20}} onPress={() => actionCreate()}>
                <View style={[styles.primaryEmptyBtn]}>
                    <Text style={[styles.btnTextEmpty]}>Create an account</Text>
                </View>
            </TouchableOpacity>  

            <View style={{flexDirection:'row',marginTop:20}}>
                <TouchableOpacity style={{flex:1}}>
                    <View style={[styles.primaryEmptyBtn,styles.borderColorGray]}>
                        <Icon name="facebook" size={16} color={'#0d97df'}></Icon>    
                        <Text style={[styles.btnTextEmpty,styles.colorGray]}>Facebook</Text>
                    </View>
                </TouchableOpacity>  

                <TouchableOpacity style={{flex:1,marginLeft:20}}>
                    <View style={[styles.primaryEmptyBtn,styles.borderColorGray]}>
                        <Icon name="google" size={16} color={'#0d97df'}></Icon>    
                        <Text style={[styles.btnTextEmpty,styles.colorGray]}>Google</Text>
                    </View>
                </TouchableOpacity>  
            </View>
        </View>
        <Modal 
            backdropColor="#000"
            isVisible={errInfo.isActive}>
            <View style={{ backgroundColor:"#FC4236",padding:10,borderRadius:10,alignItems:'center',}}>
                <View style={{marginVertical:0}}>
                    
                    <Text style={{color:'#FFF',fontSize:18,textAlign:"center",marginVertical:20}}>
                        {errInfo.msg}
                    </Text>
                    <TouchableOpacity 
                    style={{alignSelf:'center'}}
                    onPress={()=>setError({isActive:false,msg:''})}>
                        <Text style={{padding:10,textAlign:'center',color:'#fff',fontWeight:'bold'}}> Dismiss </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
      </KeyboardAvoidingView>
    );
}
