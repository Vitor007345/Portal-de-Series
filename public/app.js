const dados = [
    {
        "id": 1,
        "titulo": "O Poderoso Chefão",
        "class": "filme", //filme ou série
        "imgPrinciapl": "imgs/filmes/banners/godfather.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/godfather/godfatherImg1.jpg",
                "descricao": "Don Vito Corleone está em sua sala, vestindo um smoking com uma flor vermelha na lapela, durante o casamento de sua filha. A cena mostra ele ouvindo calmamente os pedidos de favores, reforçando seu papel como o chefão respeitado e temido da família Corleone."
            },
            {
                "id": 2,
                "src": "imgs/filmes/godfather/godfatherImg2.jpg",
                "descricao": "Michael Corleone aparece elegantemente vestido em uma ópera ao lado de Kay Adams. A cena transmite um clima sofisticado, mas com tensão emocional, refletindo a tentativa de reaproximação com Kay e sua luta interna por redenção."
            },
            {
                "id": 3,
                "src": "imgs/filmes/godfather/godfatherImg2.jpg",
                "descricao": "Michael está sentado em uma cadeira imponente durante uma reunião formal, com expressão séria e postura reservada. A imagem reflete seu cansaço, o peso da liderança e a dificuldade de se afastar do passado criminoso que ele próprio construiu."
            }
        ],
        "sinopse": "A história mostra a ascensão de Michael Corleone ao comando da máfia após um ataque ao seu pai, Don Vito. O filme explora poder, lealdade e corrupção, sendo um marco do cinema.",
        "categoria": ["Drama", "Crime"],
        "diretor": "Francis Ford Coppola",
        "data": "1972-03-24",
        "trailer": "https://www.youtube.com/watch?v=UaVTIH8mujA",
        "avaliacao": 4.2
    },
    {
        "id": 2,
        "titulo": "Matrix",
        "class": "filme", //filme ou série
        "imgPrinciapl": "imgs/filmes/banners/matrix.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/matrix/matrixImg1.jpg",
                "descricao": "Duas mãos estendidas mostram uma cápsula vermelha e uma azul, representando a escolha de Neo entre continuar vivendo na ilusão da Matrix ou despertar para a realidade. Essa imagem é uma das mais icônicas do filme e simboliza a decisão entre ignorância confortável e a dura verdade."
            },
            {
                "id": 2,
                "src": "imgs/filmes/matrix/matrixImg2.jpg",
                "descricao": "Neo, Trinity e Morpheus aparecem lado a lado em trajes escuros e óculos escuros, com o fundo coberto pelo clássico código verde da Matrix. A imagem transmite o clima cyberpunk do filme e destaca os protagonistas como rebeldes conscientes lutando contra o sistema que manipula a realidade."
            },
            {
                "id": 3,
                "src": "imgs/filmes/matrix/matrixImg3.jpg",
                "descricao": "Neo realiza o famoso desvio de balas, inclinando-se para trás de forma quase impossível enquanto o ambiente ao redor parece distorcido. A cena representa o momento em que ele começa a dominar as leis da Matrix, desafiando as regras do mundo simulado com suas habilidades recém-descobertas."
            }
        ],
        "sinopse": "Matrix conta a jornada de Neo, um hacker que descobre viver numa simulação controlada por máquinas. Ao ser chamado a libertar a humanidade, ele enfrenta questões filosóficas e desafia a realidade. O filme revolucionou o cinema com seus efeitos e permanece influente até hoje.",
        "categoria": ["Ação", "Ficção Científica"],
        "diretor": "Lana e Lilly Wachowski",
        "data": "1999-03-31",
        "trailer": "https://www.youtube.com/watch?v=vKQi3bBA1y8",
        "avaliacao": 4.9
    },
    {
        "id": 3,
        "titulo": "Interestelar",
        "class": "filme", //filme ou série
        "imgPrinciapl": "imgs/filmes/banners/interstellar.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/interestelar/interstellarImg1",
                "descricao": "Nesta cena, o protagonista Cooper (interpretado por Matthew McConaughey) explora a superfície de um planeta desconhecido. A imagem transmite a sensação de solidão e a vastidão do espaço, elementos centrais da narrativa do filme.​"
            },
            {
                "id": 2,
                "src": "imgs/filmes/interestelar/interstellarImg2",
                "descricao": "Esta imagem mostra o buraco negro Gargantua, um dos elementos mais impressionantes do filme. A representação visual do buraco negro, com seu disco de acreção luminoso, é uma das cenas mais icônicas e visualmente deslumbrantes de Interestelar.​"
            },
            {
                "id": 3,
                "src": "imgs/filmes/interestelar/interstellarImg3",
                "descricao": "Aqui, vemos a equipe da missão Endurance, composta por astronautas que viajam através de um buraco de minhoca em busca de um novo lar para a humanidade. A imagem destaca os trajes espaciais e o ambiente futurista da nave."
            }
        ],
        "sinopse": "Interestelar acompanha a jornada de Cooper, que parte em busca de um novo lar para a humanidade enquanto enfrenta os limites do tempo e do espaço. Combinando ciência e drama familiar, o filme é uma reflexão profunda sobre amor, existência e o futuro da humanidade.",
        "categoria": ["Ficção Científica", "Drama"],
        "diretor": "Christopher Nolan",
        "data": "2014-11-07",
        "trailer": "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        "avaliacao": 5
    },
    {
        "id": 4,
        "titulo": "Vingadores: Ultimato",
        "class": "filme", //filme ou série
        "imgPrinciapl": "imgs/filmes/banners/endgame.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/endgame/endgameImg1.jpg",
                "descricao": "Esta imagem captura a épica batalha final entre os heróis da Marvel e o exército de Thanos. A cena é repleta de ação intensa, com personagens como Capitão América, Thor, Homem de Ferro, Viúva Negra e Hulk lutando lado a lado contra as forças do Titã Louco"
            },
            {
                "id": 2,
                "src": "imgs/filmes/endgame/endgameImg2.jpg",
                "descricao": "Aqui, vemos Tony Stark (Homem de Ferro) em seu momento de sacrifício, usando a Manopla do Infinito para eliminar Thanos e seu exército. A cena é emocionalmente carregada, marcando o fim de uma era para o Universo Cinematográfico Marvel."
            },
            {
                "id": 3,
                "src": "imgs/filmes/endgame/endgameImg3.jpg",
                "descricao": "Nesta imagem, Thor aparece em sua forma poderosa durante a batalha final. Ele empunha tanto o Mjolnir quanto o Stormbreaker, com olhos brilhando de trovão. O visual imponente representa o Deus do Trovão em sua força máxima, pronto para enfrentar Thanos ao lado dos Vingadores."
            }
        ],
        "sinopse": "Vingadores: Ultimato mostra os heróis tentando reverter o estalo de Thanos com uma missão no tempo. Cheio de ação, sacrifícios e emoção, o filme encerra uma era do MCU de forma épica e memorável, sendo um marco no cinema de super-heróis.",
        "categoria": ["Ação", "Aventura"],
        "diretor": "Anthony e Joe Russo",
        "data": "2019-04-26",
        "trailer": "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        "avaliacao": 4.9
    },
    {
        "id": 5,
        "titulo": "Coringa",
        "class": "filme", //filme ou série
        "imgPrinciapl": "imgs/filmes/banners/joker.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/joker/jokerImg1.jpg",
                "descricao": "Nesta cena emblemática, Arthur Fleck, já transformado no Coringa, desce dançando uma escadaria no Bronx, em Nova York. A coreografia simboliza sua libertação das amarras sociais e o nascimento de sua nova identidade. A escadaria tornou-se um ponto turístico após o lançamento do filme."
            },
            {
                "id": 2,
                "src": "imgs/filmes/joker/jokerImg2.jpg",
                "descricao": "Nesta cena intensa, Arthur Fleck, ainda com sua maquiagem de palhaço, é atacado por três homens no metrô. Em um momento de desespero, ele reage violentamente, cometendo seu primeiro assassinato. Este ato impulsivo marca o início de sua transformação no Coringa, simbolizando a ruptura final com sua antiga identidade e o início de sua jornada sombria."
            },
            {
                "id": 3,
                "src": "imgs/filmes/joker/jokerImg3.jpg",
                "descricao": " Arthur aplica a maquiagem do palhaço diante do espelho, completando sua metamorfose no Coringa. A expressão no espelho reflete a fusão entre sua dor interna e a persona que está prestes a abraçar."
            }
        ],
        "sinopse": "Joker acompanha a transformação de Arthur Fleck, um homem marginalizado, em Coringa, símbolo do caos. O filme é um estudo sombrio sobre saúde mental e exclusão social, com atuação marcante de Joaquin Phoenix e uma atmosfera intensa e provocadora.",
        "categoria": ["Drama", "Suspense"],
        "diretor": "Todd Phillips",
        "data": "2019-10-04",
        "trailer": "https://www.youtube.com/watch?v=zAGVQLHvwOY",
        "avaliacao": 4
    },
    {
        "id": 6,
        "titulo": "Pantera Negra",
        "class": "filme", //filme ou série
        "imgPrinciapl": "imgs/filmes/banners/blackpanther.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/blackpanther/blackpantherImg1.jpg",
                "descricao": "Nesta imagem, vemos T'Challa (interpretado por Chadwick Boseman) sentado em seu trono, simbolizando sua ascensão ao trono de Wakanda. O design do cenário reflete a fusão de tradição e tecnologia avançada, elementos centrais na cultura de Wakanda. A postura de T'Challa transmite autoridade e responsabilidade, destacando os desafios que ele enfrentará como novo líder.​"
            },
            {
                "id": 2,
                "src": "imgs/filmes/blackpanther/blackpantherImg2.jpg",
                "descricao": "Esta foto reúne membros-chave do elenco, incluindo Lupita Nyong'o, Danai Gurira e Letitia Wright, em um cenário que remete à vibrante e futurista cidade de Wakanda. Cada personagem traz consigo uma história única e habilidades especiais, contribuindo para a riqueza narrativa do filme. A imagem ressalta a diversidade e a força do elenco feminino, elementos que foram amplamente celebrados pelo público e pela crítica."
            },
            {
                "id": 3,
                "src": "imgs/filmes/blackpanther/blackpantherImg3.jpg",
                "descricao": "Este pôster apresenta os principais personagens do filme, com destaque para T'Challa e seus aliados. A arte visual combina elementos tradicionais africanos com uma estética futurista, refletindo a dualidade de Wakanda. O design do pôster foi amplamente elogiado por sua capacidade de capturar a essência do filme e gerar entusiasmo entre os fãs."
            }
        ],
        "sinopse": "Pantera Negra segue T'Challa, que luta pelo trono de Wakanda contra Killmonger, num confronto entre tradição e mudança. O filme é um marco cultural que mistura ação, identidade africana e temas como justiça e legado, sendo um dos mais impactantes do MCU.",
        "categoria": ["Ação", "Ficção Científica"],
        "diretor": "Ryan Coogler",
        "data": "2018-02-16",
        "trailer": "https://www.youtube.com/watch?v=xjDjIWPwcPU",
        "avaliacao": 4.9
    },
    {
        "id": 7,
        "titulo": "Parasita",
        "class": "filme", //filme ou série
        "imgPrinciapl": "imgs/filmes/banners/parasite.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/parasite/parasiteImg1.jpg",
                "descricao": "Mostra a família Kim infiltrada na luxuosa casa dos Park, destacando o contraste entre classes sociais e a crítica à desigualdade."
            },
            {
                "id": 2,
                "src": "imgs/filmes/parasite/parasiteImg2.jpg",
                "descricao": "Apresenta os personagens centrais com um visual artístico e simbólico, refletindo o tom satírico e a mistura de estilos do filme."
            },
            {
                "id": 3,
                "src": "imgs/filmes/parasite/parasiteImg3.jpg",
                "descricao": "Retrata uma descoberta chocante na casa, com atmosfera de suspense. É um momento-chave que vira a trama de cabeça para baixo."
            }
        ],
        "sinopse": "Parasita mostra a família Kim infiltrando-se na casa dos ricos Park, revelando aos poucos tensões e segredos. Com humor, suspense e crítica social, o filme expõe a desigualdade com maestria. Uma obra-prima que fez história ao vencer o Oscar de Melhor Filme.",
        "categoria": ["Drama", "Suspense"],
        "diretor": "Bong Joon-ho",
        "data": "2019-05-30",
        "trailer": "https://www.youtube.com/watch?v=SEUXfv87Wpk",
        "avaliacao": 3.9
    },
    {
        "id": 8,
        "titulo": "Homem-Aranha",
        "subtitulo": "Sem Volta Para Casa",
        "class": "filme", //filme ou série
        "imgPrinciapl": "imgs/filmes/banners/spiderman.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/spiderman/spidermanImg1.jpg",
                "descricao": "Mostra Peter (Tom Holland) balançando pela cidade com seu traje atualizado — ação pura e agilidade clássica do herói."
            },
            {
                "id": 2,
                "src": "imgs/filmes/spiderman/spidermanImg2.jpg",
                "descricao": "Cena tensa entre Peter e Strange, destacando o conflito de ideias e efeitos visuais mágicos."
            },
            {
                "id": 3,
                "src": "imgs/filmes/spiderman/spidermanImg3.jpg",
                "descricao": "Reunião épica de Tom, Tobey e Andrew — momento icônico e nostálgico pros fãs da franquia."
            }

        ],
        "sinopse": "Spider-Man: Sem Volta Para Casa segue Peter Parker tentando corrigir os problemas causados pela revelação de sua identidade, com a ajuda do Doutor Estranho. O feitiço errado traz heróis e vilões de universos paralelos, culminando em uma reunião épica dos três Homens-Aranha.",
        "categoria": ["Ação", "Aventura"],
        "diretor": "Jon Watts",
        "data": "2021-12-17",
        "trailer": "https://www.youtube.com/watch?v=JfVOs4VSpmA",
        "avaliacao": 4.8
    },
    {
        "id": 9,
        "titulo": "Duna",
        "class": "filme", //filme ou série
        "imgPrinciapl": "imgs/filmes/banners/dune.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/dune/duneImg1.jpg",
                "descricao": "Imagem com os principais personagens como Paul, Jessica e Duncan, mostrando o clima tenso e o cenário desértico de Arrakis."
            },
            {
                "id": 2,
                "src": "imgs/filmes/dune/duneImg2.jpg",
                "descricao": "Cena intimista entre Paul e Chani caminhando em Arrakis, refletindo a conexão entre eles e os desafios do planeta."
            },
            {
                "id": 3,
                "src": "imgs/filmes/dune/duneImg3.jpg",
                "descricao": "Imagem impressionante de um dos vermes colossais do deserto, símbolo do poder e do perigo em Arrakis."
            }
        ],
        "sinopse": "Duna segue Paul Atreides, que chega a Arrakis, um planeta desértico crucial para a especiaria. Envolvido em traições e guerras, ele começa a ter visões de seu destino como líder dos Fremen. Com temas profundos de ecologia, política e religião, o filme é um épico visual e imersivo, marcando o início de uma jornada maior.",
        "categoria": ["Ficção Científica", "Aventura"],
        "diretor": "Denis Villeneuve",
        "data": "2021-10-22",
        "trailer": "https://www.youtube.com/watch?v=n9xhJrPXop4",
        "avaliacao": 4.3
    },
    {
        "id": 10,
        "titulo": "Oppenheimer",
        "class": "filme", //filme ou série
        "imgPrinciapl": "imgs/filmes/banners/oppenheimer.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/oppenheimer/oppenheimerImg1.jpg",
                "descricao": "Cillian Murphy como Oppenheimer, refletindo o dilema moral de criar a bomba atômica com uma explosão nuclear ao fundo."
            },
            {
                "id": 2,
                "src": "imgs/filmes/oppenheimer/oppenheimerImg2.jpg",
                "descricao": "Oppenheimer em um laboratório, simbolizando seu foco e intensidade enquanto lidera o Projeto Manhattan."
            },
            {
                "id": 3,
                "src": "imgs/filmes/oppenheimer/oppenheimerImg3.jpg",
                "descricao": "Cena mostrando o teste nuclear, representando as consequências devastadoras da invenção de Oppenheimer."
            }
        ],
        "sinopse": "Oppenheimer retrata a vida do físico J. Robert Oppenheimer, líder do projeto Manhattan, e seus dilemas morais ao criar a bomba atômica. Com direção de Nolan e uma atuação marcante de Cillian Murphy, o filme explora ciência, poder e responsabilidade, sendo uma reflexão profunda sobre um homem brilhante e atormentado.",
        "categoria": ["Drama", "História"],
        "diretor": "Christopher Nolan",
        "data": "2023-07-20",
        "trailer": "https://www.youtube.com/watch?v=1yZ_4PssQ7I",
        "avaliacao": 4.7
    },
    {
        "id": 11,
        "titulo": "Velozes e Furiosos",
        "class": "filme",
        "imgPrinciapl": "imgs/filmes/banners/velozesefuriosos.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/velozesefuriosos/velozesefuriososImg1.jpg",
                "descricao": "Uma imagem marcante de Vin Diesel e Paul Walker em uma das cenas do filme."
            },
            {
                "id": 2,
                "src": "imgs/filmes/velozesefuriosos/velozesefuriososImg2.jpg",
                "descricao": "A arte da capa do DVD do filme, destacando os carros e os personagens principais."
            },
            {
                "id": 3,
                "src": "imgs/filmes/velozesefuriosos/velozesefuriososImg3.jpg",
                "descricao": "Elenco do filme"
            }
        ],
        "sinopse": "Velozes e Furiosos segue Dominic Toretto e sua equipe em missões de ação intensa, que evoluem de corridas de rua para salvar o mundo, sempre com foco na importância da família, carros potentes e lealdade entre os personagens.",
        "categoria": ["Ação", "Crime"],
        "diretor": "Rob Cohen",
        "data": "2001-06-22",
        "trailer": "https://www.youtube.com/watch?v=2TAOizOnNPo",
        "avaliacao": 4.2
    },
    {
        "id": 12,
        "titulo": "Star Wars: Episódio V – O Império Contra-Ataca",
        "class": "filme",
        "imgPrinciapl": "imgs/filmes/banners/empirestrikesback.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/empirestrikesback/empirestrikesbackImg1.jpg",
                "descricao": "Uma imagem icônica de Luke Skywalker enfrentando Darth Vader em um cenário dramático."
            },
            {
                "id": 2,
                "src": "imgs/filmes/empirestrikesback/empirestrikesbackImg2.jpg",
                "descricao": "Uma cena marcante do duelo entre os dois personagens, destacando o confronto épico.​"
            },
            {
                "id": 3,
                "src": "imgs/filmes/empirestrikesback/empirestrikesbackImg3.jpg",
                "descricao": "Uma imagem que captura a intensidade da batalha entre Luke e Vader, com sabres de luz em destaque."
            }
        ],
        "sinopse": "O Império Contra-Ataca mostra os Rebeldes fugindo do Império, enquanto Luke descobre a verdade sobre sua origem ao confrontar Darth Vader. É o filme mais sombrio e profundo da saga Star Wars.",
        "categoria": ["Ficção Científica", "Aventura"],
        "diretor": "Irvin Kershner",
        "data": "1980-05-21",
        "trailer": "https://www.youtube.com/watch?v=JNwNXF9Y6kY",
        "avaliacao": 4.9
    },
    {
        "id": 13,
        "titulo": "Deadpool & Wolverine",
        "class": "filme",
        "imgPrinciapl": "imgs/filmes/banners/deadpoolwolverine.jpg",
        "imgsComplementares": [
            {
                "id": 1,
                "src": "imgs/filmes/deadpoolwolverine/deadpoolwolverineImg1.jpg",
                "descricao": "Uma imagem dinâmica mostrando os dois heróis em ação, capturando a essência da colaboração entre eles."
            },
            {
                "id": 2,
                "src": "imgs/filmes/deadpoolwolverine/deadpoolwolverineImg2.jpg",
                "descricao": "Uma cena que destaca a química entre Deadpool e Wolverine, evidenciando o tom humorístico do filme."
            },
            {
                "id": 3,
                "src": "imgs/filmes/deadpoolwolverine/deadpoolwolverineImg3.jpg",
                "descricao": "Uma imagem que captura um momento marcante da dupla, refletindo a intensidade da trama."
            }
        ],
        "sinopse": "Deadpool e Wolverine se unem em uma aventura multiversal no MCU, com ação sangrenta, piadas e caos. A dupla improvável enfrenta ameaças que podem destruir realidades, misturando o humor irreverente de Deadpool com a brutalidade de Logan.",
        "categoria": ["Ação", "Comédia"],
        "diretor": "Shawn Levy",
        "data": "2024-07-25",
        "trailer": "https://www.youtube.com/watch?v=73_1biulkYk",
        "avaliacao": 4.8
    },
    {
        "id": 14,
        "titulo": "Arcane",
        "class": "serie",
        "imgPrinciapl": "imgs/filmes/banners/arcane.jpg",
        "episodios": [
            {
                "id": 1,
                "titulo": "Bem-vindos a Piltover",
                "src": "imgs/filmes/arcane/arcaneEp1.jpg",
                "sinopse": "Em meio à tensão entre as cidades de Piltover e Zaun, duas irmãs acabam separadas durante um conflito que mudará suas vidas para sempre."
            },
            {
                "id": 2,
                "titulo": "Alguns Mistérios Devem Permanecer",
                "src": "imgs/filmes/arcane/arcaneEp2.jpg",
                "sinopse": "Jayce e Viktor exploram uma nova forma de ciência que pode mudar o mundo. Enquanto isso, a tensão nas ruas aumenta."
            },
            {
                "id": 3,
                "titulo": "A Base da Irmandade",
                "src": "imgs/filmes/arcane/arcaneEp3.jpg",
                "sinopse": "Com Piltover em alerta, os laços familiares são testados, e decisões difíceis levam a consequências devastadoras."
            },
            {
                "id": 4,
                "titulo": "Velhos Ferimentos",
                "src": "imgs/filmes/arcane/arcaneEp4.jpg",
                "sinopse": "Anos depois, Jinx emerge em Zaun como uma figura caótica, enquanto Vi busca redenção e respostas no submundo."
            },
            {
                "id": 5,
                "titulo": "Todos os Caminhos Levam ao Desastre",
                "src": "imgs/filmes/arcane/arcaneEp5.jpg",
                "sinopse": "Piltover debate a legalização da Hextech, e Jinx intensifica o conflito entre as duas cidades com um ataque ousado."
            },
            {
                "id": 6,
                "titulo": "Quando Você Sangra",
                "src": "imgs/filmes/arcane/arcaneEp6.jpg",
                "sinopse": "O passado e o presente colidem quando Vi reencontra Jinx. Jayce enfrenta dilemas morais sobre a tecnologia que criou."
            },
            {
                "id": 7,
                "titulo": "O Garoto Ideal",
                "src": "imgs/filmes/arcane/arcaneEp7.jpg",
                "sinopse": "Jayce e Viktor enfrentam divergências enquanto Vi e Caitlyn buscam alianças em Zaun para impedir os planos de Silco."
            },
            {
                "id": 8,
                "titulo": "A Água e o Óleo",
                "src": "imgs/filmes/arcane/arcaneEp8.jpg",
                "sinopse": "Conflitos internos e revelações fazem com que Vi e Jinx repensem suas jornadas. A tensão entre as cidades atinge o auge."
            },
            {
                "id": 9,
                "titulo": "O Monstro Que Você Criou",
                "src": "imgs/filmes/arcane/arcaneEp9.jpg",
                "sinopse": "O destino de Piltover e Zaun é decidido em uma explosiva conclusão, onde amor, ódio e sacrifícios se entrelaçam."
            }
        ],
        "sinopse": "Em meio a uma revolução tecnológica e conflitos sociais, duas irmãs acabam em lados opostos de uma guerra entre as cidades-estado de Piltover e Zaun. Inspirada no universo de League of Legends.",
        "categoria": ["Animação", "Ação", "Drama", "Fantasia", "Ficção Científica"],
        "diretor": "Pascal Charrue, Arnaud Delord",
        "data": "6 de novembro de 2021",
        "trailer": "https://www.youtube.com/watch?v=IA-v_LB3Qpc",
        "avaliacao": 4.6
    },
    {
        "id": 15,
        "titulo": "Jujutsu Kaisen",
        "class": "serie",
        "imgPrinciapl": "imgs/filmes/banners/jujutsu.jpg",
        "episodios": [
          {
            "id": 1,
            "titulo": "Ryomen Sukuna",
            "src": "imgs/filmes/jujutsu/jujutsuEp1.jpg",
            "sinopse": "Yuji Itadori ingere uma maldição poderosa para salvar seus amigos, iniciando sua jornada no mundo das artes jujutsu."
          },
          {
            "id": 2,
            "titulo": "For the Sake of the Students",
            "src": "imgs/filmes/jujutsu/jujutsuEp2.jpg",
            "sinopse": "Yuji começa seu treinamento na Escola Técnica de Jujutsu, aprendendo sobre as maldições e suas habilidades."
          },
          {
            "id": 3,
            "titulo": "Cursed Womb Must Die",
            "src": "imgs/filmes/jujutsu/jujutsuEp3.jpg",
            "sinopse": "Yuji e seus colegas enfrentam uma maldição poderosa em uma missão de campo."
          },
          {
            "id": 4,
            "titulo": "Curse Womb Must Die -II-",
            "src": "imgs/filmes/jujutsu/jujutsuEp4.jpg",
            "sinopse": "A batalha contra a maldição continua, testando as habilidades de Yuji e seus amigos."
          },
          {
            "id": 5,
            "titulo": "The King of Curses",
            "src": "imgs/filmes/jujutsu/jujutsuEp5.jpg",
            "sinopse": "A missão se intensifica quando Yuji e os outros enfrentam o poder das maldições mais fortes."
          },
          {
            "id": 6,
            "titulo": "After the Rain",
            "src": "imgs/filmes/jujutsu/jujutsuEp6.jpg",
            "sinopse": "Yuji continua seu treinamento enquanto o mistério das maldições se aprofunda, colocando-o em situações ainda mais perigosas."
          },
          {
            "id": 7,
            "titulo": "Assault",
            "src": "imgs/filmes/jujutsu/jujutsuEp7.jpg",
            "sinopse": "A tensão aumenta quando uma maldição do passado retorna com um ataque mortal."
          },
          {
            "id": 8,
            "titulo": "Bitter Sweet",
            "src": "imgs/filmes/jujutsu/jujutsuEp8.jpg",
            "sinopse": "Os laços entre os protagonistas ficam mais fortes enquanto enfrentam desafios cada vez mais difíceis."
          },
          {
            "id": 9,
            "titulo": "The Origin of the Curse",
            "src": "imgs/filmes/jujutsu/jujutsuEp9.jpg",
            "sinopse": "A origem da maldição que ameaça o mundo é revelada, mudando o curso da história."
          },
          {
            "id": 10,
            "titulo": "Shibuya Incident",
            "src": "imgs/filmes/jujutsu/jujutsuEp10.jpg",
            "sinopse": "O cenário da batalha se muda para Shibuya, onde forças inesperadas entram em ação."
          },
          {
            "id": 11,
            "titulo": "Cursed Energy",
            "src": "imgs/filmes/jujutsu/jujutsuEp11.jpg",
            "sinopse": "A luta contra as maldições chega a um novo nível com um foco intensificado em energia amaldiçoada."
          },
          {
            "id": 12,
            "titulo": "End of the Line",
            "src": "imgs/filmes/jujutsu/jujutsuEp12.jpg",
            "sinopse": "Os personagens enfrentam suas escolhas e os sacrifícios necessários enquanto a batalha final se aproxima."
          }
        ],
        "sinopse": "Yuji Itadori, um estudante do ensino médio com habilidades físicas excepcionais, se envolve no mundo das maldições após ingerir um objeto amaldiçoado para salvar seus amigos.",
        "categoria": ["Ação", "Aventura", "Fantasia", "Luta", "Sobrenatural"],
        "diretor": "Sunghoo Park",
        "data": "2020",
        "trailer": "https://www.youtube.com/watch?v=TVHsknG-1uE",
        "avaliacao": 4.4
      },
      {
        "id": 16,
        "titulo": "Attack on Titan",
        "class": "serie",
        "imgPrinciapl": "imgs/filmes/banners/aot.jpg",
        "episodios": [
          {
            "id": 1,
            "titulo": "To You, in 2000 Years: The Fall of Shiganshina, Part 1",
            "src": "imgs/filmes/aot/aotEp1.jpg",
            "sinopse": "A cidade de Shiganshina é atacada por gigantes, forçando Eren e seus amigos a se alistarem no exército."
          },
          {
            "id": 2,
            "titulo": "That Day: The Fall of Shiganshina, Part 2",
            "src": "imgs/filmes/aot/aotEp2.jpg",
            "sinopse": "A batalha contra os titãs continua enquanto Eren testemunha a destruição de sua cidade."
          },
          {
            "id": 3,
            "titulo": "A Dim Light Amid Despair: Humanity's Comeback, Part 1",
            "src": "imgs/filmes/aot/aotEp3.jpg",
            "sinopse": "Os recrutas iniciam seu treinamento para enfrentar os titãs e proteger a humanidade."
          },
          {
            "id": 4,
            "titulo": "The Night of the Closing Ceremony: Humanity's Comeback, Part 2",
            "src": "imgs/filmes/aot/aotEp4.jpg",
            "sinopse": "Os recrutas enfrentam desafios durante o treinamento, testando sua determinação."
          },
          {
            "id": 5,
            "titulo": "First Battle: The Struggle for Trost, Part 1",
            "src": "imgs/filmes/aot/aotEp5.jpg",
            "sinopse": "A cidade de Trost é atacada por titãs, e os recrutas são enviados para defendê-la."
          },
          {
            "id": 6,
            "titulo": "The World the Girl Saw: The Struggle for Trost, Part 2",
            "src": "imgs/filmes/aot/aotEp6.jpg",
            "sinopse": "Os recrutas enfrentam titãs em combate direto, colocando suas habilidades à prova."
          },
          {
            "id": 7,
            "titulo": "Small Blade: The Struggle for Trost, Part 3",
            "src": "imgs/filmes/aot/aotEp7.jpg",
            "sinopse": "A batalha em Trost continua, com os recrutas enfrentando desafios cada vez maiores."
          },
          {
            "id": 8,
            "titulo": "I Can Hear His Heartbeat: The Struggle for Trost, Part 4",
            "src": "imgs/filmes/aot/aotEp8.jpg",
            "sinopse": "A luta contra os titãs em Trost chega a um ponto crítico, testando a resistência dos recrutas."
          },
          {
            "id": 9,
            "titulo": "Whereabouts of His Left Arm: The Struggle for Trost, Part 5",
            "src": "imgs/filmes/aot/aotEp9.jpg",
            "sinopse": "Os recrutas enfrentam perdas e desafios enquanto continuam a defesa de Trost."
          },
          {
            "id": 10,
            "titulo": "Response: The Struggle for Trost, Part 6",
            "src": "imgs/filmes/aot/aotEp10.jpg",
            "sinopse": "A batalha em Trost chega a um novo nível de intensidade, com os recrutas lutando por suas vidas."
          },
          {
            "id": 11,
            "titulo": "Idol: The Struggle for Trost, Part 7",
            "src": "imgs/filmes/aot/aotEp11.jpg",
            "sinopse": "Os recrutas enfrentam desafios pessoais enquanto continuam a luta contra os titãs."
          },
          {
            "id": 12,
            "titulo": "Wound: The Struggle for Trost, Part 8",
            "src": "imgs/filmes/aot/aotEp12.jpg",
            "sinopse": "A batalha em Trost chega a um ponto decisivo, com os recrutas enfrentando seus maiores desafios."
          }
        ],
        "sinopse": "Em um mundo onde a humanidade vive cercada por muralhas para se proteger dos titãs, Eren Yeager e seus amigos se alistam no Exército após um ataque devastador que destrói sua cidade natal.",
        "categoria": ["Ação", "Drama", "Fantasia", "Mistério", "Suspense"],
        "diretor": "Tetsurō Araki",
        "data": "2013",
        "trailer": "https://www.youtube.com/watch?v=1pK6Vg5K1wY",
        "avaliacao": 8.8
      },
      {
        "id": 17,
        "titulo": "Frieren: Beyond Journey's End",
        "class": "serie",
        "imgPrinciapl": "imgs/filmes/banners/frieren.jpg",
        "episodios": [
          {
            "id": 1,
            "titulo": "The Beginning of the Journey",
            "src": "imgs/filmes/frieren/frierenEp1.jpg",
            "sinopse": "Após a conclusão de uma longa jornada, Frieren, uma elfa imortal, reflete sobre sua vida e começa uma nova aventura em busca de autoconhecimento."
          },
          {
            "id": 2,
            "titulo": "The Passing of Time",
            "src": "imgs/filmes/frieren/frierenEp2.jpg",
            "sinopse": "Frieren começa a lidar com a diferença de tempo entre ela e seus companheiros humanos, enquanto encara os desafios de sua própria existência."
          },
          {
            "id": 3,
            "titulo": "Memories of the Past",
            "src": "imgs/filmes/frieren/frierenEp3.jpg",
            "sinopse": "Enquanto viaja pelo mundo, Frieren começa a reviver lembranças de sua jornada com o herói Himmel e outros antigos companheiros."
          },
          {
            "id": 4,
            "titulo": "The Search for a Successor",
            "src": "imgs/filmes/frieren/frierenEp4.jpg",
            "sinopse": "Frieren procura um sucessor para continuar sua missão, ao mesmo tempo em que reflete sobre as relações que construiu ao longo do tempo."
          },
          {
            "id": 5,
            "titulo": "The Weight of Time",
            "src": "imgs/filmes/frieren/frierenEp5.jpg",
            "sinopse": "Conforme o tempo avança, Frieren começa a enfrentar as consequências de sua imortalidade e o impacto que isso tem nas pessoas ao seu redor."
          },
          {
            "id": 6,
            "titulo": "Lessons in Magic",
            "src": "imgs/filmes/frieren/frierenEp6.jpg",
            "sinopse": "Frieren começa a ensinar magia a novos discípulos, mas logo percebe que o entendimento dos humanos sobre magia é muito limitado em comparação com seu vasto conhecimento."
          },
          {
            "id": 7,
            "titulo": "The Bonds We Forge",
            "src": "imgs/filmes/frieren/frierenEp7.jpg",
            "sinopse": "Enquanto cria laços com novos aliados, Frieren aprende sobre os desafios da vida cotidiana e a importância de viver no presente."
          },
          {
            "id": 8,
            "titulo": "The Journey Forward",
            "src": "imgs/filmes/frieren/frierenEp8.jpg",
            "sinopse": "Frieren continua sua jornada para entender a verdadeira essência de sua vida e o impacto que ela tem nas pessoas ao seu redor."
          },
          {
            "id": 9,
            "titulo": "A Glimpse of Eternity",
            "src": "imgs/filmes/frieren/frierenEp9.jpg",
            "sinopse": "A imortalidade de Frieren continua a ser um fardo, enquanto ela reflete sobre sua vida eterna e os amigos que perdeu ao longo do tempo."
          },
          {
            "id": 10,
            "titulo": "The Heart of the Elf",
            "src": "imgs/filmes/frieren/frierenEp10.jpg",
            "sinopse": "A natureza do coração de Frieren é questionada enquanto ela confronta o vazio existencial de ser uma elfa imortal."
          },
          {
            "id": 11,
            "titulo": "Echoes of the Past",
            "src": "imgs/filmes/frieren/frierenEp11.jpg",
            "sinopse": "Memórias de velhos amigos ressurgem, forçando Frieren a enfrentar o passado e os sentimentos que ela guardou por tanto tempo."
          },
          {
            "id": 12,
            "titulo": "The End of the Journey",
            "src": "imgs/filmes/frieren/frierenEp12.jpg",
            "sinopse": "Frieren finalmente encontra um fechamento em sua jornada, compreendendo o significado da vida e a importância dos momentos que compartilhou com os outros."
          }
        ],
        "sinopse": "Após a morte de seu companheiro herói, Frieren, uma elfa imortal, começa uma jornada solo para entender o valor da vida e os laços que formou ao longo do tempo.",
        "categoria": ["Ação", "Aventura", "Fantasia", "Drama", "Sobrenatural"],
        "diretor": "Masato Jinbo",
        "data": "2023",
        "trailer": "https://www.youtube.com/watch?v=mh5jx3D7S5M",
        "avaliacao": 4.2
      }
    
];




