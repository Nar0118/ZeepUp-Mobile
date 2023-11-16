import React from 'react';
import { View, Modal, Pressable } from 'react-native';
import { CenterModalProps } from './types';

import { getStyles } from './styles';

export const ModalWrapper = ({ children, modalVisible, setModalVisible }: CenterModalProps) => {
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
      <Pressable onPress={closeModal} style={styles.modalContainer}>
        <Pressable style={styles.modalView}>
          <View style={styles.modalView}>{children}</View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};
