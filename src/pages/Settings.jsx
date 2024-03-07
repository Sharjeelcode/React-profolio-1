import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Settings() {
    const [users, setusers] = useState([])
    const [expenseCatagory, setexpenseCatagory] = useState([])
    const [incomeCatagory, setincomeCatagory] = useState([])
    const [newExpense, setNewExpense] = useState()
    const [newIncome, setNewIncome] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const userdata = localStorage.getItem('users')
        const activeuser = localStorage.getItem('activeUser')
        if (userdata && activeuser) {
            const parseuser = JSON.parse(userdata)
            setusers(parseuser)
            const activeUserData = parseuser.find(user => user.Email === activeuser);
            if (activeUserData) {
                setexpenseCatagory(activeUserData.Expense)
                setincomeCatagory(activeUserData.Income)
            } else {
                navigate('/signin')
            }
        } else {
            navigate('/signin')
        }
    }, [navigate])



    const handleExpenseCatagory = () => {
        if (newExpense === "") {
            alert("Fileds are required")
        } else {
            setexpenseCatagory(prevStudents => [...prevStudents, newExpense]);
            const updatedUsers = users.map(user => {
                const activeuser = localStorage.getItem('activeUser')
                if (user.Email === activeuser) {
                    const updatedUser = {
                        ...user,
                        Expense: [...user.Expense, newExpense] // Append new transaction to existing transactions
                    };
                    return updatedUser;
                }
                return user;
            });
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            resetfields()
        }
    }
    const handleIncomeCatagory = () => {
        if (newIncome === "") {
            alert("Fileds are required")
        } else {
            setincomeCatagory(prevStudents => [...prevStudents, newIncome]);
            const updatedUsers = users.map(user => {
                const activeuser = localStorage.getItem('activeUser')
                if (user.Email === activeuser) {
                    const updatedUser = {
                        ...user,
                        Income: [...user.Income, newIncome], // Append new transaction to existing transactions
                    };
                    return updatedUser;
                }
                return user;
            });
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            resetfields()
        }
    }


    const resetfields = () => {
        setNewExpense('')
        setNewIncome('')
    }

    return (
        <main
            className="  md:w-[85%] ml-2"
        >
            <div
                className=" flex-col md:flex-row flex justify-center"
            >
                <div
                    className="m-4 p-4 md:h-auto  flex flex-col  items-center shadow-xl border-2 rounded"
                >
                    <h1
                        className="text-center text-lg font-bold"
                    >
                        Add Expense categories
                    </h1>
                    <div
                        className=" flex flex-col md:flex-row items-center mb-4"
                    >
                        <h1
                            className="md:text-lg mr-2"
                        >
                            Enter catagory name :
                        </h1>
                        <input
                            type="text"
                            className="text-black border-2 outline-none"
                            placeholder="New catagory"
                            id="new_expense_catagory"
                            onChange={(e) => setNewExpense(e.target.value)}
                            value={newExpense}
                        />
                    </div>

                    <div
                        className="flex justify-center"
                    >
                        <input
                            type="submit"
                            value="Save"
                            className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white text-center font-bold mx-4 py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                            id="add_expense_btn"
                            onClick={handleExpenseCatagory}
                        />
                    </div>
                </div>
                <div
                    className="m-4 p-4 h-auto shadow-xl border-2 rounded"
                >
                    <h1
                        className="text-center text-lg font-bold"
                    >
                        Add Income categories
                    </h1>
                    <div
                        className=" flex flex-col md:flex-row items-center mb-4"
                    >
                        <h1
                            className="md:text-lg mr-2"
                        >
                            Enter catagory name :
                        </h1>
                        <input
                            type="text"
                            className=" text-black border-2 outline-none"
                            placeholder="New catagory"
                            id="new_income_catagory"
                            onChange={(e) => setNewIncome(e.target.value)}
                            value={newIncome}
                        />
                    </div>
                    <div
                        className="flex justify-center"
                    >
                        <input
                            type="submit"
                            value="Save"
                            className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white text-center font-bold mx-4 py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                            id="add_income_btn"
                            onClick={handleIncomeCatagory}
                        />
                    </div>
                </div>
            </div>
            <div
                className="flex w-full justify-center"
            >
                <div
                    className="h-auto mr-2 rounded shadow-xl text-center border-2" id="expense_data"
                >
                    <h2
                        className="font-bold border-b-2"
                    >
                        Default Expense catagories
                    </h2>
                    {expenseCatagory.map((catagory, index) => (
                        <h1 key={index} value={catagory}>{catagory}</h1>

                    ))}
                </div>
                <div
                    className="h-auto mr-2 rounded shadow-xl text-center border-2" id="income_data"
                >
                    <h2
                        className="font-bold  border-b-2"
                    >
                        Default Income catagories
                    </h2>

                    {incomeCatagory.map((catagory, index) => (
                        <h1 key={index} value={catagory}>{catagory}</h1>

                    ))}

                </div>
            </div>
        </main>
    )
}

export default Settings