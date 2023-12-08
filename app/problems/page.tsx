'use client'
import React from 'react';
import questions from "@/public/components/questions";
import Link from "next/link";


export default function QuestionCard(){
    return (
        <section className="py-1 bg-black">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded ">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-blueGray-700">ALL PROBLEMS</h3>
                            </div>
                            <Link href="/problems">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">All Questions</button>
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse ">
                            <thead>
                            <tr>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Question ID
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Problem Name
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Difficulty
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Solved Count
                                </th>
                            </tr>
                            </thead>

                            <tbody>
                            {questions.map((question) => (
                            <tr className="border-b">
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm  text-centre whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                    {question.qid}
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                                    <Link href={`/problems/${question.qid}`}>{question.problemTitle}</Link>
                                </td>
                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-centre">
                                    <div
                                        className={`font-semibold  ${
                                            question.difficulty === "Easy"
                                                ? "text-green-600"
                                                : question.difficulty === "Medium"
                                                    ? "text-yellow-300"
                                                    : "text-red-600"
                                        }`}
                                    >
                                        {question.difficulty}
                                    </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-centre">
                                    {Math.floor(Math.random() * (100 - 10 + 1)) + 10}
                                </td>
                            </tr>
                            ))}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};
