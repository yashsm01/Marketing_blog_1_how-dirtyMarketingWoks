import { Component, Input, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

@Component({
  selector: 'app-google-ad',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ad-container" [ngClass]="adClass">
      <div class="ad-label">Advertisement</div>
      <ins class="adsbygoogle"
           [style.display]="'block'"
           [attr.data-ad-client]="adSenseId"
           [attr.data-ad-slot]="adSlot"
           [attr.data-ad-format]="format"
           data-full-width-responsive="true">
      </ins>
    </div>
  `,
  styles: [`
    .ad-container {
      width: 100%;
      margin: 3rem auto;
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      border: 1px dashed #ced4da;
    }
    .ad-label {
      font-size: 0.65rem;
      color: #adb5bd;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 1rem;
      text-align: center;
      font-weight: 700;
    }
  `]
})
export class GoogleAdComponent implements AfterViewInit {
  @Input() adSlot!: string;
  @Input() format: string = 'auto';
  @Input() adClass: string = '';

  adSenseId = environment.adSenseId;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (e) {
        console.error('Ad error:', e);
      }
    }
  }
}