let logged = true;


document.addEventListener('DOMContentLoaded', () => {
    let divDeslogado = document.querySelector('div.not-logged');
    let divLogado = document.querySelector('div.logged');
    if (logged) {
        divDeslogado.style.display = 'none';
        divLogado.style.display = 'block';
    } else {
        divDeslogado.style.display = 'block';
        divLogado.style.display = 'none';
    }


    setupFiltro();
    setupDetalhes();
    carregaFilmes();


    function configCarouselFilmesParaViewPort(){
        btsCarouselPC = document.querySelectorAll('.bts-custom-carousel');
        if(window.innerWidth >= 768){
            btsCarouselPC.forEach((bt)=>{
                bt.style.display = 'block';
            });
            if(window.innerWidth >= 992){
                caroulselParaPC(6, 1);
                caroulselParaPC(6, 2);
            }else{
                caroulselParaPC(3, 1);
                caroulselParaPC(3, 2);
            }
        }else{
            btsCarouselPC.forEach((bt)=>{
                bt.style.display = 'none';
            });

        }
    }

    configCarouselFilmesParaViewPort();
    

    window.addEventListener('resize', ()=>{
        configCarouselFilmesParaViewPort();
    })
    
    

})


//funções setup
function setupFiltro() {

    //variaveis e constantes
    const btfiltro = document.getElementById('btfilter');
    const filtroDropdown = document.getElementById('filter-dropdown');
    let filtroVazio = btfiltro.querySelector('.bi-funnel');
    let filtroPrenchido = btfiltro.querySelector('.bi-funnel-fill');
    let filtroFechado = true;

    //config inicial
    fecharDropdown(filtroDropdown);
    desativarFiltro();

    //config filtro Ativado/Desativado
    const inputs = Array.from(filtroDropdown.querySelectorAll('input'));
    inputs.forEach((input, i, array) => {
        input.addEventListener('change', () => {
            if (input.checked) {
                ativarFiltro();

            } else {
                let numChecked = 0;
                array.some((checkbox) => {
                    if (checkbox.checked) {
                        numChecked++;
                        return true;
                    }
                });
                if (numChecked == 0) {
                    desativarFiltro();
                }

            }
        });
    });

    //config abrir fechar
    btfiltro.addEventListener('click', () => {
        if (filtroFechado) {
            abrirDropdown(filtroDropdown);
            filtroFechado = false;
        } else {
            fecharDropdown(filtroDropdown);
            filtroFechado = true;
        }
    })

    //funções específicas
    function ativarFiltro() {
        trocarComponente1por2(filtroVazio, filtroPrenchido);
    }
    function desativarFiltro() {
        trocarComponente1por2(filtroPrenchido, filtroVazio);
    }
}
function setupDetalhes(){
    let numDestaques = randomPorDia(3, 6, 0); //um número de destques aleatorio de 3 a 6, diferente a cada dia
    let divBtCarousel = document.querySelector('.destaques .carousel-indicators');
    let divCarouselItem = document.querySelector('.destaques .carousel-inner');
    let sequenciaDetalhes = randomSequencePorDia(1, dados.length, 1).slice(0, numDestaques); //cria uma sequencia com numero de destaques como tamanho, podendo ter número de 1 ao max dos dados, ela é diferente a cada dia

    //seta o primeiro botão e slide como active

    let id = sequenciaDetalhes[0];
    let info = dados.find((elem)=>elem.id == id);


    divBtCarousel.innerHTML = `
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    `;

    divCarouselItem.innerHTML = `
        <div class="carousel-item active">

            <div class="carousel-img-div">
                <div class="degrade"></div>
                <img src="${info.imgPrinciapl}" class="d-block w-100 custom-img-carousel" alt="...">
            </div>
                    
            <div class="carousel-caption d-none d-md-block custom-caption">
                <h5>${(!info.subtitulo)?info.titulo:info.titulo + "&nbsp;" + info.subtitulo}</h5>
                <p>${info.sinopse}</p>
            </div>
        </div>

    `;
    
    //seta o resto normal sem o active
    
    for (let i = 1; i < numDestaques; i++){
        divBtCarousel.innerHTML += `
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>
        `;

        id = sequenciaDetalhes[i];
        info = dados.find((elem)=>elem.id == id);

        divCarouselItem.innerHTML += `
        <div class="carousel-item">

            <div class="carousel-img-div">
                <div class="degrade"></div>
                <img src="${info.imgPrinciapl}" class="d-block w-100 custom-img-carousel" alt="...">
            </div>
                    
            <div class="carousel-caption d-none d-md-block custom-caption">
                <h5>${(!info.subtitulo)?info.titulo:info.titulo + "&nbsp;" + info.subtitulo}</h5>
                <p>${info.sinopse}</p>
            </div>
        </div>

    `;


    }

    
}

