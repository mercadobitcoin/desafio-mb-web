// Em JavaScript não há suporte direto para interfaces, então, usamos uma função para representar o tipo esperado
class UseCase {
  execute(request) {
    throw new Error("Method 'execute' must be implemented.");
  }
}

module.exports = UseCase;
