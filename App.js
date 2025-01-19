import { useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { Focus } from "./src/features/Focus";
import { FocusHistory } from "./src/features/FocusHistory";
import { Timer } from "./src/features/Timer";
import { colors } from "./src/utils/colors";

export default function App() {
	const [currentSubject, setCurrentSubject] = useState();
	const [history, setHistory] = useState([]);
	return (
		<SafeAreaView style={styles.container}>
			{!currentSubject ? (
				<>
					<Focus addSubject={setCurrentSubject} />
					<FocusHistory history={history} />
				</>
			) : (
				<Timer
					focusSubject={currentSubject}
					onTimerEnd={(subject) => {
						setHistory([...history, subject]);
					}}
					clearSubject={() => {
						setCurrentSubject(null);
					}}
				/>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		backgroundColor: colors.darkBlue,
	},
});
