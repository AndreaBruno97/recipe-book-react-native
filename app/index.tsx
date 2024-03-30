import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter, Link } from "expo-router";

export default function Home(){
	const linkList = [
		"First",
		"Second",
		"Third"
	];

	return (
		<SafeAreaView>
			<Text>Home</Text>
			{
				linkList.map((curLink, index) => <Link key={index} href={{pathname: "/recipe/[id]", params: {id: `${index}`}}}>{curLink}: {index}</Link>)
			}
		</SafeAreaView>
	);
}