function carregaFilmes(){
    const frases = [
        "Recomendados",
        "Populares",
    ];
    const numDeRows = frases.length;
    let numPorRow = dados.length / numDeRows;
    if(numPorRow < 6){
        console.log('Banco de dados pequeno demais para o número de frases');
        console.log('Aumente o banco de dados ou diminua o número de frases');
        alert('Erro no carregamento dos filme');
        return;
    }
    let numPrimeiraRow = numPorRow;
    if(!Number.isInteger(numPorRow)){
        numPorRow = Math.floor(numPorRow);
        numPrimeiraRow = numPorRow + (dados.length % numDeRows);
    }

    let ordemFilmes = randomSequence(1, dados.length);

    let sFilmes = document.getElementById('sectionFilmes');
    sFilmes.innerHTML = "";
    let c = 0;
    for(let i = 1; i <= numDeRows; i++){
        newFrase(frases[i-1], sFilmes, i)
        if(i === 1){
            for(; c < numPrimeiraRow; c++){
                
                carregaOFilme(c, ordemFilmes, sFilmes, i);
            }
            sFilmes.querySelector(`#row${i}`).innerHTML += `
                <button id="prev${i}" class="btn btn-dark prev position-absolute  top-50 bts-custom-carousel"><span class="carousel-control-prev-icon" aria-hidden="true"></span></button>
                <button id="next${i}" class="btn btn-dark next position-absolute  top-50 bts-custom-carousel"><span class="carousel-control-next-icon" aria-hidden="true"></span></button>

            `;
        }else{
            for(let j = 0; j < numPorRow; c++, j++){
                carregaOFilme(c, ordemFilmes, sFilmes, i);
            }
            sFilmes.querySelector(`#row${i}`).innerHTML += `
                <button id="prev${i}" class="btn btn-dark prev position-absolute  top-50 bts-custom-carousel"><span class="carousel-control-prev-icon" aria-hidden="true"></span></button>
                <button id="next${i}" class="btn btn-dark next position-absolute  top-50 bts-custom-carousel"><span class="carousel-control-next-icon" aria-hidden="true"></span></button>

            `;
        }
    }

}
function newFrase(frase, sFilmes, row){
    sFilmes.innerHTML += `
        <div class="row divFrase">
            <h3>${frase}</h3>
        </div>
        <div id="row${row}" class="row position-relative carousel-track">
        </div>
    `;

}
function carregaOFilme(i, ordem, sFilmes, row){
    let id = ordem[i];
    let infoFilme = dados.find((elem)=>elem.id == id);
    linha = sFilmes.querySelector(`#row${row}`);
    linha.innerHTML += `
        <div class="filme col-6 col-md-4 col-lg-2">
          <div class="conteudo">
            <h4 class="titulo">${(!infoFilme.subtitulo? infoFilme.titulo: infoFilme.titulo + "&nbsp;" + infoFilme.subtitulo)}</h4>
            <p class="sinopse">${infoFilme.sinopse}</p>
            <div class="botoes">
              <ul>
                <li><a href=""><i class="bi bi-play"></i></a></li>
                <li><a href=""><i class="bi bi-bookmark"></i></a></li>
                <li><a href=""><i class="bi bi-hand-thumbs-up"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="divImg">
            <img src="${infoFilme.imgPrinciapl}" alt="">
          </div>
        </div>

    `;




}

