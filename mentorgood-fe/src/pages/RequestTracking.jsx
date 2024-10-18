import { useState } from 'react';
import { Navbar, NavbarContent, Link } from '@nextui-org/react';
import SessionCard from '../components/SessionCard';
import Header from '../components/Header';

// Sample data representing requests with different statuses
const sessionRequests = [
  {
    mentorName: 'John Doe',
    mentorAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d',
    objective: 'Discuss React best practices',
    dateRequested: 'Oct 20, 2024',
    status: 'requested',
    time: "6a.m - 6.30a.m"
  },
  {
    mentorName: 'John Doe',
    mentorAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d',
    objective: 'Discuss React best practices',
    dateRequested: 'Oct 20, 2024',
    status: 'requested',
    time: "6a.m - 6.30a.m"
  },
  {
    mentorName: 'Jane Smith',
    mentorAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026703d',
    objective: 'Review codebase architecture',
    dateRequested: 'Oct 25, 2024 at 2:00 PM',
    status: 'accepted',
    time: "6a.m - 6.30a.m"
  },
  {
    mentorName: 'Alex Turner',
    mentorAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026702d',
    objective: 'Improve coding efficiency',
    dateRequested: 'Oct 18, 2024 at 3:00 PM',
    status: 'on-going',
    time: "6a.m - 6.30a.m"
  },
  {
    mentorName: 'Samantha Lee',
    mentorAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026701d',
    objective: 'Improve resume',
    dateRequested: 'Oct 10, 2024',
    status: 'completed',
    time: "6a.m - 6.30a.m"
  },
];

export default function RequestTracking() {
  const [currentTab, setCurrentTab] = useState('requested'); // Track current filter

  const filteredRequests = sessionRequests.filter(request => request.status === currentTab);

  const linkStyle = (isActive) => ({
    color: isActive ? 'blue' : 'grey',
    fontWeight: isActive ? 'bold' : 'normal',
    cursor: 'pointer',
  });

  return (
    <div>
      <Header />
      <div className='flex items-center flex-col mt-8 mx-24 max-w-full '>
        <div className='self-start text-3xl'>Phiên cố vấn</div>
      {/* Sub-navbar for filtering request states */}
      <Navbar isBordered className=''>
        <NavbarContent>
          <Link
            style={linkStyle(currentTab === 'requested')}
            onClick={() => setCurrentTab('requested')}
          >
            Requested
          </Link>
          <Link
            style={linkStyle(currentTab === 'accepted')}
            onClick={() => setCurrentTab('accepted')}
          >
            Accepted
          </Link>
          <Link
            style={linkStyle(currentTab === 'on-going')}
            onClick={() => setCurrentTab('on-going')}
          >
            On-going
          </Link>
          <Link
            style={linkStyle(currentTab === 'completed')}
            onClick={() => setCurrentTab('completed')}
          >
            Completed
          </Link>
        </NavbarContent>
      </Navbar>
      
      {/* Render session cards based on the filtered requests */}
      {filteredRequests.length > 0 ? (
        filteredRequests.map((request, index) => <SessionCard key={index} request={request} />)
      ) : (
        <p>No requests available in this category.</p>
      )}
    </div>
      </div>
      
  );
}
