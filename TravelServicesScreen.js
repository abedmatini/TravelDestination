import { View, Text,ScrollView, Image,TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from "./App";

const TravelServicesScreen = () => {
    return (
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1506606352681-649023fac596?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.backgroundImage} blurRadius={5}>
        
        <View style={styles.formContainer} testID='formData'>
            <Text style={styles.text} testID='contactText'>Our Travel Services: </Text>
            <Text style={styles.text} testID='contactText'>- Hotel Reservations</Text>
            <Text style={styles.text} testID='contactText'>- Guided Tours</Text>
            <Text style={styles.text} testID='contactText'>- Travel Insorance</Text>
        </View>
       
      </ImageBackground>

);
  };
  export default TravelServicesScreen