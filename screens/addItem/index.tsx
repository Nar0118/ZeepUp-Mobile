import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Platform,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import RadioButton from '../../components/shared/radioButton';
import Toggle from '../../components/shared/toggleSwitch';
import Button from '../../components/shared/button';
import Input from '../../components/shared/inputWithLabel';
import { PlatformOS } from '../../utils/platform';
import { OptionTypes, taxOption, taxType } from './types';
import ShoppingCart from '../../assets/images/icons/shoppingCart.svg';
import Calendar from '../../assets/images/icons/calenderPinkOutline.svg';

import { getStyles } from './styles';
import Colors from '../../constants/Colors';

const AddItem = (): JSX.Element => {
  const styles = getStyles();
  const navigation: any = useNavigation();
  const [price, setPrice] = useState<number>(5);
  const [selectedSort, setSelectedSort] = useState<string>('no');
  const [selectedTax, setSelectedTax] = useState<string>('inherit');
  const [soonToExpire, setSoonToExpire] = useState<boolean>(false);
  const [extraStock, setExtraStock] = useState<boolean>(false);
  const [promotion, setPromotion] = useState<boolean>(false);

  const handleSelect = (key: string): void => {
    setSelectedSort(key);
  };

  const handleSelectTax = (key: string): void => {
    setSelectedTax(key);
  };

  const handlePriceChange = (value: string): void => {
    const parsedValue = parseFloat(value);
    const newPrice = isNaN(parsedValue) ? 0 : parsedValue;
    setPrice(newPrice);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior='padding'
        enabled={Platform.OS === PlatformOS.IOS}
      >
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Add Items</Text>
              <ShoppingCart width={36} height={27} />
            </View>
            <View>
              <Text style={styles.label}>
                Price <Text style={styles.pinkText}>*</Text>
              </Text>
              <View>
                <Text style={styles.price}>${price.toFixed(2)}</Text>
                <Slider
                  minimumValue={1}
                  maximumValue={10}
                  step={0.1}
                  value={price}
                  onValueChange={(value) => setPrice(parseFloat(value.toFixed(2)))}
                  minimumTrackTintColor={Colors.light.defaultPink}
                  maximumTrackTintColor={Colors.light.defaultPink}
                  thumbTintColor={Colors.light.defaultPink}
                />
              </View>
              <Input
                isNumeric
                style={styles.inputStyle}
                containerStyles={styles.inputContainer}
                value={price === 0 ? '' : price.toString()}
                onChangeText={handlePriceChange}
              />
            </View>
            <View style={styles.percentContainer}>
              <Text style={styles.label}>Discount (%)</Text>
              <Input
                isNumeric
                style={styles.inputStyle}
                containerStyles={styles.inputContainer}
                onChangeText={() => {}}
              />
            </View>
            <View>
              <View style={styles.radioButtonContainer}>
                {taxType.map((option: OptionTypes, index: number) => (
                  <View key={index} style={styles.radioItem}>
                    <RadioButton
                      selectedSort={selectedTax}
                      option={option}
                      handleSelect={handleSelectTax}
                    />
                    <Text style={styles.optionText}>{option.text}</Text>
                  </View>
                ))}
              </View>
              <Input
                isNumeric
                style={styles.smallInputStyle}
                containerStyles={styles.smallInputContainer}
                onChangeText={() => {}}
              />
            </View>
            <View>
              <Text style={[styles.label, styles.labelWithMargin]}>
                Is Tax Included in the Price?
              </Text>
              <View style={styles.radioButtonContainer}>
                {taxOption.map((option: OptionTypes, index: number) => (
                  <View key={index} style={styles.radioItem}>
                    <RadioButton
                      selectedSort={selectedSort}
                      option={option}
                      handleSelect={handleSelect}
                    />
                    <Text style={styles.optionText}>{option.text}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View>
              <Text style={styles.infoText}>
                Price:{'  '}
                <Text style={styles.pinkText}>${price}</Text>
              </Text>
              <Text style={styles.infoText}>
                Discount:{'  '}
                <Text style={styles.pinkText}>10%</Text>
              </Text>
              <Text style={styles.infoText}>
                Tax:{'  '}
                <Text style={styles.pinkText}>6.625%</Text>
              </Text>
            </View>
            <View style={styles.line} />
            <View>
              <Text style={styles.label}>
                Sale Price + Tax : <Text style={styles.pinkText}>$5.33</Text>
              </Text>
              <View style={styles.bottomContainer}>
                <View>
                  <View style={styles.smallInputs}>
                    <Text style={styles.label}>
                      Quantity<Text style={styles.pinkText}>*</Text>
                    </Text>
                    <Input
                      isNumeric
                      style={styles.smallInputStyle}
                      containerStyles={styles.smallInputContainer}
                      onChangeText={() => {}}
                    />
                  </View>
                  <View style={styles.smallInputs}>
                    <Text style={styles.label}>
                      Expire Date<Text style={styles.pinkText}>*</Text>
                    </Text>
                    <Input
                      isNumeric
                      style={styles.smallInputStyle}
                      containerStyles={styles.smallInputContainer}
                      onChangeText={() => {}}
                      placeholder='dd-yyyy'
                      placeholderTextColor={Colors.light.inputBorderColor}
                      icon={<Calendar width={20} height={20} />}
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.label}>
                    Promo type <Text style={styles.pinkText}>*</Text>
                  </Text>
                  <View>
                    <View style={styles.switchRow}>
                      <Toggle enable={soonToExpire} setEnable={setSoonToExpire} />
                      <Text style={styles.optionText}>Soon to Expire</Text>
                    </View>
                    <View style={styles.switchRow}>
                      <Toggle enable={extraStock} setEnable={setExtraStock} />
                      <Text style={styles.optionText}>Extra Stock</Text>
                    </View>
                    <View style={styles.switchRow}>
                      <Toggle enable={promotion} setEnable={setPromotion} />
                      <Text style={styles.optionText}>Promotion</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title='Cancel'
                onPress={() => {}}
                width={90}
                height={30}
                fontSize={12}
                backgroundColor={Colors.light.defaultYellow}
                textColor={Colors.light.white}
              />
              <Button
                title='Save'
                onPress={() => {}}
                width={90}
                height={30}
                fontSize={12}
                backgroundColor={Colors.light.defaultPink}
                textColor={Colors.light.white}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AddItem;
