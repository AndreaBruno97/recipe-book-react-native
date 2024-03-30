import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter, Link, useLocalSearchParams } from "expo-router";

export default function Recipe(){
	const { id } = useLocalSearchParams();
	
	return (
		<SafeAreaView>
			<Text>Id: {id}</Text>
		</SafeAreaView>
	);
}