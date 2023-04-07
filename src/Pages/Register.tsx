import React from "react";
import axios from "axios";

const Register: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  // React.useEffect(() => {
  //   console.log(email);
  //   console.log(pass);
  // }, [email, pass]);

  async function makePost() {
    if (email != "" && pass != "")
      try {
        await axios.post("http://localhost:5000/api/registration", {
          email: `${email}`,
          password: `${pass}`,
        });
      } catch (error) {
        alert(error);
      }
  }

  const onChangeEmail = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const onChangePass = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPass(event.target.value);
  };

  return (
    <div className="container">
      <div>
        <br />
        <div className="inputbox">
          <input
            value={email}
            onChange={onChangeEmail}
            required={true}
            type="text"
          />
          <span>Email</span>
          <i></i>
        </div>
        <br />
        <div className="inputbox">
          <input
            value={pass}
            onChange={onChangePass}
            required={true}
            type="text"
          />
          <span>Пароль</span>
          <i></i>
        </div>
      </div>
      <button onClick={() => makePost()}>Отправить</button>
    </div>
  );
};

export default Register;
