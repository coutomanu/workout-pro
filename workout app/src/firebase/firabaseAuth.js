// Importa as funções necessárias do Firebase Authentication
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Obtém uma instância do objeto de autenticação do Firebase
const auth = getAuth();

// Chama a função createUserWithEmailAndPassword para criar um novo usuário
// Esta função recebe três argumentos: o objeto de autenticação (auth), o email e a senha
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Se a criação do usuário for bem-sucedida, este bloco será executado
    // Extrai o usuário do objeto userCredential
    const user = userCredential.user;
    console.log("Usuário criado com sucesso!", user); // Exibe uma mensagem de sucesso no console
  })
  .catch((error) => {
    // Se ocorrer um erro durante a criação do usuário, este bloco será executado
    console.log("Erro ao criar usuário:", error.code, error.message); // Exibe detalhes do erro no console
  });
