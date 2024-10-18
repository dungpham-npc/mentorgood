// eslint-disable-next-line react/prop-types
export default function ProfileMenu({ activeComponent, setActiveComponent }) {
  return (
    <div className="flex flex-col w-48">
      <ul className="space-y-2">
        <li
          className={`cursor-pointer p-3 rounded-md border-b ${
            activeComponent === "profile" ? "bg-blue-100 font-bold" : "hover:bg-gray-100"
          }`}
          onClick={() => setActiveComponent("profile")}
        >
          Hồ sơ
        </li>
        <li
          className={`cursor-pointer p-3 rounded-md border-b ${
            activeComponent === "account" ? "bg-blue-100 font-bold" : "hover:bg-gray-100"
          }`}
          onClick={() => setActiveComponent("account")}
        >
          Thiết lập tài khoản
        </li>
      </ul>
    </div>
  );
}
