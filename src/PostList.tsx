import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    useRecordContext,
    SimpleList
} from 'react-admin'

const PostTitle = () => {
    const record = useRecordContext()
    return <span>Post {record ? `"${record.title}"` : ''}</span>
}

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users">
        <SelectInput optionText="name" />
    </ReferenceInput>,
]

export const PostCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
)


export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
)


export const PostList = () => (
    <List filters={postFilters}>
        {/* <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid> */}
        <SimpleList
            primaryText={((record: any) => record.title)}
            secondaryText={((record: any) => `${record.views} views`)}
            tertiaryText={((record: any) => new Date(record.published_at).toLocaleDateString())}
        />
    </List>
)
