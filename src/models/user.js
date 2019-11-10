export class User {
    constructor(name) {
        this.name = name;
        this.words = [];
    }

    pushWord(word){
        this.words.push(word);
    }
}