import { useState } from "react";
import { Avatar, Divider } from "@nextui-org/react";
import ProfileMenu from "../components/ProfileMenu";
import ProfileSettings from "../components/ProfileSettings";
import AccountSettings from "../components/AccountSettings";
import Header from "../components/Header";

export default function PersonalProfile() {
  const [activeComponent, setActiveComponent] = useState("profile");

  const renderComponent = () => {
    if (activeComponent === "profile") {
      return <ProfileSettings />;
    }
    if (activeComponent === "account") {
      return <AccountSettings />;
    }
    return null;
  };

  return (
    <div>
      <Header />

      <div className="flex items-center flex-col mt-8 mx-24 max-w-full">
        <p className="self-start ml-36 text-3xl">Cài đặt</p>

        <div className="pt-7 max-w-full w-full px-24 flex items-start justify-between gap-6">

          <div className="flex flex-col items-center justify-center w-64 pb-10 pt-4 px-5 bg-slate-200 rounded-2xl">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              className="w-40 h-40 text-5xl mb-2"
            />
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-sm text-gray-500">john.doe@example.com</p>
            <Divider className="my-6"/>
            <ProfileMenu activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
          </div>

          <div className="flex flex-col items-center justify-center w-full pb-10 pt-4 bg-slate-200 rounded-2xl">
            <div className="w-full px-10">{renderComponent()}</div>
          </div>

        </div>

      </div>
      
    </div>
  );
}
