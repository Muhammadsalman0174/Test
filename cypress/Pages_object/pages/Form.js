import 'cypress-xpath';
import BasePage from './BasePage';
export default class Login extends BasePage{

static fill_Email_field(Email){
cy.get('[id="email"]').should('be.visible').type(Email);
}
     
static fill_first_name_field(username){
cy.get('[id="first-name"]').should('be.visible').type(username);
}
static fill_last_name_field(username){
    cy.get('[id="last-name"]').should('be.visible').type(username);
    }
static fill_phone_no_field(phone_no){

    cy.get('[id="phone"]').should('be.visible').clear().type(phone_no);
}

static click_next_button(){
    cy.get('[id="next-btn"]').should('be.visible').click();
}


static click_next_button2(){
    cy.get('[id="nexttwo-btn"]').click();
}

static fill_Company_Name(value){
    cy.get('[id="company"]').clear().type(value);
} 
static fill_no_of_Employee(value){
    cy.get('[id="no-of-employees"]').clear().type(value);
} 
static fill_Country_field(value){
    cy.get('#Countries').click();
    cy.xpath('//div[@class ="dropdown is-active"]').contains(value).click();
}
 static fill_PrimaryInterest_field(value){
     cy.get('#primaryInterest').click();
     cy.xpath('//div[@class ="dropdown is-active"]').contains(value).click();
    
 }
 static click_submit_button(){
    cy.get('[id="submit-btn"]').click();

 }
}