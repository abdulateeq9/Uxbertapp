import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TextInput, View,Button,ImageBackground,TouchableOpacity,StatusBar} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Header, Left, Body, Right, Title ,Content,} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';


export default class WelcomeScreen extends Component{

  render() {
    return (
      <Container>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={require('../Images/vox1.jpg')} 
            style={styles.bgrdImg}  >
        <View style={styles.blkLayer} >
          <Content>

            <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
              <Text style={styles.hmpgTxt} >
                Home Page
              </Text>
            </View>

            <View style={{flex:1,flexDirection:'row',justifyContent:'center',marginTop:25}} >
              <View style={styles.srchInput} >
              <TextInput
                    style={styles.input}
                    placeholder={'Search Movies'}
                    placeholderTextColor={'#FFFFFF'}
                    fontSize={20}
                />
              </View>
              <TouchableOpacity>
              <View style={styles.srchBtn} >
                <Icon name='search' size={24} color={'#FFFFFF'} />
              </View>
              </TouchableOpacity>
            </View>

            
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:30}} >
              <View style={styles.mviBox} >
                <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end',marginBottom:15,marginRight:18}} >
                  <Icon1 name='star-box' size={38} color={'#CE3737'} />
                </View>
              </View>
            </View>
            

            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:30}} >
              <View style={styles.mvidetailsBox} >
                <View style={{flex:1,flexDirection:'column',justifyContent:'space-around', alignItems:'center'}} >
                  <Text style={styles.dtlsTxt} >
                    Movie Title
                  </Text>
                  <Text>
                    Imdb Rating
                  </Text>
                  <Text>
                    Year
                  </Text>
                  <Text>
                    Released Date
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.btnView} >
                <View style={styles.btnContainer}>
                  <TouchableOpacity  style={styles.userBtn1}  >

                    <Text style={styles.btnText}>Share on WhatsApp</Text>
                  </TouchableOpacity>

                  <TouchableOpacity  onPress={() => this.props.navigation.navigate('FavMovies')}  style={styles.userBtn}>

                  <Text style={styles.btnText} >Favourite Movies</Text>
                  </TouchableOpacity>
                </View>
               </View>

          </Content>
        </View>
      </ImageBackground>
      </Container>


    );
  }
}



{/* <Button title="FavMovies" onPress={() => this.props.navigation.navigate('FavMovies')} */}