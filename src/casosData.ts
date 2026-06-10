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
        details: "Ex-funcionário do galpão investigado.",
        image: "/CASOS/caso_01_narcoticos/suspeitos/Suspeito_01/suspeito_01_foto_frente.png",
        fullName: "Marcos Vinícius Almeida",
        gender: "Masculino",
        age: "38 anos",
        weight: "91 kg",
        occupation: "Operador de Empilhadeira",
        status: "Desaparecido",
        criminalId: "BR-INV-0837",
        height: "1,82 m",
        riskLevel: "Médio",
        investigationStatus: "Principal Suspeito",
        shoeSize: "43",
        notes: "Ex-funcionário do galpão investigado.",
        registrationDate: "14/08/2025",
        lastUpdate: "03/09/2025",
        physicalTraits: "- Cabelos: Pretos, curtos\n- Olhos: Castanhos escuros\n- Pele: Morena\n- Barba: Curta aparada\n- Porte Físico: Robusto\n- Cicatrizes: Pequena cicatriz na mão direita\n- Tatuagens: Não identificadas\n- Observação Física: Condizente com atividade operacional em ambiente industrial"
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
        shoeSize: "41",
        notes: "Presente nas proximidades do local investigado, porém sem evidências forenses conclusivas de participação direta.",
        registrationDate: "15/08/2025",
        lastUpdate: "04/09/2025",
        physicalTraits: "- Cabelos: Castanho-escuros, corte militar\n- Olhos: Castanhos\n- Pele: Morena clara\n- Barba: Curta aparada\n- Porte Físico: Robusto\n- Cicatrizes: Pequena cicatriz acima da sobrancelha esquerda\n- Tatuagens: Não identificadas\n- Observação Física: Usa óculos ocasionalmente"
      },
      {
        name: "André Luiz Carvalho",
        role: "Suspeito 03",
        avatar: "👤",
        details: "Testemunha Importante: Técnico de Manutenção Industrial presente em área próxima ao incidente devido às suas funções profissionais. Nenhuma evidência direta encontrada até o momento.",
        image: "/CASOS/caso_01_narcoticos/suspeitos/Suspeito_03/suspeito_03_foto_frente.png",
        fullName: "André Luiz Carvalho",
        gender: "Masculino",
        age: "29 anos",
        weight: "73 kg",
        occupation: "Técnico de Manutenção Industrial",
        status: "Localizado e entrevistado",
        criminalId: "BR-INV-0851",
        height: "1,74 m",
        riskLevel: "Baixo",
        investigationStatus: "Testemunha Vinculada ao Caso",
        shoeSize: "41",
        notes: "Último Paradeiro Conhecido:\n- Local: Setor de manutenção elétrica do complexo industrial\n- Data: Dia do incidente\n- Horário: 21:47\n- Fonte: Registro eletrônico de acesso\n\nRelação com o Caso:\n- Responsável por manutenção preventiva em equipamentos do galpão\n- Possui autorização de acesso a áreas técnicas\n- Conhece a disposição interna do prédio\n- Declarou não ter visto movimentação suspeita\n- Foi uma das últimas pessoas registradas no setor antes do incidente\n\nClassificação Forense:\n- Categoria: Testemunha Importante\n- Prioridade da Investigação: Média\n- Envolvimento Confirmado: Não\n- Observação: Presente em área próxima ao incidente devido às suas funções profissionais. Nenhuma evidência direta encontrada até o momento.",
        registrationDate: "14/08/2025",
        lastUpdate: "03/09/2025",
        physicalTraits: "- Cabelos: Castanho-claro\n- Corte de Cabelo: Curto e alinhado\n- Olhos: Verdes\n- Pele: Clara\n- Barba: Sem barba\n- Porte Físico: Magro\n- Acessórios: Relógio digital preto\n- Marcas Particulares: Tatuagem discreta no antebraço direito"
      },
      {
        name: "Eduardo Henrique Batista",
        role: "Suspeito 04",
        avatar: "👤",
        details: "Supervisor de Logística localizado e sob monitoramento. Pessoa de Interesse no caso.",
        image: "/CASOS/caso_01_narcoticos/suspeitos/Suspeito_04/suspeito_04_foto_frente.png",
        fullName: "Eduardo Henrique Batista",
        gender: "Masculino",
        age: "35 anos",
        weight: "88 kg",
        occupation: "Supervisor de Logística",
        status: "Localizado e sob monitoramento",
        criminalId: "BR-INV-0863",
        height: "1,80 m",
        riskLevel: "Médio",
        investigationStatus: "Pessoa de Interesse",
        shoeSize: "42",
        notes: "Apresentou correspondência parcial/inconclusiva nas impressões digitais. Cadastro estadual BR-INV-0863.",
        registrationDate: "14/08/2025",
        lastUpdate: "09/03/2025",
        physicalTraits: "- Cabelos: Pretos, corte social curto\n- Olhos: Castanho-escuros\n- Pele: Morena\n- Barba: Curta, bem aparada\n- Porte Físico: Forte\n- Acessórios: Relógio metálico prateado, cordão fino dourado (conforme visível na foto de identificação)\n- Marcas Particulares: Pequena cicatriz na mão esquerda"
      },
      {
        name: "Carlos Roberto Nogueira",
        role: "Suspeito 05",
        avatar: "👤",
        details: "Motorista de Transporte de Cargas localizado e entrevistado. Pessoa de Interesse no caso.",
        image: "/CASOS/caso_01_narcoticos/suspeitos/Suspeito_05/suspeito_05_foto_frente.png",
        fullName: "Carlos Roberto Nogueira",
        gender: "Masculino",
        age: "51 anos",
        weight: "96 kg",
        occupation: "Motorista de Transporte de Cargas",
        status: "Localizado e entrevistado",
        criminalId: "BR-INV-0874",
        height: "1,78 m",
        riskLevel: "Baixo",
        investigationStatus: "Pessoa de Interesse",
        shoeSize: "44",
        notes: "Registros sob suspeita de envolvimento na logística do galpão.",
        registrationDate: "14/08/2025",
        lastUpdate: "09/03/2025",
        physicalTraits: "- Cabelos: Grisalhos escuros, corte curto tradicional\n- Olhos: Castanho-claros\n- Pele: Morena clara\n- Bigode: Discreto\n- Porte Físico: Robusto\n- Acessórios: Aliança de casamento\n- Marcas Particulares: Pequena cicatriz abaixo do queixo"
      }
    ],
    evidenceIds: ["DIG-001"]
  }
];
