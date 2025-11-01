import { Page, Locator} from '@playwright/test';
import { BasePage } from './base.page';

export class RegisterPage extends BasePage{
    
    readonly locators = {
        firstNameInput: this.page.locator('input[name="firstName"]'),
        lastNameInput: this.page.locator('input[name="lastName"]'),
        emailInput: this.page.locator('input[name="email"]'),
        passwordInput: this.page.locator('input[name="password"]'),
        registerButton: this.page.getByTestId('boton-registrarse'),
        loginButton: this.page.getByTestId('boton-login-header-signup'),
    } 

    constructor(page: Page){
        super(page);
    }

    async fillregisterForm(usuario: {nombre: string, apellido: string, email: string, contraseña: string}) {
        await super.fillTextField(this.locators.firstNameInput, usuario.nombre);
        await super.fillTextField(this.locators.lastNameInput, usuario.apellido);
        await super.fillTextField(this.locators.emailInput, usuario.email);
        await super.fillTextField(this.locators.passwordInput, usuario.contraseña);
    }

    async registerProcessCompleted(usuario: {nombre: string, apellido: string, email: string, contraseña: string}){
        await this.fillregisterForm(usuario);
        await super.clickOnAnyButton(this.locators.registerButton);
    }
}