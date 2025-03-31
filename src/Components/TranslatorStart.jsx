import { HoverBorderGradient } from "./HoverBorderGradient";

const TranslatorStart = ({ onStart }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 sm:p-12">
      <div className="w-full text-center z-10 space-y-5 mt-20 mb-36 flex flex-col items-center max-w-2xl mx-auto">
        <h1 className="font-DMSans font-extrabold text-4xl text-white ">
          Break the Language Barrier
        </h1>
        <p className="text-center text-lg text-white font-DMSans mt-4 ">
    Unlock communication across the world with just a click. Start breaking language barriers today.
  </p>
        {/* <button
          className="w-32 h-10 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full font-righteous font-bold text-lg uppercase text-gray-700 tracking-widest active:translate-y-[1px]"
          onClick={onStart}
        >
          Start
        </button> */}

        {/* 새 버튼 */}
        <HoverBorderGradient
          onClick={onStart}
          duration={2} // 회전 속도
          className="bg-black text-white text-lg font-DMSans font-bold "
        >
          Start
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default TranslatorStart;
