// ==========================================
// BANCO DE DADOS NOSQL - ATIVIDADE EXTRA
// Gestão de Almoxarifado e Suprimentos
// ==========================================

// Definir o banco de dados
const database = "BD-EMPRESA";

// Definir a collection
const collection = "ESTOQUE";

// Criar e selecionar o banco de dados
use(database);

// Criar a collection
db.createCollection(collection);