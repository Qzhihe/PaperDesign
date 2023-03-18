import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch, { SwitchProps } from '../components/Switch';

export default {
  title: '组件/Switch 开关',
  id: 'Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

export const I = (args: SwitchProps) => {
  return (
    <>
      <Switch {...args}></Switch>
    </>
  )
}

I.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  checkedChildren: {
    control: {
      type: 'text'
    }
  },
  unCheckedChildren: {
    control: {
      type: 'text'
    }
  }
};

I.storyName = '默认开关样式';