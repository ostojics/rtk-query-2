# Data transfer object (DTO)

DTO is simply object that transfers data from client to server.
This folder will be used to manage interfaces of all objects which are required by server API in order to fulfil request.

Example:

```ts
interface updateUserDTO {
  id: number;
  name?: string;
  lastName?: string;
  age?: number;
}
```

`updateUserDTO` contains properties that are both **mandatory** _id_ and **optional** _name_,_lastName_,_age_...

Real life situation:

```ts
// PUT request
const updatedUserData: updateUserDTO = {
  id: 1,
  name: 'John',
};

request.put('api-url', updatedUser);
```
