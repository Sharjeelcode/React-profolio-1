import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Expense() {
    const [users, setusers] = useState([])
    const [today, setToday] = useState(new Date().toISOString().split('T')[0]);
    const [catagory, setcatagory] = useState([])
    const [note, setnote] = useState()
    const [amount, setamount] = useState()
    const [catValue, setCatvalue] = useState()
    const [tableData, setTableData] = useState([])
    const transectionType = "Expense"
    const navigate = useNavigate()
    useEffect(() => {
        const userdata = localStorage.getItem('users')
        const activeuser = localStorage.getItem('activeUser')
        if (userdata && activeuser) {
            const parseuser = JSON.parse(userdata)
            setusers(parseuser)
            const activeUserData = parseuser.find(user => user.Email === activeuser);
            if (activeUserData) {
                setcatagory(activeUserData.Expense)
                const table = []
                activeUserData.transData.filter((tab)=>{
                    if (tab.transectionType === "Expense") {
                        table.push(tab)
                    }
                })
                setTableData(table)
            } else {
                navigate('/signin')
            }
        } else {
            navigate('/signin')
        }
    }, [navigate])

    useEffect(() => {
        setCatvalue(catagory[0])
    }, [catagory])

    let obj = {
        today,
        transectionType,
        catValue,
        note,
        amount,
    }



    const handleSave = () => {
        if (note === "" || amount === "") {
            alert("Fileds are required")
        } else {
            setTableData(prevStudents => [...prevStudents, obj]);
            resetfields()
            updateStorage()
        }
    }
    const updateStorage = () => {
        const updatedUsers = users.map(user => {
            const activeuser = localStorage.getItem('activeUser')
            if (user.Email === activeuser) {
                const updatedUser = {
                    ...user,
                    transData: [...user.transData, obj] // Append new transaction to existing transactions
                };
                return updatedUser;
            }
            return user;
        });
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };
    const resetfields = () => {
        setnote('')
        setamount('')
    }


    return (
        <main
            className=" md:w-[85%] "
        >
            <div
                className="m-4 p-1 shadow-xl border-2 rounded-xl "
            >
                <div
                    className="flex-col  md:flex-row  flex  justify-around mb-4"
                >
                    <div
                        className="flex text-center justify-between"
                    >
                        <h1
                            className="text-lg font-bold mr-2"
                        >
                            Select Date:
                        </h1>
                        <input
                            type="date"
                            id="SelectDate"
                            className="rounded text-black md:px-4 shadow-lg border-2"
                            onChange={(e)=>setToday(e.target.value)}
                            value={today}
                        />
                    </div>
                    <div
                        className="flex text-center justify-between"
                    >
                        <h1
                            className="text-lg font-bold mr-2"
                        >
                            Category :
                        </h1>
                        <select
                            name="category"
                            id="category"
                            className="rounded md:px-4 shadow-lg border-2"
                            onChange={(e)=>setCatvalue(e.target.value)}
                        >
                            {catagory.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div
                    className="flex-col md:flex-row flex  justify-evenly mb-4"
                >
                    <div
                        className="flex items-center justify-between"
                    >
                        <h1
                            className="md:text-lg font-bold mr-2"
                        >
                            Note:
                        </h1>
                        <input
                            name="note"
                            id="note"
                            placeholder="About transection"
                            className=" md:text-lg rounded text-black shadow-lg border-2 h-auto md:w-96"
                            onChange={(e)=>setnote(e.target.value)}
                            value={note}
                        />
                    </div>
                    <div
                        className="flex text-center justify-between"
                    >
                        <h1
                            className="md:text-lg font-bold mr-2"
                        >
                            Amount:
                        </h1>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            name="Amount"
                            id="amount"
                            className="md:text-lg text-black outline-none  border-2 shadow-xl rounded"
                            onChange={(e)=>setamount(e.target.value)}
                            value={amount}
                        />
                    </div>
                </div>
                <div
                    className="flex justify-center"
                >
                    <input
                        type="submit"
                        value="Save"
                        className="bg-gradient-to-r from-purple-400 to-purple-600  hover:from-purple-600 hover:to-purple-800 text-white text-center font-bold mx-4 py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce" 
                        id="save_records"
                        onClick={handleSave}
                    />
                </div>
            </div>
            <div
                className="overflow-x-auto ml-2 md:flex md:justify-center overflow-y-auto "
            >

                <table
                    className="md:w-full border-2 "
                >
                    <thead>
                        <tr className="t_head">
                            <th>Date</th>
                            <th>Trans type</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Note</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody 
                        id="t_body"
                    >
                        {
                            tableData.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.today}</td>
                                        <td>{user.transectionType}</td>
                                        <td>{user.catValue}</td>
                                        <td>{user.amount}</td>
                                        <td>{user.note}</td>
                                        <td>
                                            <button>❌</button>
                                        </td>
                                    </tr>
                                )

                            })
                        }

                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Expense