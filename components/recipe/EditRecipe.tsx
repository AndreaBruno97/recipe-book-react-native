import { useState } from "react";
import { Button, Text, TextInput } from "react-native";
import { router } from 'expo-router';

import Recipe from "@/entities/Recipe";
import DAL from "@/dal/recipes";

type Props = {
	recipe: Recipe | null;
	setRecipe: React.Dispatch<React.SetStateAction<Recipe>> | undefined;
  };

export default function EditRecipe({recipe, setRecipe}: Props) {
	var isCreate = recipe === null;

	const [form, setForm] = useState({
		title: recipe?.title, 
		instructions: recipe?.instructions
	});
	
	const onChangeHandler = (value: any, name: string) => {
		setForm(form => ({...form, [name]: value}));
	}

	return (
		<>
			<Text>Titolo:</Text>
			<TextInput
				value={form.title || ""}
				onChangeText={(value) => onChangeHandler(value, "title")}
			></TextInput>
			<Text>Istruzioni:</Text>
			<TextInput
				value={form.instructions || ""}
				onChangeText={(value) => onChangeHandler(value, "instructions")}
			></TextInput>
			<Button
				onPress={()=>{
					var recipeToUpdate = new Recipe();
					recipeToUpdate.id = recipe?.id;
					recipeToUpdate.title = form.title;
					recipeToUpdate.instructions = form.instructions;
					const id = DAL.upsertRecipe(recipeToUpdate);

					if(isCreate){
						router.replace({pathname: "/recipe/[id]", params: {id: `${id}`}});
					}
					else if (setRecipe !== undefined){
						setRecipe(recipeToUpdate);
					}
				}}
				title="Salva"
			/>
		</>
	);
}