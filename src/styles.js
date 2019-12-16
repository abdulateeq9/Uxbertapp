const React = require("react-native");
const { Platform, Dimensions } = React;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default {

    /////////////////////Home Page Screen
    hmpgTxt:{
        color:'#FFFF',
        fontSize:34
        },
    bgrdImg:{
        height:hp('100%'),
        width:wp('100%')
        },
    blkLayer:{
        height:hp('100%'),
        width:wp('100%'),
        backgroundColor:'rgba(0,0,0,0.10)'
        },
    srchInput:{
        height: hp('6%'),
        width:wp('65%'),
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        backgroundColor: 'rgba(206,55,55,0.80)'
        },
    srchBtn:{
        height: hp('6%'),
        width:wp('20%'),
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        backgroundColor: '#CE3737'
        },
    mviBox:{
        height:hp('40%'),
        width:wp('85%'),
        borderRadius:10,
        backgroundColor:'#FFFF'
        },
    mvidetailsBox:{
        height:hp('20%'),
        width:wp('85%'),
        borderRadius:10,
        backgroundColor:'rgba(255,255,255,0.50)'
        },
    btnView:{
        alignItems:'center',
        marginTop:20,
        },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:wp('85%'),
        marginTop: 10,
        },
    userBtn1:{
        backgroundColor:'#4FCE5D',
        borderColor:'#2f2f2f',
        height:hp('5%'),
        width:wp('40%'),
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        },
    userBtn:{
        backgroundColor:'#CE3737',
        borderColor:'#2f2f2f',
        height:hp('5%'),
        width:wp('40%'),
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        },
    btnText:{
        fontSize:16,
        color:'#FFF'
        },


    /////////////////////// FavMovies Screen

    topCards:{
        height:hp('25%'),
        width:wp('48%'),
        borderRadius:10,
        backgroundColor:'rgba(255,255,255,0.80)'
        },
    dtlsTxt:{
        fontSize:16,
        fontWeight:'200'
    }

}
