import { Datagrid, EmailField, List, TextField, UrlField } from 'react-admin';
import { MyNameField } from './MyNameField';


export const Students = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            {/* <TextField source="name" /> */}
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <MyNameField source="name" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
)