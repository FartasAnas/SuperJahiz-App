import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/authApiSlice";
import { setCredentials } from "../../features/authSlice";
import "./LoginForm.css";
export default function LoginForm() {
    const errRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [login, { isLoading }] = useLoginMutation();
    useEffect(() => {
      setErrMsg("");
    }, [username, password]);
    useEffect(() => {
      console.log();
      if (localStorage.getItem("user") != undefined) {
        navigate("/home");
      }
    }, []);
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const userData = await login({ username, password }).unwrap();
        dispatch(setCredentials({ ...userData, username }));
        console.log(userData?.roles[0].authority);
        setUsername("");
        setPassword("");
        if (userData?.roles[0]?.authority?.includes("ADMIN")) {
          navigate("/dashboard");
        } else {
          navigate("/home");
        }
      } catch (err) {
        if (!err?.status) {
          setErrMsg("No Server Response");
        } else if (err.status === 400) {
          setErrMsg("Missing Email or Password");
        } else if (err.status === 401) {
          setErrMsg("Wrong Email or Password");
        } else {
          setErrMsg("Login Failed");
        }
        errRef.current.focus();
      }
    };
    const handleUserInput = (e) => setUsername(e.target.value.toLowerCase());
    const handlePwdInput = (e) => setPassword(e.target.value);
    return (
      <div className="row d-flex justify-content-center w-100">
        <aside className="col-sm-4">
          <div className="card">
            <article className="card-body">
              <a href="" className="float-right btn btn-outline-primary">
                Sign up
              </a>
              <h4 className="card-title mb-4 mt-1">Sign in</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your email</label>
                  <input
                    name=""
                    className="form-control"
                    placeholder="Email"
                    type="email"
                    value={username}
                    onChange={handleUserInput}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your password</label>
                  <input
                    className="form-control"
                    placeholder="******"
                    type="password"
                    onChange={handlePwdInput}
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Save password
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
              </form>
            </article>
          </div>
        </aside>
      </div>
    );
}
