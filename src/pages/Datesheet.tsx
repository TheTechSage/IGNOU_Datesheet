import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    courses_1,
    courses_2,
    courses_3,
    courses_4,
    Course,
} from "../components/course.ts";
import { FunctionComponent as FC } from "react";

const CustomTableRow: FC = () => {
    return (
        <>
            <TableRow className="h-3" />
            <TableRow>
                <TableHead className="text-gray-400 h-[42px] w-[100px]">
                    Course-Code
                </TableHead>
                <TableHead className="hidden text-gray-400 sm:table-cell">
                    Course Title
                </TableHead>
                <TableHead className="text-gray-400">Date</TableHead>
                <TableHead className="text-gray-400">Day</TableHead>
                <TableHead className="text-gray-400">Shift</TableHead>
            </TableRow>
        </>
    );
};

export default function NewTable() {
    return (
        <>
            <section className="bg-gradient-to-r from-slate-800 to-neutral-950 to-80% text-slate-100 scroll-smooth">
                <div>
                    {/* Links :
                    https://exam.ignou.ac.in/
                    http://rcdelhi1.ignou.ac.in/studentcorner/15 */}
                    <div className="text-center py-4">
                        <h2 className="font-bold text-2xl capitalize">IGNOU Important dates :-</h2>
                    </div>
                    <div className="container px-4 lg:px-16 py-4">
                        <div>
                            <p className="py-4 capitalize font-bold text-lg">exam form last dates :</p>
                            <div className="lg:max-w-4xl ">
                                <p className="py-2 font-bold text-md border px-4 rounded">
                                    # 9th September 2024 to 15th October 2024 (upto 6 PM)
                                </p>
                                <p className="py-4 text-wrap">
                                    <span className="inline-block underline p-1 bg-yellow-500 text-black rounded">
                                        (without)
                                    </span> Late fee. Standard exam fee is Rs. 200/- per Theory course & Rs. 300/- per 
                                    Practical course Upto 4 credits & Rs. 500/- per Practical course for Above 4 credits.
                                </p>
                                <p className="py-2 font-bold text-md border px-4 my-2 rounded">
                                    # 16th October 2024 to 31st October 2024 (upto 6 PM)
                                </p>
                                <p>
                                    <span 
                                        className="inline-block underline p-1 mt-2 bg-yellow-500 text-black rounded">
                                        (with)
                                    </span> Late fee of Rs.1100/- plus standard exam fee.
                                </p>
                            </div>
                        </div>

                        <div className="py-8">
                            <p className="py-4 capitalize font-semibold text-lg">assignment submission last date :</p>
                            <div className="lg:max-w-4xl ">
                                <p className="py-2 font-bold text-md border px-4 rounded"># 31st October 2024</p>
                            </div>
                        </div>
                        
                        <div>
                            <p className="py-4 capitalize font-semibold text-xl">
                                synopsis last dates (for January 2024 semester) :
                            </p>
                            <div className="lg:max-w-4xl ">
                                <p className="py-2 font-bold text-md border px-4 rounded">
                                    # 1st April 2024 to 30th June 2024
                                </p>
                            </div>
                            <p className="py-4 capitalize font-semibold text-xl">
                                synopsis last dates (for July 2024 semester) :
                            </p>
                            <div className="lg:max-w-4xl ">
                                <p className="py-2 font-bold text-md border px-4 rounded">
                                    # 1st  October 2024 to 31st  December 2024
                                </p>
                            </div>
                            
                            <p className="py-4 capitalize font-semibold text-xl">
                                project last dates (for those who submitted synopsis for January 2024 session) :
                            </p>
                            <div className="lg:max-w-4xl ">
                                <p className="py-2 font-bold text-md border px-4 rounded">
                                    # 1st July 2024 to 30th September 2024
                                </p>
                            </div>

                            <p className="py-4 capitalize font-semibold text-xl">
                                project last dates (for those who will submit synopsis for July 2024 session) :
                            </p>
                            <div className="lg:max-w-4xl ">
                                <p className="py-2 font-bold text-md border px-4 rounded">
                                    # 1st  January 2025 to 31st  March 2025
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className="text-center py-8 font-semibold text-xl">
                        <h2>IGNOU MCA Dec 2024 Datesheet</h2>
                    </div>
                    <div
                        className="flex pb-14 max-[460px]:px-0 px-2"
                    >
                        <Table
                            className="relative justify-center p-1 mx-auto overflow-hidden border border-separate 
                        rounded-lg table-auto max-w-fit sm:max-w-screen-sm lg:max-w-screen-md  overflow-x-hidden 
                        border-slate-500"
                        >
                            <TableCaption className="text-white pb-4">
                                IGNOU MCA Dec 2024 datesheet.
                            </TableCaption>

                            {/* <TableHeader className="w-full text-center">
                                <TableRow className="w-full absolute top-5 inset-x-2/4">MCA Dec 2024</TableRow>
                            </TableHeader> */}
                            <TableHeader>
                                <TableHead className="pb-3 text-base font-bold text-center border-b-4 pt-9 text-sky-300">
                                    SEM I
                                </TableHead>
                                <CustomTableRow />
                            </TableHeader>
                            <TableBody>
                                {courses_1.map((course: Course) => (
                                    <TableRow
                                        key={course.id}
                                        className="hover:bg-gradient-to-r hover:from-orange-500 hover:fro-10% 
                                        hover:via-yellow-500 hover:to-neutral-950 hover:to-90% hover:text-white
                                        active:bg-gradient-to-r active:from-orange-500 active:fro-10% 
                                        active:via-yellow-500 active:to-neutral-950 active:to-90% active:text-white"
                                    >
                                        <TableCell className="font-medium">
                                            {course.course_code}
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {course.course_name}
                                        </TableCell>
                                        <TableCell>{course.date}</TableCell>
                                        <TableCell>{course.day}</TableCell>
                                        <TableCell className="text-center">
                                            {course.shift}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                            <TableHeader>
                                <TableHead className="pb-3 text-base font-bold text-center border-b-4 pt-9 text-sky-300">
                                    SEM II
                                </TableHead>
                                <CustomTableRow />
                            </TableHeader>
                            <TableBody>
                                {courses_2.map((course: Course) => (
                                    <TableRow
                                        key={course.id}
                                        className="hover:bg-gradient-to-r hover:from-orange-500 hover:fro-10% 
                                        hover:via-yellow-500 hover:to-neutral-950 hover:to-90% hover:text-white
                                        active:bg-gradient-to-r active:from-orange-500 active:fro-10% 
                                        active:via-yellow-500 active:to-neutral-950 active:to-90% active:text-white"
                                    >
                                        <TableCell className="font-medium">
                                            {course.course_code}
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {course.course_name}
                                        </TableCell>
                                        <TableCell>{course.date}</TableCell>
                                        <TableCell>{course.day}</TableCell>
                                        <TableCell className="text-center">
                                            {course.shift}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                            <TableHeader>
                                <TableHead className="pb-3 text-base font-bold text-center border-b-4 pt-9 text-sky-300">
                                    SEM III
                                </TableHead>
                                <CustomTableRow />
                            </TableHeader>
                            <TableBody>
                                {courses_3.map((course: Course) => (
                                    <TableRow
                                        key={course.id}
                                        className="hover:bg-gradient-to-r hover:from-orange-500 hover:fro-10% 
                                        hover:via-yellow-500 hover:to-neutral-950 hover:to-90% hover:text-white
                                        active:bg-gradient-to-r active:from-orange-500 active:fro-10% 
                                        active:via-yellow-500 active:to-neutral-950 active:to-90% active:text-white"
                                    >
                                        <TableCell className="font-medium">
                                            {course.course_code}
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {course.course_name}
                                        </TableCell>
                                        <TableCell>{course.date}</TableCell>
                                        <TableCell>{course.day}</TableCell>
                                        <TableCell className="text-center">
                                            {course.shift}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                            <TableHeader>
                                <TableHead className="pb-3 text-base font-bold text-center border-b-4 pt-9 text-sky-300">
                                    SEM IV
                                </TableHead>
                                <CustomTableRow />
                            </TableHeader>
                            <TableBody>
                                {courses_4.map((course: Course) => (
                                    <TableRow
                                        key={course.id}
                                        className="hover:bg-gradient-to-r hover:from-orange-500 hover:fro-10% 
                                        hover:via-yellow-500 hover:to-neutral-950 hover:to-90% hover:text-white
                                        active:bg-gradient-to-r active:from-orange-500 active:fro-10% 
                                        active:via-yellow-500 active:to-neutral-950 active:to-90% active:text-white"
                                    >
                                        <TableCell className="font-medium">
                                            {course.course_code}
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {course.course_name}
                                        </TableCell>
                                        <TableCell>{course.date}</TableCell>
                                        <TableCell>{course.day}</TableCell>
                                        <TableCell className="text-center">
                                            {course.shift}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </section>
        </>
    );
}
