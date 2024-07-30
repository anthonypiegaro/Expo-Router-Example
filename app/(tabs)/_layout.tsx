import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: "white",
        tabBarStyle: {backgroundColor: "black", height: 90},
        headerTransparent: false,
        
      }}
    >
      <Tabs.Screen
        name="Analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color }) => <MaterialIcons name="auto-graph" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Program"
        options={{
          title: 'Program',
          tabBarIcon: ({ color }) => <Ionicons name="calendar-sharp" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'LiFT',
          tabBarIcon: ({ color }) => <Ionicons name="barbell" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}