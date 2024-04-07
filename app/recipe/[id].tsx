import React, { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, Text, Button } from "react-native";
import { Stack, useRouter, Link, useLocalSearchParams } from "expo-router";

import DAL from "@/dal/recipes";
import Recipe from "@/entities/Recipe";
import ShowRecipe from "@/components/recipe/ShowRecipe";
import EditRecipe from "@/components/recipe/EditRecipe";

export default function RecipePage(){
	const { id } = useLocalSearchParams<{id?: string}>();
	
	const [recipe, setRecipe] = useState<Recipe>(new Recipe());

	useEffect(() => {
			const newRecipe = DAL.getRecipeById(id);
			if(newRecipe !== null){
				setRecipe(newRecipe);
			}
		}, []
	);

	const [isEdit, setIsEdit] = useState(recipe === null); // If the id is null, a new recipe is being created

	return (
		<SafeAreaView>
			{
				isEdit?
					<EditRecipe recipe={recipe} setRecipe={setRecipe}/> :
					<ShowRecipe recipe={recipe}/>
			}
			<Button
				onPress={()=>{setIsEdit(!isEdit)}}
				title={isEdit? "Mostra": "Modifica"}
			/>
		</SafeAreaView>
	);
}