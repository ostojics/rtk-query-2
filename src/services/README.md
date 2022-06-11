# Services

All API calls should be split to their adequate services in this folder.

### Service call example

```
export function getProjectComments(id: number): AxiosPromise<Comment[]> {
    return httpClient.get(`${API.PROJECT_SERVICE.BASE}/${id}/comment`);
}
```
