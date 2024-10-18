/* eslint-disable react/prop-types */
// ReviewCard.js
import { Card} from "@nextui-org/react";
import CustomUser from "../components/CustomUser";
import StarRating from "./StarRating";

export default function ReviewCard({ userName, avatarUrl, rating, comment }) {
  return (
    <Card className="p-6 shadow-lg rounded-lg mb-6 bg-white w-full md:w-3/4 lg:w-1/2">
      <CustomUser name={userName} avatarUrl={avatarUrl} />
      
      <div className="mt-4 flex items-center space-x-2">
        <StarRating rating={rating} />
        <span className="text-gray-600 text-sm">{rating}/5</span>
      </div>

      <p className="mt-4 text-gray-700">{comment}</p>
    </Card>
  );
}
