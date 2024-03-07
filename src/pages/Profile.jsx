import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function Profile() {
    const [users, setusers] = useState([])
    const [oldPass, setoldPass] = useState()
    const [userOldPass, setUserOldPass] = useState()
    const [newPass, setNewpass] = useState()
    const [confNewPass, setConfNewpass] = useState()

    const navigate = useNavigate()
    useEffect(() => {
        const userdata = localStorage.getItem('users')
        const activeuser = localStorage.getItem('activeUser')
        if (userdata && activeuser) {
            const parseuser = JSON.parse(userdata)
            setusers(parseuser)
            const activeUserData = parseuser.find(user => user.Email === activeuser);
            if (activeUserData) {
                setoldPass(activeUserData.Pass)
            } else {
                navigate('/signin')
            }
        } else {
            navigate('/signin')
        }
    }, [navigate])

    const handleChangePass = () => {
        if (oldPass != userOldPass) {
            alert("Old Password does not match")
        } else if (newPass.length < 8) {
            alert("Week Password")
        } else if (newPass != confNewPass) {
            alert("New Password does not match")
        } else {
            const updatePass = users.map((user) => {
                const activeuser = localStorage.getItem('activeUser')
                if (user.Email === activeuser) {
                    const updatedUser = {
                        ...user,
                        Pass: newPass
                    };
                    return updatedUser;
                }
                return user;
            });
            localStorage.setItem('users', JSON.stringify(updatePass));
            navigate('/signin')
        }
    }


    return (
        <main
            className=" w-full  md:w-[85%] "
        >
            <div
                className="m-4 p-4 w-auto h-auto  shadow-xl border-2 rounded-xl "
            >
                <h1
                    className="text-center font-bold text-lg mb-4"
                >
                    Change user password
                </h1>
                <div
                    className="md:justify-around mb-4"
                >
                    <div
                        className="mb-4 flex flex-col"
                    >
                        <span
                            className="text-lg font-bold"
                        >
                            Old password
                        </span>
                        <input
                            type="text"
                            className="text-black border-2"
                            id="old_password"
                            onChange={(e) => setUserOldPass(e.target.value)}
                        />
                    </div>
                    <div
                        className="mb-4 flex flex-col"
                    >
                        <span
                            className="text-lg font-bold"
                        >
                            New password
                        </span>
                        <input
                            type="password"
                            className="text-black border-2"
                            id="new_password"
                            onChange={(e) => setNewpass(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <span
                            className="text-lg font-bold"
                        >
                            Confirm new password
                        </span>
                        <input
                            type="password"
                            className="text-black border-2"
                            id="confirm_new_password"
                            onChange={(e) => setConfNewpass(e.target.value)}
                        />
                    </div>

                </div>
                <div className="flex justify-center">
                    <input
                        type="submit"
                        value="Submit"
                        className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white text-center font-bold mx-4 py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                        id="submit_btn"
                        onClick={handleChangePass}
                    />
                </div>
            </div>

        </main>
    )
}

export default Profile