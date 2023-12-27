import { useState } from "react";
import style from "../assets/styles/survey.module.css";
import axios from "axios";
import { url } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
function Survey() {
  let [name, setName] = useState("");
  let [gender, setGender] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [message, setMessage] = useState("");
  let [nationality, setNationality] = useState("");

  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log(gender);
      let res = await axios({
        method: "POST",
        url: `${url}/users/createSurvey`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: { name, gender, email, phone, address, message, nationality },
      });

      if (res.status === 201) {
        console.log("form submitted");
        toast.success("Form Submitted")
       
      
      }
    } catch (err) {
      console.log(err);
      toast.error("Something getting wrong to fill the form");
    }

    setName("");
    setGender("");
    setAddress("")
    setNationality("")
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <>
      <div className={style.SurveyContainer}>
        <div className={style.left}>
          <p>Name</p>
          <p>Gender</p>
          <p>Nationality</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Address</p>
          <p>Message</p>
        </div>
        <form className={style.surveyForm} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.right}>
            <input
              type="text"
              className={style.text}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="enter your name..."
              required
            ></input>
            <select
              required
              value={gender}
              className={style.text}
              onChange={(e) => setGender(e.target.value)}
              defaultValue={"male"}
            >
              <option value={"male"}>male</option>
              <option value={"female"}>female</option>
              <option value={"others"}>others</option>
            </select>
            <input
              required
              value={nationality}
              className={style.text}
              onChange={(e) => setNationality(e.target.value)}
              type="text"
              placeholder="Enter your Nationality"
            ></input>
            <input
              value={email}
              className={style.text}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your Email..."
            ></input>
            <input
              required
              value={phone}
              className={style.text}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Enter your phoneNo..."
            ></input>
            <input
              required
              value={address}
              className={style.text}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Enter your Address"
            ></input>
            <textarea
              required
              value={message}
              className={style.text}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message..."
            ></textarea>
          </div>

          <input type="submit" value={"submit"} />
          <button onClick={() => navigate("/viewForms")}>View Forms</button>
        </form>
      </div>
    </>
  );
}

export default Survey;
