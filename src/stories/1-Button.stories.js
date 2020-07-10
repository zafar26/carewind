import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from "../components/Button"

export default {
  title: 'Button',
  component: Button,
};

export const Button_new_test = () => <Button label="V" type="start" time="time" onClick={action('clicked Button')}>Hello Button</Button>;
// export const Button_new_test = () => <Button label="cancel" type="cancel" onClick={action("CLICKED")}>Hello Button</Button>;
