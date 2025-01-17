import React from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";

export default function DiabaticResult({ route, navigation }) {
  const { responseData, formData } = route.params; // Destructure formData from route.params

  // Extract the summary from responseData
  const predictionResult = responseData?.summary; // Use the correct key to access the summary

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.statusLabel}>Prediction Result</Text>

      {responseData && (
        <View style={styles.responseDataContainer}>
          {Object.entries(responseData).map(([key, value]) => (
            <Text style={styles.statusValue} key={key}>
              {key}: {JSON.stringify(value)}
            </Text>
          ))}
        </View>
      )}

      <Text style={styles.statusLabel}>User Input Summary</Text>

      {formData && (
        <View style={styles.responseDataContainer}>
          {Object.entries(formData).map(([key, value]) => (
            <View style={styles.infoRow} key={key}>
              <Text style={styles.label}>{key}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Conditional rendering based on prediction result */}
      {predictionResult === "Diabetes positive" ? (
        <Button
          title="If positive, go to retinopathy page"
          onPress={() => navigation.navigate("Check Eye Blindness")}
        />
      ) : (
        <Button
          title="If negative, go to healthy tips page"
          onPress={() => navigation.navigate("HealthTips")}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  statusLabel: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  statusValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d9534f", // High risk level color
    marginBottom: 16,
  },
  responseDataContainer: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: "#444",
    flex: 1, // Allows key to take available space
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "right", // Aligns value text to the right
    flex: 1, // Allows value to take available space
  },
});
