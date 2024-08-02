import React from "react";
import { useState } from "react";

const React_Form = () => {
  //1 state  defined

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    useredu: "",
    doc: null,
  });

  //option
  const [firstname, setFirstname] = useState("");
  const [FnameError, setFnameError] = useState("please enter your name");

  const [lastname, setLastname] = useState("");
  const [LnameError, setLnameError] = useState("");

  const [email, setemail] = useState("");
  const [pasword, setpasword] = useState("");
  const [useredu, setuseredu] = useState("");
  const [doc, setdoc] = useState("");

  // console.log(data);

  const GetFirstName = (e) => {
    // alert()

    // console.log(e);
    // console.log(e.target);
    console.log(e.target.value);
    //set data

    // setData({firstname:e.target.value})
    setFirstname(e.target.value);
  };

  const SaveForm = (e) => {
    e.preventDefault();

    if(FormValidation()){
      alert("congrats successfully submited ur data");
      
      setData({
        firstname: firstname,
        lastname: lastname,
        email: email,
        useredu: pasword,
        doc: doc,
      });
      console.log(data);

      //empty field after submiting
      setFirstname("");
      setLastname("");
      setemail("");
      setpasword("");
      setdoc("");
  
      document.getElementById("img").value = "";
      }
    // console.log(firstname);
    // console.log(lastname);
    // console.log(email);
    // console.log();
    // console.log(doc);
   

    //*********** */
   
  };


  const FormValidation=()=>{
    let error=true;
    if(firstname===''){
      setFnameError('please enter your name')
      error=false;
    }
    else{
      setFnameError('')
    }

    if(lastname===''){
      setLnameError('please enter your Last name')
      error=false;
    }
    else{
      setLastname('')
    }
    return error;
  }
  return (
    <>
      <form onSubmit={(e) => SaveForm(e)}>
        <div className="container-fluid">
          <div className="row bg-dark p-4 text-light  ">
            <div className="col-md-12">
              <h1 className="text-center fw-bold p-3 my-4 bg-dark text-light">
                Form handeling
              </h1>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 my-4">
                  <div className="form-group">
                    {/* <input type="text" value={data.firstname} onChange={(e)=>GetFirstName(e)} placeholder='enter your first name' className='form-control fw-bold'  /> */}
                    <input
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      placeholder="enter your first name"
                      className="form-control fw-bold"
                    />
                    {FnameError ? (
                      <p className="text-danger fw-bold mt-2">{FnameError}</p>
                    ) : null}
                  </div>
                </div>

                <div className="col-md-6 my-4">
                  <div className="form-group">
                    <input
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="enter your last name"
                      className="form-control fw-bold"
                    />
                    {LnameError ? (
                      <p className="text-danger fw-bold mt-2">{LnameError}</p>
                    ) : null}
                  </div>
                </div>

                <div className="col-md-6 my-4">
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      name=""
                      placeholder="john@gmail.com"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-6 my-4">
                  <div className="form-group">
                    <input
                      type="password"
                      value={pasword}
                      onChange={(e) => setpasword(e.target.value)}
                      name=""
                      placeholder="enter your password"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-12 my-4">
                  <div className="form-group">
                    <label htmlFor="">Choose Your Location</label>
                    <select
                      name=""
                      className="form-control"
                      value={useredu}
                      onChange={(e) => setuseredu(e.target.value)}
                    >
                      <option value="MCS/MCA">MCS/MCA</option>
                      <option value="BCS/MCA">BCS/BCA</option>
                      <option value="BE/B-TECH">BE/B-TECH</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-12 my-4">
                  <div className="form-group">
                    <label htmlFor="">Upload Your Document</label>
                    <input
                      type="file"
                      name=""
                      id="img"
                      className="form-control"
                      onChange={(e) => setdoc(e.target.files[0].name)}
                    />
                    {/* <input type="file" name='' id='' className='form-control' onChange={(e) => setDoc(e.target.files?.[0]?.name || '')} /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center my-3">
              <button className="btn btn-danger px-4 fw-bold">
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default React_Form;
