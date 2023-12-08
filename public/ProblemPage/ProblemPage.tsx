'use client';
import './styles.css'
import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode'
import questions from "@/public/components/questions";
import CustomHeader from "@/public/ProblemPage/CustomNav";

function ProblemPage({ qid }: { qid: string }) {
    const val = questions.find((val) => val.qid === Number(qid))
    const qdata = val ? val : questions[0]
    return (
        <>
            <div className={`h-[calc(100vh-20px)] overflow-hidden bg-black`}>
                <CustomHeader />
                <div
                    id="cont"
                    className="relative flex lg:flex-row h-[calc(100vh-15px)] sm:flex-col w-full mt-[8px] overflow-hidden "
                >
                    <div
                        id="explanation"
                        className="h-[calc(85%-16px)] bg-black border border-borders ml-[8px] rounded-lg w-[50%] overflow-hidden scrollChange"
                        style={{
                            minHeight: '30px',
                            resize: 'horizontal',
                            overflow: 'auto',
                            maxWidth: '100%',
                            minWidth: '30%'
                        }}
                    >




                        <div className="bg-mistyrose p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">{qdata.qid} . {qdata.problemTitle}</h2>
                            <div
                                className={`mb-2 font-semibold pb-4 ${
                                    qdata.difficulty === "Easy"
                                        ? "text-green-600"
                                        : qdata.difficulty === "Medium"
                                            ? "text-yellow-300"
                                            : "text-red-600"
                                }`}
                            >
                                {qdata.difficulty}
                            </div>

                            <p className={"text-justify"}>{qdata.problemDescription}</p>
                        </div>
                        <h3 className="text-xl font-bold mb-4 px-8 pt-6 pb- rounded-lg shadow-lg">Example Test Cases</h3>
                        <div>
                            {qdata.exampleTestCases.map((val, index) =>
                                <>
                                    <h3 className="text-[15px] mb-4 px-8 pt-3 rounded-lg shadow-lg">Test Case : {index + 1}</h3>
                                    <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-12 py-5 mx-8 rounded-lg shadow-lg m-4 ">
                                        <p>Input : {val.input}</p>
                                        <p>Output : {val.output}</p>
                                    </div>
                                </>
                            )}
                        </div>
                        <p className="text-xl font-bold mb-4 px-8 pt-6 pb- rounded-lg shadow-lg ">Constraints</p>
                        <div className={"mb-10"}>
                            {
                                qdata.constraints.map((val) =>(
                                        <li className={"p-2 ml-8"}>{val}</li>
                                    )
                                )
                            }
                        </div>












                    </div>
                    <div
                        id="slider"
                        className="w-[8px] h-[calc(85%-16px)] rounded-lg hover:bg-blue-800 hover:cursor-col-resize transition active:bg-blue-800 active:cursor-col-resize resize-horizontal"
                    ></div>
                    <div className="flex flex-col h-[calc(85%-16px)] min-w-[calc(20%-8px)] mr-[8px] flex-grow">
                        <div className="min-h-0 flex-grow min-w-full mr-[8px] mb-[8px] rounded-lg overflow-hidden bg-black border border-borders">
                            <div className="h-[50px] bg-black relative border-b border-borders">
                                <div className=" inline-block relative w-fit h-fit rounded-md ml-[13px] top-[8px] px-[6px] py-[6px] text-text_2 hover:text-white cursor-pointer text-[14px] transition select-none">
                                    {"JavaScript"}
                                </div>
                            </div>
                            <ReactCodeMirror
                                value={
                                    "function hello(){\n\treturn 'hello world'\n}"
                                }
                                extensions={[loadLanguage("javascript")!]}
                                theme={vscodeDark}
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div
                            id="console"
                            className="flex justify-end items-center bg-black w-full h-[50px] rounded-lg overflow-hidden border border-borders"
                        >
                            <div
                                className="w-fit h-fit rounded mr-[11px] px-[20px] py-[4px] hover:bg-green-500 cursor-pointer hover:text-black text-black bg-green-500 text-[14px] active:border-green-800 active:bg-green-800 border-green-500 font-bold right-0 transition select-none"
                            >
                                    <div className="w-full block h-[21px]">
                                        <div className="">
                                            Submit
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProblemPage;


