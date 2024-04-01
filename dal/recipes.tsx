import Recipe from '../entities/Recipe';

var recipeList: Recipe[] = [
	new Recipe("1", "pasta", "pasta al sugo"),
	new Recipe("2", "torta", "torta al cioccolato")
];

function getRecipeList(): Recipe[]{
	return recipeList;
}

function getRecipeById(id:string | undefined): Recipe | null{
	if(id === undefined){
		return null;
	}

	const filteredRecipeList = recipeList.filter(recipe => recipe.id === id);
	if(filteredRecipeList.length > 0){
		return filteredRecipeList[0];
	}
	else{
		return null;
	}
}

const DAL = { getRecipeList, getRecipeById };
export default DAL;
