
import { NavLink } from 'react-router-dom'

function Sider() {
    return (
        <aside
            className="hidden flex  md:w-[15%]  bg-[#140e29]  text-white shadow-lg shadow-black ow-black md:h-[93vh]   text-center md:text-left  md:flex flex-col"
        >
            <NavLink 
                to={"dashboard"}
                className = {({isActive})=> 
                `mt-4 md:mb-4 md:py-4 font-bold  text-lg pl-4 hover:shadow-xl
                ${isActive? 'md:border-r-4' : ''}`}
                
            >
                Dashboard
            </NavLink>
            <NavLink
                to={"income"} 
                className ={({isActive})=>
                    `md:mb-4 md:py-4 font-bold text-lg pl-4  hover:shadow-lg
                    ${isActive? 'md:border-r-4': ''}`
                }
            >
                Income
            </NavLink>
            <NavLink
                to={'expense'}
                className= {({isActive})=>
                    `md:mb-4 md:py-4 font-bold text-lg pl-4 hover:shadow-lg
                    ${isActive? 'md:border-r-4': ''}`
                }  
            >
                Expense
            </NavLink>
            <NavLink
                to={'catagories'} 
                className={({isActive})=>
                `md:mb-4 md:py-4 font-bold text-lg pl-4 hover:shadow-lg
                ${isActive? 'md:border-r-4': ''}`
                }    
            >
                Categories
            </NavLink>
            <NavLink
                to={'settings'} 
                className = {({isActive})=>
                `md:mb-4 md:py-4 font-bold text-lg pl-4 hover:shadow-lg
                ${isActive? 'md:border-r-4': ''}`
                }
            >
                Settings
            </NavLink>
            <NavLink 
                to={'profile'}
                className= {({isActive})=>
                `md:mb-4 md:py-4 font-bold text-lg pl-4 hover:shadow-lg
                ${isActive? 'md:border-r-4': ''}`
                }
            >
                Profile
            </NavLink>
            <NavLink
                className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white text-center font-bold mx-4 py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
            >
                Logout
            </NavLink>
        </aside>
    )
}

export default Sider