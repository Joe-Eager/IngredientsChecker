import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Appbar, Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

function App() {
	return (
		<PaperProvider>
			<AppContent />
		</PaperProvider>
	);
}

function AppContent() {
	const [data, setData] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [input, setInput] = useState('');

	// Check if data exists on mount
	useEffect(() => {
		// Simulate async data fetch (e.g., from AsyncStorage)
		const existingData = []; // Replace with actual data check
		if (existingData.length === 0) {
			setShowForm(true);
		} else {
			setData(existingData);
		}
	}, []);

	const handleSubmit = () => {
		if (input.trim()) {
			const newList = [...data, input.trim()];
			setData(newList);
			setInput('');
			setShowForm(false);
			// Save newList to storage (AsyncStorage, etc.)
		}
	};

	return (
		<View style={styles.container}>
			{/* App Bar */}
			<Appbar.Header style={styles.appbar}>
				<Appbar.Content title='Ingredients Checker' />
				{/* Camera icon (MaterialCommunityIcons) */}
				<Appbar.Action icon='camera' onPress={() => Alert.alert('Camera', 'Camera action pressed')} />
				{/* List icon (MaterialCommunityIcons) */}
				<Appbar.Action icon='format-list-bulleted' onPress={() => Alert.alert('List', 'List action pressed')} />
			</Appbar.Header>

			{/* Form - Only shown if no data */}
			{showForm ? (
				<View style={styles.form}>
					<TextInput label='Add item' value={input} onChangeText={setInput} style={styles.input} />
					<Button mode='contained' onPress={handleSubmit}>
						Save
					</Button>
				</View>
			) : (
				// Main Body Content
				<View style={styles.body}>
					<Text variant='bodyLarge' style={styles.bodyText}>
						Welcome to your app. This is the main content area. You can add more components, lists, or
						screens here.
					</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	appbar: {
		backgroundColor: '#282A36',
		color: '#F8F8F2'
	},
	body: {
		flex: 1,
		padding: 16,
		backgroundColor: '#282A36'
	},
	bodyText: {
		lineHeight: 24,
		color: '#F8F8F2'
	},
	form: {
		flex: 1,
		padding: 16,
		backgroundColor: '#282A36',
		gap: 12
	},
	input: {
		backgroundColor: '#F8F8F2',
		color: '#282A36'
  },
  button: {
    color:
  }
});

export default App;
