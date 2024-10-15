import { User, Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";

export default function MentorCard() {
  const skills = ["Java", "Senior", "7+ years experience"];

  return (
    <div className="size-full">
      <Card className="h-80 w-full">
        <CardHeader className="justify-between">
          <div className="size-lg text-lg pl-2 pt-1">
            <User
                name={<span className="text-2xl">Jane Doe</span>}
                description={<span className="text-2xl">{skills.join(" • ")}</span>}
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    size: "lg"
                }}
          />
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
                    <p className="text-default-400 text-small">Reviews</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-bold text-default-400 text-small">30</p>
                    <p className="text-default-400 text-small">Sessions</p>
                </div>
            </div>
          </div>
          
        </CardHeader>

        <CardBody className="px-3 py-0 text-default-400 overflow-hidden">
          <p className="text-ellipsis overflow-hidden whitespace-normal max-h-full overflow-y-hidden text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quos unde, ipsam quod vero aliquid sequi consequuntur repellendus hic magnam.
          </p>
        </CardBody>

        <CardFooter className="flex justify-end">
          <div className="flex gap-3 p-2">
            <Button color="primary">Đặt lịch hẹn</Button>
            <Button>Xem trang cá nhân</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
