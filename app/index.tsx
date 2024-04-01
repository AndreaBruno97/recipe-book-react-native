import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter, Link } from "expo-router";

import DAL from "@/dal/recipes";

export default function Home(){
	const recipeList = DAL.getRecipeList();

	return (
		<SafeAreaView>
			{
				recipeList.map((recipe) => <Link key={recipe.id} href={{pathname: "/recipe/[id]", params: {id: `${recipe.id}`}}}>{recipe.title}</Link>)
			}
		</SafeAreaView>
	);
}