function caroulselParaPC(itemsPerView, row){
    const track = document.getElementById(`row${row}`);
    const items = document.querySelectorAll(`#row${row} > .filme`);
    const nextBtn = document.getElementById(`next${row}`)
    const prevBtn = document.getElementById(`prev${row}`)
    //console.log(items);
    //console.log(itemsPerView)
    let currentIndex = 0;
    const totalItems = items.length;
    
    prevBtn.style.display = 'none';
    console.log(totalItems);


    function updateCarousel() {
        const itemWidth = items[0].offsetWidth;
        track.scrollLeft = currentIndex * itemWidth;
        prevBtn.style.left = `${currentIndex * itemWidth}px`;
        nextBtn.style.right = `-${currentIndex * itemWidth}px`;

        if((currentIndex + itemsPerView) === totalItems){
            nextBtn.style.display = 'none';
        }else{
            nextBtn.style.display = 'block';
        }
        if(currentIndex === 0){
            prevBtn.style.display = 'none';
        }else{
            prevBtn.style.display = 'block';
        }
        console.log(currentIndex);
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - itemsPerView) {
            currentIndex += itemsPerView;
            if(currentIndex > (totalItems - itemsPerView)){
                currentIndex = totalItems - itemsPerView;
            }
        
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            if((currentIndex - itemsPerView) >= 0){
                currentIndex-=itemsPerView;
            }else{
                currentIndex = 0;
            }
            updateCarousel();
        }
    });

    window.addEventListener('resize', ()=>{
        if(window.innerWidth >= 768){
            updateCarousel();
        }
    })

}

