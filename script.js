const diasUteis = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

const receitas = {
  // ---------------------- Carnes ----------------------
carne: [
  {
    nome: "Picadinho de carne",
    ingredientes: {
      "Carne bovina (g)": 400,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Tomate (unidade)": 1,
      "Óleo (ml)": 15,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Salsinha (colher de sopa)": 1
    },
    preparo: `
1. Corte a carne em cubinhos. Tempere com sal e pimenta-do-reino.
2. Em uma panela, aqueça o óleo e refogue a cebola e o alho picados.
3. Adicione a carne e doure bem.
4. Acrescente o tomate picado, mexa e cozinhe até o molho encorpar.
5. Finalize com salsinha picada e sirva.
`
  },
  {
    nome: "Carne de panela",
    ingredientes: {
      "Carne bovina (g)": 500,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Tomate (unidade)": 1,
      "Batata (unidade)": 2,
      "Cenoura (unidade)": 1,
      "Óleo (ml)": 15,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Cheiro-verde (colher de sopa)": 1
    },
    preparo: `
1. Corte a carne em pedaços grandes e tempere com sal e pimenta.
2. Aqueça o óleo na panela e doure a carne.
3. Adicione cebola e alho picados e refogue até dourar.
4. Junte tomate picado, batatas e cenoura em rodelas.
5. Cubra com água e cozinhe até os legumes ficarem macios.
6. Finalize com cheiro-verde picado.
`
  },
  {
    nome: "Bife acebolado",
    ingredientes: {
      "Bife bovino (g)": 400,
      "Cebola (unidade)": 2,
      "Alho (dente)": 1,
      "Óleo (ml)": 15,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1
    },
    preparo: `
1. Tempere os bifes com sal e pimenta-do-reino.
2. Em uma frigideira, aqueça o óleo e doure os bifes. Reserve.
3. Na mesma frigideira, refogue a cebola em rodelas e o alho até caramelizar.
4. Volte os bifes para a panela, misture tudo e sirva quente.
`
  },
  {
    nome: "Carne moída refogada",
    ingredientes: {
      "Carne moída (g)": 400,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Tomate (unidade)": 1,
      "Óleo (ml)": 10,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Salsinha (colher de sopa)": 1
    },
    preparo: `
1. Em uma panela, aqueça o óleo e refogue a cebola e o alho picados.
2. Acrescente a carne moída e refogue até perder a cor crua.
3. Junte o tomate picado e cozinhe até secar a água.
4. Tempere com sal, pimenta e finalize com salsinha.
`
  },
  {
    nome: "Strogonoff de carne",
    ingredientes: {
      "Carne em tiras (g)": 400,
      "Cebola (unidade)": 1,
      "Alho (dente)": 1,
      "Tomate (unidade)": 1,
      "Champignon (g)": 80,
      "Creme de leite (caixa)": 1,
      "Extrato de tomate (colher de sopa)": 1,
      "Óleo (ml)": 10,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Mostarda (colher de chá)": 1,
      "Ketchup (colher de sopa)": 1
    },
    preparo: `
1. Aqueça o óleo e refogue a cebola e o alho picados.
2. Junte a carne em tiras e doure até secar a água.
3. Acrescente tomate picado, extrato de tomate, mostarda e ketchup.
4. Adicione o champignon e misture bem.
5. Desligue o fogo, junte o creme de leite e acerte o sal e a pimenta.
`
  },
  {
    nome: "Almôndegas ao molho",
    ingredientes: {
      "Carne moída (g)": 400,
      "Ovo (unidade)": 1,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Farinha de rosca (colher de sopa)": 2,
      "Molho de tomate (ml)": 250,
      "Óleo (ml)": 10,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Salsinha (colher de sopa)": 1
    },
    preparo: `
1. Misture carne moída, ovo, metade da cebola e um dente de alho picados, farinha de rosca, sal e pimenta.
2. Faça bolinhas e reserve.
3. Aqueça o óleo em uma panela, refogue o restante da cebola e alho.
4. Acrescente as almôndegas, doure levemente e adicione o molho de tomate.
5. Cozinhe até as almôndegas estarem cozidas, finalize com salsinha.
`
  },
  {
    nome: "Carne ensopada com legumes",
    ingredientes: {
      "Carne bovina (g)": 400,
      "Batata (unidade)": 2,
      "Cenoura (unidade)": 1,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Tomate (unidade)": 1,
      "Óleo (ml)": 15,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Cheiro-verde (colher de sopa)": 1
    },
    preparo: `
1. Em uma panela, aqueça o óleo e refogue a cebola e o alho.
2. Adicione a carne em cubos e doure bem.
3. Junte tomate, batata e cenoura picados.
4. Cubra com água e cozinhe até a carne e os legumes ficarem macios.
5. Tempere com sal, pimenta e cheiro-verde.
`
  },
  {
    nome: "Carne louca",
    ingredientes: {
      "Carne bovina (g)": 500,
      "Cebola (unidade)": 2,
      "Pimentão (unidade)": 1,
      "Alho (dente)": 2,
      "Tomate (unidade)": 2,
      "Óleo (ml)": 15,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Vinagre (colher de sopa)": 1,
      "Cheiro-verde (colher de sopa)": 1
    },
    preparo: `
1. Cozinhe a carne em pedaços grandes até desfiar.
2. Desfie e reserve.
3. Aqueça o óleo, refogue cebola, alho, pimentão e tomate picados.
4. Acrescente a carne desfiada, tempere com sal, pimenta e vinagre.
5. Finalize com cheiro-verde e sirva.
`
  },
  {
    nome: "Carne assada com batata",
    ingredientes: {
      "Carne bovina (g)": 600,
      "Batata (unidade)": 3,
      "Cebola (unidade)": 1,
      "Alho (dente)": 3,
      "Azeite (ml)": 20,
      "Sal (g)": 7,
      "Pimenta-do-reino (g)": 1,
      "Alecrim (ramo)": 1
    },
    preparo: `
1. Tempere a carne com sal, pimenta, alho picado e alecrim.
2. Em uma assadeira, coloque a carne, as batatas descascadas e cortadas e a cebola em rodelas.
3. Regue com azeite, cubra com papel alumínio e leve ao forno médio por 40 minutos.
4. Retire o papel e asse até dourar.
`
  },
  {
    nome: "Escondidinho de carne",
    ingredientes: {
      "Carne moída (g)": 400,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Batata (unidade)": 3,
      "Leite (ml)": 100,
      "Manteiga (colher de sopa)": 1,
      "Sal (g)": 7,
      "Pimenta-do-reino (g)": 1,
      "Mussarela (g)": 80
    },
    preparo: `
1. Cozinhe as batatas e amasse-as, fazendo um purê com leite, manteiga e sal.
2. Refogue a carne moída com cebola, alho, sal e pimenta.
3. Em um refratário, coloque metade do purê, toda a carne e cubra com o restante do purê.
4. Polvilhe a mussarela ralada e leve ao forno para gratinar.
`
  }
],
// ---------------------- Frango ----------------------
// ---------------------- Frango ----------------------
frango: [
  {
    nome: "Frango grelhado com legumes",
    ingredientes: {
      "Filé de peito de frango (g)": 400,
      "Limão (unidade)": 1,
      "Alho (dente)": 2,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Azeite (ml)": 15,
      "Abobrinha (unidade)": 1,
      "Cenoura (unidade)": 1,
      "Brócolis (xícara)": 1
    },
    preparo: `
1. Tempere os filés de frango com suco de limão, alho picado, sal e pimenta.
2. Aqueça metade do azeite e grelhe o frango até dourar dos dois lados.
3. Em outra panela, aqueça o restante do azeite e refogue abobrinha, cenoura em rodelas e brócolis até ficarem macios.
4. Sirva o frango acompanhado dos legumes refogados.
`
  },
  {
    nome: "Frango ao molho de tomate",
    ingredientes: {
      "Peito de frango (g)": 400,
      "Tomate (unidade)": 2,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Óleo (ml)": 10,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Cheiro-verde (colher de sopa)": 1
    },
    preparo: `
1. Corte o frango em cubos e tempere com sal e pimenta.
2. Em uma panela, aqueça o óleo e refogue cebola e alho picados.
3. Junte o frango e doure bem.
4. Acrescente os tomates picados e cozinhe até formar um molho espesso.
5. Finalize com cheiro-verde e sirva.
`
  },
  {
    nome: "Frango ensopado com batatas",
    ingredientes: {
      "Coxa e sobrecoxa de frango (g)": 500,
      "Batata (unidade)": 3,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Tomate (unidade)": 1,
      "Óleo (ml)": 15,
      "Sal (g)": 7,
      "Pimenta-do-reino (g)": 1,
      "Cheiro-verde (colher de sopa)": 1
    },
    preparo: `
1. Tempere o frango com sal e pimenta.
2. Aqueça o óleo em uma panela, doure o frango e retire.
3. Refogue cebola, alho e tomate picados no mesmo óleo.
4. Volte o frango, adicione batatas em cubos e cubra com água.
5. Cozinhe até a batata ficar macia e finalize com cheiro-verde.
`
  },
  {
    nome: "Frango xadrez",
    ingredientes: {
      "Peito de frango (g)": 400,
      "Pimentão vermelho (unidade)": 1,
      "Pimentão verde (unidade)": 1,
      "Cebola (unidade)": 1,
      "Alho (dente)": 1,
      "Molho shoyu (colher de sopa)": 3,
      "Amido de milho (colher de chá)": 1,
      "Óleo (ml)": 10,
      "Sal (g)": 4,
      "Pimenta-do-reino (g)": 1
    },
    preparo: `
1. Corte o frango em cubos e tempere com sal e pimenta.
2. Dissolva o amido no shoyu e reserve.
3. Em uma panela, aqueça o óleo e doure o frango.
4. Adicione os pimentões e a cebola em cubos, refogue rapidamente.
5. Acrescente o molho shoyu com amido, mexa até engrossar e sirva.
`
  },
  {
    nome: "Frango ao curry",
    ingredientes: {
      "Peito de frango (g)": 400,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Leite de coco (ml)": 200,
      "Curry em pó (colher de chá)": 1,
      "Óleo (ml)": 10,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Salsinha (colher de sopa)": 1
    },
    preparo: `
1. Corte o frango em cubos e tempere com sal e pimenta.
2. Em uma panela, aqueça o óleo e refogue cebola e alho picados.
3. Junte o frango e doure bem.
4. Acrescente o curry e misture.
5. Adicione o leite de coco e cozinhe até engrossar.
6. Finalize com salsinha picada.
`
  },
  {
    nome: "Strogonoff de frango",
    ingredientes: {
      "Peito de frango (g)": 400,
      "Cebola (unidade)": 1,
      "Alho (dente)": 1,
      "Tomate (unidade)": 1,
      "Champignon (g)": 80,
      "Creme de leite (caixa)": 1,
      "Extrato de tomate (colher de sopa)": 1,
      "Óleo (ml)": 10,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Mostarda (colher de chá)": 1,
      "Ketchup (colher de sopa)": 1
    },
    preparo: `
1. Em uma panela, aqueça o óleo e refogue cebola e alho picados.
2. Acrescente o frango em tiras e doure até perder o líquido.
3. Adicione tomate picado, extrato de tomate, mostarda e ketchup.
4. Junte o champignon fatiado e misture.
5. Desligue o fogo e misture o creme de leite.
6. Ajuste o sal e a pimenta.
`
  },
  {
    nome: "Frango ao forno com batatas",
    ingredientes: {
      "Coxa e sobrecoxa de frango (g)": 600,
      "Batata (unidade)": 3,
      "Cebola (unidade)": 1,
      "Alho (dente)": 3,
      "Limão (unidade)": 1,
      "Azeite (ml)": 20,
      "Sal (g)": 7,
      "Pimenta-do-reino (g)": 1,
      "Alecrim (ramo)": 1
    },
    preparo: `
1. Tempere o frango com sal, pimenta, alho, limão e alecrim.
2. Em uma assadeira, coloque o frango e as batatas descascadas em rodelas.
3. Regue com azeite, cubra com papel alumínio e asse em forno médio por 40 minutos.
4. Retire o papel e asse até dourar.
`
  },
  {
  nome: "Frango ao molho mostarda",
  ingredientes: {
    "Peito de frango (g)": 400,
    "Mostarda (colher de sopa)": 1,
    "Creme de leite (caixa)": 1,
    "Cebola (unidade)": 1,
    "Alho (dente)": 1,
    "Óleo (ml)": 10,
    "Sal (g)": 5,
    "Pimenta-do-reino (g)": 1,
    "Salsinha (colher de sopa)": 1
  },
  preparo: `
1. Corte o frango em cubos e tempere com sal e pimenta.
2. Em uma panela, aqueça o óleo e refogue a cebola e o alho picados.
3. Junte o frango e doure até ficar bem cozido.
4. Acrescente a mostarda, misture e depois adicione o creme de leite.
5. Cozinhe por mais 3 minutos em fogo baixo e finalize com salsinha.
`
},
  {
    nome: "Frango ao creme de milho",
    ingredientes: {
      "Peito de frango (g)": 400,
      "Milho verde (lata)": 1,
      "Cebola (unidade)": 1,
      "Alho (dente)": 1,
      "Creme de leite (caixa)": 1,
      "Óleo (ml)": 10,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Salsinha (colher de sopa)": 1
    },
    preparo: `
1. Tempere o frango com sal e pimenta e corte em cubos.
2. Em uma panela, aqueça o óleo e refogue cebola e alho picados.
3. Acrescente o frango e doure bem.
4. Bata o milho com o creme de leite no liquidificador e despeje na panela.
5. Cozinhe até engrossar e finalize com salsinha.
`
  },
  {
    nome: "Frango cozido com cenoura",
    ingredientes: {
      "Coxa e sobrecoxa de frango (g)": 500,
      "Cenoura (unidade)": 2,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Óleo (ml)": 10,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Cheiro-verde (colher de sopa)": 1
    },
    preparo: `
1. Tempere o frango com sal e pimenta.
2. Aqueça o óleo em uma panela, doure o frango e retire.
3. Refogue cebola e alho picados, volte o frango e acrescente as cenouras em rodelas.
4. Cubra com água e cozinhe até o frango e a cenoura ficarem macios.
5. Finalize com cheiro-verde.
`
  }
],

// ---------------------- Peixe ----------------------
peixe: [
    {
    nome: "Moqueca de peixe simples",
    ingredientes: {
      "Filé de peixe (g)": 400,
      "Cebola (unidade)": 1,
      "Tomate (unidade)": 2,
      "Pimentão (unidade)": 1,
      "Alho (dente)": 2,
      "Leite de coco (ml)": 200,
      "Azeite de dendê (ml)": 20,
      "Coentro (colher de sopa)": 1,
      "Óleo (ml)": 10,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1
    },
    preparo: `
1. Tempere o peixe com sal e pimenta. Reserve.
2. Em uma panela, refogue cebola, alho, tomate e pimentão picados no óleo.
3. Coloque os filés por cima, junte o leite de coco e o azeite de dendê.
4. Cozinhe em fogo baixo até o peixe ficar macio.
5. Finalize com coentro e sirva com arroz.
`
  },
  {
    nome: "Peixe assado com legumes",
    ingredientes: {
      "Filé de peixe (g)": 400,
      "Batata (unidade)": 2,
      "Cenoura (unidade)": 1,
      "Cebola (unidade)": 1,
      "Pimentão (unidade)": 1,
      "Tomate (unidade)": 1,
      "Azeite (ml)": 20,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Limão (unidade)": 1,
      "Alecrim (ramo)": 1
    },
    preparo: `
1. Tempere o peixe com sal, pimenta e suco de limão.
2. Em um refratário, distribua os legumes fatiados e coloque os filés por cima.
3. Regue tudo com azeite e alecrim.
4. Cubra com papel alumínio e asse em forno médio por 30 minutos.
5. Retire o papel e asse até dourar.
`
  },
  {
    nome: "Filé de peixe grelhado",
    ingredientes: {
      "Filé de peixe (g)": 400,
      "Limão (unidade)": 1,
      "Alho (dente)": 1,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Azeite (ml)": 10
    },
    preparo: `
1. Tempere os filés de peixe com limão, sal, pimenta e alho picado.
2. Aqueça uma frigideira com azeite e grelhe os filés até dourar ambos os lados.
3. Sirva com salada e arroz.
`
  },
  {
    nome: "Peixe ao molho de tomate",
    ingredientes: {
      "Filé de peixe (g)": 400,
      "Tomate (unidade)": 3,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Óleo (ml)": 10,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Cheiro-verde (colher de sopa)": 1
    },
    preparo: `
1. Tempere o peixe com sal e pimenta.
2. Refogue cebola e alho no óleo até dourar.
3. Junte tomate picado e cozinhe até formar um molho.
4. Acrescente os filés de peixe ao molho e cozinhe em fogo baixo até ficarem macios.
5. Finalize com cheiro-verde picado.
`
  },
  {
    nome: "Peixe empanado",
    ingredientes: {
      "Filé de peixe (g)": 400,
      "Ovo (unidade)": 1,
      "Farinha de trigo (xícara)": 0.5,
      "Farinha de rosca (xícara)": 0.5,
      "Alho (dente)": 1,
      "Limão (unidade)": 1,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Óleo (ml)": 30
    },
    preparo: `
1. Tempere o peixe com alho picado, limão, sal e pimenta.
2. Passe os filés na farinha de trigo, depois no ovo batido e em seguida na farinha de rosca.
3. Frite em óleo quente até dourar ou asse em forno médio até ficar crocante.
`
  },
  {
    nome: "Peixe ao forno com batatas",
    ingredientes: {
      "Filé de peixe (g)": 400,
      "Batata (unidade)": 2,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Limão (unidade)": 1,
      "Azeite (ml)": 20,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Tomate (unidade)": 1,
      "Cheiro-verde (colher de sopa)": 1
    },
    preparo: `
1. Tempere o peixe com limão, sal e pimenta.
2. Em uma assadeira, faça uma cama com as batatas em rodelas, cebola, alho e tomate fatiados.
3. Coloque o peixe por cima, regue com azeite.
4. Cubra com papel alumínio e asse em forno médio por 30 minutos.
5. Retire o papel, asse mais 10 minutos e finalize com cheiro-verde.
`
  },
  {
    nome: "Peixe ensopado",
    ingredientes: {
      "Filé de peixe (g)": 400,
      "Cebola (unidade)": 1,
      "Tomate (unidade)": 2,
      "Pimentão (unidade)": 1,
      "Alho (dente)": 2,
      "Óleo (ml)": 10,
      "Água (ml)": 200,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Cheiro-verde (colher de sopa)": 1
    },
    preparo: `
1. Refogue cebola, alho, tomate e pimentão no óleo até murchar.
2. Junte o peixe, adicione água, sal e pimenta.
3. Cozinhe até o peixe ficar macio e o caldo engrossar levemente.
4. Finalize com cheiro-verde.
`
  },
  {
    nome: "Peixe ao leite de coco",
    ingredientes: {
      "Filé de peixe (g)": 400,
      "Cebola (unidade)": 1,
      "Alho (dente)": 1,
      "Leite de coco (ml)": 200,
      "Azeite (ml)": 15,
      "Limão (unidade)": 1,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Coentro (colher de sopa)": 1
    },
    preparo: `
1. Tempere o peixe com limão, sal e pimenta.
2. Refogue cebola e alho picados no azeite.
3. Acrescente o peixe e doure levemente.
4. Junte o leite de coco e cozinhe em fogo baixo até engrossar levemente.
5. Finalize com coentro fresco.
`
  },
  {
    nome: "Moqueca de tilápia",
    ingredientes: {
      "Filé de tilápia (g)": 400,
      "Cebola (unidade)": 1,
      "Pimentão (unidade)": 1,
      "Tomate (unidade)": 2,
      "Alho (dente)": 2,
      "Leite de coco (ml)": 200,
      "Azeite de dendê (ml)": 15,
      "Coentro (colher de sopa)": 1,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Óleo (ml)": 10
    },
    preparo: `
1. Tempere o peixe com sal e pimenta.
2. Em uma panela, refogue cebola, alho, tomate e pimentão em óleo.
3. Adicione os filés de tilápia, cubra com leite de coco e azeite de dendê.
4. Cozinhe em fogo baixo até o peixe cozinhar bem.
5. Finalize com coentro fresco.
`
  },
  {
    nome: "Peixe ao molho de ervas",
    ingredientes: {
      "Filé de peixe (g)": 400,
      "Alho (dente)": 1,
      "Limão (unidade)": 1,
      "Salsinha (colher de sopa)": 1,
      "Cebolinha (colher de sopa)": 1,
      "Azeite (ml)": 20,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1
    },
    preparo: `
1. Tempere o peixe com sal, pimenta, alho e limão.
2. Grelhe o peixe em uma frigideira com azeite.
3. Misture salsinha e cebolinha picadas e sirva sobre o peixe.
`
  }
],
// ---------------------- Vegetariano ----------------------
vegetariano: [
  {
    nome: "Moqueca de palmito",
    ingredientes: {
      "Palmito (g)": 200,
      "Leite de coco (ml)": 200,
      "Cebola (unidade)": 1,
      "Tomate (unidade)": 2,
      "Pimentão (unidade)": 1,
      "Alho (dente)": 2,
      "Azeite de dendê (ml)": 10,
      "Azeite (ml)": 10,
      "Cheiro-verde (colher de sopa)": 1,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1
    },
    preparo: `
1. Corte o palmito em rodelas e reserve.
2. Em uma panela, aqueça o azeite e refogue cebola, alho, pimentão e tomate picados.
3. Junte o palmito, o leite de coco, o azeite de dendê e tempere com sal e pimenta.
4. Cozinhe por 10 minutos em fogo baixo e finalize com cheiro-verde.
`
  },
  {
    nome: "Omelete de legumes",
    ingredientes: {
      "Ovo (unidade)": 3,
      "Cenoura (unidade)": 1,
      "Abobrinha (unidade)": 1,
      "Tomate (unidade)": 1,
      "Cebola (unidade)": 0.5,
      "Salsinha (colher de sopa)": 1,
      "Azeite (ml)": 10,
      "Sal (g)": 4,
      "Pimenta-do-reino (g)": 1
    },
    preparo: `
1. Bata os ovos e tempere com sal e pimenta.
2. Aqueça o azeite e refogue cebola, cenoura e abobrinha picadas.
3. Junte o tomate picado, misture e despeje os ovos batidos.
4. Cozinhe em fogo baixo até firmar.
5. Finalize com salsinha e sirva.
`
  },
  {
    nome: "Arroz integral com legumes",
    ingredientes: {
      "Arroz integral (xícara)": 1,
      "Cenoura (unidade)": 1,
      "Abobrinha (unidade)": 1,
      "Cebola (unidade)": 1,
      "Alho (dente)": 1,
      "Óleo (ml)": 10,
      "Água (ml)": 400,
      "Sal (g)": 5,
      "Salsinha (colher de sopa)": 1
    },
    preparo: `
1. Pique os legumes em cubos pequenos.
2. Em uma panela, refogue cebola e alho no óleo.
3. Junte arroz, cenoura e abobrinha e refogue.
4. Adicione água, tempere com sal e cozinhe até secar.
5. Finalize com salsinha.
`
  },
  {
    nome: "Lasanha de berinjela",
    ingredientes: {
      "Berinjela (unidade)": 2,
      "Molho de tomate (ml)": 300,
      "Mussarela (g)": 100,
      "Parmesão ralado (g)": 20,
      "Azeite (ml)": 10,
      "Sal (g)": 4,
      "Pimenta-do-reino (g)": 1,
      "Orégano (colher de chá)": 1
    },
    preparo: `
1. Corte as berinjelas em fatias e tempere com sal.
2. Grelhe as fatias em uma frigideira com azeite.
3. Em um refratário, monte camadas de berinjela, molho de tomate e mussarela.
4. Repita as camadas e finalize com parmesão ralado e orégano.
5. Leve ao forno para gratinar por 15 minutos.
`
  },
  {
    nome: "Grão-de-bico ao curry",
    ingredientes: {
      "Grão-de-bico cozido (xícara)": 2,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Tomate (unidade)": 2,
      "Curry em pó (colher de chá)": 1,
      "Leite de coco (ml)": 100,
      "Azeite (ml)": 10,
      "Sal (g)": 5,
      "Coentro (colher de sopa)": 1
    },
    preparo: `
1. Refogue cebola e alho picados no azeite.
2. Acrescente o tomate picado e refogue até murchar.
3. Junte o grão-de-bico, curry, sal e leite de coco.
4. Cozinhe por 5 minutos em fogo baixo.
5. Finalize com coentro picado.
`
  },
  {
    nome: "Panqueca de espinafre",
    ingredientes: {
      "Ovo (unidade)": 2,
      "Leite (ml)": 120,
      "Farinha de trigo (xícara)": 0.5,
      "Espinafre (maço)": 0.5,
      "Mussarela (g)": 60,
      "Sal (g)": 4,
      "Pimenta-do-reino (g)": 1,
      "Azeite (ml)": 5
    },
    preparo: `
1. Bata os ovos com o leite e a farinha.
2. Junte o espinafre cozido e picado, tempere com sal e pimenta.
3. Em uma frigideira untada com azeite, faça as panquecas.
4. Recheie com mussarela, enrole e leve ao forno para gratinar.
`
  },
  {
    nome: "Escondidinho de legumes",
    ingredientes: {
      "Batata (unidade)": 3,
      "Cenoura (unidade)": 1,
      "Abobrinha (unidade)": 1,
      "Leite (ml)": 80,
      "Manteiga (colher de sopa)": 1,
      "Azeite (ml)": 10,
      "Cebola (unidade)": 1,
      "Alho (dente)": 1,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Mussarela (g)": 60
    },
    preparo: `
1. Cozinhe as batatas e faça um purê com leite, manteiga, sal e pimenta.
2. Refogue cenoura, abobrinha, cebola e alho picados no azeite até dourar.
3. Em um refratário, monte uma camada de purê, uma de legumes e cubra com o restante do purê.
4. Polvilhe mussarela e leve ao forno para gratinar.
`
  },
  {
    nome: "Caponata de legumes",
    ingredientes: {
      "Berinjela (unidade)": 1,
      "Abobrinha (unidade)": 1,
      "Pimentão (unidade)": 1,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Tomate (unidade)": 2,
      "Azeitona (g)": 30,
      "Azeite (ml)": 30,
      "Vinagre (colher de sopa)": 1,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Orégano (colher de chá)": 1
    },
    preparo: `
1. Corte os legumes em cubos pequenos.
2. Misture com azeitona, azeite, vinagre, sal, pimenta e orégano.
3. Espalhe em uma assadeira e leve ao forno por 30 minutos, mexendo na metade do tempo.
4. Sirva quente ou fria.
`
  },
  {
    nome: "Arroz de forno vegetariano",
    ingredientes: {
      "Arroz cozido (xícara)": 2,
      "Cenoura (unidade)": 1,
      "Milho verde (lata)": 0.5,
      "Ervilha (lata)": 0.5,
      "Tomate (unidade)": 1,
      "Mussarela (g)": 80,
      "Parmesão ralado (g)": 20,
      "Leite (ml)": 50,
      "Ovo (unidade)": 1,
      "Salsinha (colher de sopa)": 1,
      "Sal (g)": 4,
      "Pimenta-do-reino (g)": 1
    },
    preparo: `
1. Misture o arroz cozido, cenoura ralada, milho, ervilha, tomate e metade da mussarela.
2. Bata o ovo com leite, sal e pimenta e misture ao arroz.
3. Coloque em um refratário, cubra com o restante da mussarela e parmesão.
4. Leve ao forno até gratinar.
`
  },
  {
    nome: "Salada de grãos e legumes",
    ingredientes: {
      "Grão-de-bico cozido (xícara)": 1,
      "Lentilha cozida (xícara)": 1,
      "Cenoura (unidade)": 1,
      "Tomate (unidade)": 1,
      "Cebola (unidade)": 0.5,
      "Salsinha (colher de sopa)": 1,
      "Azeite (ml)": 15,
      "Limão (unidade)": 1,
      "Sal (g)": 4,
      "Pimenta-do-reino (g)": 1
    },
    preparo: `
1. Misture o grão-de-bico e a lentilha já cozidos com cenoura ralada, tomate e cebola picados.
2. Tempere com azeite, limão, sal, pimenta e salsinha.
3. Sirva gelada.
`
  }
],
// ---------------------- Vegano ----------------------
vegano: [
  {
    nome: "Grão-de-bico ao curry",
    ingredientes: {
      "Grão-de-bico cozido (xícara)": 2,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Tomate (unidade)": 2,
      "Curry em pó (colher de chá)": 1,
      "Leite de coco (ml)": 100,
      "Azeite (ml)": 10,
      "Sal (g)": 5,
      "Coentro (colher de sopa)": 1
    },
    preparo: `
1. Refogue a cebola e o alho picados no azeite.
2. Junte o tomate e refogue até murchar.
3. Adicione o grão-de-bico, curry, sal e o leite de coco.
4. Cozinhe por 5 minutos e finalize com coentro picado.
`
  },
  {
    nome: "Moqueca vegana de banana-da-terra",
    ingredientes: {
      "Banana-da-terra (unidade)": 2,
      "Cebola (unidade)": 1,
      "Tomate (unidade)": 2,
      "Pimentão (unidade)": 1,
      "Alho (dente)": 2,
      "Leite de coco (ml)": 150,
      "Azeite de dendê (ml)": 10,
      "Azeite (ml)": 10,
      "Cheiro-verde (colher de sopa)": 1,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1
    },
    preparo: `
1. Corte as bananas em rodelas grossas.
2. Em uma panela, refogue cebola, alho, tomate e pimentão no azeite.
3. Junte as bananas, o leite de coco e o azeite de dendê.
4. Cozinhe em fogo baixo por 10 minutos.
5. Tempere com sal, pimenta e finalize com cheiro-verde.
`
  },
  {
    nome: "Escondidinho de lentilha",
    ingredientes: {
      "Lentilha cozida (xícara)": 2,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Tomate (unidade)": 1,
      "Batata (unidade)": 3,
      "Leite de aveia (ml)": 80,
      "Azeite (ml)": 10,
      "Sal (g)": 6,
      "Pimenta-do-reino (g)": 1,
      "Salsinha (colher de sopa)": 1
    },
    preparo: `
1. Cozinhe as batatas e amasse, fazendo um purê com leite de aveia, azeite, sal e pimenta.
2. Refogue a cebola e o alho no azeite. Junte o tomate e a lentilha cozida, tempere com sal e pimenta.
3. Em um refratário, monte uma camada de purê, uma de lentilha refogada e cubra com o restante do purê.
4. Leve ao forno para aquecer e finalize com salsinha.
`
  },
  {
    nome: "Risoto de abóbora",
    ingredientes: {
      "Arroz arbório (xícara)": 1,
      "Abóbora (g)": 250,
      "Cebola (unidade)": 1,
      "Alho (dente)": 1,
      "Caldo de legumes (ml)": 400,
      "Azeite (ml)": 15,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Salsinha (colher de sopa)": 1
    },
    preparo: `
1. Refogue a cebola e o alho no azeite.
2. Acrescente a abóbora em cubos e refogue rapidamente.
3. Adicione o arroz arbório e refogue mais um pouco.
4. Acrescente o caldo de legumes aos poucos, mexendo sempre, até o arroz ficar cremoso.
5. Tempere com sal, pimenta e finalize com salsinha.
`
  },
  {
    nome: "Arroz colorido vegano",
    ingredientes: {
      "Arroz (xícara)": 1,
      "Cenoura (unidade)": 1,
      "Pimentão (unidade)": 1,
      "Milho verde (xícara)": 0.5,
      "Ervilha (xícara)": 0.5,
      "Cebola (unidade)": 1,
      "Alho (dente)": 1,
      "Óleo (ml)": 10,
      "Água (ml)": 400,
      "Sal (g)": 5,
      "Salsinha (colher de sopa)": 1
    },
    preparo: `
1. Refogue a cebola e o alho no óleo.
2. Junte a cenoura, o pimentão, milho e ervilha e refogue rapidamente.
3. Acrescente o arroz, refogue mais um pouco e adicione a água e o sal.
4. Cozinhe até secar e finalize com salsinha.
`
  },
  {
    nome: "Berinjela recheada com legumes",
    ingredientes: {
      "Berinjela (unidade)": 2,
      "Cenoura (unidade)": 1,
      "Abobrinha (unidade)": 1,
      "Tomate (unidade)": 1,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Azeite (ml)": 15,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Orégano (colher de chá)": 1,
      "Salsinha (colher de sopa)": 1
    },
    preparo: `
1. Corte as berinjelas ao meio e retire um pouco da polpa.
2. Refogue no azeite a polpa da berinjela, cenoura, abobrinha, tomate, cebola e alho picados.
3. Tempere com sal, pimenta e orégano.
4. Recheie as berinjelas, regue com azeite e leve ao forno por 25 minutos.
5. Finalize com salsinha.
`
  },
  {
    nome: "Panqueca vegana de legumes",
    ingredientes: {
      "Farinha de trigo (xícara)": 1,
      "Leite vegetal (ml)": 180,
      "Azeite (ml)": 10,
      "Sal (g)": 5,
      "Cenoura (unidade)": 1,
      "Abobrinha (unidade)": 1,
      "Tomate (unidade)": 1,
      "Cebola (unidade)": 0.5,
      "Alho (dente)": 1,
      "Pimenta-do-reino (g)": 1,
      "Orégano (colher de chá)": 1
    },
    preparo: `
1. Bata a farinha, o leite vegetal, azeite e sal até formar uma massa lisa.
2. Em uma frigideira untada, faça as panquecas.
3. Refogue os legumes picados em azeite e tempere com sal, pimenta e orégano.
4. Recheie as panquecas, enrole e sirva.
`
  },
  {
    nome: "Lentilha com legumes",
    ingredientes: {
      "Lentilha (xícara)": 1,
      "Cenoura (unidade)": 1,
      "Batata (unidade)": 1,
      "Tomate (unidade)": 1,
      "Cebola (unidade)": 1,
      "Alho (dente)": 2,
      "Óleo (ml)": 10,
      "Água (ml)": 400,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Salsinha (colher de sopa)": 1
    },
    preparo: `
1. Refogue a cebola e o alho no óleo.
2. Adicione cenoura, batata e tomate em cubos e refogue.
3. Acrescente a lentilha e cubra com água.
4. Tempere com sal e pimenta e cozinhe até ficar macia.
5. Finalize com salsinha.
`
  },
  {
    nome: "Arroz de forno vegano",
    ingredientes: {
      "Arroz cozido (xícara)": 2,
      "Cenoura (unidade)": 1,
      "Ervilha (xícara)": 0.5,
      "Milho verde (xícara)": 0.5,
      "Tomate (unidade)": 1,
      "Cebola (unidade)": 1,
      "Azeite (ml)": 15,
      "Leite de coco (ml)": 80,
      "Sal (g)": 5,
      "Pimenta-do-reino (g)": 1,
      "Orégano (colher de chá)": 1
    },
    preparo: `
1. Misture o arroz cozido com cenoura ralada, ervilha, milho, tomate e cebola picados.
2. Adicione azeite, leite de coco, sal, pimenta e orégano.
3. Transfira para um refratário, cubra com papel alumínio e leve ao forno por 20 minutos.
`
  },
  {
    nome: "Salada de quinoa colorida",
    ingredientes: {
      "Quinoa (xícara)": 1,
      "Tomate (unidade)": 2,
      "Pepino (unidade)": 1,
      "Cenoura (unidade)": 1,
      "Cebola (unidade)": 0.5,
      "Salsinha (colher de sopa)": 1,
      "Azeite (ml)": 15,
      "Limão (unidade)": 1,
      "Sal (g)": 4,
      "Pimenta-do-reino (g)": 1
    },
    preparo: `
1. Cozinhe a quinoa em água até ficar macia. Escorra e deixe esfriar.
2. Misture com tomate, pepino, cenoura ralada e cebola picados.
3. Tempere com azeite, limão, sal, pimenta e salsinha.
4. Sirva gelada.
`
  }
],
};
// Função: Converte string de fração ("1/3") para decimal
function parseQuantidade(q) {
  if (typeof q === "string" && q.includes("/")) {
    const [numerador, denominador] = q.split("/").map(Number);
    return numerador / denominador;
  }
  return Number(q);
}

