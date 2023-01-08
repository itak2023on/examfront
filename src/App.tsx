import { useState } from 'react'

import { Admin, Resource, ListGuesser, EditGuesser  } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import './App.css'

import { UserList } from "./users";
import { QuestionList } from "./questions";
import { AnswerList } from './answers';
import { AnswerEdit, AnswerCreate } from './AnswerEdit';
import { Dashboard } from './Dashboard';
import { Exam } from './exam';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const questionDP = jsonServerProvider('http://localhost:3000/exam');

const App = () => (
  <div>
    <Exam/>
    
<Admin dataProvider={questionDP} dashboard={Dashboard}>

<Resource name="questions" list={QuestionList} recordRepresentation="Qtext" />
<Resource name="answers" list={AnswerList} edit={AnswerEdit}  create={AnswerCreate} />
</Admin>
  </div>
  
  
  );

export default App;
