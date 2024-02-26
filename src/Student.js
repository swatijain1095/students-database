function Student( {handleClick, studentsData} ) {

    
    const renderStudentsData = () => {
        return studentsData.map(({id, firstName, lastName, email}) => {
            return <tr onClick={() => {handleClick({id, firstName, lastName, email})}} key={id}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
            </tr>
        });
    }


    return <div>
        <input />
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {renderStudentsData()}
            </tbody>
        </table>
    </div>;
}

export default Student;




// Create students component that will display a table of student data
// [id, name, mobile]

// create a onClick handler on table row, i.e if I select swati's row then the selected student data should be passed to the parent component
// and through parent component you should log out the student data in console log.