import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="legal-container">
      <div class="container">
        <a routerLink="/" class="back-link">← Back to Blog</a>
        <article class="legal-card">
          <h1>Privacy Policy</h1>
          <p class="last-updated">Last updated: January 28, 2026</p>
          
          <section>
            <h2>1. Introduction</h2>
            <p>Welcome to DirtyMarketing. We value your privacy and are committed to protecting your personal data in accordance with best practices.</p>
          </section>

          <section>
            <h2>2. Information Collection</h2>
            <p>We collect minimal data necessary for site functionality, including browser type, IP address, and page interaction data via standard cookies.</p>
          </section>

          <section>
            <h2>3. Google AdSense & Cookies</h2>
            <p>We use Google AdSense to serve advertisements. Google uses the DART cookie to serve ads based on your visit to this site and other sites on the Internet.</p>
            <p>You can manage your ad preferences or opt-out of personalized advertising via the <a href="https://www.google.com/settings/ads" target="_blank">Google Ads Settings</a>.</p>
          </section>

          <section>
            <h2>4. Contact Us</h2>
            <p>For any privacy-related inquiries, please reach out to us at: <strong>ym21021998&#64;gmail.com</strong></p>
          </section>
        </article>
      </div>
    </div>
  `,
  styles: [`
    .legal-container { padding: 4rem 0; background: var(--bg-primary); min-height: 100vh; }
    .back-link { display: inline-block; margin-bottom: 2rem; font-weight: 600; color: var(--accent-secondary); text-decoration: none; }
    .legal-card { background: white; padding: 3rem; border-radius: 16px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); }
    h1 { color: var(--text-primary); margin-bottom: 0.5rem; font-size: 2.5rem; }
    .last-updated { color: var(--text-muted); margin-bottom: 2.5rem; font-size: 0.9rem; }
    h2 { margin-top: 2rem; margin-bottom: 1rem; color: var(--accent-secondary); font-size: 1.5rem; }
    p { margin-bottom: 1.2rem; font-size: 1.1rem; color: var(--text-secondary); line-height: 1.7; }
    section { margin-bottom: 2.5rem; }
    @media (max-width: 768px) {
      .legal-container { padding: 2rem 0; }
      .legal-card { padding: 1.5rem; }
      h1 { font-size: 1.75rem; }
      h2 { font-size: 1.3rem; }
      p { font-size: 1rem; }
    }
  `]
})
export class PrivacyComponent { }
