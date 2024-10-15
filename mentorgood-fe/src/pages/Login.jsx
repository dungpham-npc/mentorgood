import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../components/EyeFilledIcon";


export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white p-10 rounded shadow">
        <p className="mb-7 font-medium text-3xl">Login</p>
        <Input
          type="email"
          label="Email"
          variant="bordered"
          isInvalid={false}
          errorMessage="Please enter a valid email"
          className="w-full"
        />
        <Input
          label="Password"
          variant="bordered"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="w-full"
        />
        <div className="flex items-center justify-between gap-5">
            <Button className="mt-4 flex-1" color="primary">
                Login
            </Button>
            <Button className="mt-4 flex-1" color="default">
                Register
            </Button>
        </div>
      </div>
    </div>

  );
}