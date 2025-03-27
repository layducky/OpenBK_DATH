"use client";
import { Suspense } from "react";
import { roleString } from "@/lib/roleUtils";
import { useUser } from "@/hooks/useUser";
import { PublicCourseEntity } from "@/domain/course.entity";

export const UserInforBar = () => {
  const { data: user } = useUser();

  const backgroundColor =
    user?.role === "LEARNER" ? "bg-pink-300" : user?.role === "ADMIN" ? "bg-gray-300" :  "bg-yellow-200";

  return (
    <div
      className={`dashboard-top w-[80vw] ${backgroundColor} h-[15vw] rounded-2xl flex flex-col-reverse px-10 pb-8 min-h-fit`}
    >
      <div className="flex flex-row gap-5">
        <img
          className="rounded-full bg-black w-28 aspect-square object-cover border-[6px] border-white"
          src={user?.imageUrl}
        />
        <Suspense fallback={<p>Loading...</p>}>
          <div className="flex flex-col gap-1 self-center">
            <span className="font-semibold text-xl">
              {user?.name ?? "Name"}
            </span>
            <span>{roleString(user?.role)}</span>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

const CourseStats: React.FC<{
    students: number;
    rating: number;
    reviews: number;
    lastUpdated: string;
    language: string;
}> = ({ students, rating, reviews, lastUpdated, language }) => (
    <div id="courseInfo">
        <div className="flex relative flex-wrap gap-2.5 items-center mt-2.5 w-full max-md:max-w-full">
            <div className="flex absolute left-0 bottom-px z-0 gap-2.5 items-center self-start min-h-[18px]" />
            <div className="z-0 self-stretch my-auto text-sm tracking-wide leading-none text-black">
                {students.toLocaleString()} students
            </div>
            <div className="flex overflow-hidden z-0 gap-1.5 items-center self-stretch px-2.5 my-auto">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/561dd6bf5c536831a59626d26535ac5f00eb09d736ee3a10d2d09939a048eb14?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                {/* <div className="self-stretch my-auto text-base text-center text-black capitalize">
                    {rating}
                </div> */}
                {/* <div className="self-stretch my-auto text-sm tracking-wide leading-none text-black">
                    ({reviews} reviews)
                </div> */}
            </div>
        </div>

        <div className="flex gap-2.5 items-center self-start mt-2.5 text-sm tracking-wide leading-none text-black">
            <div className="flex gap-2.5 items-center self-stretch my-auto w-[207px]">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/e1eaa0ad71ee14910b23b983f9f7c25fc8ee3c3a092dad25acc76e9b6de5dffa?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="self-stretch my-auto w-[193px]">
                    Last updated {lastUpdated}
                </div>
            </div>
            <div className="flex gap-2.5 items-center self-stretch my-auto whitespace-nowrap">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/8d79b4fc4e4a4e93a0b5a083a7d78008bc5b03defdc9ce320b250fbc60af8983?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="self-stretch my-auto w-[67px]">{language}</div>
            </div>
        </div>

    </div>

);
export const CourseInfoBar: React.FC<{ courseData: PublicCourseEntity}> = ({ courseData }) => {
  const sampleData = {
      students: 123456,
      rating: 4.5,
      reviews: 123456,
      lastUpdated: courseData?.updatedAt,
      language: "English"
  }
  return(
    <article className="flex flex-col justify-center mt-2.5 max-w-full w-[781px]">
      <h1 className="text-4xl font-bold text-black max-md:max-w-full">
          {courseData?.courseName}
      </h1>
      <p className="mt-2.5 text-base tracking-wide leading-6 text-black max-md:max-w-full">
          {courseData?.description}
      </p>
      <div className="author flex flex-row items-center gap-2">
          <img
              className="aspect-square w-7 rounded-full"
              src={courseData?.authorInfo?.imageUrl}
          />
          {courseData?.authorInfo?.name}
      </div>
      <CourseStats {...sampleData} />
    </article>
  )
}
