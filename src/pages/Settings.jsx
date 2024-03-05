

function Settings() {
    return (
        <main className="  md:w-[85%] ml-2">
            <div className=" flex-col md:flex-row flex justify-center">
                <div className="m-4 p-4 md:h-auto  flex flex-col  items-center shadow-xl border-2 rounded">
                    <h1 className="text-center text-lg font-bold">Add Expense categories</h1>
                    <div className=" flex flex-col md:flex-row items-center mb-4">
                        <h1 className="md:text-lg mr-2">Enter catagory name : </h1>
                        <input type="text" className="border-2 outline-none" placeholder="New catagory"
                            id="new_expense_catagory" />

                    </div>

                    <div className="flex justify-center">
                        <input type="submit" value="Save"
                            className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white text-center font-bold mx-4 py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                            id="add_expense_btn" />
                    </div>


                </div>

                <div className="m-4 p-4 h-auto shadow-xl border-2 rounded">
                    <h1 className="text-center text-lg font-bold">Add Income categories</h1>
                    <div className=" flex flex-col md:flex-row items-center mb-4">
                        <h1 className="md:text-lg mr-2">Enter catagory name : </h1>
                        <input type="text" className="border-2 outline-none" placeholder="New catagory"
                            id="new_income_catagory" />

                    </div>

                    <div className="flex justify-center">
                        <input type="submit" value="Save"
                            className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white text-center font-bold mx-4 py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                            id="add_income_btn" />
                    </div>


                </div>
            </div>
            <div className="flex w-full justify-center">
                <div className="h-auto mr-2 rounded shadow-xl text-center border-2" id="expense_data">
                    <h2 className="font-bold border-b-2">Default Expense catagories</h2>
                </div>
                <div className="h-auto mr-2 rounded shadow-xl text-center border-2" id="income_data">
                    <h2 className="font-bold  border-b-2">Default Income catagories</h2>
                </div>
            </div>
        </main>
    )
}

export default Settings