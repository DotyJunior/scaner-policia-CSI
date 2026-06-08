/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Case } from "./types";

export const PREBUILT_CASES: Case[] = [
  {
    id: "caso_01",
    name: "Assalto à Joalheria Diamante",
    code: "CSI-2026-01",
    description: "Um colar de diamante de valor inestimável foi subtraído da vitrine principal. Três itens suspeitos foram coletados no local: uma pegada na argila externa, um bulbo capilar nas grades de segurança e uma marca digital latente no vidro. Descubra quem é o verdadeiro ladrão.",
    difficulty: "Fácil",
    date: "08/06/2026",
    suspects: [
      {
        name: "Marcos Silva",
        role: "Contador (Suspeito A)",
        avatar: "👨‍💼",
        details: "Apresenta dívidas acumuladas. Ausentou-se do escritório durante a hora estimada da quebra comercial."
      },
      {
        name: "Luca Oliveira",
        role: "Zelador Noturno (Suspeito B)",
        avatar: "👨‍🔧",
        details: "Estava encarregado da chave reserva de acesso, alegando tê-la deixado na gaveta central."
      },
      {
        name: "Carla Souza",
        role: "Ex-Segurança (Suspeito C)",
        avatar: "👩‍💼",
        details: "Dispensada recentemente por conduta duvidosa. Conhece perfeitamente os pontos cegos das câmeras."
      }
    ],
    evidenceIds: ["FP-2023-10-25", "DNA-2023-10-26", "DP-2023-11-01"]
  },
  {
    id: "caso_02",
    name: "Intriga no Consulado Diplomático",
    code: "CSI-2026-02",
    description: "Um escândalo político estourou no consulado com o vazamento de laudos de imigração adulterados. Uma sapatilha de jogging esportiva deixou pegadas no carpete químico. Um passaporte consular falsificado foi interceptado, além de uma fita de CFTV em ângulo de baixa luz e análises de secreção biológica.",
    difficulty: "Médio",
    date: "08/06/2026",
    suspects: [
      {
        name: "Lucia Campos",
        role: "Vice-Consulesa",
        avatar: "👩‍💼",
        details: "A assinatura dela aparece em documentos re-pregados quimicamente sob luz ultravioleta profunda."
      },
      {
        name: "Rogério Dias",
        role: "Adido Comercial",
        avatar: "👨‍💼",
        details: "Frequência de alelos compatível com as secreções biológicas residuais descobertas na área de arquivos."
      },
      {
        name: "Carlos Augusto",
        role: "Segurança Particular",
        avatar: "👮",
        details: "Ficha criminal histórica encontrada no AFIS/Mugshot corporativo. Flagrado no CFTV do corredor escuro."
      }
    ],
    evidenceIds: ["FP-2023-11-12", "DNA-2023-10-27", "DOC-2023-11-06", "VID-2023-11-20"]
  },
  {
    id: "caso_03",
    name: "A Fraude Corporal S/A",
    code: "CSI-2026-03",
    description: "Um desvio de 12 milhões de reais foi descobeto após a falsificação de um contrato particular de responsabilidade limitada. O autor tentou apagar seus rastros, mas marcas palmares parciais foram reveladas por radiação térmica e luz fluorescente. Uma placa veicular em fuga de trânsito também foi recuperada.",
    difficulty: "Difícil",
    date: "08/06/2026",
    suspects: [
      {
        name: "Carlos Marcondes",
        role: "Sócio Majoritário",
        avatar: "👨‍💼",
        details: "Assinatura grafoscópica sob forte pressão física anormal e formulação de tinta adulterada com o valor original."
      },
      {
        name: "Ana Morais",
        role: "Diretora de Operações",
        avatar: "👩‍💼",
        details: "Dona de um Renault Sandero Prata registrado em seu nome. Quiroscopia palmar compatível."
      },
      {
        name: "Felipe Santos",
        role: "Gerente de TI",
        avatar: "👨‍💻",
        details: "Responsável técnico pela rede local. Apresentou comportamento suspeito de esvaziamento de dados."
      }
    ],
    evidenceIds: ["DOC-2023-11-05", "DP-2023-11-15", "VID-2023-11-21"]
  }
];
