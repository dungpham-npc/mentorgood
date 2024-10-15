import { Input, Select, SelectItem } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";

export default function SearchBar() {
  const skills = [{key: "java", label: "Java"}, {key: "c#", label: "C#"}, {key: "python", label: "Python"}]
  const sessionDurations = [{key: "30", label: "30"}, {key: "60", label: "60"}]
  const times = [{key: "0-2", label: "12a.m - 2a.m"}, {key: "2-4", label: "2a.m - 4a.m"}, {key: "4-6", label: "4a.m - 6a.m"}]
  const days = [{key: "mon", label: "Thứ 2"}, {key: "tue", label: "Thứ 3"}, {key: "wed", label: "Thứ 4"}]

  return (
    <div className="bg-gray-200 pb-8">
    <div className="pt-10 max-w-full px-24 flex items-center justify-center flex-col ">
      <p className="self-start ml-5 text-3xl mb-2">Tìm kiếm mentor</p>
      <Input
        isClearable
        radius="lg"
        width="100%"
        className="p-4 text-lg flex-shrink-0"
        placeholder="Tìm kiếm mentor theo tên hoặc từ khóa..."
        startContent={
          <SearchIcon className="text-black/50 mb-2 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 mr-2 mt-2" />
        }
        size="lg"
      />
    </div>
    <div className="flex items-center justify-evenly max-w-full px-16 my-6">
      <Select
        label="Kĩ năng"
        selectionMode="multiple"
        className="max-w-xs"
      >
        {skills.map((skill) => (
          <SelectItem key={skill.key}>
            {skill.label}
          </SelectItem>
        ))}
      </Select>
      <Select
        label="Thời lượng session (phút)"
        selectionMode="multiple"
        className="max-w-xs"
      >
        {sessionDurations.map((sessionDuration) => (
          <SelectItem key={sessionDuration.key}>
            {sessionDuration.label}
          </SelectItem>
        ))}
      </Select>
      <Select
        label="Thời gian khả dụng"
        selectionMode="multiple"
        className="max-w-xs"
      >
        {times.map((time) => (
          <SelectItem key={time.key}>
            {time.label}
          </SelectItem>
        ))}
      </Select>
      <Select
        label="Ngày khả dụng"
        selectionMode="multiple"
        className="max-w-xs"
      >
        {days.map((day) => (
          <SelectItem key={day.key}>
            {day.label}
          </SelectItem>
        ))}
      </Select>
    </div>
    </div>
  );
}
