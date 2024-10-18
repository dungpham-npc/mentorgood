/* eslint-disable react/prop-types */
// StarRating.js
import { FaStar } from "react-icons/fa";

export default function StarRating({ rating }) {
  const totalStars = 5;
  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, i) => (
        <FaStar
          key={i}
          size={20}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}
