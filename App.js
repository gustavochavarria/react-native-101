import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./src/navigations/Tabs.navigator";

import CouponsProviders from "./src/providers/CouponsProvider";

export default function App() {
  return (
    <NavigationContainer>
      <CouponsProviders>
        <TabsNavigator />
      </CouponsProviders>
    </NavigationContainer>
  );
}
