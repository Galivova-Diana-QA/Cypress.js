describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали на кнопку Ввойти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка, что высветиться запись
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик и он виден пользователю
     })

     it('Проверка восстановления пароля', function () {
      cy.visit('https://login.qa.studio/'); // Зашли на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
      cy.get('#forgotEmailButton').click(); // Нажали на "Восстановить пароль"
      cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели данные для восстановления
      cy.get('#restoreEmailButton').click(); // Нажала отправить код
     cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка на совпадение текста
     cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик и он виден пользователю
   })

     it('Верный логин и неверный пароль', function () {
      cy.visit('https://login.qa.studio/'); // Зашли на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
      cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
     cy.get('#pass').type('iLoveqastudio5'); // Ввели неверный пароль
     cy.get('#loginButton').click(); // Нажали на кнопку Ввойти
     cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка, что высветиться запись
     cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик и он виден пользователю
  })

  it('Неверный логин и верный пароль', function () {
   cy.visit('https://login.qa.studio/'); // Зашли на сайт
   cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
   cy.get('#mail').type('german@dolnikovvv.ru'); // Ввели неверный логин
  cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
  cy.get('#loginButton').click(); // Нажали на кнопку Ввойти
  cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка, что высветиться запись
  cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик и он виден пользователю
})

  it('Проверка, что в логине есть @', function () {
   cy.visit('https://login.qa.studio/'); // Зашли на сайт
   cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
   cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
  cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
  cy.get('#loginButton').click(); // Нажали на кнопку Ввойти
  cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка, что высветиться запись
  cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик и он виден пользователю
})


it('Проверка на приведение к строчным буквам в логине', function () {
   cy.visit('https://login.qa.studio/'); // Зашли на сайт
   cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
   cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин строчными буквами
  cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
  cy.get('#loginButton').click(); // Нажали на кнопку Ввойти
  cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка, что высветиться запись
  cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик и он виден пользователю
})

  })
 
 