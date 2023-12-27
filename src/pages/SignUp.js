import style from "../assets/styles/survey.module.css";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';

function SignUp() {
  let [email,setEmail] = useState("");
  let [name,setName] = useState("");
  let [password,setPassword] = useState("");
  let navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    try{
      let res = await axios({
        method : 'POST',
        url : `${url}/users/register`,
        headers : {
          'Content-Type' : 'application/json'
        },
        data : {name,email,password}

      });

      if (res.status === 201){
        toast.success("User Registered Successfully");
        navigate('/');
      }
    }catch(err){
      toast.error('Something getting error in creatinfg the account');
    }

    setEmail("");
    setName("");
    setPassword("");
   
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
