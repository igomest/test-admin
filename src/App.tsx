import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin"
import jsonServerProvider from "ra-data-json-server"
import { Students } from "./Students"
import { PostCreate, PostEdit, PostList } from "./PostList"
import Dashboard from "./Dashboard"
import authProvider from "./authProvider"

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

export const App = () => {
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource name="users" list={<Students />} />
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
    </Admin>
  )
}
