import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as Colors from '../constants/color'
import MainTemplate from '../components/templates/MainTemplate';


const SequenceScreen = () => {
  const [valSequence, setValSequence] = useState([3, 5, 9, 15]);

  const addNextValue = () => {
    const result = 2 * valSequence.length + valSequence[valSequence.length - 1];
    setValSequence([...valSequence, result]);
  };

  const removeLastValue = () => {
    if (valSequence.length > 4) {
      valSequence.pop(valSequence.length - 1);
      setValSequence([...valSequence]);
    }
  };

  return (
    <MainTemplate
      title={'Sequence'}
      fontColor={Colors.WHITE}
      statusBarColor={Colors.BLUE}
      safeAreaTopColor={Colors.BLUE}
      safeAreaBottomColor={Colors.BLUE}
      appBarColor={[Colors.BLUE, Colors.BLUE]}>
      <View style={styles.container}>
        <View style={styles.wrapperSection}>
          <TouchableOpacity onPress={() => addNextValue()}>
            <View style={[styles.btnAction, { backgroundColor: Colors.BLUE }]}>
              <Text style={styles.fontAction}>{'Add'}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperSection}>
          <Text style={styles.fontResult}>{valSequence.join(', ')}</Text>
        </View>

        <View style={styles.wrapperSection}>
          <TouchableOpacity onPress={() => removeLastValue()}>
            <View style={[styles.btnAction, { backgroundColor: Colors.RED }]}>
              <Text style={styles.fontAction}>{'Remove'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  fontInput: {
    fontSize: 70,
  },
  btn: {
    backgroundColor: Colors.LIGHT_GRAY,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  wrapperInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
  },
  wrapperSection: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontResult: {
    fontSize: 35,
  },
  container: {
    flex: 1,
    paddingTop: 10,
  },
  btnAction: {
    width: 120,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  fontAction: {
    color: Colors.WHITE,
  },
});

export default SequenceScreen;
