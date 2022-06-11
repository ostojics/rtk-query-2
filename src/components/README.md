# Components

The components folder consists of 3 groups, **atoms molecules** and **organisms**.

<img width="100%" alt="atomic design" src="https://miro.medium.com/max/1400/1*fOVQj8dgr1Oobj3Uta24JQ.png" />

Each group will have it's own documentation about what it is and what should be placed in them.

## Conventions

### Naming

Component naming convention is pretty simple, every component root folder starts with **capital** character and every file closely related to component as well.

Example: _Button.tsx_

### Architecture

This is how every new component should start off, it is bare minimum for it to be considered a valid component.

```ts
components
|__Button
  |__ __tests__
    |__ Button.test.ts
  |__Button.tsx
  |__Button.scss
```
