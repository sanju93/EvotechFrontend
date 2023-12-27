import style from "../assets/styles/survey.module.css";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';

function SignUp() {
  let [email,setEmail] = useState("");
  let [name,setName] = useState("");
  let [password,setPassword] = useState("");
  let navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
   
  }

  return (
    <>
      <div className={style.SurveyContainer}>
        <div className={style.left}>
           <p>Name</p>
           <p>Email</p>
           <p>Password</p>
        </div>
        <form className={style.surveyForm} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.right}>

          
        <input type = "text" className={style.text} required value = {name} onChange={(e) => setName(e.target.value)} placeholder = "Enter Your Name:"></input>
        <input type = "email"  className={style.text} required value={email} onChange = {(e) => setEmail(e.target.value)} placeholder = "Enter your email"></input>
        <input type = "password"  className={style.text} required value={password} onChange = {(e) => setPassword(e.target.value)} placeholder = "Enter your Password"></input>
        </div>
        <input type = "submit" value = "Register"/>
        <button onClick={() => navigate('/')}>Back to Home</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
