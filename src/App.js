import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Student from './Student';

export default function App(props) {
  const [studentsData, setStudentsData] = useState([]);

  const handleClick = (student) => {
    console.log(student);
  };
  useEffect(() => {
    // Call API & load data into students data state
    async function fetchData() {
        const response = await axios.get('https://dummyjson.com/users', {
          });
          setStudentsData(response.data.users)
      }
      fetchData();
  }, [])
  

  return (
    <div className='App'>
      <Student studentsData={studentsData} handleClick={handleClick} />
    </div>
  );
}



// Create students component that will display a table of student data
// [id, name, mobile]

// create a onClick handler on table row, i.e if I select swati's row then the selected student data should be passed to the parent component
// and through parent component you should log out the student data in console log.