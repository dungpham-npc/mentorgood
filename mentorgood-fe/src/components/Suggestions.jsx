import SuggestionCard from "./SuggestionCard";

export default function Suggestions() {
  return (
    <div className="flex items-center flex-col mt-8 mx-24 max-w-full ">
      <p className="self-start ml-5 text-3xl mb-1">Đề xuất cho bạn</p>
      <div className="flex gap-5 mx-24 max-w-full overflow-x-auto whitespace-nowrap p-5">
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </div>
    </div>
  );
}