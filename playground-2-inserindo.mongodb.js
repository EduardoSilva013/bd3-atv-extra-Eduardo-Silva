// ==========================================
// ETAPA 2 - INSERÇÃO DE DADOS
// ==========================================

// Selecionar o banco
use("BD-EMPRESA");

// Inserir um produto individual
db.getCollection("ESTOQUE").insertOne({
    codigo: 1,
    produto: "Notebook Corporativo",
    fornecedor: "Tech Suprimentos",
    descricao: "Notebook para uso corporativo",
    imagem: "notebook.jpg",
    valor: NumberDecimal("2500.00"),
    categoria: "Informática"
});

// ==========================================
// Inserir vários produtos em lote
// ==========================================

db.getCollection("ESTOQUE").insertMany([
    {
        codigo: 2,
        produto: "Monitor 24 Polegadas",
        fornecedor: "Tech Suprimentos",
        descricao: "Monitor LED Full HD de 24 polegadas",
        imagem: "monitor.jpg",
        valor: NumberDecimal("850.00"),
        categoria: "Informática"
    },
    {
        codigo: 3,
        produto: "Teclado Corporativo",
        fornecedor: "Office Solutions",
        descricao: "Teclado USB para uso corporativo",
        imagem: "teclado.jpg",
        valor: NumberDecimal("120.00"),
        categoria: "Periféricos"
    },
    {
        codigo: 4,
        produto: "Mouse Óptico",
        fornecedor: "Office Solutions",
        descricao: "Mouse óptico USB",
        imagem: "mouse.jpg",
        valor: NumberDecimal("80.00"),
        categoria: "Periféricos"
    },
    {
        codigo: 5,
        produto: "Cadeira de Escritório",
        fornecedor: "Móveis Corporativos",
        descricao: "Cadeira ergonômica para escritório",
        imagem: "cadeira.jpg",
        valor: NumberDecimal("650.00"),
        categoria: "Mobiliário"
    },
    {
        codigo: 6,
        produto: "Mesa de Escritório",
        fornecedor: "Móveis Corporativos",
        descricao: "Mesa para estação de trabalho",
        imagem: "mesa.jpg",
        valor: NumberDecimal("900.00"),
        categoria: "Mobiliário"
    }
]);