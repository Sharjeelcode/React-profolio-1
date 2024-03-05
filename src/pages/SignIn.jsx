import AppImage from '../assets/appImage.jpg'
import hidePassword from "../assets/eye-close.png"
import '../App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [Email, setEmail] = useState()
    const [Pass, setPass] = useState()
    const navigate = useNavigate()
    let Users = []

    let localstorage = localStorage.getItem('users')

    if (localstorage) {
        Users = JSON.parse(localstorage)
    }
    function useremail(Email) {
        return Users.some(Users => Users.Email === Email);
    }
    function userpassword(Email, Pass) {
        return Users.some(Users => Users.Email === Email && Users.Pass === Pass);
    }

    const handleSignin = () => {
        if (Email === "" || Pass === "") {
            alert("“Fields are required!")
        } else if (useremail(Email)) {
            if (userpassword(Email, Pass)) {
                localStorage.setItem('activeUser', Email)
                navigate('/dashboard')
            } else {
                alert("Invalid password");
            }
        } else {
            alert("Email not exists in Database");
        }
    }

    return (
        <>
            <nav
                className="h-12  flex justify-between z-50 items-center sticky text-white top-0 bg-[#140e29] shadow-sm shadow-white">
                <div
                    className="flex items-center ml-2"
                >
                    <h1
                        className=" md:text-lg font-bold md:block"
                    >
                        💰FinTrackr
                    </h1>
                </div>
                <h1
                    className="text-[11px] flex text-center md:text-xl "><span className="hidden md:block">Register to &nbsp;</span>
                    Track your &nbsp;<span className="auto-type text-[#f4d366]"></span>
                </h1>
                <Link
                    to={'/'}
                    className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-2 px-3 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce  mr-2"
                >
                    Register
                </Link>
            </nav>
            <main
                className="flex justify-center items-center h-[90vh] bg-purple-50"
            >
                <div
                    className="flex h-[70%] bg-[#140e29] w-[95%] md:h-[95%]  rounded-lg"
                >
                    <img
                        src={AppImage}
                        className="hidden md:block w-[75%] h-full "
                    />
                    <div
                        className="signin_form flex flex-col justify-between  m-4 w-full  md:h-auto  shadow-2xl"
                    >
                        <div
                            className="m-4  h-full justify-evenly flex flex-col  "
                        >
                            <h1
                                className="text-lg md:text-xl font-bold  text-white"
                            >
                                Email
                            </h1>
                            <input
                                className="md:text-lg outline-none w-full  shadow-xl  rounded mb-2"
                                type="email"
                                autoComplete="off"
                                name="Email"
                                placeholder="name@gmail.com"
                                id="sign_email"
                                required title="Please enter a valid email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <h1
                                className="text-lg md:text-xl font-bold  text-white"
                            >
                                Password
                            </h1>
                            <div
                                className="flex w-full items-center  shadow-xl"
                            >
                                <input
                                    className="md:text-lg outline-none w-full rounded  mb-2"
                                    type="password"
                                    id="signin_password"
                                    onChange={(e) => setPass(e.target.value)}
                                />
                                <img
                                    src={hidePassword}
                                    id="password_btn"
                                />
                            </div>
                            <div
                                className="flex justify-center"
                            >
                                <button
                                    className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                                    id="signin_btn"
                                    onClick={handleSignin}
                                >
                                    SignIn
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignIn