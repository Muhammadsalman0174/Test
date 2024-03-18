/// <reference types="cypress"/>
import basePage from "../Pages_object/pages/BasePage";
import Form from "../Pages_object/pages/Form";

const baseUrl  = Cypress.config('baseUrl');

describe('Form test cases : ',()=>{

  it('Fill the form data and Saved the form:', () =>  {

    try {  
      basePage.visitUrl(baseUrl);
      Form.fill_Email_field('test@yopmail.com');
      Form.click_next_button();
      Form.fill_first_name_field('muhammad');
      Form.fill_last_name_field('salman');
      Form.fill_phone_no_field('123456');
      Form.click_next_button2();
      Form.fill_Company_Name('abc');
      Form.fill_no_of_Employee(1);
      Form.fill_Country_field('Canada');
      Form.fill_PrimaryInterest_field('Contact Center');
      Form.click_submit_button();
      basePage.pause(3000);
      cy.get('.thankHeading').should('be.visible').invoke('text').then(($text) => {

        expect($text).to.have.string("Thank You");

      });

      cy.get('.thankSubHeading').should('be.visible').invoke('text').then(($text) => {

        expect($text).to.have.string("Your request has been submitted");

      });
  } 
  catch (error) {
    cy.log("Error appears : "+error);
  }
  })

})


