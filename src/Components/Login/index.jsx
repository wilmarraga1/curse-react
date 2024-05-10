import "./style.css"



const Login = () => {
  
  async function getUsuarios(){
    // let collectionUsuarios = collection(connDatabase, 'usuarios')
    // let resultado = await getDocs(collectionUsuarios)
    console.log(resultado)
  }

  getUsuarios()

  return (
    <div className="login-page">
      <div className="form1">
        <form className="register-form">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button>create</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
        <form className="login-form1">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button type="button">login</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;