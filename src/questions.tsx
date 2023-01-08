import { List, Datagrid, TextField, EmailField } from "react-admin";

export const QuestionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="Qtext" />
      <TextField source="trueNum" />
    </Datagrid>
  </List>
);