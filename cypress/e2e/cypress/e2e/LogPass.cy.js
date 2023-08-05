describe('тест', function () {
    
  it('Позитивный кейс авторизации:', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru') ;
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Авторизация прошла успешно').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon');
      }) 
  
  it('Логика восстановления пароля', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('hochuoffer@mai.ru');
      cy.get('#restoreEmailButton').click();
      cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon');
      })     

  it('Негативный кейс авторизации(пароль)', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru') ;
      cy.get('#pass').type('iDONTLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon');
    }) 
    
    it('Негативный кейс авторизации(логин)', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@NEdolnikov.ru') ;
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon');
    })
    
    it('Негативный кейс валидации', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('germandolnikov.ru') ;
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Нужно исправить проблему валидации').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon');
    }) 

    it('Приведение к строчным буквам в логине', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('GerMan@Dolnikov.ru') ;
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Авторизация прошла успешно').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon');
    })

    it('один длинный автотест для HuntingPony', function () {
      cy.visit('https://huntingpony.com/');
      cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
      cy.wait(1000);
      cy.get('.add-cart-counter__btn').click();
      cy.get('[data-add-cart-counter-plus=""]').click();
      cy.get('.add-cart-counter__detail').click();
      cy.get('.cart-controls > .button').click();
      cy.contains('Оформление заказа').should('be.visible');
    })
    
}) 