/* eslint-disable react/no-unescaped-entities */
import { Card } from "@nextui-org/react";

export default function Testimonials() {
  return (
    <div className="py-16 px-5 bg-gradient-to-b from-gray-50 to-gray-200">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Testimonials
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <Card className="p-6 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <p className="text-gray-600 italic text-lg">
            "John was amazing to work with. His expertise in JavaScript helped
            us deliver our project on time."
          </p>
          <p className="text-right font-semibold mt-6 text-gray-700">- Client Name</p>
        </Card>
        <Card className="p-6 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <p className="text-gray-600 italic text-lg">
            "Highly recommended! John is a professional, detail-oriented developer."
          </p>
          <p className="text-right font-semibold mt-6 text-gray-700">- Client Name</p>
        </Card>
        <Card className="p-6 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <p className="text-gray-600 italic text-lg">
            "Highly recommended! John is a professional, detail-oriented developer."
          </p>
          <p className="text-right font-semibold mt-6 text-gray-700">- Client Name</p>
        </Card>
        <Card className="p-6 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <p className="text-gray-600 italic text-lg">
            "Highly recommended! John is a professional, detail-oriented developer."
          </p>
          <p className="text-right font-semibold mt-6 text-gray-700">- Client Name</p>
        </Card>
        <Card className="p-6 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <p className="text-gray-600 italic text-lg">
            "Highly recommended! John is a professional, detail-oriented developer."
          </p>
          <p className="text-right font-semibold mt-6 text-gray-700">- Client Name</p>
        </Card>
      </div>
    </div>
  );
}
