# shift4-challenge

## Setup and Running

Developed against NodeJS v18

### Install

`npm install`

### Start Dev

`npm start`

### Run Tests Suite

`npm run test`

## Overview

Created [CRA](https://create-react-app.dev/), with **TypeScript**, **emotion.js** for styling, and **jest + react-testing-library** for testing.

### Dependencies

As little dependencies are used as possible. There is no general componets library used here like MUI.

### Atomic Components

`src/components` - contains a set of dumb, visual, atomic, context agnostic components.

Some of the components just abstract away HTML elements, so the features can be built using only the project components. Example: `<Typography />`, `<Box />` or `<Paper />`.

There are also some more complex components like `<Form />` and it's **Field** child components which in conjuction with **Input**s allow to easily manage Form state, while providing a simple composable components interface.

### Features

`src/features` - should expose containers that in the real world would connect with API's. Each of them should be contained by responsibility.

In this example there is no API connected, but still the segregation remains as it would be in a real world scenario.

### Theming

`src/theme.ts` - contains all the colors used in the design system, has spacing, shadow, responsive helpers defined. In addition also atomic components style variables can be found here, so changing most of the styling can be done from here, or adding for example a dark theme.

### Internalization

`src/locales/{lang}/{context}.json` - contains dictionaries that can be used within the app. Standard [react-int18next](https://react.i18next.com/) configuration, so please refer to it's documentation for more info.
