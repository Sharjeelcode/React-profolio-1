
import { useEffect, useState } from "react";
import menu from "../assets/menu.png"; 
import user from "../assets/user.png"
function Header() {
    const [username ,setusername] = useState()

    useEffect(()=>{
        const users = localStorage.getItem('users')
        const activeUser = localStorage.getItem('activeUser')
        if (users && activeUser) {
            const userData = JSON.parse(users)
            const activeUserData = userData.find(user => user.Email === activeUser);
            setusername(activeUserData.Name.toUpperCase())
        }
    },[])

    return (
        <>
            <nav
                className="h-12  flex justify-between z-50 items-center sticky text-white top-0 bg-[#140e29] shadow-sm shadow-white">
                <div className="flex items-center ml-2">
                    
                    <img src={menu} className="md:hidden w-6 h-6" id="menu-btn"/>
                        <h1 className=" md:text-lg font-bold md:block">
                            💰FinTrackr</h1>
                </div>
                
                <div className="flex items-center">
                    <span id="username" className=" md:text-lg mr-2">{username}</span>
                    <img src={user} alt="" className="w-8 h-8 mr-2 rounded-full"/>
                </div>
            </nav>
        </>
    )
}

export default Header