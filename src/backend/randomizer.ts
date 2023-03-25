const Randomizer = (page: number) => {
    let resultpage = (Math.random() * page);
    let result = Math.round(resultpage);
    return result;
}

export default Randomizer;