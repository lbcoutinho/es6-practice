class Building {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        let calc = this.height * this.width;
        console.log(`Area = ${calc}`);
        return calc;
    }
}

export default Building;