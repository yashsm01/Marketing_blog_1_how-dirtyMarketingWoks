import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="legal-container">
      <div class="container">
        <a routerLink="/" class="back-link">← Back to Blog</a>
        <article class="legal-card contact-card">
          <h1>Contact Us</h1>
          <p>Have questions or feedback? We'd love to hear from you. Reach out via the form below or email us directly at <strong>ym21021998&#64;gmail.com</strong>.</p>
          
          <form class="contact-form" (submit)="onSubmit($event)">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="How can we help?" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </article>
      </div>
    </div>
  `,
  styles: [`
    .legal-container { padding: 4rem 0; background: var(--bg-primary); min-height: 100vh; }
    .back-link { display: inline-block; margin-bottom: 2rem; font-weight: 600; color: var(--accent-secondary); text-decoration: none; }
    .legal-card { background: white; padding: 3rem; border-radius: 16px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); max-width: 700px; margin: 0 auto; }
    h1 { color: var(--text-primary); margin-bottom: 1.5rem; font-size: 2.5rem; }
    p { margin-bottom: 2rem; font-size: 1.1rem; color: var(--text-secondary); line-height: 1.7; }
    .contact-form { display: flex; flex-direction: column; gap: 1.5rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
    label { font-weight: 600; color: var(--text-primary); font-size: 0.9rem; }
    input, textarea { 
      padding: 0.8rem 1rem; 
      border-radius: 8px; 
      border: 1px solid var(--border-color); 
      font-size: 1rem;
      background: #fdfcf8;
      width: 100%;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--accent-primary);
      box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
    }
    .btn-primary { 
      background: var(--accent-primary); 
      color: white; 
      padding: 1rem; 
      border: none; 
      border-radius: 8px; 
      font-weight: 700; 
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-primary:hover {
      background: darken(#ff6b6b, 10%);
      transform: translateY(-2px);
    }
    @media (max-width: 768px) {
      .legal-container { padding: 2rem 0; }
      .legal-card { padding: 1.5rem; }
      h1 { font-size: 1.75rem; }
      .contact-form { gap: 1rem; }
    }
  `]
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const mailtoLink = `mailto:ym21021998@gmail.com?subject=Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  }
}
