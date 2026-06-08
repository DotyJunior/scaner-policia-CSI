/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EvidenceCard } from "./types";

// Highly stylized SVG of a latent thumbprint with ridge loop patterns
const FINGERPRINT_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 460" fill="none">
  <!-- Fingerprint whorl ridges -->
  <path d="M 50,230 C 50,110 170,110 170,230" stroke="%2300ccff" stroke-width="1.8" stroke-opacity="0.32" stroke-dasharray="5,2"/>
  <path d="M 60,230 C 60,130 160,130 160,230" stroke="%2300ccff" stroke-width="1.8" stroke-opacity="0.45"/>
  <path d="M 70,230 C 70,150 150,150 150,230" stroke="%2300ccff" stroke-width="1.6" stroke-opacity="0.55" stroke-dasharray="8,3"/>
  <path d="M 80,230 C 80,170 140,170 140,230" stroke="%2300ccff" stroke-width="1.6" stroke-opacity="0.7"/>
  <path d="M 90,230 C 90,190 130,190 130,230" stroke="%2300ccff" stroke-width="2.2" stroke-opacity="0.8"/>
  <path d="M 100,230 C 100,210 120,210 120,230" stroke="%2300ccff" stroke-width="2.6" stroke-opacity="0.95"/>
  
  <!-- Ridges radiating downwards and loops -->
  <path d="M 50,230 C 50,300 80,340 110,380" stroke="%2300ccff" stroke-width="1.6" stroke-opacity="0.35"/>
  <path d="M 170,230 C 170,300 140,340 110,380" stroke="%2300ccff" stroke-width="1.6" stroke-opacity="0.35"/>
  <path d="M 80,230 C 80,290 110,310 110,340" stroke="%2300ccff" stroke-width="1.4" stroke-opacity="0.5"/>
  
  <!-- Specific minutiae target rings (forensic marking) -->
  <circle cx="110" cy="190" r="14" stroke="%23ff3838" stroke-width="0.8" stroke-dasharray="3,1.5" stroke-opacity="0.75"/>
  <line x1="110" y1="170" x2="110" y2="210" stroke="%23ff3838" stroke-width="0.8" stroke-opacity="0.75"/>
  <line x1="90" y1="190" x2="130" y2="190" stroke="%23ff3838" stroke-width="0.8" stroke-opacity="0.75"/>
  
  <circle cx="140" cy="275" r="10" stroke="%23ff3838" stroke-width="0.8" stroke-dasharray="3,1.5" stroke-opacity="0.7"/>
  <line x1="140" y1="260" x2="140" y2="290" stroke="%23ff3838" stroke-width="0.8" stroke-opacity="0.7"/>
</svg>`;

// Highly stylized SVG of a bloodstain spatter drop
const BLOODSTAIN_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 460" fill="none">
  <!-- Bloodstain backdrop pattern -->
  <path d="M 110,130 C 130,130 155,160 155,200 C 155,240 130,270 110,270 C 90,270 65,240 65,200 C 65,160 90,130 110,130 Z" fill="%23cc0000" fill-opacity="0.1" stroke="%23cc0000" stroke-width="1.5" stroke-dasharray="3,3"/>
  <path d="M 110,140 C 124,140 142,165 142,195 C 142,225 124,250 110,250 C 96,250 78,225 78,195 C 78,165 96,140 110,140 Z" fill="%23b30000" fill-opacity="0.25" stroke="%23ff4444" stroke-width="1.2"/>
  
  <!-- Directional satellite splatters extending downwards -->
  <circle cx="110" cy="285" r="5" fill="%23990000" fill-opacity="0.8"/>
  <circle cx="110" cy="320" r="3.5" fill="%23990000" fill-opacity="0.8"/>
  <circle cx="110" cy="355" r="2" fill="%23990000" fill-opacity="0.9"/>
  <circle cx="110" cy="385" r="1" fill="%23990000" fill-opacity="0.95"/>
  
  <!-- Lateral mist droplets -->
  <circle cx="65" cy="180" r="1.5" fill="%23b30000"/>
  <circle cx="150" cy="175" r="2" fill="%23b30000"/>
  <circle cx="50" cy="220" r="1.2" fill="%23b30000"/>
  <circle cx="165" cy="225" r="1.8" fill="%23b30000"/>
</svg>`;

// Stylized DNA helix vector
const DNA_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 460" fill="none">
  <!-- Glowing DNA double helix -->
  <!-- Strand A -->
  <path d="M 50,60 Q 110,95 170,60 T 50,165 T 170,270 T 50,375 T 170,445" stroke="%2301ff88" stroke-width="2.2" stroke-opacity="0.8"/>
  <!-- Strand B -->
  <path d="M 170,60 Q 110,25 50,60 T 170,165 T 50,270 T 170,375 T 50,445" stroke="%2300d0ff" stroke-width="2.2" stroke-opacity="0.8"/>
  
  <!-- Horizontal Base Pairs connecting the strands -->
  <line x1="110" y1="43" x2="110" y2="78" stroke="%23ff3838" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="75" y1="112" x2="145" y2="112" stroke="%23ffeb3b" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="110" y1="165" x2="110" y2="165" stroke="%23ff3838" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="55" y1="218" x2="165" y2="218" stroke="%2300ff88" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="110" y1="270" x2="110" y2="270" stroke="%23ffeb3b" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="75" y1="322" x2="145" y2="322" stroke="%2300ccff" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="110" y1="375" x2="110" y2="375" stroke="%23ff3838" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="55" y1="428" x2="165" y2="428" stroke="%23ffeb3b" stroke-width="1.5" stroke-opacity="0.6"/>

  <!-- Glowing base points -->
  <circle cx="110" cy="112" r="3" fill="%23ffeb3b"/>
  <circle cx="110" cy="218" r="3" fill="%2300ff88"/>
  <circle cx="110" cy="322" r="3" fill="%2300ccff"/>
  <circle cx="110" cy="428" r="3" fill="%23ffeb3b"/>

  <!-- DNA Locus Mark targeting -->
  <circle cx="110" cy="218" r="18" stroke="%23ff3838" stroke-width="1" stroke-dasharray="4,2" stroke-opacity="0.8"/>
  <text x="135" y="221" fill="%23ff3838" font-size="6.5" font-family="monospace" opacity="0.8">LOCUS: XYM3</text>
