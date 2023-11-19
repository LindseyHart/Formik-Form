import { Field } from "formik";
import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";


function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) =>{
      console.log('form:', values);
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Username should be an email";
      }
      if(!values.password) errors.password = "Field Required";
      return errors;
    } 
  });

  

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
       <div><h1>Sign Up Today</h1></div>
          <input type="text" name="email" id='emailField' placeholder="Email" onChange={formik.handleChange} value={formik.values.email}/> <br/>
          {formik.errors.email ? <div style={{color:'red'}}>
            {formik.errors.email && (<div id="emailError" style={{color:"red"}}>{formik.errors.email}</div>)}
            </div>: null}

            <input
              type="password"
              id="pswField"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
              className="form-control"
            />
            {formik.errors.password && (
              <div id="pswError" style={{ color: "red" }}>
                {formik.errors.password}
              </div>)}
              <br/>
          <button type="submit" id='submitBtn'>Submit</button>
      </form>
    </div>
  );
}



export default App;
