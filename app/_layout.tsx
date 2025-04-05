import { ProfessorProvider } from "@/constants/context/ProfessorContext";
import { AuthProvider } from "@/constants/context/AuthContext";
import Routes from "@/constants/routes/routes";


export default function Main(){
  return (
    <AuthProvider>
      <ProfessorProvider>
        <Routes />
      </ProfessorProvider>
    </AuthProvider>
  );
}