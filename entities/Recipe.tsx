class Recipe{
    id:string;
	title:string;
	instructions:string;

    constructor(id:string, title:string, instructions:string){
        this.id = id;
        this.title = title;
        this.instructions = instructions;
    }
}

export default Recipe;
