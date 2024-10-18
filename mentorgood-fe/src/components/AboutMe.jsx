/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Card } from "@nextui-org/react";

export default function AboutMe({ username }) {
  return (
    <div className="flex justify-center py-10 px-5 w-full">
      <Card className="w-full md:w-3/4 lg:w-1/2 p-6">
        <h2 className="text-2xl font-semibold mb-4">Về {username}</h2>
        <p className="text-gray-600">
          Hi, I'm John Doe! With over 10 years of experience in software
          development, I've had the opportunity to work with clients around
          the world. I’m passionate about open-source, JavaScript, and web
          development. Let’s collaborate!
        </p>
      </Card>
    </div>
  );
}
