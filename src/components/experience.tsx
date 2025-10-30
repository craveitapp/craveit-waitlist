import Link from "next/link";
import TallyButton from "./TallyBtn";

export default function Experience() {
  return (
    <section className="bg-white px-0  md:px-[120px] py-16 ">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 className="mb-4 font-poppins text-xl text-[#1C1C1C] font-semibold lg:text-4xl mx-auto">
          Be the First to Experience CraveIt
        </h2>
        <p className="text-md mb-4 md:mb-12 mx-auto font-poppins  md:px-8 px-4 text-[#4B4B4B] lg:text-lg">
          Food delivery, reimagined for Nigeria. Social, local, and fast. Don&apos;t miss it.
        </p>

        <TallyButton
          formId="wgBvg1"
          label="Get Early Access"
          className="cursor-pointer m-6 md:m-0  font-poppins font-semibold rounded-lg bg-[#E96029]  text-sm  text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-[#E96029] hover:border hover:border-[#E96029] md:rounded-xl px-8 py-6 md:text-base"
        />
      </div>
    </section>
  );
}