//funções reutilizaveis
function abrirDropdown(dropdown) {

    dropdown.style.display = 'inline';
}
function fecharDropdown(dropdown) {

    dropdown.style.display = 'none';
}
function trocarComponente1por2(comp1, comp2) {
    comp1.style.display = 'none';
    comp2.style.display = 'inline';
}


function random(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}
function randomMaisChanceLowHigh(min, max, maisChance){
    maisChance = maisChance.toUpperCase();
    if(maisChance !== "LOW" && maisChance !== "HIGH")return null;
    let rand;
    if(maisChance === "LOW"){
        rand = Math.random() ** 2;
    }else{
        rand = 1 - ((1 - Math.random()) ** 2);
    }
    return Math.floor(rand * (max-min+1)) + min;
}
function randomSequence(min, max){
    let sequencia = new Array(max-min + 1).fill(null);
    let numbersToMix = new Array(sequencia.length);
    for (let i = 0; i < numbersToMix.length; i++){
        numbersToMix[i] = min + i;
    }
   
    for(let i = 0; i < sequencia.length; i++){
        let randomIndex = random(0, numbersToMix.length - 1);
        sequencia[i] = numbersToMix[randomIndex];
        numbersToMix.splice(randomIndex, 1);
        
    }
    
    return sequencia;
}
function randomPorDia(min, max, index){
    const hoje = new Date();
    const seed = parseInt(index.toString() + hoje.getFullYear().toString() + (hoje.getMonth() + 1).toString() + hoje.getDate().toString());
    let rand = Math.abs(Math.sin(seed)); //quase aleatorio de -1 a 1, valores possíveis em um seno, função seno retorna valores caóticos
    return Math.floor(rand * (max-min+1)) + min;
}

function randomSequencePorDia(min, max, index){
    let sequencia = new Array(max-min + 1).fill(null);
    let numbersToMix = new Array(sequencia.length);
    for (let i = 0; i < numbersToMix.length; i++){
        numbersToMix[i] = min + i;
    }
   
    for(let i = 0; i < sequencia.length; i++){
        let randomIndex = randomPorDia(0, numbersToMix.length - 1, index + i);
        sequencia[i] = numbersToMix[randomIndex];
        numbersToMix.splice(randomIndex, 1);
        
    }
    return sequencia;
}

