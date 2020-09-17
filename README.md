# React redux hooks vs connect

Comparison about using react redux hooks vs. connect and testing abilities. 

Look at the components and test files. It's a simple login/logout application.

```sh
# install deps
npm i

# visit localhost:1234
npm start
```

## Quick overview

- Hooks
  - No more connect containers, just components
  - Need to mock `useDispatch` and `useSelector` functions, but relativly easy to mock with `jest`
- Connect
  - Two components, the view component and the connect container, but can be done in one file
  - Better decoupling, the component is just a functional component
  - Nested connect containers require mocking the store or `enzyme.shallow` rendering