import { useNavigate } from 'react-router-dom';
import {database} from '../FirebaseConfigs';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';
import '../css/Registrationpage.css'

const Registrationpage = () => {
 const [login,setLogin] = useState(false);

    const history = useNavigate()

    const handleSubmit = (e,type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(type == 'signup'){
            createUserWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authData");
            history('/');
        }).catch(err=>{
            alert(err.code);
            setLogin(true);
        })
        }else{
            signInWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authData");
            history('/');
        }).catch(err=>{
            alert(err.code);
        })
        }   
    }

  return (

    <div className='registration'>
        <div className='row'>
            <div className={login == false ? 'activeColor':'pointer'} onClick={()=>setLogin(false)}>SignUp</div>
            <div className={login == true ? 'activeColor':'pointer'} onClick={()=>setLogin(true)}>SignIn</div>
        </div>
        <h1>{login?'SignIn':'SignUp'}</h1>   
        <form onSubmit={(e)=>handleSubmit(e,login?'signin':'signup')}>
            <input name="email" placeholder="Email" /><br />
            <input name="password" placeholder="Password" type="password" /><br />
            <button>{login?'SignIn':'SignUp'}</button>
        </form>

    </div>
  )
}

export default Registrationpage
