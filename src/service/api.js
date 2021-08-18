import {Constants} from '../config/constants';
import {Globals} from '../config/globals';
import RNFetchBlob from 'rn-fetch-blob'

export function serviceLogin(params)
{
    let formdata = new FormData();
    formdata.append("email", params.email);
    formdata.append("password", params.password);
    
    return new Promise(function(resolve, reject) {        
        RNFetchBlob.fetch('POST', Constants.ADDRESS + "/login", {
            'Content-Type' : 'multipart/form-data',
            // more headers  ..
        },
        [
            { name:'email',data : params.email},
            { name:'password',data:params.password}
        ])
        .then((response) => {
            resolve(response.json());
        })
        .catch((errorMessage, statusCode) => {
            reject(errorMessage);
        })
    });    
    

     
}

export function serviceRegister(params)
{
    return new Promise(function(resolve, reject) {        

        RNFetchBlob.fetch('POST', Constants.ADDRESS + "/signup", {
            'Content-Type' : 'multipart/form-data',
            // more headers  ..
        },
        [
            { name:'email',data : params.email},
            { name:'password',data:params.password},
            { name:'firstname',data:params.firstname},
            { name:'lastname',data:params.lastname}
        ])
        .then((response) => {
            resolve(response.json());
        })
        .catch((errorMessage, statusCode) => {
            reject(errorMessage);
        })
    });    
}


export function serviceCreateGame(params)
{
    console.log(params);
    return new Promise(function(resolve, reject) {        
        RNFetchBlob.fetch('POST', Constants.ADDRESS + "/creategame", {
            'Content-Type' : 'multipart/form-data',
            // more headers  ..
        },
        [
            { name:'banker',data : params.banker},
            { name:'players',data:params.players},
            { name:'time',data:params.time},
            { name:'qrcode',data:params.qrcode}
        ])
        .then((response) => {
            resolve(response.json());
        })
        .catch((errorMessage, statusCode) => {
            reject(errorMessage);
        })
    });    
}

export function serviceDeleteGame(params)
{

    return new Promise(function(resolve, reject) {        
        RNFetchBlob.fetch('POST', Constants.ADDRESS + "/deletegame", {
            'Content-Type' : 'multipart/form-data',
            // more headers  ..
        },
        [
            { name:'no',data : params.roomId},
        ])
        .then((response) => {
            resolve(response.json());
        })
        .catch((errorMessage, statusCode) => {
            reject(errorMessage);
        })
    });    
}




export function serviceJoinGame(params)
{

    return new Promise(function(resolve, reject) {        
        RNFetchBlob.fetch('POST', Constants.ADDRESS + "/joingame", {
            'Content-Type' : 'multipart/form-data',
            // more headers  ..
        },
        [
            { name:'code',data : params.code},
            { name:'player',data:params.player}
        ])
        .then((response) => {
            resolve(response.json());
        })
        .catch((errorMessage, statusCode) => {
            reject(errorMessage);
        })
    });    
}


export function serviceDisconnectGame(params)
{

    return new Promise(function(resolve, reject) {        
        RNFetchBlob.fetch('POST', Constants.ADDRESS + "/disconnect", {
            'Content-Type' : 'multipart/form-data',
            // more headers  ..
        },
        [
            { name:'room',data : params.room},
            { name:'player',data:params.player}
        ])
        .then((response) => {
            resolve(response.json());
        })
        .catch((errorMessage, statusCode) => {
            reject(errorMessage);
        })
    });    
}

export function serviceGetAsset(params)
{
    return new Promise(function(resolve, reject) {        
        RNFetchBlob.fetch('POST', Constants.ADDRESS + "/getAsset", {
            'Content-Type' : 'multipart/form-data',
            // more headers  ..
        },
        [
            { name:'number',data : params.number}
        ])
        .then((response) => {
            resolve(response.json());
        })
        .catch((errorMessage, statusCode) => {
            reject(errorMessage);
        })
    });
}








