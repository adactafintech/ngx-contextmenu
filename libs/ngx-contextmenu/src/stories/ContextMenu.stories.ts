import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ContextMenuModule } from '../lib/ngx-contextmenu.module';
import ContextMenuComponent from './ngx-contextmenu/ngx-contextmenu.component';

export default {
  title: 'Context Menu/Demo',
  component: ContextMenuComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'centered',
  },
  decorators: [
    moduleMetadata({
      imports: [ContextMenuModule],
    }),
  ],
  play: undefined,
  argTypes: {
    dir: {
      name: 'Direction',
      description:
        'Defines the orientation of the context menu, left-to-right or right-to-left',
      options: ['left-to-right', 'right-to-left'],
      mapping: {
        'left-to-right': 'ltr',
        'right-to-left': 'rtl',
      },
      control: { type: 'radio' },
    },
    menuItemExecuted: {
      action: 'From the context menu, you chose',
      table: {
        disable: true,
      },
    },
    menuClass: {
      description: 'CSS class to apply to the menu',
      options: ['none', 'custom-theme-blue'],
      control: { type: 'select' },
    },
    contextMenuOpened: {
      action: 'Context menu was opened',
      table: {
        disable: true,
      },
    },
    contextMenuClosed: {
      action: 'Context menu was closed',
      table: {
        disable: true,
      },
    },
    close: {
      table: {
        disable: true,
      },
    },
    open: {
      table: {
        disable: true,
      },
    },
    execute: {
      table: {
        disable: true,
      },
    },
    demoMode: {
      name: 'Mode',
      description: 'Display context menu with form elements',
      control: 'radio',
      options: ['simple', 'form'],
      defaultValue: 'simple',
      table: {
        disable: false,
      },
    },
    programmaticOpen: {
      name: 'Programmatically open',
      control: 'boolean',
      description: 'Programmatically open the contextmenu from a button',
      table: {
        disable: false,
      },
    },
  },
} as Meta;

const Template: Story<ContextMenuComponent> = (args: ContextMenuComponent) => ({
  styles: ['./assets/stylesheets/index.scss'],
  props: args,
});

export const Demo = Template.bind({});
