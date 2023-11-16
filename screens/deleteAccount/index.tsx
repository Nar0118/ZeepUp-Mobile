import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/shared/button';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const DeleteAccount = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();

  const handleBack = (): void => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/images/trash.png')}
        resizeMode='stretch'
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Delete account</Text>
        <Text style={styles.description}>You are about to delete your account!</Text>
        <View style={styles.buttonContainer}>
          <Button
            title='Delete'
            onPress={() => {}}
            width={230}
            height={55}
            fontSize={20}
            backgroundColor={Colors.light.defaultPink}
            textColor={Colors.light.white}
          />
          <Text style={styles.buttonDescription} onPress={handleBack}>
            Cancel
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DeleteAccount;
