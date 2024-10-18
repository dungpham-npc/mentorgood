import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PersonalProfile from "./pages/PersonalProfile";
import PublicProfile from "./pages/PublicProfile";
import SessionRequest from "./pages/SessionRequest";
import Register from "./pages/Register";
import RequestTracking from "./pages/RequestTracking";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/profile" element={<PersonalProfile />}/>
      <Route path="/mentors/:username" element={<PublicProfile />} />
      <Route path="/request" element={<SessionRequest />} />
      <Route path="/register" element={<Register />} />
      <Route path="/all-sessions" element={<RequestTracking />} />
    </Routes>
  );
}