</svg>`;

// Stylized document sheet simulating a contract
const DOC_CONTRACT_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 460" fill="none">
  <!-- Document paper background -->
  <rect x="25" y="30" width="170" height="400" rx="4" fill="%2306150e" stroke="%2300ff88" stroke-width="1.2" stroke-opacity="0.4"/>
  
  <!-- Text lines -->
  <line x1="40" y1="60" x2="180" y2="60" stroke="%2300ff88" stroke-width="1.2" stroke-opacity="0.25"/>
  <line x1="40" y1="80" x2="180" y2="80" stroke="%2300ff88" stroke-width="1" stroke-opacity="0.25"/>
  <line x1="40" y1="100" x2="150" y2="100" stroke="%2300ff88" stroke-width="1" stroke-opacity="0.25"/>
  <line x1="40" y1="130" x2="180" y2="130" stroke="%2300ff88" stroke-width="1.2" stroke-opacity="0.2"/>
  <line x1="40" y1="150" x2="180" y2="150" stroke="%2300ff88" stroke-width="1" stroke-opacity="0.25"/>
  <line x1="40" y1="170" x2="170" y2="170" stroke="%23ff3838" stroke-width="1.8" stroke-opacity="0.75"/> <!-- Forged change line -->
  
  <line x1="40" y1="210" x2="180" y2="210" stroke="%2300ff88" stroke-width="1" stroke-opacity="0.25"/>
  <line x1="40" y1="230" x2="180" y2="230" stroke="%2300ff88" stroke-width="1.1" stroke-opacity="0.25"/>
  <line x1="40" y1="250" x2="130" y2="250" stroke="%2300ff88" stroke-width="1" stroke-opacity="0.25"/>

  <!-- Stamp / Seal -->
  <circle cx="150" cy="310" r="18" stroke="%2300ccff" stroke-width="1" stroke-dasharray="3,1.5" stroke-opacity="0.5"/>
  <circle cx="150" cy="310" r="14" stroke="%2300ccff" stroke-width="0.8" stroke-opacity="0.6"/>

  <!-- Signature line and simulated path -->
  <path d="M 50,375 C 60,355 75,400 90,375 C 110,345 125,390 145,370" stroke="%2300ccff" stroke-width="1.8" stroke-opacity="0.85"/>
  <line x1="40" y1="385" x2="150" y2="385" stroke="%2300ff88" stroke-width="0.8" stroke-opacity="0.4"/>

  <!-- Analysis bracket highlighting forgery -->
  <rect x="35" y="158" width="145" height="24" stroke="%23ff3838" stroke-width="1.2" stroke-dasharray="3,1.5" stroke-opacity="0.85"/>
  <circle cx="110" cy="170" r="15" stroke="%23ff3838" stroke-width="1" stroke-opacity="0.9"/>
  <line x1="110" y1="150" x2="110" y2="190" stroke="%23ff3838" stroke-width="0.6" stroke-opacity="0.9"/>
</svg>`;

// Stylized official document booklet
const DOC_PASSPORT_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 460" fill="none">
  <!-- Passport background sheet -->
  <rect x="20" y="40" width="180" height="380" rx="6" fill="%2306150e" stroke="%2300ff88" stroke-width="1.2" stroke-opacity="0.3"/>
  <rect x="25" y="45" width="170" height="370" rx="4" fill="none" stroke="%2300ff88" stroke-width="0.6" stroke-opacity="0.2"/>

  <!-- Header -->
  <text x="110" y="70" fill="%2300ff88" font-size="8.5" font-family="monospace" letter-spacing="2" text-anchor="middle" font-weight="bold" opacity="0.85">PASSPORT DEPT</text>

  <!-- Photo Target Frame -->
  <rect x="40" y="100" width="60" height="80" fill="%2300ff88" fill-opacity="0.08" stroke="%2300ff88" stroke-width="1" stroke-opacity="0.4"/>
  <ellipse cx="70" cy="135" rx="14" ry="18" stroke="%2300ff88" stroke-width="1" stroke-opacity="0.4"/>
  <path d="M 52,170 C 52,155 88,155 88,170" stroke="%2300ff88" stroke-width="1" stroke-opacity="0.4"/>

  <!-- Metadata labels -->
  <text x="115" y="112" fill="%2300ff88" font-size="6.5" font-family="monospace" opacity="0.7">PASSPORT NO:</text>
  <text x="115" y="122" fill="%2300ff88" font-size="7" font-family="monospace" font-weight="bold" opacity="0.9">BR-8430 A</text>

  <!-- Watermark details -->
  <path d="M 120,240 C 120,200 180,200 180,240 S 140,280 140,310" stroke="%23ff3838" stroke-width="1.2" stroke-opacity="0.35" stroke-dasharray="3,1.5"/>

  <!-- Machine Readable Code -->
  <text x="35" y="375" fill="%2300ff88" font-size="6" font-family="monospace" opacity="0.8">P&lt;BRA&lt;&lt;CAMPOS&lt;LUCIA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</text>
  <text x="35" y="390" fill="%2300ff88" font-size="6" font-family="monospace" opacity="0.8">8430721X9&lt;3BRA8511252M&lt;&lt;&lt;&lt;&lt;</text>

  <!-- Highlight overlay -->
  <circle cx="160" cy="140" r="12" stroke="%23ff3838" stroke-width="0.8" stroke-opacity="0.8" stroke-dasharray="3,2"/>
