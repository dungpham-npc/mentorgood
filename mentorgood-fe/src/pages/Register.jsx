import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../components/EyeFilledIcon";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigate = useNavigate();


  return (
    <>
        <div
            className="mx-20 cursor-pointer p-4" // Apply padding and cursor styles
            onClick={() => navigate('/')} // Navigate to homepage on click
        >
            <p>Mentorgood</p>
        </div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white p-10 rounded shadow">
        <p className="mb-7 font-medium text-3xl">Đăng kí</p>
        <Input
          type="email"
          label="Tên đăng nhập"
          variant="bordered"
          isInvalid={false}
          errorMessage="Please enter a valid email"
          className="w-full"
        />
        <Input
          label="Mật khẩu"
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
          className="w-full mb-2"
        />
        <Input
          label="Nhập lại mật khẩu"
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
        <div className="flex items-center justify-between gap-5 flex-col">
            <Button className="mt-4 w-full" color="primary">
                Đăng kí
            </Button>
            <p>Đã có tài khoản? <a className="cursor-pointer" onClick={() => navigate("/login")}>Đăng nhập</a></p>
        </div>
      </div>
    </div>
    </>

  );
}