import { Button, Input, Select, SelectItem } from '@nextui-org/react'

export default function ProfileSettings() {
    const times = [{key: "0-2", label: "12a.m - 2a.m"}, {key: "2-4", label: "2a.m - 4a.m"}, {key: "4-6", label: "4a.m - 6a.m"}]
  const days = [{key: "mon", label: "Thứ 2"}, {key: "tue", label: "Thứ 3"}, {key: "wed", label: "Thứ 4"}]
  const skills = [{key: "java", label: "Java"}, {key: "c#", label: "C#"}, {key: "python", label: "Python"}]

  return (
    <div className='flex flex-col items-center gap-8'>
        <div className='self-start text-3xl mb-3'>Cài đặt hồ sơ</div>
        <Input
          type="text"
          size='lg'
          label={<span className='text-lg'>Tên hiển thị <span className='text-red-500'>*</span></span>}
          labelPlacement="outside"
          placeholder='Nguyễn Văn A'
        />
        <div className='flex items-center w-full justify-between gap-10'>
            <Select
            label={<span className='text-lg'>Thời gian khả dụng</span>}
            selectionMode="multiple"
            className="w-full"
            labelPlacement="outside"
            size="lg"
            placeholder='Chọn thời gian'
        >
            {times.map((time) => (
                <SelectItem key={time.key}>
                    {time.label}
                </SelectItem>
            ))}
        </Select>
        <Select
            label={<span className='text-lg'>Ngày khả dụng</span>}
            selectionMode="multiple"
            className="w-full"
            labelPlacement="outside"
            size="lg"
            placeholder='Chọn ngày'
        >
            {days.map((day) => (
                <SelectItem SelectItem key={day.key}>
                    {day.label}
                </SelectItem>
            ))}
        </Select>
        </div>
        <Select
            label={<span className='text-lg'>Kĩ năng/Chuyên môn</span>}
            selectionMode="multiple"
            className="w-full"
            labelPlacement="outside"
            size="lg"
            placeholder='Chọn kĩ năng'
        >
            {skills.map((skill) => (
                <SelectItem SelectItem key={skill.key}>
                    {skill.label}
                </SelectItem>
            ))}
        </Select>

        <Button color='primary' size='lg' className='self-end'>Lưu các thay đổi</Button>

    </div>
  )
}
