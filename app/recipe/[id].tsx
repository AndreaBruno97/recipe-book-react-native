import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter, Link, useLocalSearchParams } from "expo-router";

import DAL from "@/dal/recipes";

export default function Recipe(){
	const { id } = useLocalSearchParams<{id: string}>();
	
	const recipe = DAL.getRecipeById(id ?? "");

	return (
		<SafeAreaView>
			<Text>Id: {recipe?.id}</Text>
			<Text>Title: {recipe?.title}</Text>
			<Text>Instructions: {recipe?.instructions}</Text>
		</SafeAreaView>
	);
}