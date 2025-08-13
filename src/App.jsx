import { useState } from 'react'
import { Field } from './components/GeneralInfo'
import { EducationSection } from './components/EducBg'
import './App.css'

function App() {
  const [readOnlyOne, setReadOnlyOne] = useState(false);
  const buttonText = readOnlyOne ? "edit" : "done";
  function handleClickOne(){
    readOnlyOne ? setReadOnlyOne(false) : setReadOnlyOne(true);
  }

  return (
    <form onSubmit={() => {}}>

      <section>
        <Field
          type = "text"
          id = "firstName"
          label = "First Name"
          min = {2}
          max = {15}
          readOnly = {readOnlyOne}
        />

        <Field
          type = "text"
          id = "lastName"
          label = "Last Name"
          min = {2}
          max = {15}
          readOnly = {readOnlyOne}

        />

        <Field
          type = "tel"
          id = "contact"
          label = "Contact Number"
          min = {11}
          max = {11}
          readOnly = {readOnlyOne}
        />

        <button type = "button" onClick={handleClickOne}>{buttonText}</button>
      

        <EducationSection/>
      </section>
    </form>
  )
}

export default App
