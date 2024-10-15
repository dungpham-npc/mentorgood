import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Badge } from '@nextui-org/react'

export default function Header() {
  return (
    <div className='flex items-center justify-between h-20 bg-gray-100'>
        <p className='mx-20'>Mentorgood</p>

        <div className='flex items-center gap-5 justify-between mx-6'>
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
                    <DropdownItem key="delete" className="text-danger" color="danger">
                        Delete file
                    </DropdownItem>
                </DropdownMenu>
                </Dropdown>

            <Button>Đăng nhập</Button>
            <Button>Đăng kí</Button>
        </div>
    </div>
  )
}
