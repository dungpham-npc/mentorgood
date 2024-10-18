// MentorReviews.js
import { Pagination } from "@nextui-org/react";
import ReviewCard from "../components/ReviewCard";

export default function MentorReviews() {
  const reviews = [
    {
      userName: "Jane Smith",
      avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      rating: 5,
      comment: "An amazing mentor! Helped me improve my coding skills drastically."
    },
    {
      userName: "John Doe",
      avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      rating: 4,
      comment: "Very knowledgeable and patient. Would definitely recommend!"
    },
    {
      userName: "Alice Johnson",
      avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      rating: 5,
      comment: "Provided excellent guidance and support. Truly a great experience!"
    }
  ];

  return (
    <div className="min-h-screen p-10 bg-gray-100 flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-10">Mentor Reviews</h1>
      
      <div className="flex flex-col items-center">
        {reviews.map((review, index) => (
          <ReviewCard 
            key={index}
            userName={review.userName}
            avatarUrl={review.avatarUrl}
            rating={review.rating}
            comment={review.comment}
          />
        ))}
      </div>
      <Pagination className="self-center" total={10} initialPage={1} />
    </div>
  );
}
