import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withConsole } from '@storybook/addon-console';
import { initializeWorker, mswDecorator } from 'msw-storybook-addon';

initializeWorker();
addDecorator(mswDecorator);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withInfo);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
