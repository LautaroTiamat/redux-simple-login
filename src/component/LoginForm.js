import { useState } from "react";

const LoginForm = (props) => {
   const { user, login, update, logout } = props;

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [updateEmail, setUpdateEmail] = useState('');

   // Login:

   const handleLoginClick = () => {
      // Hacemos el llamado el backend ...

      if (email !== '' && password !== '') {
         // Si todo está bien ...:

         localStorage.setItem('email', email)

         login({ email });
      }
   }

   // Update:

   const handeUpdateClick = () => {
      if (updateEmail !== '') {
         update({ email: updateEmail });
      }
   }

   return (
      <div className="App">
         {
            !user ? (
               <div>
                  { /* INICIO: Formulario */ }
                  <h1>Iniciar Sesión</h1>

                  <input
                     type="email"
                     placeholder="email"
                     onChange={event => setEmail(event.target.value)}
                     value={email}
                  />

                  <br />

                  <input
                     type="text"
                     placeholder="contraseña"
                     onChange={event => setPassword(event.target.value)}
                     value={password}
                  />

                  <br />

                  <button onClick={handleLoginClick}>
                     Ingresar
                  </button>
                  { /* FIN: Formulario */ }
               </div>
            ) : (
               <div>
                  { /* redireccionar a su panel... */ }
                  <h2>Bienvenid@ { user.email }</h2>

                  <h3>Actualizar datos:</h3>

                  <input
                     type="email"
                     placeholder="email"
                     onChange={event => setUpdateEmail(event.target.value)}
                     value={updateEmail}
                  />

                  <br />

                  <button onClick={handeUpdateClick}>Actualizar</button>

                  <br />
                  <br />
                  <br />

                  <button onClick={logout}>Desconectarse</button>
               </div>
            )
         }
      </div>
   );
}

export default LoginForm;