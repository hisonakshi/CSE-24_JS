// Student.jsx
function Student(props) {
    return (
      <div className="student-card">
        <h2>{props.name}</h2>
        <p>
          <strong>Course:</strong> {props.course}
        </p>
        <p>
          <strong>Roll No:</strong> {props.rollNo}
        </p>
        <p>
          <strong>Section:</strong> {props.section}
        </p>
      </div>
    );
  }
  
  export default Student;