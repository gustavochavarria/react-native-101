import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./src/navigations/Tabs.navigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}
