// App.tsx
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged, User } from "firebase/auth";

import Login from "./app/screens/Login";
import Home from "./app/screens/Home";
import Details from "./app/screens/Details";
import { FIREBASE_AUTH } from "./FirebaseConfig";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideStackScreen() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="home" component={Home} />
      <InsideStack.Screen name="detail" component={Details} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(FIREBASE_AUTH, (u) => setUser(u));
    return unsub;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Home" component={InsideStackScreen} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
