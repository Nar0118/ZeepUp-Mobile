import React from 'react';
import { View, Modal, Pressable } from 'react-native';
import { BottomModalProps } from './types';

import { getStyles } from './styles';

export const BottomModal = ({ children, modalVisible, setModalVisible }: BottomModalProps) => {
  const styles = getStyles();

  const closeModal = (): void => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Pressable onPress={closeModal} style={styles.modalContainer} />
      <View style={styles.modalView}>{children}</View>
    </Modal>
  );
};
