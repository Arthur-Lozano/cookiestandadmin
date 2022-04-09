import { useState } from "react";

export default function LoginForm() {
    return (
        <form className="items-center w-3/4 m-auto mt-5 border-2 border-green-500 rounded-lg">
            <div className="text-center bg-green-200 rounded-lg w-100">
                <label className="text-lg font-bold" htmlFor="username"><p className="pt-5">USER NAME</p></label>
                <br></br>
                <input className="w-3/4 mb-4" type="text" name="username" id="username" placeholder="User Name" />
                <br></br>
                <label className="text-lg font-bold " htmlFor="password">PASSWORD</label>
                <br></br>
                <input className="w-3/4 mb-8" type="password" placeholder="password" name="password" id="password" />
                <br></br>
                <button className="w-3/4 py-4 mb-10 ml-5 mr-5 font-bold bg-green-600 rounded-md hover:bg-blue-500 " type="submit">SIGN IN</button>
            </div>
        </form>
    )
}