const data = [
  {
      question: "Qual das seguintes atividades econômicas é mais comumente associada ao campo?",
      options: ["Serviços bancários", "Agricultura", "Tecnologia da informação", "Turismo urbano"],
      answer: "Agricultura",
      info: "A agricultura é, atualmente, um importante componente das atividades primárias da economia, com destaque para países subdesenvolvidos e emergentes. O crescimento da mecanização do solo, da biotecnologia e do investimento de capitais aumentou progressivamente a capacidade de plantio e colheita de alimentos, mas resultou em impactos ambientais significativos. https://mundoeducacao.uol.com.br/geografia/agricultura.htm, mundo educação, Agricultura",
  },
  {
      question: "A urbanização pode ser descrita como:",
      options: ["A migração de pessoas do campo para a cidade", "O aumento de áreas rurais", "A criação de parques industriais no campo", "O desenvolvimento de tecnologias agrícolas"],
      answer: "A migração de pessoas do campo para a cidade",
      info: "A urbanização é o processo de transformação de uma sociedade, região ou território de rural para urbano, ou seja, não representa somente o crescimento da população das cidades, mas o aumento dessa em relação aos habitantes do campo. Portanto, quando a população urbana de um determinado local cresce em número maior que a do campo, dizemos que está ocorrendo um processo de urbanização. https://brasilescola.uol.com.br/o-que-e/geografia/o-que-e-urbanizacao.htm#:~:text=A%20urbaniza%C3%A7%C3%A3o%20%C3%A9%20o%20processo,rela%C3%A7%C3%A3o%20aos%20habitantes%20do%20campo., Brasil escola, O que é urbanização?",
  },
  {
      question: "Qual das seguintes atividades é uma característica típica da economia urbana?",
      options: ["Pecuária", "Plantação de grãos", "Comércio e serviços", "Silvicultura"],
      answer: "Comércio e serviços",
      info: "A economia e o tipo de trabalho no espaço urbano podem variar muito de acordo com a cidade e o país em questão. Geralmente, em áreas urbanas há uma maior concentração de atividades econômicas ligadas ao setor de serviços, como comércio, turismo, educação e saúde. No entanto, também é possível encontrar indústrias e empresas de tecnologia em algumas cidades. Além disso, o tipo de trabalho pode variar de acordo com a qualificação dos trabalhadores e a demanda do mercado de trabalho. Vale ressaltar que essas características podem ser influenciadas por fatores como a política econômica do governo, a infraestrutura da cidade e a cultura local. https://brasilescola.uol.com.br/tire-duvidas/a-economia-e-tipo-de-trabalho-no-espaco-urbano/311591.html, Brasil escola, Duvida - A economia e tipo de trabalho no espaço urbano",
  },
  {
      question: "O êxodo rural refere-se a:",
      options: ["A migração de pessoas da cidade para o campo", "A saída de pessoas do campo para as cidades", "O aumento da população rural", "O desenvolvimento de novas tecnologias no campo"],
      answer: "A saída de pessoas do campo para as cidades",
      info: "O êxodo rural é um processo de migração das pessoas do campo em direção às cidades, necessariamente neste sentido. A ida de um grande número de pessoas das áreas rurais em direção aos centros urbanos pode acontecer de forma espontânea ou forçada, assim como qualquer migração. https://www.politize.com.br/exodo-rural/#:~:text=O%20%C3%AAxodo%20rural%20%C3%A9%20um%20processo%20de%20migra%C3%A7%C3%A3o%20das%20pessoas,for%C3%A7ada%2C%20assim%20como%20qualquer%20migra%C3%A7%C3%A3o., Politize, Êxodo rural: o que é, o que causa e quais as consequências?",
  },
  {
      question: "Uma das principais causas da migração do campo para a cidade é:",
      options: ["Aumento da produção agrícola", "Melhores oportunidades de emprego na cidade", "Expansão das áreas de cultivo", "Aumento da vida selvagem no campo"],
      answer: "Melhores oportunidades de emprego na cidade",
      info: "Muitas causas podem ser associadas a ele, como a modernização da produção agrícola, a concentração fundiária, a busca por melhores condições de vida e melhores empregos, entre outros fatores. Entre as suas consequências estão o esvaziamento das zonas rurais e o crescimento desordenado das cidades. https://brasilescola.uol.com.br/geografia/exodo-rural.htm, Brasil escola, Êxodo rural"
  },
  {
      question: "A atividade econômica predominante nas áreas urbanas geralmente inclui:",
      options: ["Agricultura", "Mineração", "Indústria e serviços", "Pesca"],
      answer: "Indústria e serviços",
      info: "Na área urbana, podemos observar a presença das seguintes atividades econômicas: indústria - ocorre a transformação de matérias-primas em bens de consumo duráveis e não duráveis. comércio- ocorre a venda de bens de consumo. serviços- os profissionais fazem a venda da mão-de-obra para realizar um trabalho. https://brainly.com.br/tarefa/11632746, brainly, quais atividades econômicas predominam a área urbana e área rural e quais são os principais produtos desenvolvidos nessas atividades",
  },
  {
      question: "A industrialização nas cidades trouxe qual dos seguintes impactos para o campo?",
      options: ["Aumento da população rural", "Diminuição da produção agrícola", "Mecanização das atividades agrícolas", "Redução do uso de fertilizantes"],
      answer: "Mecanização das atividades agrícolas",
      info: "No meio rural, o processo de industrialização interfere com a produção e inserção de modernos maquinários no sistema produtivo, como tratores, colheitadeiras, semeadeiras e outros. Dessa forma, boa parte da mão de obra anteriormente empregada é substituída por máquinas e técnicos qualificados em operá-las. https://mundoeducacao.uol.com.br/geografia/industrializacao-urbanizacao.htm#:~:text=No%20meio%20rural%2C%20o%20processo,t%C3%A9cnicos%20qualificados%20em%20oper%C3%A1%2Dlas., Mundo educação, Industrialização e urbanização",
  },
  {
      question: "A agricultura de subsistência é mais comum:",
      options: ["Nas áreas urbanas", "Nos subúrbios", "Nas áreas rurais", "Nas zonas industriais"],
      answer: "Nas áreas rurais",
      info: "O cultivo de subsistência, a despeito das muitas dificuldades que enfrenta, ainda é uma parte importante da cadeia produtiva no Brasil. Segundo o Ministério da Agricultura, Pecuária e Abastecimento (MAPA), nada menos que 70% dos empregos nas áreas rurais são gerados por essa modalidade agrícola. https://fia.com.br/blog/agricultura-de-subsistencia/#:~:text=O%20cultivo%20de%20subsist%C3%AAncia%2C%20a,gerados%20por%20essa%20modalidade%20agr%C3%ADcola., Fia, Agricultura de subsistência: entenda o que é, como funciona e desafios",
  },
  {
      question: "Qual das seguintes opções é um exemplo de desenvolvimento sustentável no campo?",
      options: ["Expansão da monocultura", "Uso de pesticidas em larga escala", "Agricultura orgânica", "Construção de arranha-céus"],
      answer: "Agricultura orgânica",
      info: "A agricultura orgânica é um movimento de cultivo de alimentos que busca reduzir os impactos ambientais ao solo e aos lençóis freáticos provocados por métodos convencionais que usam pesticidas e fertilizantes. Além disso, há uma preocupação com a redução de elementos nocivos que podem chegar à mesa do consumidor. Esse movimento preza pela manutenção e pelo direito de acesso às sementes, que, em muitos casos, acabam sendo modificadas geneticamente e se tornam monopólio de grandes empresas.  https://agro.estadao.com.br/summit-agro/o-que-define-a-agricultura-organica, Agro estadão, Agricultura orgânica: o que é e características",
  },
  {
      question: "A economia das áreas rurais muitas vezes depende de:",
      options: ["Exportação de serviços financeiros", "Produção agrícola e pecuária", "Tecnologia da informação", "Indústria de manufatura"],
      answer: "Produção agrícola e pecuária",
      info: "A zona rural é composta por florestas, pastagens e outras formas de uso da terra. As pessoas que habitam essas áreas geralmente vivem em pequenos grupos, com uma economia baseada na agricultura, pecuária, mineração, pesca e outras atividades relacionadas à terra. https://www.todamateria.com.br/zona-rural-e-zona-urbana/#:~:text=A%20zona%20rural%20%C3%A9%20composta,outras%20atividades%20relacionadas%20%C3%A0%20terra., Toda a Matéria, Zona Rural e Zona Urbana",
  },
  {
      question: "O termo cinturão verde refere-se a:",
      options: ["Área industrial dentro da cidade", "Zona urbana sem vegetação", "Área rural ao redor da cidade para proteger o meio ambiente", "Rede de transporte urbano"],
      answer: "Área rural ao redor da cidade para proteger o meio ambiente",
      info: "Cinturão verde é uma área verde que pode ser composta por parques, chácaras, reservas ambientais, jardins ou pomares localizados ao redor de uma cidade (na área periférica). https://www.suapesquisa.com/ecologiasaude/cinturao_verde.htm, Sua pesquisa, Cinturão Verde",
  },
  {
      question: "Qual é uma vantagem da vida no campo em comparação à vida na cidade?",
      options: ["Maior oferta de emprego", "Melhor acesso à educação superior", "Ar mais limpo e menos poluição", "Maior diversidade de opções culturais"],
      answer: "Ar mais limpo e menos poluição",
      info: "Viver no campo oferece uma fuga da agitação urbana, proporcionando uma atmosfera de tranquilidade e paz. O contato diário com a natureza é uma das maiores vantagens, permitindo respirar ar puro, desfrutar de paisagens deslumbrantes e estar em sintonia com ciclos naturais. E também a qualidade maior de saúde, já que estará longe das poluições da cidade. https://forummulheresemdestaque.com.br/vida-no-campo-ou-na-cidade-qual-a-melhor-escolha/#:~:text=Viver%20no%20campo%20oferece%20uma,em%20sintonia%20com%20ciclos%20naturais., Forum mulheres em destaque, Vida no campo ou na cidade: qual a melhor escolha",
  },
  {
      question: "A urbanização pode levar a qual dos seguintes problemas nas cidades?",
      options: ["Aumento da biodiversidade", "Desemprego crescente", "Congestionamento de trânsito", "Melhoria da qualidade do ar"],
      answer: "Congestionamento de trânsito",
      info: "A urbanização desordenada, que pega os municípios despreparados para atender às necessidades básicas dos migrantes, causa uma série de problemas sociais e ambientais. Dentre eles destacam-se o desemprego, a criminalidade, a favelização, a poluição do ar e da água, e também maiores congestionamentos nos trânsitos. https://educacao.uol.com.br/disciplinas/geografia/urbanizacao-do-brasil-consequencias-e-caracteristicas-das-cidades.htm#:~:text=A%20urbaniza%C3%A7%C3%A3o%20desordenada%2C%20que%20pega,do%20ar%20e%20da%20%C3%A1gua'., Educação.UOL, Urbanização do Brasil - Consequências e características das cidades",
  },
  {
      question: "As zonas rurais são frequentemente caracterizadas por:",
      options: [" Alta densidade populacional", "Infraestrutura avançada", "Espaço aberto e menor densidade populacional", " Grande quantidade de edifícios altos"],
      answer: "Espaço aberto e menor densidade populacional",
      info: "As zonas rurais são caracterizadas por uma série de elementos distintivos, como a presença de fazendas, sítios e chácaras, onde são realizadas atividades agrícolas e pecuárias. Além disso, essas áreas costumam contar com uma infraestrutura básica, como estradas de terra, poços artesianos e redes de eletricidade. https://sensisaude.com.br/glossario/o-que-e-zona-rural-2/#:~:text=As%20zonas%20rurais%20s%C3%A3o%20caracterizadas,artesianos%20e%20redes%20de%20eletricidade., Sensi saúde, O que é: Zona rural",
  },
  {
      question: "Uma das principais fontes de renda no campo é:",
      options: ["Tecnologia da informação", "Serviços financeiros", "Agricultura e pecuária", "Turismo urbano"],
      answer: "Agricultura e pecuária",
      info: "O que mais dá dinheiro na zona rural? Os pequenos negócios rurais mais comuns são a pecuária e a agricultura. No entanto, existem várias outras opções para ganhar dinheiro no agronegócio. Você precisará possuir uma propriedade rural e estar disposto a converter sua terra em uma fonte de renda. Cerca de 2 hectares de terreno estão prontos para começar. https://www.portalinsights.com.br/perguntas-frequentes/como-ganhar-dinheiro-na-zona-rural, Portal insights, Como ganhar dinheiro na zona rural?",
  },
  {
      question: "A industrialização das cidades influencia as áreas rurais de que maneira?",
      options: ["Incentivando a migração de volta ao campo", "Aumentando a necessidade de produção agrícola", "Reduzindo a demanda por produtos agrícolas", "Melhorando as infraestruturas rurais imediatamente"],
      answer: "Aumentando a necessidade de produção agrícola",
      info: "A industrialização intensifica a urbanização das sociedades e gera condições para o êxodo rural, que é a migração em massa da população do campo para as cidades, pois atrai essa migração justamente para as áreas mais industrializadas, onde há mais empregos direta e indiretamente produzidos pelas indústrias. E por almentar a população nas cidades, acaba sendo necessario um aumento a necessidade de produção agrícola, para suprir as necessidades do povo. https://dpid.cidadaopg.sp.gov.br/pde/arquivos/1627218487388~5%C2%BAano%20-%20Geografia%20v.02%20-%20semanas%2021%20e%2022.pdf, CidadãoPG, Relação entre urbanização, industrialização e êxodo rural",
  },
  {
      question: "O turismo rural pode ser definido como:",
      options: ["Visitar parques urbanos", "Turismo em áreas rurais, explorando a natureza e as tradições locais", "Participação em conferências nas cidades", "Visitação a indústrias agrícolas"],
      answer: "Turismo em áreas rurais, explorando a natureza e as tradições locais",
      info: "O Turismo Rural, além do comprometimento com as atividades agropecuárias, caracteriza-se pela valorização do patrimônio cultural e natural como elementos da oferta turística. https://www.gov.br/turismo/pt-br/centrais-de-conteudo-/publicacoes/segmentacao-do-turismo/turismo-rural-orientacoes-basicas.pdf, GOV.BR, Turismo Rural: Orientações Básicas - Governo Federal",
  },
  {
      question: "Uma diferença entre o mercado de trabalho no campo e na cidade é:",
      options: ["Maior demanda por serviços financeiros no campo", "Maior oferta de empregos na indústria na cidade", "Predominância da agricultura no mercado de trabalho urbano", "Maior número de empregos no setor de tecnologia no campo"],
      answer: "Maior oferta de empregos na indústria na cidade",
      info: "O mercado de trabalho na cidade é mais diversificado em comparação aos trabalhos disponíveis no campo, logo, há mais ofertas de emprego disponíveis na indústria. Na cidade os trabalhos são oferecidos em sua maioria no setor de serviços que se refere às prestações de serviço e comércio. O ambiente da cidade também se destaca pelas áreas de trabalho no setor industrial. https://sme.goiania.go.gov.br/conexaoescola/ensino_fundamental/geografia-o-trabalho-no-campo-e-na-cidade/#:~:text=O%20mercado%20de%20trabalho%20na,de%20trabalho%20no%20setor%20industrial. Sme.goiania.go, Geografia: O trabalho no campo e na cidade",
  },
  {
      question: "Qual das seguintes é uma estratégia para melhorar a qualidade de vida no campo?",
      options: ["Aumento da urbanização", "Desenvolvimento de infraestrutura básica como saneamento e educação", "Deslocamento de indústrias urbanas para o campo", "Redução da produção agrícola"],
      answer: "Desenvolvimento de infraestrutura básica como saneamento e educação",
      info: "O saneamento básico contribui com a saúde, a educação, o meio ambiente e a economia. A modernização e ampliação do sistema de saneamento básico beneficia, em qualquer lugar do mundo, a sociedade como um todo: as empresas, o país, as cidades e o desenvolvimento social e econômico. https://www.portaldaindustria.com.br/industria-de-a-z/saneamento-basico/#:~:text=O%20saneamento%20b%C3%A1sico%20contribui%20com,o%20desenvolvimento%20social%20e%20econ%C3%B4mico., Portal da industria, Entenda a realidade do saneamento básico no Brasil",
  },
  {
      question: "A relação entre campo e cidade pode ser descrita como:",
      options: ["Independente, sem influência mútua", "Simbiótica, com influências mútuas significativas", "Competitiva, com um sempre tentando superar o outro", "Desconectada, sem nenhuma interação econômica ou social"],
      answer: "Simbiótica, com influências mútuas significativas",
      info: "O campo e a cidade fazem parte de uma relação de dependência mútua porque ambos necessitam um do outro. Enquanto a cidade necessita dos produtos primários provenientes do campo, o campo necessita dos produtos secundários e terciários provenientes da cidade. Por exemplo: a cidade necessita das frutas produzidas no campo, enquanto este necessita dos produtos industrializados da cidade. https://brainly.com.br/tarefa/6262393, brainly, Justifique a afirmativa: “Campo e cidade, uma relação de dependência mútua”.",
  },
];

export default data;