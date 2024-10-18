import { useParams } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";
import AboutMe from "../components/AboutMe";
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import MentorReviews from "../components/MentorReviews";

export default function PublicProfile() {
  const { username } = useParams();

  return (
    <div>
        <Header />
        <div className="min-h-screen">
            <ProfileHeader username={username} />
            <AboutMe username={username}/>
            <Testimonials />
            <MentorReviews />
        </div>
    </div>
  );
}
