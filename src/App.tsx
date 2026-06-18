/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect, useRef } from 'react';
import {
  TrendingUp, X, Menu, BarChart3, Bot, AlertTriangle,
  Layers, CheckCircle2, Send, Phone, MapPin, Globe,
  Bookmark, Users, Heart, MessageCircle, ArrowRight,
  Star, Shield, Zap, Target, Clock, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
/* ─── WhatsApp SVG ──────────────────────────────────────────────────────── */
const WaIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.553 4.189 1.606 6.06L0 24l6.117-1.605a11.803 11.803 0 005.925 1.577h.005c6.632 0 12.028-5.398 12.03-12.032.003-3.212-1.252-6.234-3.53-8.513z"/>
  </svg>
);
/* ─── Fonts & global CSS ────────────────────────────────────────────────── */
const STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
  :root {
    --ink:      #05060F;
    --paper:    #F9F9F7;
    --white:    #FFFFFF;
    --cyan:     #00B4D8;
    --cyan-dk:  #0096B7;
    --cyan-lt:  rgba(0,180,216,.08);
    --muted:    #6B7280;
    --line:     rgba(5,6,15,.08);
    --line-lt:  rgba(5,6,15,.04);
    --serif:    'Playfair Display', Georgia, serif;
    --sans:     'Outfit', system-ui, sans-serif;
  }
  body { font-family: var(--sans); background: var(--paper); color: var(--ink); overflow-x: hidden; }
  ::selection { background: rgba(0,180,216,.2); }
  img { display: block; }
  a { text-decoration: none; }
  /* ── Animations ── */
  @keyframes marquee   { to { transform: translateX(-50%); } }
  @keyframes ping      { 75%,100% { transform: scale(2.2); opacity: 0; } }
  @keyframes radar     { to { transform: scale(1.55); opacity: 0; } }
  @keyframes fadeUp    { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes shimmer   { from { background-position: -400px 0; } to { background-position: 400px 0; } }
  .marquee-inner { animation: marquee 38s linear infinite; display:flex; width:max-content; }
  .ping          { animation: ping 1.4s cubic-bezier(0,0,.2,1) infinite; }
  .radar         { animation: radar 3s ease-out infinite; }
  /* ── Grain ── */
  body::after {
    content:''; position:fixed; inset:0; z-index:9999; pointer-events:none;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E");
    background-size:160px 160px;
  }
  /* ── Utility ── */
  .serif  { font-family: var(--serif); }
  .sans   { font-family: var(--sans);  }
  .label  { font-family:var(--sans); font-size:.6rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; }
  .divider{ width:48px; height:2px; background:var(--cyan); border-radius:4px; }
  /* scroll-reveal */
  .reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease, transform .7s ease; }
  .reveal.visible { opacity:1; transform:none; }
  /* ── Custom cursor — hide native on non-touch ── */
  @media (pointer: fine) {
    *, *::before, *::after { cursor: none !important; }
  }
  /* ── Responsive helpers ── */
  @media(max-width:900px){
    .desk-only{ display:none !important; }
    .mob-show { display:flex !important; }
    .col2     { grid-template-columns:1fr !important; }
    .col3     { grid-template-columns:1fr !important; }
    .plans-grid{ grid-template-columns:1fr !important; }
  }
  @media(min-width:901px){
    .mob-show{ display:none !important; }
  }
  /* ══════════════════════════════════════════════
     SECCIÓN DOLORES — DARK PREMIUM
  ══════════════════════════════════════════════ */
  .pain-section {
    background: #05060F;
    position: relative;
    overflow: hidden;
  }
