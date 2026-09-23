import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps, ReactNode } from "react";
import { Text, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

type ElementBlockProps = {
  name: string;
  description: string;
  icon: IconName;
  children: ReactNode;
};

// ElementBlock organiza nome, explicação e exemplo visual de cada elemento nativo.
export function ElementBlock({
  name,
  description,
  icon,
  children,
}: ElementBlockProps) {
  return (
    <View className="rounded-3xl border border-cinza bg-white p-5 shadow-sm">
      <View className="flex-row items-start gap-3">
        <View className="h-11 w-11 items-center justify-center rounded-2xl bg-petroleo-light">
          <Ionicons name={icon} size={22} color="#0F4C5C" />
        </View>

        <View className="flex-1">
          <Text className="text-xl font-extrabold text-petroleo-dark">
            {name}
          </Text>

          <Text className="mt-1 text-sm leading-5 text-slate-600">
            {description}
          </Text>
        </View>
      </View>

      <View className="mt-5 rounded-2xl bg-gelo p-4">
        {children}
      </View>
    </View>
  );
}