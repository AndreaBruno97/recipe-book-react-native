import React, { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, Text, Button } from "react-native";
import { Stack, useRouter, Link, useFocusEffect } from "expo-router";

import DAL from "@/dal/recipes";
import Recipe from "@/entities/Recipe";

export default function Home(){
	const [recipeList, setRecipeList] = useState<Recipe[]>([]);

	const loadRecipeList = () => {
		const newRecipeList = DAL.getRecipeList();
		setRecipeList(newRecipeList);
	}

	useFocusEffect(
		React.useCallback(() => {
			loadRecipeList();
		}, [])
	  );

	return (
		<SafeAreaView>
			{
				recipeList.map((recipe) => 
					<View key={recipe.id}  style={{display: "flex", flexDirection: "row"}}>
						<Link style={{minWidth: 100}} href={{pathname: "/recipe/[id]", params: {id: `${recipe.id}`}}}>{recipe.title}</Link>
						<View
							style={{width: 100}}
						>
							<Button
								title = "Elimina"
								onPress={()=>{
									DAL.deleteRecipe(recipe.id || "");
									loadRecipeList();
								}}
							/>
						</View>
					</View>)
			}
			<Link href={{pathname: "/recipe/"}} asChild>
				<Button
					title = "Nuova Ricetta"
				/>
			</Link>
		</SafeAreaView>
	);
}