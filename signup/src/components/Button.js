/**
 * 
 */
import React from 'react';
import { Button } from '@shoutem/ui';

const style = {
  backgroundColor: 'transparent',
  borderColor: 'transparent',
};

export default ({ children, ...props }) => (
  <Button {...props} style={style}>
    {children}
  </Button>
);