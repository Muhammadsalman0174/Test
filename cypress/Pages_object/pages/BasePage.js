
const fs = require('fs');
export default class BasePage{

 static pause(ms){
 cy.wait(ms);

 }
 
 static visitUrl(baseUrl){
    cy.visit(baseUrl);
}



}



