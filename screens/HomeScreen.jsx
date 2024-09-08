import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // For navigation
const HomePage = () => {
  const navigation = useNavigation(); // Access the navigation object
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRight}>
          <Image
            style={styles.icon}
            source={require("../assets/image.png")} // Replace with your icon source
          />
        </View>
        <Text style={styles.headerDate}>Monday, 09</Text>
        <View style={styles.headerRight}>
          <Image
            style={styles.icon}
            source={require("../assets/image2.png")} // Replace with your icon source
          />
        </View>
      </View>

      {/* Welcome Message */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Hello Fazid!</Text>
        <Text style={styles.subText}>Good Morning! 🙌</Text>
      </View>

      {/* Task Buttons */}
      <View style={styles.taskButtonsContainer}>
        <TouchableOpacity style={styles.taskButton}>
          <Text style={styles.taskButtonText}>My Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskButton}>
          <Text style={styles.taskButtonText}>In-progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskButton}>
          <Text style={styles.taskButtonText}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Weekly Challenge Section */}
      <View style={styles.challengeCard}>
        <Text style={styles.challengeTitle}>Weekly Challenge</Text>
        <Text style={styles.challengeDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <View style={styles.progressBarContainer}>
          <Text style={styles.progressText}>Progress</Text>
          <Text style={styles.progressValue}>50/80</Text>
        </View>
      </View>

      {/* Categories Section */}
      <View style={styles.categoriesHeader}>
        <Text style={styles.categorySectionTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        {/* First Card */}
        <TouchableOpacity
          style={[styles.categoryCard, { backgroundColor: "#A99BFF" }]}
          onPress={() => navigation.navigate("Locations")}
        >
          <View>
            <View style={styles.categoryContent}>
              <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryTitle}>Maps</Text>
                <Text style={styles.categoryDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <TouchableOpacity style={styles.learnMoreButton}>
                  <Text style={styles.learnMoreText}>Learn more</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={styles.categoryImage}
                source={require("../assets/eyeExerciseCardImg.png")} // Replace with your image source
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Second Card */}
        <TouchableOpacity
          style={[styles.categoryCard, { backgroundColor: "#FF9BE3" }]}
          onPress={() => navigation.navigate("Diabatic")}
        >
          <View>
            <View style={styles.categoryContent}>
              <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryTitle}>Diabetic</Text>
                <Text style={styles.categoryDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <TouchableOpacity style={styles.learnMoreButton}>
                  <Text style={styles.learnMoreText}>Learn more</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={styles.categoryImage}
                source={require("../assets/channelDoctorCardImg.png")} // Replace with your image source
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Third Card */}
        <TouchableOpacity
          style={[styles.categoryCard, { backgroundColor: "#FFBF9B" }]}
          onPress={() => navigation.navigate("DiabaticImageUsing")}
        >
          <View>
            <View style={styles.categoryContent}>
              <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryTitle}>Eye Exercise</Text>
                <Text style={styles.categoryDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <TouchableOpacity style={styles.learnMoreButton}>
                  <Text style={styles.learnMoreText}>Learn more</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={styles.categoryImage}
                source={require("../assets/channelDoctorCardImg.png")} // Replace with your image source
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Fourth Card */}
        <TouchableOpacity
          style={[styles.categoryCard, { backgroundColor: "#A99BFF" }]}
          onPress={() => navigation.navigate("Check Eye Blindness")}
        >
          <View>
            <View style={styles.categoryContent}>
              <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryTitle}>Retinopathy</Text>
                <Text style={styles.categoryDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <TouchableOpacity style={styles.learnMoreButton}>
                  <Text style={styles.learnMoreText}>Learn more</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={styles.categoryImage}
                source={require("../assets/channelDoctorCardImg.png")} // Replace with your image source
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Fifth Card */}
        <TouchableOpacity
          style={[styles.categoryCard, { backgroundColor: "#FF9BE3" }]}
          onPress={() => navigation.navigate("HealthTips")}
        >
          <View>
            <View style={styles.categoryContent}>
              <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryTitle}>Health tips</Text>
                <Text style={styles.categoryDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <TouchableOpacity style={styles.bookNowButton}>
                  <Text style={styles.bookNowText}>Book Now</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={styles.categoryImage}
                source={require("../assets/visionTestcardImg.png")} // Replace with your image source
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Sixth Card */}
        <TouchableOpacity
          style={[styles.categoryCard, { backgroundColor: "#A99BFF" }]}
          onPress={() => navigation.navigate("NextScreening")}
        >
          <View>
            <View style={styles.categoryContent}>
              <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryTitle}>Next screening</Text>
                <Text style={styles.categoryDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <TouchableOpacity style={styles.bookNowButton}>
                  <Text style={styles.bookNowText}>Book Now</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={styles.categoryImage}
                source={require("../assets/visionTestcardImg.png")} // Replace with your image source
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* Clinical Trials Card */}
        <TouchableOpacity
          style={[styles.categoryCard, { backgroundColor: "#FF9BE3" }]}
          onPress={() => navigation.navigate("ClinicalTrails")}
        >
          <View>
            <View style={styles.categoryContent}>
              <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryTitle}>clinical trails</Text>
                <Text style={styles.categoryDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <TouchableOpacity style={styles.bookNowButton}>
                  <Text style={styles.bookNowText}>Book Now</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={styles.categoryImage}
                source={require("../assets/visionTestcardImg.png")} // Replace with your image source
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Background color
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  headerDate: {
    fontSize: 18,
    color: "#000",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 39,
    height: 39,
  },
  welcomeContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  subText: {
    fontSize: 18,
    color: "#1a1a1a",
    marginTop: 5,
  },
  taskButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  taskButton: {
    backgroundColor: "#e6e6e6",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  taskButtonText: {
    fontSize: 16,
    color: "#000",
  },
  challengeCard: {
    backgroundColor: "#5C98F0",
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  challengeDescription: {
    color: "#fff",
    marginTop: 10,
  },
  progressBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  progressText: {
    color: "#fff",
  },
  progressValue: {
    color: "#fff",
  },
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },
  categorySectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 14,
    color: "#007AFF",
  },
  categoryContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  categoryCard: {
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
  },
  categoryContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryTextContainer: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  categoryDescription: {
    marginTop: 10,
  },
  learnMoreButton: {
    marginTop: 20,
    backgroundColor: "#109BE7",
    padding: 10,
    width: "70%",
    borderRadius: 10,
  },
  learnMoreText: {
    color: "#fff",
    textAlign: "center",
  },
  bookNowButton: {
    marginTop: 20,
    backgroundColor: "#FF5A5F",
    padding: 10,
    width: "70%",
    borderRadius: 10,
  },
  bookNowText: {
    color: "#fff",
    textAlign: "center",
  },
  categoryImage: {
    width: 95,
    height: 130,
  },
});

export default HomePage;