</svg>`;

// Stylized palmar fold lines
const PALMPRINT_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 460" fill="none">
  <!-- Hand silhouette -->
  <path d="M 45,340 C 35,300 25,240 35,210 C 40,195 50,195 55,210 C 60,160 55,100 65,80 C 73,70 81,75 83,100 C 90,85 100,55 110,50 C 118,48 126,55 128,80 C 135,70 145,55 155,60 C 163,65 167,78 163,110 C 175,120 188,140 185,170 C 182,190 178,210 174,230 C 180,260 190,320 170,360 C 150,390 130,410 110,415 C 80,415 60,390 45,340 Z" stroke="%2304d98b" stroke-width="1.8" stroke-opacity="0.5"/>
  
  <!-- Principal lines -->
  <path d="M 60,205 C 75,230 100,285 100,340" stroke="%2300ccff" stroke-width="2" stroke-opacity="0.75"/>
  <path d="M 60,205 C 90,220 130,230 160,215" stroke="%2300ccff" stroke-width="1.6" stroke-opacity="0.7"/>
  <path d="M 165,160 C 130,190 95,180 75,170" stroke="%2300ccff" stroke-width="1.6" stroke-opacity="0.7"/>

  <!-- Scanning minutiae dots on tips -->
  <circle cx="65" cy="80" r="3" fill="%2300ff88" fill-opacity="0.5"/>
  <circle cx="110" cy="50" r="3" fill="%2300ff88" fill-opacity="0.5"/>
  <circle cx="155" cy="60" r="3" fill="%2300ff88" fill-opacity="0.5"/>

  <!-- Scanner target crosshairs -->
  <circle cx="110" cy="245" r="10" stroke="%23ff3838" stroke-width="0.8" stroke-opacity="0.8" stroke-dasharray="3,1.5"/>
  <line x1="110" y1="230" x2="110" y2="260" stroke="%23ff3838" stroke-width="0.8" stroke-opacity="0.8"/>
  <line x1="95" y1="245" x2="125" y2="245" stroke="%23ff3838" stroke-width="0.8" stroke-opacity="0.8"/>
</svg>`;

// Stylized video monitoring display with face box
const VIDEO_CCTV_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 460" fill="none">
  <!-- CCTV Framework grid -->
  <rect x="5" y="5" width="210" height="450" fill="none" stroke="%2300ff88" stroke-width="0.8" stroke-dasharray="8,4" stroke-opacity="0.2"/>
  
  <circle cx="110" cy="230" r="75" stroke="%2300ff88" stroke-width="0.5" stroke-dasharray="5,15" stroke-opacity="0.3"/>

  <!-- Suspect facial model silhouette -->
  <g opacity="0.6">
    <ellipse cx="110" cy="180" rx="35" ry="46" stroke="%2300ccff" stroke-width="1.5" stroke-opacity="0.75"/>
    <path d="M 45,340 C 45,260 175,260 175,340 Z" stroke="%2300ccff" stroke-width="1.5" stroke-opacity="0.75"/>
    <circle cx="95" cy="170" r="2.2" fill="%2300ff88"/>
    <circle cx="125" cy="170" r="2.2" fill="%2300ff88"/>
    <path d="M 105,195 Q 110,200 115,195" stroke="%2300ff88" stroke-width="1"/>
  </g>

  <!-- Red CCTV Focus parameters -->
  <rect x="65" y="125" width="90" height="110" stroke="%23ff3838" stroke-width="1.2" stroke-opacity="0.85"/>
  <path d="M 65,145 L 65,125 L 85,125" stroke="%23ff3838" stroke-width="2.5" stroke-opacity="1"/>
  <path d="M 135,125 L 155,125 L 155,145" stroke="%23ff3838" stroke-width="2.5" stroke-opacity="1"/>
  <path d="M 65,215 L 65,235 L 85,235" stroke="%23ff3838" stroke-width="2.5" stroke-opacity="1"/>
  <path d="M 135,235 L 155,235 L 155,215" stroke="%23ff3838" stroke-width="2.5" stroke-opacity="1"/>

  <!-- CCTV Text feeds -->
  <text x="20" y="30" fill="%23ff3838" font-size="7" font-family="monospace" font-weight="bold" opacity="0.85">● GRAVAÇÃO AKTIVA</text>
  <text x="150" y="30" fill="%2300ff88" font-size="6" font-family="monospace" opacity="0.7">CAM-P-02</text>
  <text x="20" y="440" fill="%2300ff88" font-size="6.5" font-family="monospace" opacity="0.7">EST: CORREDOR-S0</text>
</svg>`;

// Stylized CCTV plate enhancer
const VIDEO_PLATE_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 460" fill="none">
  <!-- Vehicle Licence plate analyzer mockup -->
  <rect x="5" y="5" width="210" height="450" fill="none" stroke="%2300ff88" stroke-width="0.8" stroke-dasharray="8,4" stroke-opacity="0.2"/>

  <!-- Plate borders -->
  <rect x="20" y="170" width="180" height="100" rx="3" fill="%2306150e" stroke="%2300ff88" stroke-width="1.5" stroke-opacity="0.4"/>
  <rect x="30" y="185" width="160" height="70" rx="2" fill="none" stroke="%2300ccff" stroke-width="1" stroke-opacity="0.6"/>

  <!-- Alpha Characters -->
  <text x="110" y="232" fill="%2300ff88" font-size="34" font-family="monospace" text-anchor="middle" font-weight="bold" letter-spacing="4" filter="url(#glow)">BRA2E19</text>
  <text x="110" y="200" fill="%2300ccff" font-size="7" font-family="monospace" text-anchor="middle" letter-spacing="3" opacity="0.8">BRASIL - MERCOSUL</text>

  <!-- Analysis crop box -->
  <rect x="15" y="155" width="190" height="130" stroke="%23ff3838" stroke-width="1" stroke-dasharray="3,1.5" stroke-opacity="0.8"/>
  <line x1="15" y1="155" x2="35" y2="155" stroke="%23ff3838" stroke-width="2.5"/>
  <line x1="15" y1="155" x2="15" y2="175" stroke="%23ff3838" stroke-width="2.5"/>
</svg>`;

