export class Book {
    isLend: boolean;
    
    constructor(public title: string, public description: string[]) {
        this.isLend = false;
    }
}