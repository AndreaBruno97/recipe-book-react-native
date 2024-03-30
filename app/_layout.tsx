import { Stack } from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '/',
  };

export default function Layout() {
	return (
		<Stack
			screenOptions={{
				headerTitle: "Ricettario"
			}}	
		>
			<Stack.Screen name="/" />
        	<Stack.Screen name="recipe/[id]" />
		</Stack>
	);
  }