import style from "../assets/styles/signup.module.css";
import {useState} from 'react'

function SignUp() {
  let [email,setEmail] = useState("");
  let [name,setName] = useState("");
  let [password,setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault();
   
  }

  return (
    <>
      <div className={style.signupContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
        <input type = "text" required value = {name} onChange={(e) => setName(e.target.value)} placeholder = "Enter Your Name:"></input>
        <input type = "email" required value={email} onChange = {(e) => setEmail(e.target.value)} placeholder = "Enter your email"></input>
        <input type = "password" required value={password} onChange = {(e) => setPassword(e.target.value)} placeholder = "Enter your Password"></input>
        <input type = "submit" value = "Register"/>
        </form>
      </div>
    </>
  );
}

export default SignUp;
