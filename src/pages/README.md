# Pages

Pages are **specific** instances of layouts. They are populated the way we need certain page to work and look like.

Pages contain specific logic to that page and you shouldn't stress about making page reusable.

<img with="100%" alt="page" src="https://bradfrost.com/wp-content/uploads/2013/06/page1.jpg" />

## Conventions

### Architecture

Pages can often contain complex page specific logic like forms and validations, creating `components` subfolder is ideal for situations like these so you can split up logic into smaller components and keep code clean. **If you need to reuse one of sub-components consider moving it out of that specific page/components**

Example of architecture

```ts
|__home
   |__ components?
       |__ Form
          |__ __tests__
             |__ Form.tsx
          |__ Form.tsx
          |__ Home.scss
   |__ __tests__
      |__ Home.tsx
   |__ Home.scss
   |__ Home.tsx
```
