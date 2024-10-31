import { 
    List, 
    Datagrid, 
    TextField, 
    DateField, 
    BooleanField, 
    Show,
    TabbedForm,
    SimpleShowLayout, 
    RichTextField, 
    EditButton, 
    required, 
    ReferenceManyField, 
    Edit, 
    SimpleForm, 
    TextInput, 
    DateInput,
    SelectField,
    ReferenceInput,
    NumberInput,
    SelectInput,
    ReferenceField,
    useShowContext,
    ReferenceArrayField,
    ReferenceOneField
} from 'react-admin';
import { Box, Stack, Typography, Divider} from "@mui/material" ;

export const info_modulesList = () => (
    <List>
                        <Datagrid>
                        {/* <TextField source="Student_Id"/> */}
                        <ReferenceField source='Name' reference='Students' link={false}>
                            <TextField source="Name"/>
                        </ReferenceField>
                        <ReferenceField source='Name' reference='Students' link={false}>
                            <TextField source="Surname"/>
                        </ReferenceField>
                        <ReferenceField source='Name' reference='Students' link={false}>
                            <TextField source="Degree"/>
                        </ReferenceField>
                    </Datagrid>
    </List>
);

export const info_modulesShow = () => (
    <Show>
        <SimpleShowLayout>
            <Stack direction="column" spacing={2}>
                {/* Name and Surname section */}
                <Box display="flex">
                    <Box width={300}>
                        <Typography variant="subtitle1">Name</Typography>
                        <ReferenceField source='Name' reference='Students' link={false}>
                            <TextField source="Name"/>
                        </ReferenceField>
                    </Box>
                    <Box width={300}>
                        <Typography variant="subtitle1">Surname</Typography>
                        <ReferenceField source='Name' reference='Students' link={false}>
                            <TextField source="Surname"/>
                        </ReferenceField>
                    </Box>
                </Box>
            </Stack>
                <Box paddingBottom={2}>
                    <Typography variant="subtitle1">Degree</Typography>
                    <ReferenceField source='Name' reference='Students' link={false}>
                            <TextField source="Degree"/>
                    </ReferenceField>
                </Box>


           {/* Header Row for Name, Credits, and Final Mark */}
           <Box padding={2} display="flex" justifyContent="space-between" textAlign="left">
                <Typography variant="subtitle1" style={{ width: '33%' }}>Module</Typography>
                <Typography variant="subtitle1" style={{ width: '33%' }}>Credits</Typography>
                <Typography variant="subtitle1" style={{ width: '33%' }}>Final Mark</Typography>
            </Box>

            {/* Module Rows */}
            <Box padding={2} display="flex" justifyContent="space-between">
                <TextField source="Module_1" style={{ width: '33%' }} />
                <TextField source="Module_1_Credits" style={{ width: '33%' }} />
                <TextField source="Module_1_Final_Mark" style={{ width: '33%' }} />
            </Box>

            <Box padding={2} display="flex" justifyContent="space-between">
                <TextField source="Module_2" style={{ width: '33%' }} />
                <TextField source="Module_2_Credits" style={{ width: '33%' }} />
                <TextField source="Module_2_Final_Mark" style={{ width: '33%' }} />
            </Box>

            <Box padding={2} display="flex" justifyContent="space-between">
                <TextField source="Module_3" style={{ width: '33%' }} />
                <TextField source="Module_3_Credits" style={{ width: '33%' }} />
                <TextField source="Module_3_Final_Mark" style={{ width: '33%' }} />
            </Box>

            <Box padding={2} display="flex" justifyContent="space-between">
                <TextField source="Module_4" style={{ width: '33%' }} />
                <TextField source="Module_4_Credits" style={{ width: '33%' }} />
                <TextField source="Module_4_Final_Mark" style={{ width: '33%' }} />
            </Box>

            <Box padding={2} display="flex" justifyContent="space-between">
                <TextField source="Module_5" style={{ width: '33%' }} />
                <TextField source="Module_5_Credits" style={{ width: '33%' }} />
                <TextField source="Module_5_Final_Mark" style={{ width: '33%' }} />
            </Box>

            <Box padding={2} display="flex" justifyContent="space-between">
                <TextField source="Module_6" style={{ width: '33%' }} />
                <TextField source="Module_6_Credits" style={{ width: '33%' }} />
                <TextField source="Module_6_Final_Mark" style={{ width: '33%' }} />
            </Box>
        </SimpleShowLayout>
    </Show>
);


export const info_modulesEdit = () => (
    <Edit>
        <SimpleForm>
            {/* Module Rows */}
            <Box padding={2} display="flex" gap={2} sx={{width: 1000}}>
                <TextInput source="Module_1" sx={{ width: '75%' }} />
                <NumberInput source="Module_1_Final_Mark" sx={{ width: '25%' }} />
            </Box>

            <Box padding={2} display="flex" gap={2} sx={{width: 1000}}>
                <TextInput source="Module_2" style={{ width: '75%' }} />
                <NumberInput source="Module_2_Final_Mark" style={{ width: '25%' }} />
            </Box>

            <Box padding={2} display="flex" gap={2} sx={{width: 1000}}>
                <TextInput source="Module_3" style={{ width: '75%' }} />
                <NumberInput source="Module_3_Final_Mark" style={{ width: '25%' }} />
            </Box>

            <Box padding={2} display="flex" gap={2} sx={{width: 1000}}>
                <TextInput source="Module_4" style={{ width: '75%' }} />
                <NumberInput source="Module_4_Final_Mark" style={{ width: '25%' }} />
            </Box>

            <Box padding={2} display="flex" gap={2} sx={{width: 1000}}>
                <TextInput source="Module_5" style={{ width: '75%' }} />
                <NumberInput source="Module_5_Final_Mark" style={{ width: '25%' }} />
            </Box>

            <Box padding={2} display="flex" gap={2} sx={{width: 1000}}>
                <TextInput source="Module_6" style={{ width: '75%' }} />
                <NumberInput source="Module_6_Final_Mark" style={{ width: '25%' }} />
            </Box>
        </SimpleForm>
    </Edit>
);