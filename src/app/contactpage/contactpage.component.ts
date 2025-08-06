import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-wrapper">
  <section class="contact-container">
  <h1 class="listing-heading">Contacteer Ons</h1>
  <p class="listing-description">Heb je een vraag? Laat het ons weten via onderstaand formulier!</p>

  <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
    <label for="name">Naam</label>
    <input
      type="text"
      id="name"
      [(ngModel)]="name"
      name="name"
      required
      placeholder="Jouw naam"
    />

    <label for="email">E-mail</label>
    <input
      type="email"
      id="email"
      [(ngModel)]="email"
      name="email"
      required
      placeholder="jij@example.com"
    />

    <label for="message">Bericht</label>
    <textarea
      id="message"
      [(ngModel)]="message"
      name="message"
      rows="5"
      required
      placeholder="Typ hier je bericht..."
    ></textarea>

    <button type="submit" [disabled]="!contactForm.form.valid">Verstuur</button>
  </form>
</section>




    <section class="contact-info">
      <h2>Onze Gegevens</h2>
      <p><strong>Adres:</strong> Kasteelplein 5, 2300 Turnhout</p>
      <p><strong>Telefoon:</strong> <a href="tel:+3214234567">+32 14 23 45 67</a></p>
      <p><strong>E-mail:</strong> <a href="mailto:hallo@portugesebakker.be">hallo&#64;portugesebakker.be</a></p>
      <p><strong>Openingsuren:</strong> Ma–Za: 08:00 – 18:00</p>
    </section>
  </div>



  `,
  styleUrls: ['./contactpage.component.css']
})
export class ContactComponent {
  name = ''
  email = ''
  message = ''

  onSubmit() {
    console.log('Verzonden:', {
      naam: this.name,
      email: this.email,
      bericht: this.message,
    })
    alert('Bedankt voor je bericht, we nemen spoedig contact op!')
    this.name = ''
    this.email = ''
    this.message = ''
  }
}


export class ContactpageComponent {

}
