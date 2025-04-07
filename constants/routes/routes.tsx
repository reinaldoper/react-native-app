import { Stack } from "expo-router";

export default function Routes(){
  return (
      <Stack>
        <Stack.Screen 
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="profile"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="diretor/page"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="professor/page"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="student/page"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="professor/cadastro"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="professor/detalhe/[id]"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="professor/cadastro-alunos/page"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="professor/cadastro-alunos/[id]"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="professor/notas/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
  );
}