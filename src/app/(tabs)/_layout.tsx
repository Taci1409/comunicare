import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import type { ComponentProps } from "react";

type IconName = ComponentProps<typeof Ionicons>["name"];

const tabMap: Record<
  string,
  {
    title: string;
    icon: IconName;
    activeIcon: IconName;
  }
> = {
  index: {
    title: "Início",
    icon: "home-outline",
    activeIcon: "home",
  },

  elementos: {
    title: "Elementos",
    icon: "grid-outline",
    activeIcon: "grid",
  },

  cards: {
    title: "Cards",
    icon: "albums-outline",
    activeIcon: "albums",
  },

  formulario: {
    title: "Formulário",
    icon: "document-text-outline",
    activeIcon: "document-text",
  },

  perfil: {
    title: "Perfil",
    icon: "person-outline",
    activeIcon: "person",
  },
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        const tab = tabMap[route.name];

        return {
          headerShown: false,

          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? tab.activeIcon : tab.icon}
              size={size}
              color={color}
            />
          ),
        };
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
        }}
      />
    </Tabs>
  );
}