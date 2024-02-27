import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Student from './Student';
import './style.css'

export default function App(props) {
  const [studentsData, setStudentsData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [searchItem, setSearchItem] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const handleClick = (student) => {
    setSelectedStudent(student);
  };

  useEffect(() => {
    // Call API & load data into students data state
    async function fetchData() {
      setIsLoading(true);
        const response = await axios.get('https://dummyjson.com/users', {
          });
          setIsLoading(false);
          setStudentsData(response.data.users);
          setFilteredData(response.data.users);
      }
      fetchData();
  }, []);



  //filtering logic
  const handleChange =(e) => {
    setSearchItem(e.target.value)
    const filtered = studentsData.filter((student) => student.firstName.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredData(filtered);
  }

  return (
    <div className='App'>
        <h1>Students Database</h1>
        <section>
            <h2>Selected Student :</h2>
            <p>Id: {selectedStudent.id}</p>
            <p>First Name: {selectedStudent.firstName}</p>
            <p>Last Name: {selectedStudent.lastName}</p>
            <p>Email: {selectedStudent.email}</p>
        </section>
        <input placeholder='Search' value={searchItem} onChange={handleChange}/>
      <Student isLoading={isLoading} studentsData={filteredData} handleClick={handleClick} />
    </div>
  );
}



// Create students component that will display a table of student data
// [id, name, mobile]

// create a onClick handler on table row, i.e if I select swati's row then the selected student data should be passed to the parent component
// and through parent component you should log out the student data in console log.