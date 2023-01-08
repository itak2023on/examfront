import { Datagrid, DateField, List, NumberField, TextField, ReferenceField, EditButton   } from 'react-admin';

export const AnswerList = () => (
    <List>
        <Datagrid>
        <ReferenceField source="Qid" reference="questions" />
            <TextField source="id" />
            <TextField source="Atext" />
            <NumberField source="Qid" />
            <TextField source="pt" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />

            <EditButton />
        </Datagrid>
    </List>
);