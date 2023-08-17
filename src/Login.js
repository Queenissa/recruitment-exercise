import React, { useEffect, useState } from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        console.log(email);
        console.log(password);
    }
    return (
        <div className="container">
    <div className="row">
        <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
            <div className="row">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <div className="card rounded shadow shadow-sm">
                        <div className="card-header text-center">
                            <h3 className="mb-0">Sign In</h3>
                            <br></br>
                        </div>
                        <div className="card-body">
                            <form className="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                <div className="form-group">
                                    <label for="uname1">Username</label>
                                    <input type="text" className="form-control form-control rounded-0" name="username" 
                                    id="username" 
                                    placeholder="Username" 
                                    onChange={(e) => {setEmail(e.target.value)} }/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control form-control rounded-0" id="password" required="" 
                                    autocomplete="off" 
                                    placeholder="Password"
                                    onChange={(e) => {setPassword(e.target.value)}}/>
                                </div>
                               <div className="text-center">
                                <button type="submit" className="btn btn-primary" id="btnLogin" onClick={login}>Login</button>
                               </div>
                            </form>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    </div>
</div>

    )
}

export default Login;