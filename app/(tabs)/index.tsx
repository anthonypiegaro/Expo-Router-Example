import { StyleSheet, Text, View } from "react-native";

export default function LiFT() {
    return (
        <View style={styles.container}>
            <Text>LiFT</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});