// Função: Converte decimal para fração legível (ex: 0.5 → 1/2, 1.33 → 1 1/3)
function decimalParaFracao(decimal) {
  if (Number.isInteger(decimal)) return decimal + ""; // Inteiros
  const fracoesComuns = [
    [1/8, "1/8"], [1/6, "1/6"], [1/5, "1/5"], [1/4, "1/4"],
    [1/3, "1/3"], [3/8, "3/8"], [2/5, "2/5"], [1/2, "1/2"],
    [3/5, "3/5"], [5/8, "5/8"], [2/3, "2/3"], [3/4, "3/4"],
    [5/6, "5/6"], [7/8, "7/8"]
  ];
  const inteiro = Math.floor(decimal);
  const frac = decimal - inteiro;
  for (const [val, str] of fracoesComuns) {
    if (Math.abs(frac - val) < 0.03) {
      return inteiro ? `${inteiro} ${str}` : str;
    }
  }
  return decimal.toFixed(2).replace(/\.00$/, "");
}

// Monta os selects de proteína para cada dia útil
const diasContainer = document.getElementById("dias-container");
diasContainer.innerHTML = "";
diasUteis.forEach(dia => {
  const div = document.createElement("div");
  div.classList.add("dia");
  div.innerHTML = `
    <label>${dia}:</label>
    <select name="${dia}">
      <option value="aleatorio">Aleatório</option>
      <option value="carne">Carne</option>
      <option value="frango">Frango</option>
      <option value="peixe">Peixe</option>
      <option value="vegetariano">Vegetariano</option>
      <option value="vegano">Vegano</option>
    </select>
  `;
  diasContainer.appendChild(div);
});