export const EVIDENCE_CARDS: EvidenceCard[] = [
  // ==================== SCANNER DE PEGADAS ====================
  {
    id: "FP-2023-10-25",
    label: "Pegada de Sola de Bota",
    icon: "🥾",
    image: "",
    scannerMode: "FOOTPRINT",
    data: {
      id: "FP-2023-10-25",
      title: "PATTERN ANALYSIS — SOLE IMPRESSION DETECTED",
      typeName: "BOTA — SOLA ROBUSTA",
      labTech: "J. CHEN",
      equipment: "FIS-SCAN 4000 v3.2",
      defaultConfidence: 96.3,
      parameters: [
        { label: "STATUS", value: "ANALISADO" },
        { label: "ARQUIVO ESPECTRO", value: "boot-spectral-025.png" },
        { label: "PADRÃO TREAD", value: "PROTETOR AGRESSIVO" },
        { label: "LARGURA MÁXIMA", value: "11.5 cm" },
        { label: "COMPRIMENTO", value: "38 cm" },
        { label: "LARGURA CALCANHAR", value: "7.7 cm" },
        { label: "SOLO SUBSTRATO", value: "ARGILA ÚMIDA" },
      ],
      matches: [
        { name: "TIMBERLAND 6-INCH BOOT", classification: "Tamanho 42", pct: 96.3 },
        { name: "CAT FOOTWEAR SECOND SHIFT", classification: "Tamanho 42", pct: 88.1 },
        { name: "DANNER BULL RUN BOOT", classification: "Tamanho 41", pct: 73.4 },
      ],
      refPoints: [
        { x: 112, y: 28 }, { x: 95, y: 38 }, { x: 128, y: 42 }, { x: 80, y: 62 }, { x: 140, y: 65 },
        { x: 100, y: 88 }, { x: 125, y: 92 }, { x: 85, y: 115 }, { x: 145, y: 118 }, { x: 108, y: 140 },
        { x: 130, y: 155 }, { x: 90, y: 168 }, { x: 118, y: 180 }, { x: 105, y: 200 }, { x: 128, y: 215 },
        { x: 95, y: 232 }, { x: 115, y: 248 }, { x: 102, y: 268 }, { x: 120, y: 285 }, { x: 108, y: 305 },
        { x: 90, y: 315 }, { x: 125, y: 318 }, { x: 100, y: 335 }, { x: 115, y: 348 }, { x: 88, y: 355 },
        { x: 130, y: 358 }, { x: 105, y: 370 }, { x: 118, y: 382 }, { x: 95, y: 390 }, { x: 110, y: 398 },
        { x: 128, y: 405 }, { x: 100, y: 415 }, { x: 115, y: 425 }, { x: 105, y: 435 },
      ],
      dimensions: {
        hLine: { x1: 55, y1: 12, x2: 165, y2: 12, label: "11.5 cm" },
        vLine: { x1: 18, y1: 28, x2: 18, y2: 440, label: "38 cm" },
        heelLine: { x1: 72, y1: 395, x2: 150, y2: 395, label: "7.7 cm" }
      },
      stages: [
        { id: "idle", label: "SISTEMA PRONTO", progress: 0 },
        { id: "init", label: "INICIALIZANDO VARREDURA...", progress: 10 },
        { id: "depth", label: "MAPEANDO PROFUNDIDADE...", progress: 35 },
        { id: "pattern", label: "DETECTANDO PADRÃO DE SOLA...", progress: 62 },
        { id: "reference", label: "MAPEANDO PONTOS DE REFERÊNCIA...", progress: 78 },
        { id: "database", label: "CONSULTANDO BASE DE DADOS...", progress: 90 },
        { id: "complete", label: "ANÁLISE CONCLUÍDA", progress: 100 },
      ],
      logs: [
        "> boot sequence FIS-SCAN 4000 v3.2",
        "> sensor array: OK [16/16]",
        "> UV emitter: ACTIVE",
        "> IR grid: ACTIVE",
        "> depth sensor: CALIBRATED",
        "> pattern engine: LOADED",
        "> image input: pegada-recortada-01.png",
        "> BEGIN SCAN SEQUENCE...",
        "> detecting sole geometry...",
        "> lug pattern: AGGRESSIVE TREAD",
        "> arch analysis: COMPLETE",
        "> heel zone: ISOLATED",
        "> generating reference grid...",
        "> cross-referencing shoe DB...",
        "> MATCH FOUND — confidence 96.3%",
        "> ANALYSIS COMPLETE"
      ]
    }
  },
  {
    id: "FP-2023-11-12",
    label: "Sapatilha de Jogging Latente",
    icon: "👟",
    image: "", // Auto populated or handled
    scannerMode: "FOOTPRINT",
    data: {
      id: "FP-2023-11-12",
      title: "FORENSIC FOOTWEAR — SPORT RESIDUE RECOGNITION",
      typeName: "TÊNIS — SPRINT ESPORTIVO",
      labTech: "J. CHEN",
      equipment: "FIS-SCAN 4000 v3.2",
      defaultConfidence: 91.4,
      parameters: [
        { label: "STATUS", value: "ANALISADO" },
        { label: "REGISTRO ANÁLISE", value: "running-tread-112.png" },
        { label: "ARQUITETURA DE SOLA", value: "DENSIDADE MULTI-FLEX" },
        { label: "COMPRIMENTO", value: "31 cm" },
        { label: "LARGURA ANTERIOR", value: "10.2 cm" },
        { label: "PEGADA PROFUNDIDADE", value: "1.4 mm" },
        { label: "MICROEVOLUÇÃO DESGASTE", value: "PRONADOR LATERAL INTERNO" },
      ],
      matches: [
        { name: "PUMA FLYER RUNNER", classification: "Tamanho 40", pct: 91.4 },
        { name: "NIKE AIR MAX RUN", classification: "Tamanho 40", pct: 75.3 },
        { name: "ADIDAS ULTRABOOST", classification: "Tamanho 41", pct: 64.8 },
      ],
      refPoints: [
        { x: 110, y: 40 }, { x: 92, y: 55 }, { x: 125, y: 55 }, { x: 80, y: 90 }, { x: 135, y: 90 },
        { x: 110, y: 150 }, { x: 120, y: 220 }, { x: 105, y: 290 }, { x: 95, y: 350 }, { x: 120, y: 350 },
      ],
      dimensions: {
        hLine: { x1: 60, y1: 18, x2: 155, y2: 18, label: "10.2 cm" },
        vLine: { x1: 22, y1: 40, x2: 22, y2: 410, label: "31 cm" },
        heelLine: { x1: 75, y1: 375, x2: 140, y2: 375, label: "6.8 cm" }
      },
      stages: [
        { id: "idle", label: "SISTEMA PRONTO", progress: 0 },
        { id: "init", label: "INICIALIZANDO ANÁLISE DE MALHA...", progress: 15 },
        { id: "pattern", label: "CALCULANDO DESVIO PRONADOR...", progress: 50 },
        { id: "database", label: "MAPEAR PING DE CALIBRAGEM BANCO...", progress: 85 },
        { id: "complete", label: "ANÁLISE ESPORTIVA CONCLUÍDA", progress: 100 },
      ],
      logs: [
        "> loading sport shoe micro-geometry standards...",
        "> detecting flexible groove lines...",
        "> lateral wear: PRONATIVE DETECTED [82% score]",
        "> crossing suspect shoe archive databases...",
        "> MATCH MATCHED — PUMA CODES OK"
      ]
    }
  },

  // ==================== SCANNER DE DNA ====================
  {
    id: "DNA-2023-10-26",
    label: "Folículo Capilar",
    icon: "🧬",
    image: DNA_SVG,
    scannerMode: "DNA",
    data: {
      id: "DNA-2023-10-26",
      title: "GENETIC CODIS SEQUENCING — AMINO-ACID EXTRACTION",
      typeName: "DNA — PERFIL DE STR AUTOSSÔMICO",
      labTech: "DRA. L. ALMEIDA",
      equipment: "GENO-SCANNER GENAX-IV",
      defaultConfidence: 99.98,
      parameters: [
        { label: "STATUS", value: "SEQ_CONCLUÍDO" },
        { label: "TIPO EXTRAÇÃO", value: "BULBO CAPILAR ATIVO" },
        { label: "LUMINOL SPECTRA", value: "XY-MARCADOR SÍTIOS" },
        { label: "DENSIDADE CODS", value: "20 LOCI STR DETECTADOS" },
        { label: "ALELOS TH01", value: "9.3, 10 (PADRÕES)" },
        { label: "TPOX MARCADORES", value: "8, 12 COINCIDENTES" },
        { label: "CROMOSSOMA FECHADO", value: "MASCULINO XY" },
      ],
      matches: [
        { name: "SUSPEITO A — MARCOS SILVA", classification: "Frequência Alelo 1 em 5M", pct: 99.98 },
        { name: "FAMILIAR DIRETO (IRMÃO DE A)", classification: "Grau Parentesco 1D", pct: 51.5 },
      ],
      refPoints: [
        { x: 110, y: 112 }, { x: 110, y: 218 }, { x: 110, y: 322 }, { x: 110, y: 428 },
        { x: 50, y: 60 }, { x: 170, y: 60 }, { x: 50, y: 165 }, { x: 170, y: 165 },
      ],
      dimensions: {
        hLine: { x1: 50, y1: 60, x2: 170, y2: 60, label: "Span: 12 nm" },
        vLine: { x1: 25, y1: 60, x2: 25, y2: 428, label: "Chain Length" },
        heelLine: { x1: 110, y1: 218, x2: 160, y2: 218, label: "TH01 locus node" }
      },
      stages: [
        { id: "idle", label: "SISTEMA GENÔMICO PRONTO", progress: 0 },
        { id: "init", label: "AMPLIFICANDO PROTEÍNA VIA PCR...", progress: 20 },
        { id: "depth", label: "ISOLANDO LINGUAGEM DE ALELOS...", progress: 50 },
        { id: "pattern", label: "INDEXANDO 20 LOCI NO CODIS...", progress: 75 },
        { id: "database", label: "BUSCANDO COMBINAÇÕES GENÉTICAS...", progress: 92 },
        { id: "complete", label: "SEQUENCIAMENTO CONCLUÍDO", progress: 100 },
      ],
      logs: [
        "> initializing PCR thermal cycler sequence...",
        "> genomic denaturing stage: 95°C -- complete",
        "> target loci amplification: CSF1PO, FGA, TH01 -- OK",
        "> electropherogram raw signal read: clean profile, no contamination",
        "> database lookup on national DNA register...",
        "> GENETIC LINK IDENTIFIED WITH SUSPECT A [99.98% certainty]"
      ]
    }
  },
  {
    id: "DNA-2023-10-27",
    label: "Swab Bucal Suspeito B",
    icon: "🩸",
    image: BLOODSTAIN_SVG,
    scannerMode: "DNA",
    data: {
      id: "DNA-2023-10-27",
      title: "AUTOSOMAL GENOTYPING — SWAB EXTRACTION PROFILE",
      typeName: "DNA — SWAB DE EPITÉLIO BUCACO",
      labTech: "DRA. L. ALMEIDA",
      equipment: "GENO-SCANNER GENAX-IV",
      defaultConfidence: 94.2,
      parameters: [
        { label: "STATUS", value: "SUCESSO" },
        { label: "CONCENTRAÇÃO ADND", value: "3.12 ng/µL (IDEAL)" },
        { label: "LOCI DETECTOR", value: "15 MARCADORES CODIS" },
        { label: "CONTAMINAÇÃO", value: "AUSENTE (TAMPÃO ESTÉRIL)" },
        { label: "QUALIDADE DE REAÇÃO", value: "EXCELENTE (98%)" },
      ],
      matches: [
        { name: "RECEPTOR DE SANGUE — ROGÉRIO DIAS", classification: "Frequência Alelo 1 em 420K", pct: 94.2 },
        { name: "ESTIMATIVA POPULAÇÃO BR", classification: "Perfil Caucasiano Geral", pct: 33.4 },
      ],
      refPoints: [
        { x: 110, y: 140 }, { x: 142, y: 195 }, { x: 110, y: 250 }, { x: 78, y: 195 },
      ],
      dimensions: {
        hLine: { x1: 78, y1: 195, x2: 142, y2: 195, label: "STR width" },
        vLine: { x1: 110, y1: 140, x2: 110, y2: 250, label: "STR length" },
      },
      stages: [
        { id: "idle", label: "SEQUENCIADOR PRONTO", progress: 0 },
        { id: "init", label: "DESLIGANDO TAMPÃO CELULAR...", progress: 25 },
        { id: "depth", label: "REMOÇÃO DE PROTEASES...", progress: 60 },
        { id: "database", label: "CONSULTANDO REGISTRO BIO-FEDERAL...", progress: 90 },
        { id: "complete", label: "MARCADOR DETERMINADO", progress: 100 },
      ],
      logs: [
        "> epithelial cells buffer elution processed...",
        "> capillary electrophoresis laser scanning initiated...",
        "> loci profiles calibrated...",
        "> direct match verified against criminal profiling catalog..."
      ]
    }
  },

  // ==================== SCANNER DE DOCUMENTO ====================
  {
    id: "DOC-2023-11-05",
    label: "Contrato Particular",
    icon: "📄",
    image: DOC_CONTRACT_SVG,
    scannerMode: "DOCUMENT",
    data: {
      id: "DOC-2023-11-05",
      title: "GRAFOLOGY AND INK SPECTRAL EXAM — INTEGRITY TEST",
      typeName: "GRAFOLOGIA — ASSINATURA E TINTA",
      labTech: "PADRE IGNACIO (PERITO)",
      equipment: "DOC-EXAMINER SPECTRUM-5",
      defaultConfidence: 94.6,
      parameters: [
        { label: "STATUS", value: "FALSIDADE_CONFIRMADA" },
        { label: "EXAME GRAFOSCÓPICO", value: "TRAÇADO ADULTERADO" },
        { label: "CRUZAMENTO DE TRAÇO", value: "TINTA DO VALOR SOBRE A FIRMA" },
        { label: "COMPOSIÇÃO QUÍMICA", value: "TINTA AZUL ESFEROGRÁFICA (T-80)" },
        { label: "PRESSÃO DE PONTAS", value: "VETOR ANORMAL [EXCESSO 3.1 N]" },
        { label: "HOLOGRA REATIVA", value: "FALHA / SELO FALSO DETECTADO" },
      ],
      matches: [
        { name: "FALSIFICAÇÃO SÉRIE ASSINATURA", classification: "Falsidade Ideológica de Punho", pct: 94.6 },
        { name: "ASSINATURA LEGÍTIMA CARLOS", classification: "Incompatibilidade de Pressão", pct: 8.5 },
      ],
      refPoints: [
        { x: 110, y: 170 }, { x: 150, y: 310 }, { x: 90, y: 375 }, { x: 145, y: 370 },
      ],
      dimensions: {
        hLine: { x1: 35, y1: 170, x2: 180, y2: 170, label: "Forger area" },
        vLine: { x1: 150, y1: 292, x2: 150, y2: 328, label: "Seal Dev" },
      },
      stages: [
        { id: "idle", label: "ESCANER ESPECTRAL PRONTO", progress: 0 },
        { id: "init", label: "LUMINOL ULTRAVIOLETA ATIVO...", progress: 15 },
        { id: "depth", label: "MAPEANDO SULCO E PRESSÃO DE ESCRITA...", progress: 45 },
        { id: "pattern", label: "COMPARANDO ASSINATURAS HISTÓRICAS...", progress: 72 },
        { id: "database", label: "DECODIFICANDO QUÍMICA DO CORANTE da TINTA...", progress: 90 },
        { id: "complete", label: "LAUDO GERADO: DOCUMENTO ADULTERADO", progress: 100 },
      ],
      logs: [
        "> activating document backlight scanner...",
        "> spectral reflex examination reveals secondary overlay layer...",
        "> ink formulation analysis: 2 distinct chemical peaks found [T-80 vs PE-12]",
        "> signatures cross-match analyzer: stroke speed is too slow [indicative of tracing]",
        "> FRAUD IDENTIFIED ON VALUE CLAUSE #3 [94.6% confidence]"
      ]
    }
  },
  {
    id: "DOC-2023-11-06",
    label: "Passaporte Consular",
    icon: "🪪",
    image: DOC_PASSPORT_SVG,
    scannerMode: "DOCUMENT",
    data: {
      id: "DOC-2023-11-06",
      title: "HOLOGRAPHIC & WATERMARK VALIDATION — UV MATRIX",
      typeName: "CHANCELA — PASSPORT CONSULAR",
      labTech: "PADRE IGNACIO (PERITO)",
      equipment: "DOC-EXAMINER SPECTRUM-5",
      defaultConfidence: 95.7,
      parameters: [
        { label: "STATUS", value: "APREENDIDO" },
        { label: "MICROGRAVURA UV", value: "MICROGRAVURA FALSA/AUSENTE" },
        { label: "PÁGINA DETALHE", value: "FIBRAS DE ALGODÃO NÃO COERENTES" },
        { label: "NUMERAÇÃO SÉRIE", value: "RE-PREGADA QUIMICAMENTE" },
        { label: "FILTRAÇÃO MARCA", value: "FOTO SUBST. SOB CHAPA" },
      ],
      matches: [
        { name: "PAG-MODELO FALSIFICADO CLASSE C-1", classification: "Fibras sintéticas em papel comum", pct: 95.7 },
        { name: "EMISSOR PASSPORT OFICIAL", classification: "Padrão de Emissão de Segurança", pct: 14.2 },
      ],
      refPoints: [
        { x: 160, y: 140 }, { x: 70, y: 135 }, { x: 140, y: 240 },
      ],
      dimensions: {
        hLine: { x1: 40, y1: 180, x2: 100, y2: 180, label: "Photo gap" },
        vLine: { x1: 160, y1: 128, x2: 160, y2: 152, label: "Defect Zone" },
      },
      stages: [
        { id: "idle", label: "COMPARADOR DE MATRIZ PRONTO", progress: 0 },
        { id: "init", label: "EXCITAÇÃO FLUORESCENTE ATIVA...", progress: 20 },
        { id: "depth", label: "LENDO DENSIDADE DA CELULOSE...", progress: 55 },
        { id: "database", label: "FUSTIGANDO DADOS SÉRIE NO DEPARTAMENTO...", progress: 90 },
        { id: "complete", label: "FALSIFICAÇÃO CONSTATADA", progress: 100 },
      ],
      logs: [
        "> spectrum fibers excitation: FAILED (lack of active security fibers)...",
        "> paper thickness analysis: 130g wood pulp found (original should be 90g cotton paper)...",
        "> passport emission databases checked: Series BR-8430 is registered as void/stolen...",
        "> forgery category confirmed [95.7% accuracy rate]"
      ]
    }
  },

  // ==================== SCANNER DIGITAL ====================
  {
    id: "DP-2023-11-01",
    label: "Impressão Digital Latente",
    icon: "🫵",
    image: FINGERPRINT_SVG,
    scannerMode: "DIGITAL",
    data: {
      id: "DP-2023-11-01",
      title: "MINUTIAE DETECTION — DERMATOGLYPHIC SCAN",
      typeName: "LATENTE — LOOP LATERAL",
      labTech: "J. CHEN",
      equipment: "FIS-SCAN 4000 v3.2",
      defaultConfidence: 98.7,
      parameters: [
        { label: "STATUS", value: "ANALISADO" },
        { label: "ARQUIVO IMAGEM", value: "thumb-ridge-301.png" },
        { label: "VARIAÇÃO GERAL", value: "LOOP INCLINADO (ULNAR)" },
        { label: "MINUTIAE DETECTORS", value: "48 CONTEXTOS" },
        { label: "CONTORNO CORE", value: "COORD [110, 240]" },
        { label: "PONTOS DELTA", value: "PRESENTE (MARCADOR A)" },
        { label: "SUBSTRATO FONTE", value: "VIDRO (DEPOIMENTO)" },
      ],
      matches: [
        { name: "SUSPEITO A — MARCOS SILVA", classification: "Loop Ulnar Esquerdo", pct: 98.7 },
        { name: "SUSPEITO B — LUCA OLIVEIRA", classification: "Whorl Duplo", pct: 54.4 },
        { name: "SUSPEITO C — CARLA SOUZA", classification: "Arco Simples", pct: 31.9 },
      ],
      refPoints: [
        { x: 50, y: 230 }, { x: 170, y: 230 }, { x: 60, y: 230 }, { x: 160, y: 230 },
        { x: 70, y: 230 }, { x: 150, y: 230 }, { x: 80, y: 230 }, { x: 140, y: 230 },
        { x: 90, y: 230 }, { x: 130, y: 230 }, { x: 100, y: 230 }, { x: 120, y: 230 },
        { x: 50, y: 300 }, { x: 80, y: 340 }, { x: 110, y: 380 }, { x: 170, y: 300 },
        { x: 140, y: 340 }, { x: 80, y: 290 }, { x: 110, y: 310 }, { x: 110, y: 340 },
        { x: 110, y: 190 }, { x: 140, y: 275 }
      ],
      dimensions: {
        hLine: { x1: 60, y1: 230, x2: 160, y2: 230, label: "Whorl Span: 22 mm" },
        vLine: { x1: 110, y1: 150, x2: 110, y2: 340, label: "Core Ridge: 32 mm" },
        heelLine: { x1: 90, y1: 190, x2: 140, y2: 275, label: "Delta spacing" }
      },
      stages: [
        { id: "idle", label: "ANALISADOR PRONTO", progress: 0 },
        { id: "init", label: "CONTRASTE DE LUMINOL DIGITAL...", progress: 20 },
        { id: "depth", label: "PROCESSO DE AFINAMENTO DE CRISTAS...", progress: 48 },
        { id: "pattern", label: "DETERMINANDO CLASSIFICAÇÃO...", progress: 70 },
        { id: "reference", label: "MAPEAR ILHAS E BIFURCAÇÕES...", progress: 88 },
        { id: "database", label: "SINC_CORRESPONDÊNCIA CODIS/AFIS...", progress: 96 },
        { id: "complete", label: "RECONHECIMENTO EFETIVADO", progress: 100 },
      ],
      logs: [
        "> boot sequence FIS-SCAN 4000 v3.2",
        "> AFIS biosegmentation module online",
        "> core resolution parameters: 1200 DPI",
        "> BEGIN LATENT RIDGE BIOTRAST...",
        "> running standard binarization algorithms...",
        "> morphological thinning filter triggered: complete",
        "> detecting bifurcation minutiae...",
        "> coordinates mapped: [24 ridge bifurcations, 14 sweat pores]",
        "> database search: IDENTIFICATION CONFIRMED — MARCOS SILVA"
      ]
    }
  },
  {
    id: "DP-2023-11-15",
    label: "Palma de Mão Parcial",
    icon: "✋",
    image: PALMPRINT_SVG,
    scannerMode: "DIGITAL",
    data: {
      id: "DP-2023-11-15",
      title: "PALMAR CREASES FORENSIC MATCHING — INTERDIGITAL LINES",
      typeName: "QUIROSCÓPIA — LINHAS DA PALMA",
      labTech: "J. CHEN",
      equipment: "FIS-SCAN 4000 v3.2",
      defaultConfidence: 92.5,
      parameters: [
        { label: "STATUS", value: "CONCORDANTE" },
        { label: "PONTOS DE FLEXÃO", value: "3 GRANDES LINHAS COGNITIVAS" },
        { label: "CICATRIZES DETECTADAS", value: "COORD [110, 245] CORTE TRANSVERSAL" },
        { label: "DENSIDADE POROS", value: "MODERADA (SÁTIRA DO PORTO)" },
      ],
      matches: [
        { name: "SUSPEITO A — MARCOS SILVA", classification: "Quiroleitor Palmar Esquerdo", pct: 92.5 },
        { name: "SUSPEITO D — ANA MORAIS", classification: "Palma Direita Espelhada", pct: 41.2 },
      ],
      refPoints: [
        { x: 110, y: 245 }, { x: 60, y: 205 }, { x: 160, y: 215 }, { x: 75, y: 170 },
      ],
      dimensions: {
        hLine: { x1: 60, y1: 205, x2: 160, y2: 215, label: "Interdigital width" },
        vLine: { x1: 100, y1: 205, x2: 100, y2: 340, label: "Life Line" },
      },
      stages: [
        { id: "idle", label: "COMPUTO PALMAR PRONTO", progress: 0 },
        { id: "init", label: "MASCARANDO RUÍDO BIOLÓGICO...", progress: 30 },
        { id: "depth", label: "DECODIFICANDO CICATRIZ CONEXÃO...", progress: 65 },
        { id: "database", label: "CRUZAMENTO DE BIOMETRIA PALMAR ESTADUAL...", progress: 90 },
        { id: "complete", label: "ANÁLISE DE PALMA COMPLETA", progress: 100 },
      ],
      logs: [
        "> masking ambient noise...",
        "> isolating major flexion creases...",
        "> palmar scar signature extracted correctly...",
        "> target match detected against archive fingerprint/palm records..."
      ]
    }
  },

  // ==================== SCANNER VÍDEO ====================
  {
    id: "VID-2023-11-20",
    label: "CFTV Corredor Escuro",
    icon: "📹",
    image: VIDEO_CCTV_SVG,
    scannerMode: "VIDEO",
    data: {
      id: "VID-2023-11-20",
      title: "FACIAL RECONSTRUCTION — NOISE DECONVOLUTION VECTORS",
      typeName: "VÍDEO — VETOR DE CAPTURA FACIAL",
      labTech: "SGT. FELIPE SANTOS",
      equipment: "DECONVOLUTION ENGINE v1.0",
      defaultConfidence: 95.8,
      parameters: [
        { label: "STATUS", value: "RECONSTITUÍDO" },
        { label: "CÂMERA DE ORIGEM", value: "DEPARTAMENTO CORREDOR S0" },
        { label: "CÓDIGO DE FRAME", value: "FRAME-SEC-2342" },
        { label: "RESOLUÇÃO ORIGINAL", value: "640x480 PIXELS [BAIXO]" },
        { label: "FILTRAÇÃO RUIDO", value: "APLICADO (TEMPORAL COALESCE)" },
        { label: "VETOR DE DESBLUR", value: "DECONVOLUÇÃO RETRÓGRAVA" },
      ],
      matches: [
        { name: "SUSPEITO C — CARLOS AUGUSTO", classification: "Congruência Facial 12 Pontos", pct: 95.8 },
        { name: "RECONHECIDO NO REPOSITÓRIO", classification: "Ficha F-9032 (Roubo)", pct: 89.2 },
      ],
      refPoints: [
        { x: 95, y: 170 }, { x: 125, y: 170 }, { x: 110, y: 195 }, { x: 110, y: 180 },
      ],
      dimensions: {
        hLine: { x1: 65, y1: 125, x2: 155, y2: 125, label: "Face box: 90px" },
        vLine: { x1: 65, y1: 125, x2: 65, y2: 235, label: "Height: 110px" },
      },
      stages: [
        { id: "idle", label: "DESBLUR VETORIAL PRONTO", progress: 0 },
        { id: "init", label: "INDEXANDO SEQUÊNCIA DE FRAMES DE VÍDEO...", progress: 10 },
        { id: "depth", label: "RESOLVENDO MATRIZ DE BORRAMENTO (BLUR)...", progress: 40 },
        { id: "pattern", label: "INTEGRANDO PIXELS TEMPORAIS (CCTV SUPER-RES)...", progress: 70 },
        { id: "reference", label: "ALINHANDO PONTOS FACIAIS FORENSES...", progress: 88 },
        { id: "database", label: "DILIGÊNCIA NO REGISTRO CRIMINAL POLICIAL...", progress: 95 },
        { id: "complete", label: "DECONVOLUÇÃO VETORIAL EFETIVADA", progress: 100 },
      ],
      logs: [
        "> buffering 42 consecutive frames for temporal super-resolution...",
        "> calculating camera motion vector blur kernel...",
        "> blur matrix inverted successfully -- performing multi-frame deconvolution...",
        "> facial keypoints mapped: eyes, nose apex, chin projection -- OK",
        "> matching against mugshot database...",
        "> SUSPECT MATCH UNCOVERED — REGISTRATION #F-9032 FOUND"
      ]
    }
  },
  {
    id: "VID-2023-11-21",
    label: "Placa Desfocada",
    icon: "🚗",
    image: VIDEO_PLATE_SVG,
    scannerMode: "VIDEO",
    data: {
      id: "VID-2023-11-21",
      title: "LPR SUPER-RESOLUTION — MULTI-FRAME COALESCE",
      typeName: "VÍDEO — RECONSTRUÇÃO ALFANUMÉRICA",
      labTech: "SGT. FELIPE SANTOS",
      equipment: "DECONVOLUTION ENGINE v1.0",
      defaultConfidence: 97.4,
      parameters: [
        { label: "STATUS", value: "CORRESPONDIDO" },
        { label: "FRAME CULT", value: "CÂMERA TRÂNISTO ROD-B" },
        { label: "RECONSTRUÇÃO CARACTERS", value: "BRA2E19 (ESTIMADO)" },
        { label: "PASSES DE DEBLOAT", value: "42 ITERAÇÕES" },
        { label: "MAPA DE INTENSIDADE", value: "COERENTE (97%)" },
      ],
      matches: [
        { name: "RENAULT SANDERO PRATA (BRA2E19)", classification: "Registro Roubo S/A", pct: 97.4 },
        { name: "FORD FOCUS BRANCO (BRA2F10)", classification: "Sem Ocorrência", pct: 51.2 },
      ],
      refPoints: [
        { x: 30, y: 185 }, { x: 190, y: 255 }, { x: 110, y: 232 },
      ],
      dimensions: {
        hLine: { x1: 30, y1: 185, x2: 190, y2: 185, label: "Plate length: 160px" },
        vLine: { x1: 30, y1: 185, x2: 30, y2: 255, label: "Height: 70px" },
      },
      stages: [
        { id: "idle", label: "RECONSTRUTOR ALFANUMÉRICO PRONTO", progress: 0 },
        { id: "init", label: "ISOLANDO RECT DE PLACA DE LICENÇA...", progress: 15 },
        { id: "depth", label: "ALINHANDO COALESCÊNCIA DE TINTA...", progress: 55 },
        { id: "database", label: "CONSULTANDO REGISTRO NACIONAL DE VEÍCULOS...", progress: 92 },
        { id: "complete", label: "PLACA COESAMENTE IDENTIFICADA", progress: 100 },
      ],
      logs: [
        "> crop license plate region of interest...",
        "> resolving camera sweep angles...",
        "> letters binarization and thresholding applied...",
        "> plate match confirmed against national vehicle DMV file"
      ]
    }
  }
];
