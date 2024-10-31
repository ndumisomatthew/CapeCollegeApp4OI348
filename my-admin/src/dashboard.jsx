import { Create, SimpleForm, TextInput, List, CreateButton, Datagrid, TextField, SelectInput, PasswordInput, Link } from 'react-admin';
import { Box, Typography } from '@mui/material';

// Display the list of users (optional)
export const UsersList = () => (
    <List empty={<Empty />}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="surname" />
        </Datagrid>
    </List>
);

// Form to create a new profile with role selection
const ProfileCreate = () => (
    <Create>
       <SimpleForm>
        <TextInput source="name" label="Name" />
        <TextInput source="surname" label="Surname" />
        <TextInput source="username" label="Username" />
        <TextInput source="passwordConfirm" type="password" label="Password" />
        <SelectInput source="role" label="Role" choices={[
            { id: 'Applicant', name: 'Applicant' },
            { id: 'Student', name: 'Student' },
        ]} />
       </SimpleForm>
    </Create>
);

// Empty state for when there are no users
const Empty = () => (
    <Box textAlign="center" m={1}>
        <Typography variant="h4" paragraph>
            You do not have a profile
        </Typography>
        <Typography variant="body1">
            Would you like to create one?
        </Typography>
        <Link resource="users" label="Create Profile" /> 
    </Box>
);

export default ProfileCreate;
