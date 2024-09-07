function buildAWall(input) {
    let isThereWork = true;
    let cubicYards = 0;
    let result = [];

    while(isThereWork) {
        let cubicYardsPerDay = 0;
        for (let i = 0; i < input.length; i++) {
            let currFeetsHeight = input[i];
            if (currFeetsHeight < 30) {
                input[i]++;
                cubicYardsPerDay += 195;
            }
        }
        isThereWork = input.some((x) => x < 30);
        cubicYards += cubicYardsPerDay;
        result.push(cubicYardsPerDay);
    }
    console.log(result.join(', '));
    console.log(cubicYards * 1900 + ' pesos');
}
buildAWall([17, 22, 17, 19, 17]);