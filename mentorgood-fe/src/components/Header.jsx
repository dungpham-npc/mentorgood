import { Navbar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Badge, Switch, Avatar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(true);

  return (
    <Navbar isBordered position="static" className='h-20' maxWidth='full'>
      {/* Logo section */}
      <NavbarBrand className='flex justify-start pl-32'>
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          <p>Mentorgood</p>
        </div>
      </NavbarBrand>

      {/* Right-aligned section */}
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {/* Notification dropdown */}
        <Dropdown>
          <Badge color="danger" content={5} shape="circle">
            <DropdownTrigger>
              <Button
                radius="full"
                isIconOnly
                aria-label="more than 99 notifications"
                variant="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>
              </Button>
            </DropdownTrigger>
          </Badge>

          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Toggle for login status */}
        <Switch isSelected={isSelected} onValueChange={setIsSelected}>
          Enable login status (For testing)
        </Switch>

        {/* Avatar or login/register buttons */}
        {isSelected ? (
          <Dropdown>
            <DropdownTrigger>
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                bordered
                color="gradient"
                size="lg"
                className="cursor-pointer"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User actions">
              <DropdownItem key="settings" onClick={() => navigate("/profile")}>Cài đặt</DropdownItem>
              <DropdownItem key="settings" onClick={() => navigate("/all-sessions")}>Tất cả phiên cố vấn</DropdownItem>
              <DropdownItem key="logout" className="text-danger" color="danger">
                Đăng xuất
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <Button auto flat onClick={() => navigate('/login')}>
              Đăng nhập
            </Button>
            <Button auto flat onClick={() => navigate('/register')}>
              Đăng kí
            </Button>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
