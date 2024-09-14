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
        <div
            className="py-14 flex max-[460px]:px-0 px-2 bg-gradient-to-r from-slate-800 
        to-neutral-950 to-80% text-slate-100"
        >
            <Table
                className="relative justify-center p-1 mx-auto overflow-hidden border border-separate 
            rounded-lg table-auto max-w-fit sm:max-w-screen-sm lg:max-w-screen-md 
            border-slate-500"
            >
                <TableCaption className="text-white">
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
    );
}
