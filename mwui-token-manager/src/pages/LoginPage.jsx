import React from "react";
import ReactDOM from "react-dom";
import GitHubLogin from "react-github-login";

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(<GitHubLogin clientId="ac56fad434a3a3c1561e" onSuccess={onSuccess} onFailure={onFailure} />, document.getElementById("example"));

const LoginPage = ({ setLoginUser }) => (
    <div id="login">
        <h1>Login</h1>
        <GitHubLogin />
        <a href="">Prototype</a>//hier die referenz rein zu der seite
    </div>
);

export default LoginPage;
