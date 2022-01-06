import React , {useState} from 'react'
import img10 from '../assets/card/10.jpg'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/card/logo.png'

import { auth } from '../firebase'

import { signInWithEmailAndPassword } from 'firebase/auth'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
  const navigate =  useNavigate()



const loginHandler = (e) => {
    e.preventDefault();
    if (email && password) {
        const login = async  () => {
          try {
            const user = await signInWithEmailAndPassword(auth , email,password );
            if (user) {
                navigate('/')
            }
          } catch (error) {
              alert('the email is not exit ')
              console.log(error.message);
          } 
        }

        login()
    }
    else{
        console.log('set information');
    }
}

    return (
        <div className='flex h-screen'>
            <div className="flex w-5/12 items-center justify-center">
                <div className="">
                <Link to='/' className='text-center w-28 ' ><h1 className='mb-16 text-3xl font-semibold w-full'><img src={logo} className='w-32 mx-auto' alt="" /></h1></Link>
                <form onSubmit={loginHandler} className='flex flex-col gap-y-5'>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="email" className='opacity-80 text-sm'>Email</label>
                        <input type="email" id='email' className='w-72 py-1 border-2 opacity-90 rounded-md px-2' value={email} name='email' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="password" className='opacity-80 text-sm'>Password</label>
                        <input type="password" id='password' className='w-72 py-1 border-2 opacity-90 rounded-md px-2' value={password} name='password'  onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="w-72">
                        <button className='bg-black text-white block w-full rounded-md py-2'>Sign in</button>
                    </div>
                    <div className="w-72 flex justify-between">
<div className="flex gap-x-2 items-center">
<input type="checkbox" className='text-sm'/>
<span className='opacity-75 text-sm'>Remember me</span>
</div>
<div className="">
    <button className='text-sm'>Forgot password?</button>
</div>
                    </div>
                </form>
                
                </div>
            </div>
            <div className="h-full flex-1 w-full relative ">
                <div className="w-full h-full absolute bg-gradient-to-b from-zinc-200 to-zinc-900 opacity-60"></div>
                <img src={img10} className='h-full w-full object-cover' alt="" />
<div className="absolute w-full h-full  top-0  text-white">
    <div className="w-full h-full  flex flex-col justify-center pl-44 gap-y-2">

    <h1 className='text-7xl w-96'>Find your own hotel</h1>
    <p className='text-sm opacity-90'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, placeat.</p>
    </div>
</div>
            </div>
        </div>
    )
}
 
export default Login
