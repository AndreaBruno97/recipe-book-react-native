import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text, Button } from "react-native";
import { Stack, useRouter, Link, useLocalSearchParams } from "expo-router";

import DAL from "@/dal/recipes";
import ShowRecipe from "@/components/recipe/ShowRecipe";
import EditRecipe from "@/components/recipe/EditRecipe";

export default function CreateRecipe(){
	return (
		<SafeAreaView>
			<EditRecipe recipe={null} setRecipe={undefined}/>
		</SafeAreaView>
	);
}