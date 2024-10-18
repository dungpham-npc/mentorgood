/* eslint-disable react/prop-types */
// User.js (subcomponent of ReviewCard)
import { Avatar } from "@nextui-org/react";

export default function CustomUser({ name, avatarUrl }) {
  return (
    <div className="flex items-center space-x-4">
      <Avatar src={avatarUrl} size="lg" />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
      </div>
    </div>
  );
}
