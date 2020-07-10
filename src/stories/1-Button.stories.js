import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from "../components/Button"

export default {
  title: 'Button',
  component: Button,
};

export const Buttons = ()=>{
 

return <div style={{display:"flex",justifyContent:"space-around"}}>
<Button type="cancel"  />
<Button type="start" time="12:05:23" />
</div>
}
