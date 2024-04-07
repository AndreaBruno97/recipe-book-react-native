import Recipe from '../entities/Recipe';

var recipeList: Recipe[] = [
	new Recipe("1", "pasta", "pasta al sugo"),
	new Recipe("2", "torta", "torta al cioccolato")
];

var nextId = 3;

function getRecipeList(): Recipe[]{
	return recipeList.slice();
}

function getRecipeById(id:string | undefined): Recipe | null{
	if(id === undefined){
		return null;
	}

	const filteredRecipeList = recipeList.filter(recipe => recipe.id === id);
	if(filteredRecipeList.length > 0){
		return JSON.parse(JSON.stringify(filteredRecipeList[0]));
	}
	else{
		return null;
	}
}

function updateRecipe(recipe: Recipe){
	const indexToUpdate = recipeList.findIndex((curRecipe)=> curRecipe.id === recipe.id);

	if(indexToUpdate !== -1){
		recipeList[indexToUpdate] = JSON.parse(JSON.stringify(recipe));
	}
}

function createRecipe(recipe: Recipe): string{
	recipe.id = nextId.toString();
	nextId ++;

	recipeList.push(JSON.parse(JSON.stringify(recipe)));

	return recipe.id;
}

function upsertRecipe(recipe: Recipe): string{
	if(recipe.id === undefined){
		return createRecipe(recipe);
	}
	else{
		updateRecipe(recipe);
		return recipe.id;
	}
}

function deleteRecipe(recipeId: string){
	const indexToDelete = recipeList.findIndex((curRecipe)=> curRecipe.id === recipeId);

	recipeList.splice(indexToDelete, 1);
}

const DAL = { getRecipeList, getRecipeById, updateRecipe, createRecipe, upsertRecipe, deleteRecipe };
export default DAL;
