import { useState } from "react";
import { FlatList } from "react-native";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { ExerciseCard } from "@components/ExerciseCard";

import {  HStack, Heading, Text, VStack } from "@gluestack-ui/themed";

export function Home() {
  const [ exercises, setExercises] = useState(["Puxada Frontal", "Puxada Lateral", "Remada Unilateral", "Remada Smith"])
  const [ groups, setGroups] = useState(["Costas", "Ombro", "Bicep", "Tricep"])
  const [ groupSelected, setGroupSelected] = useState("Costas")

  return(
    <VStack flex={1}>
      <HomeHeader />

      <FlatList data={ groups } 
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group 
            name={item} 
            isActive= {groupSelected.toLowerCase() === item.toLowerCase()} 
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32}}
        style= {{marginVertical: 40, maxHeight: 44, minHeight: 44}}
      />

      <VStack px="$8" flex={1}>
        <HStack justifyContent="space-between" mb="$5" alignItems="center">
          <Heading color="$gray200" fontSize="$md" fontFamily="$haeding">Exercícios</Heading>
          <Text color="$gray200" fontSize= "$sm" fontFamily="$body">{exercises.length}</Text>
        </HStack>

        <FlatList 
          data={exercises} 
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20}}
        />
      </VStack>
    </VStack>
  )
}