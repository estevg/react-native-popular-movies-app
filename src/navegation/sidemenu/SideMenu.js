import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native'


export class SideMenu extends Component {
    render() { 
        return ( 
            <SafeAreaView style={{flex: 1}}>
            <View style={{height: 150, alignItems: "center", justifyContent: "center"}}>
              {/* <Image 
                  source={IMAGE.USER}
                  style={{ height: 120, width: 120, borderRadius:60}}          
              /> */}
            </View>
            <ScrollView>
              <View>
                {/* <ListItem onPress={() => this.props.navigation.navigate('Setting')}>
                  <Text>Setting</Text>
                </ListItem> */}
                {/* <View onPress={() => this.props.navigation.navigate('Profile')}>
                  <Text>Perfil</Text>
                </View> */}
              </View>
            </ScrollView>
            {/* <List>
                <View noBorder 
                onPress={() => this.props.navigation.navigate('auth')} >
                  <Text>Cerrar Sesión</Text>
                </View>
              </List> */}
          </SafeAreaView>
         );
    }
}
 