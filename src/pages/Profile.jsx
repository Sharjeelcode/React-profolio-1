

function Profile() {
  return (
    <main className=" w-full  md:w-[85%] ">
            <div className="m-4 p-4 w-auto h-auto  shadow-xl border-2 rounded-xl ">
                <h1 className="text-center font-bold text-lg mb-4">Change user password</h1>
                <div className="   md:justify-around mb-4">
                    <div className="mb-4 flex flex-col">
                        <span className="text-lg font-bold">Old password</span>
                        <input type="text"   className="border-2" id="old_password"/>
                    </div>
                    <div className="mb-4 flex flex-col">
                        <span className="text-lg font-bold">New password</span>
                        <input type="password"  className="border-2" id="new_password"/>
                    </div>
                    <div className="mb-4 flex flex-col">
                        <span className="text-lg font-bold">Confirm new password</span>
                        <input type="password"  className="border-2" id="confirm_new_password"/>
                    </div>

                </div>
                <div className="flex justify-center">
                    <input type="submit" value="Submit"
                        className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white text-center font-bold mx-4 py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                        id="submit_btn"/>
                </div>
            </div>

        </main>
  )
}

export default Profile