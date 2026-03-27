// ---Q1-- Commented out the code for Q1 and added code for Q2

// import { useState } from "react";



// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


  const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  form: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2>Login</h2>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={styles.input}
//         />

//         <button type="submit" style={styles.button}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;



//Q2--commented out the code for Q1 and added code for Q2

// import { useState } from "react";

// function ValidationForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (name.length < 3) {
//       setError("Name must be at least 3 characters");
//       return;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(email)) {
//       setError("Invalid email format");
//       return;
//     }

//     setError("");
//     alert("Form Submitted Successfully");
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2>Validation Form</h2>

//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="text"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//         />

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <button type="submit" style={styles.button}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ValidationForm;

import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    department: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Signup Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Gender */}
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            /> Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            /> Female
          </label>
        </div>

        {/* Department */}
        <select
          name="department"
          value={form.department}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Department</option>
          <option value="CS">Computer Science</option>
          <option value="SE">Software Engineering</option>
          <option value="AI">Artificial Intelligence</option>
        </select>

        {/* Checkbox */}
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          I agree to terms
        </label>

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

export default Signup;