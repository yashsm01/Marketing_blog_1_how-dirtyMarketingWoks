import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAdComponent } from '../google-ad/google-ad.component';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [CommonModule, GoogleAdComponent],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.css'
})
export class BlogComponent {
    blog = environment.blog;
    adSlots = environment.adSlots;

    sections = [
        {
            id: 'intro',
            title: 'The Underground Economy of Adult Marketing',
            icon: '🌐',
            content: `The adult marketing industry operates in the shadows of the digital economy, yet generates billions annually. Unlike traditional marketing, this underground ecosystem thrives on aggressive tactics, psychological manipulation, and exploiting human desires. From clickbait ads to deceptive landing pages, these marketers have mastered the art of capturing attention and converting it into cold, hard cash.`
        },
        {
            id: 'traffic',
            title: 'Traffic Arbitrage: The Money Machine',
            icon: '📈',
            content: `At its core, dirty marketing relies on traffic arbitrage — buying cheap traffic from one source and monetizing it at a higher rate elsewhere. Marketers purchase visitors from push notification networks, pop-under ads, and adult tube sites for pennies, then funnel them through a maze of offers, subscriptions, and advertisements. The spread between acquisition cost and revenue per visitor is where fortunes are made.`
        },
        {
            id: 'cpa',
            title: 'CPA Networks & Lead Generation',
            icon: '💰',
            content: `Cost Per Action (CPA) networks are the backbone of this industry. Marketers earn commissions for getting users to complete specific actions: signing up for dating sites, downloading apps, or entering credit card details for "free trials." A single lead can pay anywhere from $2 to $200, depending on the vertical and geographic location. Tier-1 countries like the US, UK, and Australia command premium payouts.`
        },
        {
            id: 'ads',
            title: 'Display Advertising & Ad Fraud',
            icon: '🎯',
            content: `Display advertising in the adult space operates differently from mainstream. Publishers run networks that serve billions of impressions daily to adult content consumers. CPM rates vary wildly, from $0.10 for tier-3 traffic to $5+ for premium placements. Some operators engage in ad fraud — using bots to generate fake impressions and clicks, siphoning millions from advertisers before detection.`
        },
        {
            id: 'seo',
            title: 'Black Hat SEO & Parasite Pages',
            icon: '🔍',
            content: `Search engine manipulation is rampant. Practitioners create thousands of optimized pages targeting long-tail keywords, often parasitizing high-authority domains. They exploit expired domains, build private blog networks (PBNs), and use automated link-building tools. When Google catches up, they simply burn the domains and start fresh — the short-term profits far outweigh the costs.`
        },
        {
            id: 'social',
            title: 'Social Media Exploitation',
            icon: '📱',
            content: `Despite platform policies, adult marketers continuously find loopholes. Fake profiles, engagement pods, and coded language help them fly under the radar. Telegram channels, Discord servers, and private communities serve as distribution networks. When accounts get banned, backup accounts take their place within hours — it's a never-ending game of cat and mouse.`
        },
        {
            id: 'crypto',
            title: 'Cryptocurrency & Anonymous Payments',
            icon: '₿',
            content: `Cryptocurrency has revolutionized how dirty marketers get paid. Bitcoin, Monero, and USDT enable anonymous transactions that bypass traditional banking restrictions. Payment processors like Paxum and ePayments (before its shutdown) catered specifically to the adult industry. The pseudonymous nature of crypto allows operators to move millions without leaving a trace.`
        },
        {
            id: 'revenue',
            title: 'The Revenue Breakdown',
            icon: '📊',
            content: `A successful dirty marketing operation can generate substantial returns. Consider this typical breakdown: 40% goes to traffic acquisition, 15% to technical infrastructure, 10% to content creation, 5% to payment processing fees, and the remaining 30% is pure profit. Operations running at scale can see six to seven figures monthly, though volatility is high and legal risks are ever-present.`
        }
    ];

    revenueStats = [
        { label: 'Global Adult Ad Spend', value: '$12B+', icon: '🌍' },
        { label: 'Average CPA Payout', value: '$45', icon: '💵' },
        { label: 'Tube Site Daily Views', value: '500M+', icon: '👁️' },
        { label: 'Push Notification CTR', value: '2-8%', icon: '📲' }
    ];

    telegramChannels = environment.telegramChannels;
}
