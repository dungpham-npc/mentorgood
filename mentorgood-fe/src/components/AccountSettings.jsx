import { Button, Input } from '@nextui-org/react'

export default function AccountSettings() {
  return (
    <div className='flex flex-col items-center gap-8'>
        <div className='self-start text-3xl mb-3'>Cài đặt tài khoản</div>
        <Input
          type="email"
          size='lg'
          label={<span className='text-lg'>Email</span>}
          placeholder="you@example.com"
          labelPlacement="outside"
        />
        <Input
          type="password"
          size='lg'
          label={<span className='text-lg'>Mật khẩu hiện tại <span className='text-red-500'>*</span></span>}
          labelPlacement="outside"
          placeholder='Nhập mật khẩu hiện tại'
        />
        <Input
          type="password"
          size='lg'
          label={<span className='text-lg'>Mật khẩu mới <span className='text-red-500'>*</span></span>}
          labelPlacement="outside"
          placeholder='Nhập mật khẩu mới'
        />
        <Input
          type="password"
          size='lg'
          label={<span className='text-lg'>Xác nhận mật khẩu mới <span className='text-red-500'>*</span></span>}
          labelPlacement="outside"
          placeholder='Nhập lại mật khẩu mới'
        />

        <Button color='primary' size='lg' className='self-end'>Lưu các thay đổi</Button>

    </div>
  )
}
