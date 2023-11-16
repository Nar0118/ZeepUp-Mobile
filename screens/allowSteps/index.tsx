import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import AllowNotification from '../../components/feature/allowNotification';
import AllowLocation from '../../components/feature/allowLocation';
import AllowCamera from '../../components/feature/allowCamera';
import { BottomNavigator } from '../../utils/bottomNavigation';
import { AllowStepsTypes } from './types';

import { getStyles } from './styles';

const AllowSteps = ({ navigation }: AllowStepsTypes): JSX.Element => {
  const [step, setStep] = useState<number>(0);
  const [steps, setSteps] = useState<Array<JSX.Element>>([]);
  const [currentStepElement, setCurrentStepElement] = useState<JSX.Element | null>(null);

  const styles = getStyles();

  useEffect(() => {
    getSteps();
  }, []);

  useEffect(() => {
    updateCurrentStep(step);
  }, [step, steps]);

  const handleNextStep = (): void => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      navigation.navigate(BottomNavigator.HOME, { isPermissionsUpdated: true });
    }
  };

  const getSteps = async (): Promise<void> => {
    const data = [];
    const { status } = await Location.getForegroundPermissionsAsync();
    const { status: cameraPerm } = await ImagePicker.getCameraPermissionsAsync();

    data.push(<AllowNotification />);

    if (status !== Location.PermissionStatus.GRANTED) {
      data.push(<AllowLocation />);
    }

    if (cameraPerm !== Location.PermissionStatus.GRANTED) {
      data.push(<AllowCamera />);
    }

    if (data.length === 0) {
      navigation.navigate(BottomNavigator.HOME);
    }
    setSteps(data);
  };

  const updateCurrentStep = (newStep: number): void => {
    const stepElement = steps[newStep]
      ? React.cloneElement(steps[newStep], { key: `step-${newStep}`, onClick: handleNextStep })
      : null;
    setCurrentStepElement(stepElement);
  };

  return <View style={styles.container}>{currentStepElement}</View>;
};

export default AllowSteps;
