import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { SafeArea } from '../../../components/utility/SafeArea.component';
import RestaurantsInfoCard from '../components/RestaurantsInfoCard.components';

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={props => {
            <List.Icon {...props} icon="bread-slice" />;
          }}
          expanded={breakfastExpanded}
          onPress={() => {
            setBreakfastExpanded(!breakfastExpanded);
          }}
        >
          <List.Item title="Egg Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={props => {
            <List.Icon {...props} icon="bread-slice" />;
          }}
          expanded={lunchExpanded}
          onPress={() => {
            setLunchExpanded(!lunchExpanded);
          }}
        >
          <List.Item title="Buger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={props => {
            <List.Icon {...props} icon="bread-slice" />;
          }}
          expanded={dinnerExpanded}
          onPress={() => {
            setDinnerExpanded(!dinnerExpanded);
          }}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={props => {
            <List.Icon {...props} icon="bread-slice" />;
          }}
          expanded={drinksExpanded}
          onPress={() => {
            setDrinksExpanded(!drinksExpanded);
          }}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetailScreen;
