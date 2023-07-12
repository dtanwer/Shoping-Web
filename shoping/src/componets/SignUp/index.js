import { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Radio } from 'antd';
import './index.css'
import { signUpUser } from '../../services/auth.service';
const SignUp = ({ setlogin }) => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [type, setType] = useState("user");

 
  const handelSubmit=async (e)=>{
    e.preventDefault();
    try {
      
      await signUpUser({phone,email,type,password});
      setlogin(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='login'>
      <div className="inputBox">
        <form onSubmit={handelSubmit} >
          <div className="email myInput">
            <MailOutlineIcon className='icon' />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=' Enter Email' required />
          </div>
          <div className="phone myInput">
            <PhoneAndroidIcon className='icon' />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder=' Mobile number' required />
          </div>
          <div className="password myInput">
            <LockOpenIcon className='icon' />
            <input type="password" placeholder=' Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="confPassword myInput">
            <LockOpenIcon className='icon' />
            <input type="password" placeholder=' Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <Radio.Group onChange={(e)=>setType(e.target.value)} value={type}>
            <Radio value='user'>User</Radio>
            <Radio value='vendor'>Vendor</Radio>
          </Radio.Group>
          <div className="submitBtn">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <div className="link">
        <p>Already have Account ?<span onClick={() => setlogin(true)} > Login</span></p>
      </div>
    </div>
  )
}

export default SignUp