import { ProfessorProvider } from "@/constants/context/ProfessorContext";
import { AuthProvider } from "@/constants/context/AuthContext";
import { AlunoProvider } from "@/constants/context/AlunoContext";
import Routes from "@/constants/routes/routes";


export default function Main(){
  return (
    <AuthProvider>
      <ProfessorProvider>
        <AlunoProvider>
          <Routes />
        </AlunoProvider>
      </ProfessorProvider>
    </AuthProvider>
  );
}