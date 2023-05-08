import { useRef, useContext } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPasswordRef=useRef()
          const authCtx=useContext(AuthContext)

  const submitHandler = (e)=>{
    e.preventDefault();
    const enteredNewPassword = newPasswordRef.current.value;

      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCM4h5e8q_LxSNyCv8pR7KTOT37jLBv8Y0',{
        method: 'POST',
        body: JSON.stringify({
          idToken:authCtx.token,
          password:enteredNewPassword,
          returnSecureToken:false

        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res)=>{
        
      })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
