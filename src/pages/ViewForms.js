import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../utils/constant";
import style from "../assets/styles/view.module.css";
function Viewforms() {
  let [forms, setForms] = useState([]);

  useEffect(() => {
    async function fetching() {
      try {
        let res = await axios({
          method: "GET",
          url: `${url}/users/getForms`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (res.status === 201) {
          console.log(res.data.results);
          setForms(res.data.results);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetching();
  }, []);

  return (
    <>
      <div className={style.ViewContainer}>
        {forms.map((item, index) => (
          <div key={item._id} className={style.child}>
            <h1>Survey : {index + 1}</h1>

            <div>
              <p>Name : {item.name}</p>
              <p>Gender : {item.gender}</p>
              <p>Nationality : {item.nationality}</p>
              <p>Email : {item.email}</p>
              <p>Phone : {item.phone}</p>
              <p>Address : {item.address}</p>
              <p>Message : {item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Viewforms;
