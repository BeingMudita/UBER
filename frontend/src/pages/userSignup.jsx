import React, {useState} from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e)=>{
        e.preventDefault();
        setUserData({
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            email:email, 
            password:password,
        });
        console.log(userData);
        setEmail('');
        setPassword('');    
        setFirstName('');
        setLastName('');
    };

    return (
        <div className="p-7 h-screen flex flex-col justify-between"> 
            <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div>
                <form onSubmit={(e) => {submitHandler(e)}}>
                    <h3 className='text-base font-medium mb-2'>Enter you Name</h3>
                    <div className="flex gap-3 mb-6">
                        <input
                            required
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                            className='bg-[#eeeeee] rounded-lg w-1/2 px-4 py-2 border text-base placeholder:text-sm'
                            type="text"
                            placeholder='First Name'    
                        />
                        <input
                            required
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            className='bg-[#eeeeee] rounded-lg w-1/2 px-4 py-2 border text-base placeholder:text-sm'
                            type="text"
                            placeholder='Last Name'
                        />
                    </div>
                    <h3 className='text-base font-medium mb-2'>Enter you mail</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className='bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 border w-full text-base placeholder:text-sm'
                        type="email"
                        placeholder='email@example.com'
                    />
        
                    <h3 className='text-base font-medium mb-2'>Enter Password</h3>
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className='bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 border w-full text-base placeholder:text-sm'
                        required type="password"
                        placeholder='password'
                    />
        
                    <button
                        className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-base placeholder:text-sm'
                    >Sign Up</button>
        
                </form>
                <p className="text-center">Already have an account?<Link to={"/login"} className="text-blue-400">Login</Link></p>
            </div>
            <div>
                <p className="text-[10px] leading-tight">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to number provided. </p>
            </div>
        </div>
    );
};

export default UserSignup;