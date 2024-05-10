export let estudiantes = ({students})=>{
    console.log(students);
    return (

        <>
        <h1>
            Wilmar
        </h1>
        <p>Soy desarrollador</p>
        <h2>Registros de Estudiantes</h2>
      {students.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th className=''>Nombre</th>
              <th>Edad</th>
              <th>Correo Electrónico</th>
              <th>Nota del Curso</th>
            </tr>
          </thead>
          <tbody className='cursor-pointer'>
            {students.map((student, index) => (
              <tr key={index}>
                <td className=''>{student.firstName} {student.lastName}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p >No hay estudiantes registrados</p>
      )}

        </>
    )
}