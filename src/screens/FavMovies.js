import React, {Component} from 'react';
import {Platform, StyleSheet,  Text, View,StatusBar,ImageBackground,TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title,Content,Card } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../styles';


export default class LoginScreen extends Component{
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
                Favourite Movies
              </Text>
            </View>

            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between', marginLeft:3,marginTop:3.5,marginRight:3}} >
              <Card style={styles.topCards} >
              </Card>

              <Card style={styles.topCards} >
              </Card>
              
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between', marginLeft:3,marginTop:3,marginRight:3}} >
              <Card style={styles.topCards} >
              </Card>

              <Card style={styles.topCards} >
              </Card>
              
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between', marginLeft:3,marginTop:3,marginRight:3}} >
              <Card style={styles.topCards} >
              </Card>

              <Card style={styles.topCards} >
              </Card>
            </View>

            <View style={{flex:1,justifyContent:'flex-start',marginLeft:6,marginTop:10}} >
                
                <Icon name={'arrowleft'} size={40} color={'#CE3737'}
                onPress={() => this.props.navigation.navigate('HomePage')}/>
               
              </View> 

          </Content>
        </View>
      </ImageBackground>
      </Container>
    );
  }
}



          {/* <Button transparent
								onPress={() => this.props.navigation.navigate('HomePage')}>
								<Icon name="arrowleft" style={{paddingLeft:26,}} size={26} />
							</Button> */}