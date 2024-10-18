import { useState } from "react";
import { Card, Input, Textarea, Button, RadioGroup, Radio, DatePicker, Avatar, Chip, Divider, CardBody } from "@nextui-org/react";
import { now, getLocalTimeZone } from "@internationalized/date";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function SessionRequest() {
  const [objective, setObjective] = useState("");
  const [problem, setProblem] = useState("");
  const [outcome, setOutcome] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate();

  const handleDateChange = (date) => {
    console.log("Selected date:", date);
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        {/* Left side (form content) */}
        <div className="flex-grow flex flex-col items-center justify-center">
          <Card className="w-full max-w-3xl p-6 bg-white shadow-lg mt-5">
            <h2 className="text-2xl font-bold text-center mb-6">Yêu cầu phiên cố vấn</h2>

            {/* Time Block Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Lượng thời gian của phiên cố vấn</label>
              <RadioGroup color="warning">
                <Radio value="15">15 phút</Radio>
                <Radio value="30">30 phút</Radio>
                <Radio value="60">60 phút</Radio>
              </RadioGroup>
            </div>

            {/* Date & Time Picker */}
            <div className="w-full max-w-xl flex flex-row mb-4">
              <DatePicker
                label={<span className="block text-sm font-medium text-gray-700 mb-1">Chọn ngày và giờ</span>}
                variant="bordered"
                labelPlacement="outside"
                hideTimeZone
                showMonthAndYearPickers
                defaultValue={now(getLocalTimeZone())}
                onChange={handleDateChange}
              />
            </div>

            {/* Objective of Session */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Mục tiêu của phiên</label>
              <Input
                fullWidth
                placeholder="Bạn muốn đạt được điều gì?"
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
              />
            </div>

            {/* Problem/Challenge */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Khó khăn hiện tại</label>
              <Textarea
                fullWidth
                placeholder="Mô tả khó khăn bạn đang gặp phải"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
              />
            </div>

            {/* Outcome */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Kết quả mong muốn sau phiên</label>
              <Textarea
                fullWidth
                placeholder="Kết quả bạn mong muốn sau phiên là gì?"
                value={outcome}
                onChange={(e) => setOutcome(e.target.value)}
              />
            </div>

            {/* Note to Mentor */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú cho mentor</label>
              <Textarea
                fullWidth
                placeholder="Ghi chú thêm cho mentor"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <Button onClick={() => navigate("/all-sessions")} fullWidth color="primary">
              Yêu cầu
            </Button>
          </Card>
        </div>

        {/* Right side (Mentor section) */}
        <div className="w-1/3 bg-white p-5 mr-14">
          <Card className="w-full p-4 bg-gray-100 shadow-md">
            <div className="flex flex-col items-center mb-4">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                className="w-32 h-32"
                bordered
                color="gradient"
              />
              <h1 className="text-xl font-bold mt-3">John Doe</h1>
              <p className="text-gray-500">Brief here</p>
            </div>

            <Divider />

            <CardBody className="p-4">
              <div className="flex flex-col items-center gap-2">
                <Chip size="lg">30 phút</Chip>
                <p className="text-default-400 text-sm">Thời lượng phiên khả dụng</p>

                <div className="flex flex-col items-center gap-1">
                  <p className="text-lg font-semibold">Phiên khả dụng tiếp theo</p>
                  <Chip className="bg-blue-200">23/10/2024</Chip>
                  <p className="text-sm">Thứ 4, 12:00 AM</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
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
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
