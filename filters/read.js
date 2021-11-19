module.exports = (input) => {
    const r = new FileReader();
    let text = r.readAsText(input);

    return text;

}