// Gera cardápio, lista de compras e modo de preparo detalhado
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const pessoas = parseInt(document.getElementById("quantidade").value) || 3;
  const selects = document.querySelectorAll("select");
  const usados = new Set();
  const listaCompras = {};
  let resultadoHTML = "<h2>Cardápio da Semana</h2><ul>";
  let ultimaProteina = null;
  const pratosSemana = [];

  selects.forEach((select, index) => {
    const escolha = select.value;
    let proteina;

    if (escolha === "aleatorio") {
      const opcoes = Object.keys(receitas).filter(p => p !== ultimaProteina);
      proteina = opcoes[Math.floor(Math.random() * opcoes.length)];
    } else {
      proteina = escolha;
    }

    ultimaProteina = proteina;

    const pratosDisponiveis = receitas[proteina].filter(p => !usados.has(p.nome));
    let pratoSelecionado;

    if (pratosDisponiveis.length > 0) {
      pratoSelecionado = pratosDisponiveis[Math.floor(Math.random() * pratosDisponiveis.length)];
      usados.add(pratoSelecionado.nome);
    } else {
      pratoSelecionado = { nome: "⚠️ Nenhuma opção disponível", ingredientes: {}, preparo: "" };
    }

    pratosSemana.push(pratoSelecionado);

    resultadoHTML += `<li><strong>${diasUteis[index]}:</strong> ${pratoSelecionado.nome} (${proteina})</li>`;

    for (const [ingrediente, quantidade] of Object.entries(pratoSelecionado.ingredientes)) {
      const quantidadeUnitaria = parseQuantidade(quantidade);
      const total = quantidadeUnitaria * pessoas;
      if (!listaCompras[ingrediente]) {
        listaCompras[ingrediente] = 0;
      }
      listaCompras[ingrediente] += total;
    }
  });

  resultadoHTML += "</ul>";
  document.getElementById("resultado").innerHTML = resultadoHTML;

  // Exibir lista de compras formatada
  const comprasEl = document.getElementById("compras");
  comprasEl.style.display = "block";
  const listaEl = document.getElementById("lista-compras");
  listaEl.innerHTML = "";

  const ingredientesOrdenados = Object.entries(listaCompras).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [ingredienteCompleto, quantidade] of ingredientesOrdenados) {
    const match = ingredienteCompleto.match(/^(.+?)\s*\((.+?)\)$/);
    let nome = ingredienteCompleto;
    let unidade = "";
    if (match) {
      nome = match[1].trim();
      unidade = match[2].trim();
    }

    const quantidadeFormatada = decimalParaFracao(quantidade);

    let texto;
    if (unidade) {
      texto = `${quantidadeFormatada} ${unidade} de ${nome}`;
    } else {
      texto = `${quantidadeFormatada} ${nome}`;
    }

    const li = document.createElement("li");
    li.textContent = texto;
    listaEl.appendChild(li);
  }

  // Gerar e exibir modo de preparo detalhado com toggle e lista de ingredientes dinâmica
  const preparoContainer = document.getElementById("modo-preparo-container");
  preparoContainer.innerHTML = "";
  document.getElementById("preparo").style.display = "block";

  pratosSemana.forEach(prato => {
    if (prato && prato.preparo) {
      const details = document.createElement("details");
      details.className = "toggle";

      // Ingredientes (com separador)
      let ingredientesHtml = `
        <div class="preparo-ingredientes-titulo">
          Ingredientes para ${pessoas} pessoa${pessoas > 1 ? 's' : ''}:
        </div>
        <ul class="preparo-ingredientes-lista">`;
      Object.entries(prato.ingredientes).forEach(([ingrediente, quantidade]) => {
        const quantidadeUnitaria = parseQuantidade(quantidade);
        const total = quantidadeUnitaria * pessoas;
        const match = ingrediente.match(/^(.+?)\s*\((.+?)\)$/);
        let nome = ingrediente;
        let unidade = "";
        if (match) {
          nome = match[1].trim();
          unidade = match[2].trim();
        }
        const quantidadeFormatada = decimalParaFracao(total);
        let texto = unidade
          ? `${quantidadeFormatada} ${unidade} de ${nome}`
          : `${quantidadeFormatada} ${nome}`;
        ingredientesHtml += `<li>${texto}</li>`;
      });
      ingredientesHtml += '</ul><hr class="preparo-divider"/>';

      // Passo-a-passo elegante
      const passos = prato.preparo
        .trim()
        .split(/\n+/)
        .filter(p => p.length)
        .map(l => l.replace(/^\d+\.\s*/, "")); // Remove "1. ", "2. ", etc se tiver

      let passosHtml = `
        <div class="preparo-passoapasso-titulo">Modo de preparo</div>
        <ol class="preparo-passos">`;
      passos.forEach(passo => {
        passosHtml += `<li>${passo}</li>`;
      });
      passosHtml += "</ol>";

      details.innerHTML = `
        <summary>${prato.nome}</summary>
        ${ingredientesHtml}
        ${passosHtml}
      `;
      preparoContainer.appendChild(details);
    }
  });
});
