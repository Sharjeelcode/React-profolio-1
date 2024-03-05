import AppImage from '../assets/appImage.jpg'
import hidePassword from "../assets/eye-close.png"
import '../App.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Pass, setPass] = useState("")
    const [confPass, setConfpass] = useState("")
    const navigate = useNavigate()

    let users = []

    let localstorage = localStorage.getItem('users')

    if (localstorage) {
        users = JSON.parse(localstorage)
    }
    function useremail(Email) {
        return users.some(user => user.Email === Email);
    }

    const handleRegister = () => {
        let income_catagory = ["Commission", "Salary", "Bonus"];
        let expense_catagory = ["Utilities", "Grocery", "Rent", "Health", "Education"]
        if (Name === "" || Email === "" || Pass === "" || confPass === "") {
            alert("Please fill all fields");
        }else if (!Email.includes("com") || !Email.includes("@") ) {
            alert("Invalid Email")
        } else if (Pass.length < 8) {
            alert("Week password");
        } else if (Pass !== confPass) {
            alert('Password does not match');
        } else if (useremail(Email)) {
            alert("Email already exists");
        } else {
            const newUser = {
                Name,
                Email,
                Pass,
                confPass,
                income_catagory,
                expense_catagory
            }

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users))
            navigate('/signin')

        }
        
    }

    return (
        <>
            <nav
                className="h-12  flex justify-between z-50 items-center sticky text-white top-0 bg-[#140e29] shadow-sm shadow-white"
            >
                <div
                    className="flex items-center ml-2">
                    <h1
                        className=" md:text-lg font-bold md:block">
                        💰FinTrackr
                    </h1>
                </div>
                <h1
                    className="text-[11px] flex text-center md:text-xl "
                ><span className="hidden md:block">Register to &nbsp;</span>
                    Track your &nbsp;<span className="auto-type text-[#f4d366]"></span>
                </h1>
                <Link to={'signin'}
                    className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-2 px-3 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce  mr-2"
                >
                    SignIn
                </Link>

            </nav>
            <main
                className="flex justify-center items-center h-[90vh] bg-purple-50"
            >
                <div
                    className="flex bg-[#140e29] h-[70%] w-[95%] md:h-[95%]  rounded-lg"
                >
                    <img
                        src={AppImage}
                        className="hidden md:block w-[65%] h-full"
                    />

                    <div
                        className="signup_form  flex flex-col justify-between  m-4 w-full  md:h-auto  shadow-2xl"
                    >
                        <div
                            className="m-4  h-full justify-between flex flex-col md:justify-between "
                        >
                            <h1
                                className="text-lg md:text-xl font-bold  text-white"
                            >
                                Full name
                            </h1>
                            <input
                                className="md:text-lg outline-none w-full  shadow-xl rounded mb-2"
                                type="text"
                                name="name"
                                value={Name}
                                autoComplete="off"
                                placeholder="Your good name"
                                id="signup_fullname"
                                onChange={(e) => setName(e.target.value)}
                            />
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
                                value={Email}
                                placeholder="name@gmail.com"
                                id="signup_email"
                                required
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
                                    value={Pass}
                                    id="signup_password"
                                    onChange={(e) => setPass(e.target.value)}
                                />
                                <img
                                    id="password_btn"
                                    src={hidePassword}
                                />
                            </div>
                            <h1
                                className="text-lg md:text-xl font-bold  text-white"
                            >
                                Confirm Password
                            </h1>
                            <div
                                className="flex w-full items-center shadow-xl"
                            >
                                <input
                                    className="md:text-lg outline-none w-full rounded  mb-2"
                                    type="password"
                                    value={confPass}
                                    id="signup_confirmpassword"
                                    onChange={(e) => setConfpass(e.target.value)}
                                />
                                <img
                                    id="confirm_password_btn"
                                    src={hidePassword}
                                />
                            </div>
                            <div
                                className="flex justify-center"
                            >
                                <button
                                    className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                                    id="signup_btn"
                                    onClick={handleRegister}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Register