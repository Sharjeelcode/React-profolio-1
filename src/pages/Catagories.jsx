

function Catagories() {
  return (
    <main className=" md:w-[85%]">
            <div className="m-4 p-4 w-auto h-auto shadow-xl border-2 rounded-xl ">
                <div className=" flex flex-col md:flex-row md:items-center  md:justify-around ">
                    <div className="flex w-auto justify-between mb-1 md:mb-0 ">
                        <h1  className="md:text-lg font-bold mr-2">Select Transaction type:</h1>
                        <select name="transactiontype" id="transactiontype" className="rounded  shadow-lg border-2 ">
                            <option value="Expense">Expense</option>
                            <option value="Income">Income</option>
                        </select>
                    </div>
                    <div className="flex text-center justify-between">
                        <h1  className="text-lg font-bold mr-2">Category :</h1>
                        <select name="category" id="category" className="rounded md:px-4 shadow-lg border-2">
                        </select>
                    </div>
                </div>

            </div>
            <div className="overflow-x-auto m-2 md:flex justify-center  overflow-y-auto">

                <table className="md:w-full border-2 ">
                    <tr className="t_head">
                        <th>Date</th>
                        <th>Trans type</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Note</th>
                    </tr>
                    <tbody id="t_body">

                    </tbody>
                </table>

            </div>
        </main>
  )
}

export default Catagories