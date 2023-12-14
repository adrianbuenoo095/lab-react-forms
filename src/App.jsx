import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import TableHeader from "./components/TableHeader";

import studentsData from "./assets/students.json";

function App() {
  //   const initialValues = {
  //     text: "",
  //     url: "",
  //     country: "",
  //     phone: "",
  //     email: "",
  //     username: "",
  //     password: "",
  //     cpassword: ""
  // };

  const [students, setStudents] = useState(studentsData);
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [telphone, setTelphone] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [select, setSelect] = useState("");
  const [number, setNumber] = useState(0);

  const handleTextInput = (e) => { setText(e.target.value) }
  const handleUrlInput = (e) => { setUrl(e.target.value) }
  const handleTelphoneInput = (e) => { setTelphone(e.target.value) }
  const handleEmailInput = (e) => { setEmail(e.target.value) }
  // const handlePasswordInput = (e) => { setPassword(e.target.value) }
  const handleCheckboxInput = (e) => { setCheckbox(e.target.checkbox) }
  const handleSelectInput = (e) => { setSelect(e.target.value) }
  const handleNumberInput = (e) => { setNumber(e.target.valueAsNumber) }

  console.log(handleNumberInput)

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={(e) => { console.log(e.target) }}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" onChange={handleTextInput} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={handleUrlInput} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handleTelphoneInput} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleEmailInput} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleSelectInput}>
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
              onChange={handleNumberInput}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleCheckboxInput} />
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
