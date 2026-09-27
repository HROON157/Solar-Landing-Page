'use client'
import { useState } from "react";
import { Button } from "../ui/Button";
import { SignInFormData } from "@/validations/auth.validation";

export const SignInForm = () => {
    const [password, setPassword] = useState("");
    const [toggle, setToggle] = useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log("Form Submitted");
        }
        const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
            console.log("Password=", event.target.value); 
        }
  return (
        <form onSubmit={handleSubmit}>
            <div className="w-full mt-10">
                <div className="max-w-[550px] mx-auto flex justify-center">
                    <div className="flex flex-col max-w-[300px] gap-3">
                        <div className=" flex flex-col gap-2">
                            <p>Email</p>
                            <input type="email" placeholder="Enter your email" className="p-1 border border-gray-600 focus:border-purple-700 focus:outline-none  rounded-md" />
                        </div>
                        <div className=" flex flex-col gap-2 relative">
                            <p>Password</p>
                            <input 
                                type={toggle ? "text" : "password"} 
                                placeholder="Enter your password" 
                                onChange={handlePassword} 
                                value={password} 
                                className="p-1 pr-14 border border-gray-600 focus:border-purple-700 focus:outline-none  rounded-md" 
                            />
                            <button 
                                type="button" 
                                onClick={() => setToggle(!toggle)}
                                className="absolute cursor-pointer right-2 bottom-1 text-sm text-purple-700 font-semibold"
                            >
                                {toggle ? "Hide" : "Show"}
                            </button>
                        </div>
                        <div className="mt-2 bg-purple-600 p-2 rounded-md flex justify-center">
                                          <Button type="submit">Log in</Button>
    
                        </div>
                    </div>
                </div>
            </div>
        </form>
  )
}
