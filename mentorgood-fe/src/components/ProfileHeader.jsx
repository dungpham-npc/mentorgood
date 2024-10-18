import { Avatar, Button, Card, CardHeader, CardBody, CardFooter, Chip, Divider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProfileHeader({ username }) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-gray-300 pt-8 pb-6 px-7">
      <div className="flex flex-col items-center justify-center">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          className="w-40 h-40"
          bordered
          color="gradient"
        />
        <h1 className="text-black text-5xl font-bold mt-4 mb-1">{username}</h1>
        <p>Brief here</p>
      </div>
      <div className="size-full px-28">
      <Card className="h-72 w-full mt-5">
        <CardHeader className="flex items-center justify-between">

          <div className="flex flex-col items-center m-auto pl-56 gap-2 mt-3">  
            <Chip size="lg">30 phút</Chip>
            <p className="text-default-400 text-medium">Thời lượng phiên khả dụng</p>
          </div>

          <div className="flex items-center justify-center gap-2 flex-col">
            <div className="flex items-center justify-center gap-2 self-end">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-yellow-300 fill-yellow-300 mt-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                </svg>
                <p className="mt-0.5 text-3xl">4.97</p>
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1">
                    <p className="font-bold text-default-400 text-small">26</p>
                    <p className="text-default-400 text-small">Đánh giá</p>
                </div>

                <div className="flex gap-1">
                    <p className="font-bold text-default-400 text-small">30</p>
                    <p className="text-default-400 text-small">Phiên cố vấn</p>
                </div>
            </div>
          </div>
          
        </CardHeader>

        <Divider className="mb-2"/>

        <CardBody className="p-6 h-40">
          <div className="flex gap-6 items-start">
    
          {/** Calendar div with upper chip for month and lower chip for day **/}
            <div className="flex flex-col items-center">
              <Chip 
                className="min-w-16 rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none bg-blue-500 text-gray-300 flex items-center justify-center text-md text-center font-semibold"
                size="lg"
              >
                T10
              </Chip>
              <Divider className="w-full bg-gray-300" />
              <Chip 
                className="min-w-16 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg bg-blue-200 text-black m-auto text-xl text-center font-bold"
                size="lg"
              >
                23
              </Chip>
            </div>

            <div className="flex flex-col items-start gap-2">

              <p className="text-lg font-semibold text-gray-700">
                Phiên khả dụng tiếp theo
              </p>

              <div className="flex items-center gap-3">
                <Chip>trong <span className="text-red-500 font-bold">5</span> ngày</Chip>

                <p className="font-normal text-default-500 text-medium pt-1">Thứ 4, 23/10/2024 • 12a.m</p>
              </div>
            </div>
          </div>
        </CardBody>


        <CardFooter className="flex justify-start pl-8 pb-7 gap-5">
          <Button color="primary" onClick={() => navigate("/request")}>Đặt lịch hẹn</Button>
          <Button>Nhắn tin</Button>
        </CardFooter>
      </Card>
    </div>
    </div>
  );
}
