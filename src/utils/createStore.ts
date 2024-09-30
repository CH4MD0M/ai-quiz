import { create, StateCreator } from 'zustand';
import { devtools, DevtoolsOptions } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const createStore = <T extends object>(
  name: string,
  initializer: StateCreator<T, [['zustand/devtools', never], ['zustand/immer', never]]>,
  devtoolsOptions: DevtoolsOptions = {},
) =>
  create<T, [['zustand/devtools', never], ['zustand/immer', never]]>(
    devtools(immer(initializer), {
      name,
      enabled: process.env.NODE_ENV === 'development',
      ...devtoolsOptions,
    }),
  );
