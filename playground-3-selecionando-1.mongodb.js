// ==========================================
// ETAPA 3 - SELEÇÕES E CONSULTAS
// ==========================================

// Selecionar o banco
use("BD-EMPRESA");

// 1 - Consultar todos os produtos
db.getCollection("ESTOQUE").find({});

// 2 - Filtrar produtos pela categoria Informática
db.getCollection("ESTOQUE").find({
    categoria: "Informática"
});

// 3 - Filtrar produtos pelo fornecedor Office Solutions
db.getCollection("ESTOQUE").find({
    fornecedor: "Office Solutions"
});

// 4 - Ocultar o campo _id no retorno da consulta (Projeção)
db.getCollection("ESTOQUE").find(
    {},
    { _id: 0 }
);

// 5 - Consulta textual dinâmica usando Regex
db.getCollection("ESTOQUE").find({
    descricao: /corporativo/i
});