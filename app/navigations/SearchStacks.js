import { createStackNavigator } from "react-navigation-stack";
import SearchRestaurantsScreen from "../screens/Search";

const SearchScreenStacks = createStackNavigator({
  SearchRestaurants: {
    screen: SearchRestaurantsScreen,
    navigationOptions: () => ({
      title: "Busca los mejores restaurantes"
    })
  }
});

export default SearchScreenStacks;
