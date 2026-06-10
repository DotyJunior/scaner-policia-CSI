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
        details: "Apresenta dívidas acumuladas. Ausentou-se do escritório durante a hora estimada da quebra comercial.",
        fullName: "Marcos Silva",
        gender: "Masculino",
        age: "42 Anos",
        weight: "76 kg",
        occupation: "Contador",
        status: "Localizado - em prisão preventiva"
      },
      {
        name: "Luca Oliveira",
        role: "Zelador Noturno (Suspeito B)",
        avatar: "👨‍🔧",
        details: "Estava encarregado da chave reserva de acesso, alegando tê-la deixado na gaveta central.",
        fullName: "Luca Oliveira",
        gender: "Masculino",
        age: "31 Anos",
        weight: "72 kg",
        occupation: "Zelador Noturno",
        status: "Localizado - prestando depoimento"
      },
      {
        name: "Carla Souza",
        role: "Ex-Segurança (Suspeito C)",
        avatar: "👩‍💼",
        details: "Dispensada recentemente por conduta duvidosa. Conhece perfeitamente os pontos cegos das câmeras.",
        fullName: "Carla Souza",
        gender: "Feminino",
        age: "28 Anos",
        weight: "64 kg",
        occupation: "Segurança Particular",
        status: "Foragida - Mandado de busca em andamento"
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
        details: "A assinatura dela aparece em documentos re-pregados quimicamente sob luz ultravioleta profunda.",
        fullName: "Lucia Campos",
        gender: "Feminino",
        age: "39 Anos",
        weight: "58 kg",
        occupation: "Vice-Consulesa",
        status: "Afastada do cargo - sob vigilância administrativa"
      },
      {
        name: "Rogério Dias",
        role: "Adido Comercial",
        avatar: "👨‍💼",
        details: "Frequência de alelos compatível com as secreções biológicas residuais descobertas na área de arquivos.",
        fullName: "Rogério Dias",
        gender: "Masculino",
        age: "47 Anos",
        weight: "85 kg",
        occupation: "Adido Comercial",
        status: "Investigado - proibido de deixar o território nacional"
      },
      {
        name: "Carlos Augusto",
        role: "Segurança Particular",
        avatar: "👮",
        details: "Ficha criminal histórica encontrada no AFIS/Mugshot corporativo. Flagrado no CFTV do corredor escuro.",
        fullName: "Carlos Augusto",
        gender: "Masculino",
        age: "45 Anos",
        weight: "95 kg",
        occupation: "Segurança do Consulado",
        status: "Preso - custodiado aguardando julgamento"
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
        details: "Assinatura grafoscópica sob forte pressão física anormal e formulação de tinta adulterada com o valor original.",
        fullName: "Carlos Marcondes",
        gender: "Masculino",
        age: "55 Anos",
        weight: "88 kg",
        occupation: "Empresário / Diretor Sócio",
        status: "Foragido internacional - Alerta de difusão vermelha da Interpol"
      },
      {
        name: "Ana Morais",
        role: "Diretora de Operações",
        avatar: "👩‍💼",
        details: "Dona de um Renault Sandero Prata registrado em seu nome. Quiroscopia palmar compatível.",
        fullName: "Ana Morais",
        gender: "Feminino",
        age: "34 Anos",
        weight: "61 kg",
        occupation: "Diretora de Operações",
        status: "Indiciada - sob liberdade vigiada assistida"
      },
      {
        name: "Felipe Santos",
        role: "Gerente de TI",
        avatar: "👨‍💻",
        details: "Responsável técnico pela rede local. Apresentou comportamento suspeito de esvaziamento de dados.",
        fullName: "Felipe Santos",
        gender: "Masculino",
        age: "27 Anos",
        weight: "70 kg",
        occupation: "Gerente de TI",
        status: "Sob investigação preventiva policial"
      }
    ],
    evidenceIds: ["DOC-2023-11-05", "DP-2023-11-15", "VID-2023-11-21"]
  },
  {
    id: "caso_01_narcoticos",
    name: "Caso 01 - Operação Narcóticos",
    code: "CSI-2026-04",
    description: "Investigação de tráfico de entorpecentes em um galpão industrial abandonado. Múltiplas evidências digitais, genéticas, documentais e físicas foram coletadas no local. Seu objetivo é cruzar as análises forenses para identificar os envolvidos no esquema.",
    difficulty: "Difícil",
    date: "10/06/2026",
    suspects: [
      {
        name: "Marcos Vinícius Almeida",
        role: "Suspeito 01",
        avatar: "👤",
        details: "Impressões digitais encontradas nas superfícies do galpão (digital_01.png). Cadastro estadual BR-INV-0837.",
        image: "/CASOS/caso_01_narcoticos/suspeitos/Suspeito_01/suspeito_01_foto_frente.png",
        fullName: "Marcos Vinícius Almeida",
        gender: "Masculino",
        age: "35 Anos",
        weight: "78 kg",
        occupation: "Operador de Empilhadeira / Logística",
        status: "Foragido - Mandado de prisão preventiva emitido"
      },
      {
        name: "Ricardo Mendes Ferreira",
        role: "Suspeito 02",
        avatar: "👤",
        details: "Presente nas proximidades do local investigado, porém sem evidências forenses conclusivas de participação direta.",
        image: "/CASOS/caso_01_narcoticos/suspeitos/Suspeito_02/foto_Frente.png",
        fullName: "Ricardo Mendes Ferreira",
        gender: "Masculino",
        age: "44 anos",
        weight: "84 kg",
        occupation: "Vigilante Noturno Terceirizado",
        status: "Localizado e cooperando com a investigação",
        criminalId: "BR-INV-0842",
        height: "1.76 m",
        riskLevel: "Baixo",
        investigationStatus: "Pessoa de Interesse",
        physicalTraits: "- Cabelos castanho-escuros\n- Corte militar\n- Olhos castanhos\n- Barba curta aparada\n- Pele morena clara\n- Pequena cicatriz acima da sobrancelha esquerda\n- Usa óculos ocasionalmente\n- Porte físico robusto",
        notes: "Presente nas proximidades do local investigado, porém sem evidências forenses conclusivas de participação direta."
      },
      {
        name: "Suspeito 03",
        role: "Suspeito 03",
        avatar: "👤",
        details: "Membro citado nas investigações de campo do galpão industrial.",
        image: "/CASOS/caso_01_narcoticos/suspeitos/Suspeito_03/suspeito_03_foto_frente.png",
        fullName: "Juliano Santos Cruz",
        gender: "Masculino",
        age: "29 Anos",
        weight: "75 kg",
        occupation: "Eletricista Autônomo / Auxiliar Geral",
        status: "Identificado nas imediações, sob monitoramento"
      },
      {
        name: "Eduardo Henrique Batista",
        role: "Suspeito 04",
        avatar: "👤",
        details: "Apresentou correspondência parcial/inconclusiva nas impressões digitais. Cadastro estadual BR-INV-0863.",
        image: "/CASOS/caso_01_narcoticos/suspeitos/Suspeito_04/suspeito_04_foto_frente.png",
        fullName: "Eduardo Henrique Batista",
        gender: "Masculino",
        age: "32 Anos",
        weight: "80 kg",
        occupation: "Químico Industrial Deslicenciado",
        status: "Intimado para prestar esclarecimentos formais"
      },
      {
        name: "Suspeito 05",
        role: "Suspeito 05",
        avatar: "👤",
        details: "Registros sob suspeita de envolvimento na logística do galpão.",
        image: "/CASOS/caso_01_narcoticos/suspeitos/Suspeito_05/suspeito_05_foto_frente.png",
        fullName: "Renato Peixoto Silveira",
        gender: "Masculino",
        age: "51 Anos",
        weight: "92 kg",
        occupation: "Motorista de Caminhão de Carga",
        status: "Sob suspeita de facilitação e transporte logístico"
      }
    ],
    evidenceIds: ["DIG-001"]
  }
];
