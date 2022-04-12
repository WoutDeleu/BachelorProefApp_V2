import {Button, Text, View, StyleSheet, Contai, TouchableOpacity} from "react-native";
import * as SecureStore from "expo-secure-store";
import React, {Component, useState} from "react";
import Swiper from 'react-native-swiper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons'
import axios from "axios";




const ip = "192.168.20.181";
const portNr = "8081"

class SubjectListScreen extends Component {
    // state = {
    //     subjects: [],
    //     details: [],
    //     hasLoaded: false
    // }
    //
    // async getToken() {
    //     try {
    //         let token = await SecureStore.getItemAsync('access_token');
    //         this.setState({hasLoaded: true});
    //         //console.log("done");
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }
    //
    // constructor(props) {
    //     super(props);
    //     while(this.state.hasLoaded) {
    //         let axios = require('axios');
    //         const token = JSON.stringify(this.getToken());
    //         let config = {
    //             method: 'get',
    //             url: 'http://' + ip + '/' + portNr + '/subjectManagement/subjects',
    //             headers: {
    //                 'Authorization': 'Bearer ' + token
    //             }
    //         };
    //         let self = this;
    //         axios(config)
    //             .then(function (res) {
    //                 self.setState({subjects: res.data});
    //                 console.log(res.data);
    //             }).catch(function (error) {
    //         });
    //     }
    // }
    //
    //
    //
    // renderDetails =(subject)=>{
    //     return(
    //         <>
    //             <Button title="tada" onClick={() => {
    //                 let details = [...this.state.details];
    //                 let detail = details[subject.id-1];
    //                 detail = !detail;
    //                 details[subject.id-1] = detail;
    //                 this.setState({details});
    //             }
    //             }
    //                     aria-controls={"subjectDescription"}
    //                     aria-expended={this.state.details[subject.id-1]}
    //             >
    //                 Details
    //             </Button>
    //             <View in={this.state.details[subject.id-1]}>
    //                 <View id={"subjectDescription"}>
    //                     {subject.description}
    //                 </View>
    //             </View>
    //         </>
    //     )
    // }
    //
    // renderSubject = (subject) => {
    //     return(
    //         <View>
    //             <View>
    //                 <View >Students: {subject.nrOfStudents}</View>
    //                 <View>
    //                     <View>{subject.name}</View>
    //                     {this.renderDetails(subject)}
    //                 </View>
    //             </View>
    //         </View>
    //     )
    // }
    //
    // render(){
    //     return(
    //         <View>
    //             <View style={{
    //                 flex: 1,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 backgroundColor: "#ffc2c2",
    //                 }}
    //             >
    //                 <TouchableOpacity
    //                     style={{
    //                         borderWidth:1,
    //                         borderColor:'rgba(0,0,0,0.2)',
    //                         position: 'absolute',
    //                         top:580,
    //                         alignItems:'center',
    //                         justifyContent:'center',
    //                         width:40,
    //                         height:40,
    //                         backgroundColor:'#212521',
    //                         borderRadius:50,
    //
    //                     }}
    //                 >
    //                     <Ionicons name="add-outline" size={30} color="#ffff"/>
    //                 </TouchableOpacity>
    //             </View>
    //             {this.state.subjects.map(this.renderSubject)}
    //         </View>
    //     );
    // }
    render() {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default SubjectListScreen;