import { BulletItem } from "@/components/ui/bulletItem";

export default function Page() {
  const sampleData = {
    objectives: [
      { text: "Objective 1", type: "objective" },
      { text: "Objective 2", type: "objective" },
      { text: "Objective 3", type: "objective" },
      { text: "Objective 4", type: "objective" },
    ],
    description: "Loren ipsum",
  };

  const halfLength = Math.ceil(sampleData.objectives.length / 2);
  const firstColumn = sampleData.objectives.slice(0, halfLength);
  const secondColumn = sampleData.objectives.slice(halfLength);

  return (
    <section className="flex flex-col justify-center items-start pt-4 pb-[200px] pr-11 pl-24 w-full text-2xl text-black max-md:px-5 max-md:max-w-full">
      <div
        className="flex flex-col justify-center p-4 max-w-full rounded-xl border border-solid border-black border-opacity-30 w-[775px]"
        role="region"
        aria-labelledby="learning-objectives-title"
      >
        <h2
          id="learning-objectives-title"
          className="leading-none font-bold gap-4"
        >
          What you will learn
        </h2>

        <div className="flex flex-wrap gap-10 justify-between items-center mt-2.5 max-w-full text-base text-black w-[587px]">
          <div className="flex flex-col self-stretch px-1.5 my-auto">
            {firstColumn.map((objective, index) => (
              <BulletItem key={index} {...objective} />
            ))}
          </div>
          <div className="flex flex-col self-stretch px-1.5 my-auto">
            {secondColumn.map((objective, index) => (
              <BulletItem key={index} {...objective} />
            ))}
          </div>
        </div>
        <h2 className="mt-2.5 leading-none font-bold">Description</h2>
        <p className="mt-2.5 text-sm tracking-wide leading-5 text-justify max-md:max-w-full">
          {sampleData.description}
        </p>
      </div>
    </section>
  );
}
