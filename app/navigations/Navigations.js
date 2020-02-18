import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import RestaurantsScreenStacks from "./RestaurantsStacks";
import TopListScreenStacks from "./TopListsStacks";
import SearchScreenStacks from "./SearchStacks";
import MyAccountScreenStacks from "./MyAccountStacks";

const NavigationStacks = createBottomTabNavigator(
  {
    Restaurants: {
      screen: RestaurantsScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Restaurantes",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    TopRestaurants: {
      screen: TopListScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Top",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="alien"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    SearchRestaurants: {
      screen: SearchScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Buscar ",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="album"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    MyAccount: {
      screen: MyAccountScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Mi cuenta",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="atlassian"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "MyAccount",
    order: ["TopRestaurants", "Restaurants", "SearchRestaurants", "MyAccount"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);

export default createAppContainer(NavigationStacks);
