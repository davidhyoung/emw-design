/**
 * 
 */
import React from 'react';
import { Text } from '@shoutem/ui';

export default ({ label }) => (
  <Text style={s.title}>{label}</Text>
);

const s = {
  title: {
    margin: 10,
  },
};