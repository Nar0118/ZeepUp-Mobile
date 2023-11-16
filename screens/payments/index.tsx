import React, { useState } from 'react';
import { Text, View, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import ModalPage from '../../components/feature/modalPage';
import Button from '../../components/shared/button';
import AddCard from '../../components/feature/addCard';
import ManageCard from '../../components/feature/manageCard';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const Payments = (): JSX.Element => {
  const styles = getStyles();
  const [isCardTab, setIsCardTab] = useState<boolean>(true);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ModalPage image={require('../../assets/images/images/forgotPassword.png')}>
          <View style={styles.infoContainer}>
            <View style={styles.headerPart}>
              <Image
                source={require('../../assets/images/images/twoCards.png')}
                resizeMode='contain'
              />
              <Text style={styles.title}>Payments</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title='Add Card'
                onPress={() => {
                  setIsCardTab(true);
                }}
                width={150}
                height={30}
                fontSize={12}
                border={!isCardTab}
                backgroundColor={isCardTab ? Colors.light.defaultPink : Colors.light.white}
                textColor={isCardTab ? Colors.light.white : Colors.light.defaultPink}
              />
              <Button
                title='Manage Card'
                onPress={() => {
                  setIsCardTab(false);
                }}
                width={150}
                height={30}
                fontSize={12}
                border={isCardTab}
                backgroundColor={!isCardTab ? Colors.light.defaultPink : Colors.light.white}
                textColor={!isCardTab ? Colors.light.white : Colors.light.defaultPink}
              />
            </View>
            {isCardTab ? <AddCard /> : <ManageCard />}
          </View>
        </ModalPage>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Payments;
