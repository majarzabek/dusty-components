import type { Meta, StoryObj } from '@storybook/react';
import pig from './assets/pigs.jpg';

import { SkeletonDiv } from '../src/index.js';

const meta = {
  component: SkeletonDiv,
  argTypes: {
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  }
} satisfies Meta<typeof SkeletonDiv>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Div: Story = {
  args: {
    children: <div style={{ display: 'flex', gap: '1rem' }}>
      <img src={pig} alt="pig" width={200} />
      <p>The kunekune (Māori pronunciation: [kʉnɛkʉnɛ]) is a small breed of domestic pig from New Zealand. Kunekune are hairy with a rotund build, and may bear wattles hanging from their lower jaws. Their colour ranges from black and white, to ginger, cream, gold-tip, black, brown, and tricoloured. They have a docile, friendly nature.</p>
    </div>,
    loaded: false
  }
};