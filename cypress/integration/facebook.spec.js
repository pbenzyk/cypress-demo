/// <reference types="Cypress" />

const email = ''
const emailworng = 'atchsaadf@hotmail.com'

const password = ''
const passwordworng = 'oororororor'

const phone = ''
const phoneworng = '08999955666'

describe('Login facebook password wrong', () => {

    it('Go to Facebook URL', () => {
        cy.visit('https://web.facebook.com/')
    })
    it('input E-mail & Password', () => {
        cy.get('#login_form')
            .find('[type="email"]').type(email, { delay: 100 })
        cy.get('#login_form')
            .find('[type="password"]').type(passwordworng, { delay: 100 })
        cy.get('#login_form').submit()
    })
    it('Verify', () => {
        cy.get('[data-ownerid="pass"]')
    })
})

describe('Login facebook E-mail wrong', () => {
    it('Go to Facebook URL', () => {
        cy.visit('https://web.facebook.com/')
    })
    it('input E-mail & Password', () => {
        cy.get('#login_form' ? '#login_form' : "#u_0_a")
            .find('[type="email"]').type(emailworng, { delay: 100 })
        cy.get('#login_form')
            .find('[type="password"]').type(password, { delay: 100 })
        cy.get('#login_form').submit()
    })
    it('Verify', () => {
        cy.get('[data-ownerid="email"]')
    })
})

describe('Login facebook Phone wrong', () => {
    it('Go to Facebook URL', () => {
        cy.visit('https://web.facebook.com/')
    })
    it('input Phone & Password', () => {
        cy.get('#login_form' ? '#login_form' : "#u_0_a")
            .find('[type="email"]' ? '[type="email"]' : '[type="text"]').type(phoneworng, { delay: 100 })
        cy.get('#login_form')
            .find('[type="password"]').type(password, { delay: 100 })
        cy.get('#login_form').submit()
    })
    it('Verify', () => {
        cy.get('[data-ownerid="email"]')
    })
})

describe('Login facebook success', () => {
    it('Go to Facebook URL', () => {
        cy.visit('https://web.facebook.com/')
    })
    it('input Phone & Password', () => {
        cy.get('#login_form')
            .find('[type="email"]').type(email, { delay: 100 })
        cy.get('#login_form')
            .find('[type="password"]').type(password, { delay: 100 })
        cy.get('#login_form').submit().as('getComments')
    })
    it('Verify', () => {
        cy.get('[data-click="profile_icon"]')
    })
})
