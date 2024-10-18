/* eslint-disable react/prop-types */
import { Card, Button, Avatar, CardBody, Chip } from '@nextui-org/react';

export default function SessionCard({ request }) {
  const renderRequestDetails = () => {
    switch (request.status) {
      case 'requested':
        return (
          <Card>
            <CardBody>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center">
                  <Avatar src={request.mentorAvatar} className='self-start' size='lg'/>
                  <div className="ml-4">
                    <p className='text-black text-lg font-bold'>{request.objective}</p>
                    <p>{request.mentorName}</p>
                    <p>{request.dateRequested}</p>
                    <Chip>{request.time}</Chip>
                  </div>
                </div>
                <div className='flex gap-5 self-end'>
                  <Button onClick={() => alert('Edit request')}>Chỉnh sửa yêu cầu</Button>
                  <Button color="danger" onClick={() => alert('Cancel request')}>
                    Hủy yêu cầu
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        );
      case 'accepted':
        return (
          <Card>
            <CardBody>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center">
                  <Avatar src={request.mentorAvatar} className='self-start' size='lg'/>
                  <div className="ml-4">
                    <p className='text-black text-lg font-bold'>{request.objective}</p>
                    <p>{request.mentorName}</p>
                    <p>{request.dateRequested}</p>
                    <Chip>{request.time}</Chip>
                  </div>
                </div>
                <div className='flex gap-5 self-end'>
                  <Button onClick={() => alert('Edit request')}>Đặt lại lịch</Button>
                  <Button color="danger" onClick={() => alert('Cancel request')}>
                    Hủy phiên
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        );
      case 'on-going':
        return (
          <Card>
            <CardBody>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center">
                  <Avatar src={request.mentorAvatar} className='self-start' size='lg'/>
                  <div className="ml-4">
                    <p className='text-black text-lg font-bold'>{request.objective}</p>
                    <p>{request.mentorName}</p>
                    <p>{request.dateRequested}</p>
                    <Chip>{request.time}</Chip>
                  </div>
                </div>
                <div className='flex gap-5 self-end'>
                  <Button color='primary'>Tham gia phiên</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        );
      case 'completed':
        return (
          <Card>
            <CardBody>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center">
                  <Avatar src={request.mentorAvatar} className='self-start' size='lg'/>
                  <div className="ml-4">
                    <p className='text-black text-lg font-bold'>{request.objective}</p>
                    <p>{request.mentorName}</p>
                    <p>{request.dateRequested}</p>
                    <Chip>{request.time}</Chip>
                  </div>
                </div>
                <div className='flex gap-5 self-end'>
                  <Button color='primary'>Đánh giá</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        );
      default:
        return <p>No requests available.</p>;
    }
  };

  return (
    <div className='w-full'>

      {/* Render request details based on the status of each individual request */}
      <div className="mt-8 w-full">{renderRequestDetails()}</div>
    </div>
  );
}
