
describe('home page', ()=>{
    it('app deve estar online', ()=>{
        cy.viewport(1440, 900) //Resolução da pág
        cy.visit('https://buger-eats.vercel.app') //Site a visitar
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') //Validação por texto da página
    })
})