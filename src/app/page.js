"use client"
//1 Import Area
// import DefaultImport from 'somelibrary/  ./../somelocation';
import { useState } from 'react';
import styles from './page.module.css'

//2 Define Area
//IF a variable defined outsid the function defination then it called
//Global variable
let name='ANil';//Global Variable
function Home() {
  //2.1 Hooks area
  //const [variable,setVariableFunction] = useState(initialData)
  const [name3,setVariableFunction] = useState('Ravi')

  let name2='Rakesh';

  //Every function may return something
  //Every function return some html i.e JSX
  return (
    <main>
        <h1>Hello {name}</h1>
        <h1>Hello {name2}</h1>
        <h1>Hello {name3}</h1>
    </main>
  )
}

//3. Export are
export default Home;
