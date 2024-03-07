import { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


function Dashboard() {
    let users = [] //geting data from local storage
    let userdata = localStorage.getItem('users')
    let activeuser = localStorage.getItem('activeUser')
    let activeUserData;
    const [today, setToday] = useState(new Date().toISOString().split('T')[0]);
    const [transectionType, setTransectionType] = useState("Expense")
    const [catagory, setcatagory] = useState([])
    const [catValue, setCatvalue] = useState()
    const [note, setNote] = useState("")
    const [amount, setAmount] = useState("")
    const navigate = useNavigate()


    if (userdata) {
        users = JSON.parse(userdata)
    }
    //storing active user data in veriables
    users.find(user => {
        user.Email === activeuser
        activeUserData = user
    });



    //checking authentication if user is not active redirecting to signin page
    useEffect(() => {
        if (!activeuser) {
            navigate('/signin')
        }
    }, [activeuser, navigate])


    useEffect(() => {
        setcatagory(transectionType === 'Expense' ? activeUserData.Expense : activeUserData.Income);
    }, [transectionType])

    // Update category value based on selected option
    useEffect(() => {
        setCatvalue(catagory[0]);
    }, [catagory])

   
    
   

    const [tableData, setTableData] = useState(activeUserData.transData)

    useEffect(()=>{
    })



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
        }else{
            setTableData(prevStudents => [...prevStudents, obj]);
            resetfields()
            updateStorage()
        }
    }
    const updateStorage = () => {
        const updatedUsers = users.map(user => {
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
        setNote('')
        setAmount('')

    }

    return (
        <main
            className="text-black md:w-[85%]"
        >

            <div
                className=" m-4 p-1  shadow-xl border-2 rounded-xl"
            >
                <div
                    className="flex-col  md:flex-row flex justify-around mb-4"
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
                            className="text-black rounded md:px-4 shadow-lg border-2"
                            value={today}
                            onChange={(e) => setToday(e.target.value)}
                        />
                    </div>
                    <div
                        className="flex text-center justify-between"
                    >
                        <h1
                            className="text-lg font-bold mr-2"
                        >
                            Transaction type:
                        </h1>
                        <select
                            name="transactiontype"
                            id="transactiontype"
                            className="rounded md:px-4 shadow-lg border-2 "
                            onChange={(e)=> setTransectionType(e.target.value)}
                        >
                            <option
                                value="Expense"
                            >
                                Expense
                            </option>
                            <option
                                value="Income"
                            >
                                Income
                            </option>
                        </select>
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
                            onChange={(e)=> setCatvalue(e.target.value)}
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
                            className="text-black md:text-lg rounded shadow-lg border-2 h-auto md:w-96"
                            placeholder="About transection"
                            onChange={(e)=>setNote(e.target.value)}
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
                            className="text-black md:text-lg outline-none  border-2 shadow-xl rounded  " type="number"
                            placeholder="Enter amount"
                            name="Amount"
                            id="amount"
                            onChange={(e)=>setAmount(e.target.value)}
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
                        className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                        id="save_records"
                        onClick={handleSave}
                    />
                </div>
            </div>

            <div
                className="overflow-x-auto ml-2 md:flex md:justify-center  overflow-y-auto "
            >
                <table
                    className="md:w-full border-2 "
                >
                    <thead>
                        <tr
                            className="t_head"
                        >
                            <th>Date</th>
                            <th>Trans type</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Note</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody
                        id='t_body'
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

export default Dashboard