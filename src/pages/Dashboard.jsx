import '../App.css'

function Dashboard() {
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
                            className="rounded md:px-4 shadow-lg border-2"
                        />
                    </div>
                    <div className="flex text-center justify-between">
                        <h1  className="text-lg font-bold mr-2">Transaction type:</h1>
                        <select name="transactiontype" id="transactiontype" className="rounded md:px-4 shadow-lg border-2 ">
                            <option value="Expense">Expense</option>
                            <option value="Income">Income</option>
                        </select>
                    </div>
                    <div className="flex text-center justify-between">
                        <h1 className="text-lg font-bold mr-2">Category :</h1>
                        <select name="category" id="category" className="rounded md:px-4 shadow-lg border-2">
                        </select>
                    </div>
                </div>
                <div className="flex-col md:flex-row flex  justify-evenly mb-4">
                    <div className="flex items-center justify-between">
                        <h1 className="md:text-lg font-bold mr-2">Note:</h1>
                        <input name="note" id="note" className="md:text-lg rounded shadow-lg border-2 h-auto md:w-96"
                            placeholder="About transection"></input>
                    </div>
                    <div className="flex text-center justify-between">
                        <h1 className="md:text-lg font-bold mr-2">Amount:</h1>
                        <input className=" md:text-lg outline-none  border-2 shadow-xl rounded  " type="number"
                            placeholder="Enter amount" name="Amount" id="amount"/>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <input type="submit" value="Save"
                        className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                        id="save_records"/>
                </div>
            </div>

            <div className="overflow-x-auto ml-2 md:flex md:justify-center  overflow-y-auto ">

                <table className="md:w-full border-2 ">
                    <tr className="t_head">
                        <th>Date</th>
                        <th>Trans type</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Note</th>
                        <th>Delete</th>
                    </tr>
                    <tbody id="t_body">

                    </tbody>
                </table>

            </div>

        </main>

    )
}

export default Dashboard