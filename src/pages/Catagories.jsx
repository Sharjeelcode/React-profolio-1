import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Catagories() {
    let users = [] //geting data from local storage
    let userdata = localStorage.getItem('users')
    let activeuser = localStorage.getItem('activeUser')
    let activeUserData;
    const [transectionType, setTransectionType] = useState("Expense")
    const [catagory, setcatagory] = useState([])
    const [catValue, setCatvalue] = useState()

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

    //Date intilizing in date input

    // change catagory on changing transection type

    useEffect(() => {
        setcatagory(transectionType === 'Expense' ? activeUserData.Expense : activeUserData.Income);
    }, [transectionType])

    // Update category value based on selected option
    useEffect(() => {
        setCatvalue(catagory[0]);
    }, [catagory])

    const [tableData, setTableData] = useState(activeUserData.transData)

    const changeTableData = useCallback(()=>{
        const table = []
        activeUserData.transData.filter((tab) => {
            if (tab.catValue === catValue) {
                table.push(tab)
            }
        })
        setTableData(table)
    },[catValue])


    useEffect(() => {
        changeTableData()
    }, [changeTableData])







    return (
        <main
            className=" md:w-[85%]"
        >
            <div
                className="m-4 p-4 w-auto h-auto shadow-xl border-2 rounded-xl "
            >
                <div
                    className=" flex flex-col md:flex-row md:items-center  md:justify-around "
                >
                    <div
                        className="flex w-auto justify-between mb-1 md:mb-0 "
                    >
                        <h1
                            className="md:text-lg font-bold mr-2"
                        >
                            Select Transaction type:
                        </h1>
                        <select
                            name="transactiontype"
                            id="transactiontype"
                            className="rounded  shadow-lg border-2 "
                            onChange={(e) => setTransectionType(e.target.value)}
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
                            onChange={(e) => setCatvalue(e.target.value)}
                        >
                            {catagory.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div
                className="overflow-x-auto m-2 md:flex justify-center  overflow-y-auto"
            >
                <table
                    className="md:w-full border-2"
                >
                    <thead>
                        <tr className="t_head">
                            <th>Date</th>
                            <th>Trans type</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody id="t_body">
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

export default Catagories