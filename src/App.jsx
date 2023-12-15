import { useState } from "react";
import "./App.css";
import studentsData from "./assets/students.json";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import TableHeader from "./components/TableHeader";


function App() {
  const initialValues = {
    text: "",
    url: "",
    telphone: "",
    email: "",
    password: "",
    checkbox: false,
    select: "",
    number: 0
  };

  const [students, setStudents] = useState(studentsData);
  const [values, setAllValues] = useState(initialValues);

  const handleChange = (e) => {
    setAllValues({
      ...values, [e.target.name]: e.target.value || e.target.checked || e.target.valueAsNumber
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newStudent = { ...values };
    setStudents([...students, newStudent]);
    setAllValues(initialValues);
  }


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={handleChange} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handleChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleChange}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={handleChange}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleChange} />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
