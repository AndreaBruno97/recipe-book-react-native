import { Text } from "react-native";
import Recipe from "@/entities/Recipe";

type Props = {
	recipe: Recipe | null;
  };

export default function ShowRecipe({recipe}: Props) {
	
	return (
		<>
			<Text>Titolo: {recipe?.title}</Text>
			<Text>Istruzioni: {recipe?.instructions}</Text>
		</>
	);
}