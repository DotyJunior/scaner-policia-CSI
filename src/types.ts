/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EvidenceParameter {
  label: string;
  value: string;
}

export interface EvidenceMatch {
  name: string;      // e.g., "TIMBERLAND 6-INCH BOOT" or "SUSPECT A (LOOP)"
  classification: string; // e.g., "Tamanho 42" or "Arco Inclinado"
  pct: number;       // Match confidence percentage, e.g. 96.3
}

export interface EvidenceResultCustom {
  id: string;
  title: string;       // e.g., "SOLED PATTERN RECOGNITION"
  typeName: string;    // e.g., "Pegada de Bota"
  labTech: string;     // e.g., "J. CHEN"
  equipment: string;   // e.g., "FIS-SCAN 4000 v3.2.1"
  parameters: EvidenceParameter[];
  matches: EvidenceMatch[];
  defaultConfidence: number; // base confidence that adjusts with scan intensity
  stages: { id: string; label: string; progress: number }[];
  logs: string[];
  refPoints: { x: number; y: number }[];
  // Dimensions for visual lines overlay on the image canvas (Optional)
  dimensions?: {
    hLine?: { x1: number; y1: number; x2: number; y2: number; label: string };
    vLine?: { x1: number; y1: number; x2: number; y2: number; label: string };
    heelLine?: { x1: number; y1: number; x2: number; y2: number; label: string };
  };
}

export interface EvidenceCard {
  id: string;
  label: string;
  icon?: string;
  image?: string; // SVG or Base64
  scannerMode?: "FOOTPRINT" | "DNA" | "DOCUMENT" | "DIGITAL" | "VIDEO";
  data?: EvidenceResultCustom;
  userId?: string;
}

export interface Suspect {
  name: string;
  role: string;
  avatar: string;
  details: string;
  image?: string;
}

export interface Case {
  id: string;
  name: string;
  code: string;
  description: string;
  difficulty: "Fácil" | "Médio" | "Difícil" | "Expert";
  date: string;
  suspects: Suspect[];
  evidenceIds: string[];
}

