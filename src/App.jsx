// App.jsx
import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Details</h1>

      <Student
        name="Shraddha khapra"
        course="B.Tech CSE"
        rollNo="2503201001169"
        section="CSE-24"
      />

      <Student
        name="Aman Sharma"
        course="B.Tech AI"
        rollNo="2503201001170"
        section="AI-24"
      />

      <Student
        name="Pragati Verma"
        course="BCA"
        rollNo="2503201001171"
        section="BCA-24"
      />
    </div>
  );
}

export default App;