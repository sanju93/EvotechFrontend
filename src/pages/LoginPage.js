import style from "../assets/styles/login.module.css";
import {useState} from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';
import { url } from '../utils/constant';
import {useNavigate} from 'react-router-dom'

function Login() {
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
 
    if (email && password){
     
      try{
       
        let res = await axios({
          url : `${url}/users/login`,
          method : "POST",
          headers : {
            'Content-Type' : 'application/json'
          },
          data : {email,password}
        })

  

        

        if (res.status === 200){
          localStorage.setItem('token',res.data.token);
          toast.success("User has loggedIn successfully");
          navigate('/SurveyForm');

        }
        setEmail("");
        setPassword("");
      }catch(err){
        console.log(err)

         if (err.response.status === 401){
          setPassword("");
          toast.error("Please write the correct password");
         }else if(err.response.status === 405){
          setEmail("");
          setPassword("");
          toast.error("User is not There!");
         }else if(err.response.status === 500){
          setEmail("");
          setPassword("");
          toast.error("Internal server Error");
         }
      }

    }else{
      
    }
    
  }

  return (
    <>
      <div className={style.LoginContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
}

export default Login;
