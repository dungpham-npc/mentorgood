import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../components/EyeFilledIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../features/auth/authSlice';

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ username, password }),
      });
      

      const data = await response.json();

      if (response.ok) {
        dispatch(setAccessToken(data.result.accessToken));
        if (data.result.authenticated) navigate("/");
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div
        className="mx-20 cursor-pointer p-4"
        onClick={() => navigate('/')}
      >
        <p>Mentorgood</p>
      </div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="max-w-lg w-full bg-white p-10 rounded shadow">
          <p className="mb-7 font-medium text-3xl">Đăng nhập</p>
          <Input
            type="email"
            label="Email/Tên đăng nhập"
            variant="bordered"
            isInvalid={false}
            errorMessage="Please enter a valid email"
            className="w-full"
            value={username}
            onChange={handleUsernameChange}
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
            className="w-full"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="flex items-center justify-between gap-5 flex-col">
            <Button className="mt-4 w-full" color="primary" onClick={handleLogin}>
              Đăng nhập
            </Button>
            <p>Chưa có tài khoản? <a className="cursor-pointer" onClick={() => navigate("/register")}>Đăng kí</a></p>
          </div>
        </div>
      </div>
    </>
  );
}