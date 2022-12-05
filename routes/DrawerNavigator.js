import React from "react";
import {Button, View, Image, Pressable, Text, Alert} from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";

import { CheckoutStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#091E7A",
  },
  headerTintColor: "white",
  drawerStyle: {
    backgroundColor: '#091E7A',
    width: '80%',
    color: 'white'
  },
  drawerActiveTintColor: "white",
  drawerInactiveTintColor: "white",
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={screenOptionStyle}
    >
      <Drawer.Screen 
      name="Celcom"
      component={TabNavigator}
      options={{
      headerRight: () => (
        <Pressable onPress={() => Alert.alert('¡Configuraciones pendientes!')}>
          <Image
            source={{uri: "https://www.iconsdb.com/icons/preview/white/settings-xxl.png"}}
            style={{
              width: 20,
              height: 20,
              marginRight: 10
            }}
          />
        </Pressable>
      ),
    }}
      />
      <Drawer.Screen name="Carrito" component={CheckoutStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;