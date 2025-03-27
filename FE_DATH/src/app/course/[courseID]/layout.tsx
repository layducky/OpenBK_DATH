'use client'

import { BulletItem } from '@/components/ui/bulletItem';
import { ButtonClick } from '@/components/common/buttons/button';
import * as React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCourseData } from '@/hooks/useCourseData';
import { CourseInfoBar } from '@/components/ui/infoBar';


const Tab: React.FC<{
    label: string,
    isActive: boolean,
    ref: string
}> = ({ label, isActive = false, ref }) => (
    isActive ? (
    <span
        tabIndex={0}
        className={`self-stretch px-2.5 py-1.5 my-auto whitespace-nowrap rounded-[50px] bg-amber-300 font-bold`}
    >
        {label}
    </span>
    ) : (
    <Link
        tabIndex={0}
        href = {ref}
        className={`self-stretch px-2.5 py-1.5 my-auto whitespace-nowrap rounded-[50px] bg-zinc-200 hover:bg-zinc-300`}
    >
        {label}
    </Link>    
    )
);


export default function CourseLayout({
        children,
        params
    }: Readonly<{
        children: React.ReactNode;
        params: Promise<{ courseID: string }>
    }>) {
        const [courseID, setCourseID] = React.useState<string | null>(null);

        React.useEffect(() => {
            // Giải nén giá trị từ params (là một Promise)
            const fetchCourseID = async () => {
                const resolvedParams = await params;
                setCourseID(resolvedParams.courseID);
            };

            fetchCourseID();
        }, [params]);

        const {data: courseData} = useCourseData(courseID as string);
    
        
        const courseFeatures = [
            { type: "video", text: '95 hours on-demand video' },
            { type: "article", text: '35 articles' },
            { type: "test", text: '2 practice tests' },
            { type: "test", text: 'Assignments' },
            { type: "download", text: '100 downloadble resources' },
            { type: "infinity", text: 'Full lifetime access' },
            { type: "certificate", text: 'Certificate of completion' }
          ]

        //*Pathname
        const tabs = [
            { label: 'Overview', href: `/course/${courseID}/overview` },
            { label: 'Content', href: `/course/${courseID}/content` },
            { label: 'About', href: `/course/${courseID}/about` },
            // { label: 'Reviews', href: `/course/${courseID}/review` }
        ];
        const currentRoute: string = usePathname();
        return (
            <main>
                <div role="top" className="flex flex-col relative py-5 pl-24 w-full bg-indigo-50 max-md:pl-5 max-md:max-w-full">
                    {courseData && <CourseInfoBar courseData={courseData}/>}
                    
                    <div id="side" className="flex shadow-lg absolute right-[160px] top-0 bg-white flex-col mx-auto w-full text-black max-w-[360px]">
                        <img
                            loading="lazy"
                            src={courseData?.imageUrl}
                            alt="Course preview"
                            className="object-contain w-full rounded-md aspect-[1.38]"
                        />
                        <section className="flex flex-col px-2.5 py-4 w-full text-base">
                            <h2 className="font-bold">This course includes:</h2>
                            <div className="flex flex-col items-start mt-2.5 w-full">
                                {courseFeatures.map((item, index) => (
                                    <BulletItem key={index} {...item}/>
                                ))} 
                            </div>
                        </section>
                        <section className="flex flex-col pt-2.5 w-full text-sm font-semibold">
                            <div className="flex justify-center items-center px-2.5 w-full">
                                <div className="flex pb-6 items-start self-stretch my-auto w-[223px]">
                                    <ButtonClick 
                                        courseID={courseID} 
                                        className="w-[200px]">Enroll now</ButtonClick>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div
                    role="tablist"
                    className="flex flex-wrap gap-4 items-center px-24 pt-4 pb-1.5 
                 max-w-full text-base text-center text-black w-[875px] max-md:px-5">
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            ref={tab.href}
                            isActive= {currentRoute === tab.href}
                        />

                    ))}
                </div>
                {children }
            </main>
        )
    }
