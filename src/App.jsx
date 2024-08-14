import { weekDayName, weekDayEmotion } from "./utils";

const App = () => {
  return (
    <main className="text-gray-700 pt-8 max-w-[450px] mx-auto">
      <h2 className="mt-8 lg:mt-16 text-4xl font-bold text-center">
        Happy {weekDayName()}
        {weekDayEmotion(weekDayName())}
      </h2>
    </main>
  );
};

export default App;
