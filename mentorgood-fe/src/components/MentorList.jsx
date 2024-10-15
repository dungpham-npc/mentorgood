import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useMemo, useState } from "react";
import MentorCard from "./MentorCard";

export default function MentorList() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["ratings"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  // Map of keys to display names
  const sortingOptions = {
    ratings: "Số sao",
    reviews: "Số đánh giá",
    availableDay: "Ngày khả dụng gần nhất",
  };

  return (
    <div className="pt-10 max-w-full px-20 flex items-center justify-center flex-col">
      <div className="self-start flex items-center justify-between w-full mb-3">
        <div className="">
          <p className="ml-5 text-3xl mb-3">Tất cả</p>
          <p className="font-semibold text-default-400 text-small ml-5 mb-3">
            Tìm thấy (x) kết quả
          </p>
        </div>
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
                {`Sắp xếp theo - ${sortingOptions[selectedValue] ? sortingOptions[selectedValue] : "Chọn"}`}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              {Object.entries(sortingOptions).map(([key, value]) => (
                <DropdownItem key={key}>
                  {value}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="w-full flex items-center flex-col gap-7">
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </div>
  );
}
