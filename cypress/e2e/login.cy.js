import { errMsg } from "../../src/components/Login";

describe("Login sayfası başarılı form doldurulduğunda", () => {
  it("Başarılı form doldurulduğunda submit edebiliyorum", () => {
    //Arrage
    cy.visit("http://localhost:5173");

    //Act
    cy.get('[data-cy="email-input"]').type("test@test.com");
    cy.get('[data-cy="password-input"]').type("Password#123");
    cy.get('[data-cy="terms-checkbox"]').check();
    cy.get('[data-cy="submit-button"]').click();

    //Assertion
    cy.contains("Başarıyla giriş yaptın.").should("be.visible");
  });
});

describe("Login sayfası hatalı form doldurulduğunda", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Email yanlış durumu", () => {
    //Arrage
    /* cy.visit("http://localhost:5173"); */

    //Act
    cy.get('[data-cy="email-input"]').type("test");

    //Assertion
    cy.get(".invalid-feedback").should("have.length", 1);
    cy.get('[data-cy="submit-button"]').should("be.disabled");
    cy.contains(errMsg.email).should("be.visible");
  });

  it("Email ve Password yanlış durumu", () => {
    //Arrage
    /* cy.visit("http://localhost:5173"); */

    //Act
    cy.get('[data-cy="email-input"]').type("test");
    cy.get('[data-cy="password-input"]').type("123");

    //Assertion
    cy.get(".invalid-feedback").should("have.length", 2);
    cy.contains(errMsg.password).should("be.visible");
  });

  it("Email ve Password doğru ama kuralları kabul etmedim durumu", () => {
    //Arrage
    /* cy.visit("http://localhost:5173"); */

    //Act
    cy.get('[data-cy="email-input"]').type("test@test.com");
    cy.get('[data-cy="password-input"]').type("Password#123");

    //Assertion
    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });
});
