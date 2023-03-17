import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from '../components/Switch';

export default {
  title: '组件/Switch 开关',
  id: 'Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

export const I = () => (
  <>
    <Switch></Switch>
  </>
)

export const II = () => (
    <>
      <Switch onChange={() => console.log('state changed')}></Switch>
    </>
)

I.storyName = '默认开关样式';
II.storyName = '绑定开关事件';