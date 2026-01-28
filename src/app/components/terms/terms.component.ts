import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="legal-container">
      <div class="container">
        <a routerLink="/" class="back-link">← Back to Blog</a>
        <article class="legal-card">
          <h1>Terms of Service</h1>
          <p class="last-updated">Last updated: January 28, 2026</p>
          
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By using the DirtyMarketing blog, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the site.</p>
          </section>

          <section>
            <h2>2. Intellectual Property</h2>
            <p>All content on this blog, including text, graphics, and logos, is the property of DirtyMarketing and protected by copyright laws.</p>
          </section>

          <section>
            <h2>3. Disclaimer of Liability</h2>
            <p>The information provided is for educational purposes. We are not liable for any losses or damages related to your use of this information.</p>
          </section>

          <section>
            <h2>4. Modifications</h2>
            <p>We reserve the right to modify these terms at any time. Your continued use of the site signifies acceptance of any changes.</p>
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
export class TermsComponent { }
