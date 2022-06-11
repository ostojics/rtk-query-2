# Overview

## React Atomic Design + TypeScript

This is a react template using Atomic Design methodology with TypeScript. It will include redux-saga out of the box and further documentation about how should the project be structured.

## What is Atomic Design?

Popularly known within the design world, Atomic Design helps to build consistent, solid and reusable design systems. Plus, in the world of React, Vue and frameworks that stimulate the componentization, Atomic Design is used unconsciously, but when used in the right way, it becomes a powerful ally for developers.

https://bradfrost.com/blog/post/atomic-web-design/

## Usage

```
git clone git@github.com:axiomq/react-template.git
cd react-template
npm i
npm start
```

## Available scripts

#### Start the app

```
npm start
```

#### Eject the app

```
npm eject
```

#### Prepare husky

```
npm run prepare
```

#### Build the app

```
npm run build
```

#### Run all unit tests

```
npm run test
```

#### Run the ESLint

```
npm run lint
```

#### Check all staged files with prettier(automatically ran with husky)

```
npm run pre-commit
```

#### Lint the pushed code and run all unit tests(automatically ran with husky)

```
npm run pre-push
```

## Conventions overview

### General

- Any file that returns jsx should have `.tsx` extension, if it is just plain typescript use `.ts`

### Architecture

- Project should be structured based on Atomic Design principles.

### Components

- Each component has it's own **scss** file and **tests** folder. No component should be merged if there **aren't** any tests written for it.

### Styles

- Each component will have it's own styles file. Root sass folder will include some general styles(for example variables) that will be used across the app.

### Hooks

- Naming convention for hooks should be to always put _use_ before actual hook name.

Example: _useHook.ts_

### Redux

- Each feature will have it's own folder with actions and a reducer.
- In `actions.ts` will be action creators and action types.
- Every reducer should use immer to make sure that state is never mutated

## Testing

- 100% code coverage should be something to always prioritize and aim for.

### Cypress

- Each test should be named in present tense. Elements should be selected using testId. There is a custom function already created for that in support/commands file.

## Useful links

### TypeScript quick start

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

### React with Atomic Design + TypeScript

https://www.youtube.com/watch?v=md_4vFeHKGI

### Cypress best practices

https://docs.cypress.io/guides/references/best-practices
