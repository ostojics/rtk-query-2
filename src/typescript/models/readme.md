# Models

Models are basically replica of API responses and need to be updated regularly.

Consider this common scenario:

```ts
request.get('/user/1');

// Response:
// user: {
//   id:1,
//   name:"John"
//   lastName:"Doe",
//   age:null,
//   posts: [{id:12,title:'Lorem',body:'...'}]
// }
```

We should create `User` model so that we can keep track of which properties user can have/has.

Example of real life scenario with `User` model and `Post` model.

```ts
interface Post {
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  lastName: string;
  age: null;
  posts: Post[];
}
```
