import React from 'react';
// @ts-ignore
import ProblemPage from "@/public/ProblemPage/ProblemPage";

export default function EditorPage({ params }: { params: { qid : string } }) {
    const qid = params.qid;
    return (
        <>
            <ProblemPage qid={qid}/>
        </>
    );
}

