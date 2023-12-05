const data = {
    name: 'CodeMindsHub',
    logo: "data:image/png;base64,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"
}


export default data;

