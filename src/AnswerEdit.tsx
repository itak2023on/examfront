import { DateInput, Edit, NumberInput, SimpleForm, TextInput, Create, ReferenceField } from 'react-admin';

export const AnswerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="Atext" />
            <NumberInput source="Qid" />
            <TextInput source="pt" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const AnswerCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceField source="Qid" reference="questions" />
            <TextInput source="Atext" />
            <NumberInput source="Qid" />
            <TextInput source="pt" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);