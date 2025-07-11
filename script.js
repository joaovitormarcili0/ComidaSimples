const diasUteis = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

const receitas = {
  carne: [
    {
      nome: "Carne moída com batata",
      ingredientes: { "Carne moída (g)": 450, "Batata (unid.)": 3, "Cebola (unid.)": 1, "Alho (dente)": 3 },
      preparo: `1. Descasque e corte as batatas em cubos médios. Reserve.
2. Em uma panela, aqueça um fio de óleo e refogue a cebola picada até dourar.
3. Acrescente o alho picado e mexa por 1 minuto.
4. Adicione a carne moída, tempere com sal e pimenta e refogue até perder a cor avermelhada.
5. Junte as batatas, misture, adicione água até cobrir e cozinhe em fogo médio com a panela semi-tampada.
6. Mexa de vez em quando até as batatas ficarem macias e o molho engrossar (cerca de 20 minutos).
7. Ajuste o sal, finalize com salsinha e sirva quente.`
    },
    {
      nome: "Bife acebolado com arroz e feijão",
      ingredientes: { "Bife (g)": 450, "Cebola (unid.)": 1, "Arroz (xícara)": 1.5, "Feijão (xícara)": 1.5 },
      preparo: `1. Tempere os bifes com sal, pimenta e alho. Reserve.
2. Em uma panela, refogue a cebola picada até começar a dourar.
3. Frite os bifes em frigideira bem quente, virando para dourar dos dois lados.
4. Em seguida, retire os bifes e, na mesma frigideira, adicione as cebolas em rodelas. Refogue até ficarem douradas e jogue sobre os bifes.
5. Prepare o arroz e o feijão conforme de costume.
6. Sirva os bifes acebolados com arroz e feijão, acompanhados de salada verde.`
    },
    {
      nome: "Carne de panela com legumes",
      ingredientes: { "Carne de panela (g)": 450, "Batata (unid.)": 3, "Cenoura (unid.)": 2, "Alho (dente)": 3 },
      preparo: `1. Corte a carne em cubos grandes. Tempere com sal e pimenta.
2. Em uma panela de pressão, doure os pedaços de carne com um fio de óleo.
3. Acrescente cebola e alho picados e refogue por 2 minutos.
4. Adicione batata e cenoura cortadas em pedaços médios, cubra com água e feche a panela.
5. Cozinhe por 25 minutos após pegar pressão.
6. Desligue o fogo, espere a pressão sair e abra a panela.
7. Ajuste os temperos e sirva com arroz ou purê de batata.`
    },
    {
      nome: "Estrogonofe de carne",
      ingredientes: { "Carne (g)": 450, "Creme de leite (caixa)": 1 },
      preparo: `1. Corte a carne em tiras ou cubos. Tempere com sal e pimenta.
2. Em uma panela, aqueça manteiga ou óleo, doure a carne aos poucos e reserve.
3. Na mesma panela, refogue cebola picada até dourar e adicione a carne novamente.
4. Acrescente ketchup, mostarda e molho inglês a gosto.
5. Junte o creme de leite, mexa bem e cozinhe por 5 minutos em fogo baixo.
6. Sirva com arroz branco e batata palha.`
    },
    {
      nome: "Picadinho de carne com molho madeira",
      ingredientes: { "Carne picada (g)": 450, "Molho madeira (ml)": 200 },
      preparo: `1. Corte a carne em cubos pequenos. Tempere com sal e pimenta.
2. Aqueça uma panela com um fio de óleo, doure a carne, junte cebola picada e refogue.
3. Acrescente molho madeira, misture bem e deixe cozinhar até encorpar.
4. Acerte o sal, finalize com salsinha e sirva com arroz ou purê de batata.`
    },
    {
      nome: "Rocambole de carne recheado com queijo",
      ingredientes: { "Carne moída (g)": 450, "Queijo (g)": 150 },
      preparo: `1. Misture a carne moída com temperos a gosto, sal e pimenta.
2. Abra a carne em um plástico-filme, formando um retângulo.
3. Espalhe queijo ralado ou fatiado por cima e enrole como um rocambole, usando o plástico para ajudar.
4. Coloque em uma assadeira untada, pincele com azeite e leve ao forno médio (200°C) por cerca de 30-40 minutos.
5. Fatie e sirva com arroz e salada.`
    },
    {
      nome: "Almôndegas ao sugo",
      ingredientes: { "Carne moída (g)": 450, "Molho de tomate (ml)": 300 },
      preparo: `1. Misture a carne moída com alho picado, sal, pimenta, cheiro-verde e um pouco de farinha de rosca.
2. Modele bolinhas e reserve.
3. Aqueça um fio de óleo em uma panela, doure as almôndegas de todos os lados.
4. Adicione molho de tomate, tampe e cozinhe por cerca de 20 minutos em fogo baixo.
5. Sirva com arroz ou macarrão.`
    },
    {
      nome: "Tiras de carne com pimentão",
      ingredientes: { "Carne em tiras (g)": 450, "Pimentão (unid.)": 2 },
      preparo: `1. Corte a carne e o pimentão em tiras finas.
2. Em uma frigideira grande, aqueça um fio de óleo e doure a carne em fogo alto.
3. Adicione o pimentão e refogue até ficar levemente macio.
4. Tempere com sal, pimenta e molho shoyu, se desejar.
5. Sirva com arroz ou pão.`
    },
    {
      nome: "Carne louca desfiada",
      ingredientes: { "Carne desfiada (g)": 450, "Cebola (unid.)": 1 },
      preparo: `1. Cozinhe a carne em panela de pressão com água, sal, folha de louro e pimenta até ficar macia.
2. Deixe esfriar e desfie a carne.
3. Em uma panela grande, refogue cebola e pimentão fatiados até ficarem macios.
4. Adicione a carne desfiada, misture bem, corrija o sal e refogue por mais alguns minutos.
5. Sirva em sanduíches, com arroz ou como recheio de tortas.`
    },
    {
      nome: "Escondidinho de carne moída",
      ingredientes: { "Carne moída (g)": 450, "Purê de batata (g)": 500 },
      preparo: `1. Prepare um purê de batata (cozinhe batatas, amasse, tempere com sal e um pouco de manteiga).
2. Refogue a carne moída com cebola, alho e temperos a gosto.
3. Em um refratário, faça uma camada de purê, espalhe a carne refogada por cima e cubra com o restante do purê.
4. Salpique queijo ralado e leve ao forno médio para gratinar.
5. Sirva quente.`
    }
  ],
  frango: [
    {
      nome: "Frango grelhado com legumes",
      ingredientes: { "Peito de frango (g)": 450, "Legumes variados (g)": 300 },
      preparo: `1. Corte o peito de frango em filés e tempere com sal, pimenta, limão e ervas de sua preferência.
2. Grelhe os filés em uma frigideira antiaderente até dourar dos dois lados.
3. Cozinhe os legumes no vapor ou na água até ficarem macios.
4. Sirva o frango acompanhado dos legumes e finalize com azeite.`
    },
    {
      nome: "Estrogonofe de frango",
      ingredientes: { "Frango em cubos (g)": 450, "Creme de leite (caixa)": 1 },
      preparo: `1. Corte o frango em cubos, tempere com sal, pimenta e limão.
2. Em uma panela, doure o frango em um pouco de óleo ou manteiga.
3. Acrescente cebola picada, refogue, junte ketchup, mostarda e molho de tomate.
4. Cozinhe por 10 minutos em fogo baixo.
5. Adicione o creme de leite, misture bem e desligue o fogo.
6. Sirva com arroz branco e batata palha.`
    },
    {
      nome: "Frango xadrez",
      ingredientes: { "Frango em cubos (g)": 450, "Pimentão (unid.)": 2 },
      preparo: `1. Corte o frango em cubos e tempere com sal, pimenta e um pouco de shoyu.
2. Em uma frigideira, doure o frango em óleo quente.
3. Acrescente pimentões cortados em cubos e refogue rapidamente.
4. Adicione molho shoyu e, se desejar, um pouco de amido de milho dissolvido em água para engrossar.
5. Sirva com arroz branco.`
    },
    {
      nome: "Sobrecoxa assada com batatas",
      ingredientes: { "Sobrecoxa (g)": 450, "Batata (unid.)": 3 },
      preparo: `1. Tempere as sobrecoxas com alho, sal, pimenta, limão e ervas.
2. Disponha as sobrecoxas em uma assadeira junto com batatas cortadas em rodelas grossas.
3. Regue com azeite e leve ao forno médio (200°C) por 40-50 minutos, virando na metade do tempo.
4. Sirva com arroz e salada.`
    },
    {
      nome: "Frango desfiado com creme de milho",
      ingredientes: { "Frango desfiado (g)": 450, "Creme de milho (lata)": 1 },
      preparo: `1. Cozinhe o peito de frango em água, sal e temperos até ficar macio. Desfie e reserve.
2. Bata o milho no liquidificador com um pouco de leite até formar um creme.
3. Refogue cebola e alho em uma panela, acrescente o creme de milho e mexa até engrossar.
4. Junte o frango desfiado, misture bem e ajuste o sal.
5. Sirva com arroz e batata palha.`
    },
    {
      nome: "Coxinha da asa assada com limão e alho",
      ingredientes: { "Coxinha da asa (g)": 450, "Alho (dente)": 3, "Limão (unid.)": 1 },
      preparo: `1. Tempere as coxinhas da asa com alho picado, suco de limão, sal e pimenta.
2. Deixe marinar por 20 minutos.
3. Disponha em uma assadeira e leve ao forno pré-aquecido (200°C) por cerca de 40 minutos, virando na metade do tempo.
4. Sirva com arroz ou salada.`
    },
    {
      nome: "Frango empanado na frigideira",
      ingredientes: { "Filé de frango (g)": 450, "Farinha de rosca (g)": 80 },
      preparo: `1. Tempere os filés de frango com sal, pimenta e limão.
2. Passe cada filé na farinha de trigo, depois no ovo batido e por fim na farinha de rosca.
3. Aqueça uma frigideira com óleo e frite os filés até dourar dos dois lados.
4. Escorra em papel absorvente e sirva.`
    },
    {
      nome: "Frango ao curry com arroz",
      ingredientes: { "Frango em cubos (g)": 450, "Curry (colher)": 2, "Arroz branco (xícara)": 1.5 },
      preparo: `1. Corte o frango em cubos, tempere com sal e pimenta.
2. Doure o frango em uma panela com óleo.
3. Acrescente curry em pó, mexa bem, junte arroz cru e refogue por alguns minutos.
4. Adicione água quente, corrija o sal e cozinhe até o arroz e o frango ficarem macios.
5. Sirva com cheiro-verde.`
    },
    {
      nome: "Frango ao molho de laranja",
      ingredientes: { "Filé de frango (g)": 450, "Suco de laranja (ml)": 150 },
      preparo: `1. Tempere os filés de frango com sal, pimenta e alho.
2. Grelhe os filés em uma frigideira até dourar dos dois lados.
3. Misture suco de laranja fresco, uma pitada de açúcar e, se desejar, um pouco de mostarda.
4. Jogue o molho sobre o frango na frigideira, deixe reduzir um pouco e sirva em seguida.
5. Ótimo com arroz branco ou purê de batata.`
    },
    {
      nome: "Panqueca recheada com frango e requeijão",
      ingredientes: { "Frango desfiado (g)": 300, "Requeijão (g)": 100, "Massa de panqueca (unid.)": 6 },
      preparo: `1. Cozinhe e desfie o peito de frango, tempere a gosto.
2. Misture o frango desfiado com requeijão.
3. Prepare a massa de panqueca e recheie cada unidade com o frango.
4. Enrole, disponha em um refratário, cubra com molho de tomate e leve ao forno para aquecer.
5. Sirva com queijo ralado por cima.`
    }
  ],
  peixe: [
  {
    nome: "Filé de tilápia grelhado com arroz",
    ingredientes: { "Filé de tilápia (g)": 450, "Arroz branco (xícara)": 1.5 },
    preparo: `1. Tempere os filés de tilápia com limão, sal e pimenta a gosto.
2. Em uma frigideira antiaderente, aqueça um fio de azeite e grelhe os filés até dourar dos dois lados.
3. Cozinhe o arroz conforme de costume.
4. Sirva o peixe acompanhado do arroz branco e de uma salada fresca.`
  },
  {
    nome: "Moqueca de peixe simples",
    ingredientes: { "Peixe em postas (g)": 450, "Pimentão (unid.)": 2, "Cebola (unid.)": 1, "Leite de coco (ml)": 200 },
    preparo: `1. Tempere as postas de peixe com sal, limão e pimenta.
2. Em uma panela, faça camadas de peixe, pimentão, cebola e tomate (opcional).
3. Regue com leite de coco e azeite de dendê (opcional).
4. Cozinhe em fogo baixo, panela semi-tampada, por cerca de 20 minutos até o peixe ficar macio.
5. Finalize com coentro ou cheiro-verde. Sirva com arroz branco.`
  },
  {
    nome: "Peixe assado com legumes",
    ingredientes: { "Filé de peixe (g)": 450, "Batata (unid.)": 3, "Cenoura (unid.)": 2, "Cebola (unid.)": 1 },
    preparo: `1. Tempere o peixe com sal, limão, ervas e azeite.
2. Em uma assadeira, coloque o peixe e acrescente batatas, cenouras e cebolas fatiadas ao redor.
3. Cubra com papel-alumínio e leve ao forno médio (200°C) por 25 minutos.
4. Retire o papel e asse mais 10 minutos para dourar.
5. Sirva com arroz e salada.`
  },
  {
    nome: "Iscas de peixe empanado",
    ingredientes: { "Iscas de peixe (g)": 450, "Farinha de trigo (g)": 80 },
    preparo: `1. Corte o peixe em tiras e tempere com sal, pimenta e limão.
2. Passe as tiras na farinha de trigo.
3. Frite em óleo quente até dourar.
4. Escorra em papel absorvente e sirva com limão.`
  },
  {
    nome: "Bolinho de peixe",
    ingredientes: { "Peixe cozido (g)": 300, "Farinha de trigo (g)": 80 },
    preparo: `1. Cozinhe o peixe, desfie e misture com temperos, ovo e farinha até dar liga.
2. Modele bolinhas, empane na farinha e frite em óleo quente até dourar.
3. Sirva quente como acompanhamento ou petisco.`
  },
  {
    nome: "Peixe ao molho de tomate",
    ingredientes: { "Filé de peixe (g)": 450, "Molho de tomate (ml)": 200 },
    preparo: `1. Tempere os filés com sal e limão.
2. Refogue cebola e alho em azeite, adicione molho de tomate.
3. Coloque os filés no molho, tampe e cozinhe por 10 minutos.
4. Sirva com arroz ou purê de batata.`
  },
  {
    nome: "Peixe ao forno com batata e cebola",
    ingredientes: { "Filé de peixe (g)": 450, "Batata (unid.)": 3, "Cebola (unid.)": 1 },
    preparo: `1. Tempere os filés com sal, limão e ervas.
2. Forre uma assadeira com batatas e cebolas em rodelas.
3. Coloque o peixe por cima, regue com azeite e cubra com papel-alumínio.
4. Leve ao forno médio (200°C) por 30 minutos.
5. Retire o papel e deixe dourar mais 10 minutos.`
  },
  {
    nome: "Torta de peixe de liquidificador",
    ingredientes: { "Peixe desfiado (g)": 300, "Farinha de trigo (g)": 100 },
    preparo: `1. Cozinhe e desfie o peixe.
2. Bata os ingredientes da massa no liquidificador.
3. Misture o peixe desfiado com temperos.
4. Em uma forma untada, despeje metade da massa, coloque o recheio e cubra com o restante da massa.
5. Leve ao forno médio até dourar.`
  },
  {
    nome: "Arroz com peixe",
    ingredientes: { "Arroz branco (xícara)": 1.5, "Peixe em cubos (g)": 400 },
    preparo: `1. Corte o peixe em cubos, tempere com sal e limão.
2. Refogue o peixe rapidamente com cebola e alho.
3. Acrescente arroz cru, refogue por mais alguns minutos e adicione água quente.
4. Cozinhe até o arroz e o peixe ficarem macios.
5. Finalize com cheiro-verde picado.`
  },
  {
    nome: "Peixe frito com farofa e salada",
    ingredientes: { "Filé de peixe (g)": 450, "Farinha de mandioca (g)": 100 },
    preparo: `1. Tempere os filés de peixe com limão, sal e pimenta.
2. Passe na farinha de trigo e frite em óleo quente até dourar.
3. Prepare a farofa dourando farinha de mandioca na manteiga com temperos.
4. Sirva o peixe frito acompanhado da farofa e salada fresca.`
  }
],
peixe: [
  {
    nome: "Filé de tilápia grelhado com arroz",
    ingredientes: { "Filé de tilápia (g)": 450, "Arroz branco (xícara)": 1.5 },
    preparo: `1. Tempere os filés de tilápia com limão, sal e pimenta a gosto.
2. Em uma frigideira antiaderente, aqueça um fio de azeite e grelhe os filés até dourar dos dois lados.
3. Cozinhe o arroz conforme de costume.
4. Sirva o peixe acompanhado do arroz branco e de uma salada fresca.`
  },
  {
    nome: "Moqueca de peixe simples",
    ingredientes: { "Peixe em postas (g)": 450, "Pimentão (unid.)": 2, "Cebola (unid.)": 1, "Leite de coco (ml)": 200 },
    preparo: `1. Tempere as postas de peixe com sal, limão e pimenta.
2. Em uma panela, faça camadas de peixe, pimentão, cebola e tomate (opcional).
3. Regue com leite de coco e azeite de dendê (opcional).
4. Cozinhe em fogo baixo, panela semi-tampada, por cerca de 20 minutos até o peixe ficar macio.
5. Finalize com coentro ou cheiro-verde. Sirva com arroz branco.`
  },
  {
    nome: "Peixe assado com legumes",
    ingredientes: { "Filé de peixe (g)": 450, "Batata (unid.)": 3, "Cenoura (unid.)": 2, "Cebola (unid.)": 1 },
    preparo: `1. Tempere o peixe com sal, limão, ervas e azeite.
2. Em uma assadeira, coloque o peixe e acrescente batatas, cenouras e cebolas fatiadas ao redor.
3. Cubra com papel-alumínio e leve ao forno médio (200°C) por 25 minutos.
4. Retire o papel e asse mais 10 minutos para dourar.
5. Sirva com arroz e salada.`
  },
  {
    nome: "Iscas de peixe empanado",
    ingredientes: { "Iscas de peixe (g)": 450, "Farinha de trigo (g)": 80 },
    preparo: `1. Corte o peixe em tiras e tempere com sal, pimenta e limão.
2. Passe as tiras na farinha de trigo.
3. Frite em óleo quente até dourar.
4. Escorra em papel absorvente e sirva com limão.`
  },
  {
    nome: "Bolinho de peixe",
    ingredientes: { "Peixe cozido (g)": 300, "Farinha de trigo (g)": 80 },
    preparo: `1. Cozinhe o peixe, desfie e misture com temperos, ovo e farinha até dar liga.
2. Modele bolinhas, empane na farinha e frite em óleo quente até dourar.
3. Sirva quente como acompanhamento ou petisco.`
  },
  {
    nome: "Peixe ao molho de tomate",
    ingredientes: { "Filé de peixe (g)": 450, "Molho de tomate (ml)": 200 },
    preparo: `1. Tempere os filés com sal e limão.
2. Refogue cebola e alho em azeite, adicione molho de tomate.
3. Coloque os filés no molho, tampe e cozinhe por 10 minutos.
4. Sirva com arroz ou purê de batata.`
  },
  {
    nome: "Peixe ao forno com batata e cebola",
    ingredientes: { "Filé de peixe (g)": 450, "Batata (unid.)": 3, "Cebola (unid.)": 1 },
    preparo: `1. Tempere os filés com sal, limão e ervas.
2. Forre uma assadeira com batatas e cebolas em rodelas.
3. Coloque o peixe por cima, regue com azeite e cubra com papel-alumínio.
4. Leve ao forno médio (200°C) por 30 minutos.
5. Retire o papel e deixe dourar mais 10 minutos.`
  },
  {
    nome: "Torta de peixe de liquidificador",
    ingredientes: { "Peixe desfiado (g)": 300, "Farinha de trigo (g)": 100 },
    preparo: `1. Cozinhe e desfie o peixe.
2. Bata os ingredientes da massa no liquidificador.
3. Misture o peixe desfiado com temperos.
4. Em uma forma untada, despeje metade da massa, coloque o recheio e cubra com o restante da massa.
5. Leve ao forno médio até dourar.`
  },
  {
    nome: "Arroz com peixe",
    ingredientes: { "Arroz branco (xícara)": 1.5, "Peixe em cubos (g)": 400 },
    preparo: `1. Corte o peixe em cubos, tempere com sal e limão.
2. Refogue o peixe rapidamente com cebola e alho.
3. Acrescente arroz cru, refogue por mais alguns minutos e adicione água quente.
4. Cozinhe até o arroz e o peixe ficarem macios.
5. Finalize com cheiro-verde picado.`
  },
  {
    nome: "Peixe frito com farofa e salada",
    ingredientes: { "Filé de peixe (g)": 450, "Farinha de mandioca (g)": 100 },
    preparo: `1. Tempere os filés de peixe com limão, sal e pimenta.
2. Passe na farinha de trigo e frite em óleo quente até dourar.
3. Prepare a farofa dourando farinha de mandioca na manteiga com temperos.
4. Sirva o peixe frito acompanhado da farofa e salada fresca.`
  }
],
vegetariano: [
  {
    nome: "Omelete de legumes",
    ingredientes: { "Ovos (unid.)": 6, "Legumes variados (g)": 200 },
    preparo: `1. Bata os ovos em uma tigela e tempere com sal e pimenta.
2. Misture legumes ralados ou picados e queijo ralado, se desejar.
3. Aqueça uma frigideira antiaderente com um fio de azeite.
4. Despeje a mistura e cozinhe em fogo baixo até dourar embaixo.
5. Vire com cuidado para dourar o outro lado. Sirva quente.`
  },
  {
    nome: "Macarrão ao pesto",
    ingredientes: { "Macarrão (g)": 300, "Molho pesto (colher)": 6 },
    preparo: `1. Cozinhe o macarrão conforme instruções da embalagem.
2. Escorra e misture imediatamente ao molho pesto.
3. Sirva com queijo parmesão ralado e pimenta-do-reino moída na hora.`
  },
  {
    nome: "Risoto de cogumelos",
    ingredientes: { "Arroz arbório (xícara)": 1.5, "Cogumelos (g)": 200 },
    preparo: `1. Refogue cebola e alho em azeite, junte os cogumelos fatiados e refogue até murchar.
2. Acrescente o arroz arbório e refogue por 2 minutos.
3. Adicione caldo de legumes aos poucos, mexendo sempre, até o arroz ficar cremoso e al dente.
4. Finalize com queijo parmesão e salsinha. Sirva imediatamente.`
  },
  {
    nome: "Lasanha de berinjela",
    ingredientes: { "Berinjela (unid.)": 2, "Molho de tomate (ml)": 300, "Queijo (g)": 150 },
    preparo: `1. Corte a berinjela em fatias finas, salpique sal e deixe descansar 10 minutos.
2. Grelhe as fatias até dourar levemente.
3. Monte a lasanha intercalando camadas de molho de tomate, berinjela e queijo em um refratário.
4. Finalize com queijo e leve ao forno para gratinar.
5. Sirva quente.`
  },
  {
    nome: "Quibe de abóbora com ricota",
    ingredientes: { "Abóbora (g)": 300, "Ricota (g)": 150 },
    preparo: `1. Cozinhe a abóbora, amasse e misture com ricota esfarelada, hortelã e temperos.
2. Adicione trigo para quibe hidratado, misture até dar liga.
3. Espalhe a massa em uma assadeira untada, regue com azeite e leve ao forno médio até dourar.
4. Sirva quente ou frio.`
  },
  {
    nome: "Torta de legumes de liquidificador",
    ingredientes: { "Legumes variados (g)": 200, "Farinha de trigo (g)": 100 },
    preparo: `1. Bata no liquidificador ovos, leite, óleo, farinha e fermento até formar uma massa.
2. Misture legumes variados já cozidos ou refogados à massa.
3. Despeje em uma forma untada e asse em forno médio até dourar.
4. Espere amornar antes de cortar.`
  },
  {
    nome: "Panqueca de espinafre e ricota",
    ingredientes: { "Espinafre (maço)": 1, "Ricota (g)": 120, "Massa de panqueca (unid.)": 6 },
    preparo: `1. Refogue espinafre em azeite até murchar, escorra o excesso de água e pique.
2. Misture com ricota esfarelada, tempere com sal, noz-moscada e pimenta.
3. Prepare a massa das panquecas e recheie com a mistura de espinafre e ricota.
4. Enrole, cubra com molho de tomate e leve ao forno para aquecer.
5. Sirva com queijo ralado.`
  },
  {
    nome: "Legumes assados com ervas",
    ingredientes: { "Legumes variados (g)": 300, "Ervas finas (colher)": 1 },
    preparo: `1. Corte legumes como cenoura, batata, abobrinha, brócolis em pedaços médios.
2. Tempere com azeite, sal, pimenta e ervas finas.
3. Disponha em uma assadeira e leve ao forno médio (200°C) até dourar (cerca de 35 minutos), mexendo na metade do tempo.
4. Sirva como prato principal ou acompanhamento.`
  },
  {
    nome: "Escondidinho de mandioquinha e cogumelos",
    ingredientes: { "Mandioquinha (g)": 300, "Cogumelos (g)": 150 },
    preparo: `1. Cozinhe a mandioquinha, amasse e tempere com sal, azeite e noz-moscada para fazer um purê.
2. Refogue cogumelos fatiados com alho, sal e pimenta.
3. Em um refratário, faça uma camada de purê, depois os cogumelos refogados e cubra com mais purê.
4. Leve ao forno para aquecer e dourar levemente.
5. Sirva quente.`
  },
  {
    nome: "Moqueca de banana-da-terra",
    ingredientes: { "Banana-da-terra (unid.)": 3, "Leite de coco (ml)": 200 },
    preparo: `1. Corte as bananas-da-terra em rodelas e tempere com sal, limão e pimenta.
2. Em uma panela, faça camadas de banana, tomate e cebola fatiados.
3. Regue com leite de coco, azeite de dendê (opcional) e cozinhe em fogo baixo por cerca de 15 minutos.
4. Finalize com cheiro-verde ou coentro.
5. Sirva com arroz branco.`
  }
],
vegano: [
  {
    nome: "Grão-de-bico com legumes",
    ingredientes: { "Grão-de-bico cozido (xícara)": 2, "Legumes variados (g)": 200 },
    preparo: `1. Deixe o grão-de-bico de molho por 8 horas, cozinhe até ficar macio e escorra.
2. Em uma panela, refogue alho e cebola, junte os legumes picados e refogue até ficarem al dente.
3. Acrescente o grão-de-bico, tempere com sal, pimenta e cheiro-verde.
4. Sirva como prato principal ou acompanhamento.`
  },
  {
    nome: "Curry de lentilha",
    ingredientes: { "Lentilha (xícara)": 1.5, "Leite de coco (ml)": 200, "Tomate (unid.)": 2, "Cebola (unid.)": 1 },
    preparo: `1. Cozinhe a lentilha até ficar macia.
2. Em uma panela, refogue cebola e tomate picados até desmanchar.
3. Adicione a lentilha cozida, o leite de coco e curry em pó a gosto.
4. Deixe apurar até engrossar levemente, ajuste o sal e sirva com arroz.`
  },
  {
    nome: "Arroz integral com tofu",
    ingredientes: { "Arroz integral (xícara)": 1.5, "Tofu (g)": 300 },
    preparo: `1. Cozinhe o arroz integral em água e sal.
2. Corte o tofu em cubos e doure com um pouco de azeite, sal e páprica.
3. Misture o tofu ao arroz pronto, finalize com salsinha picada.
4. Sirva quente ou frio, como preferir.`
  },
  {
    nome: "Berinjela recheada com quinoa",
    ingredientes: { "Berinjela (unid.)": 2, "Quinoa (xícara)": 1 },
    preparo: `1. Corte as berinjelas ao meio, retire parte do miolo e reserve.
2. Cozinhe a quinoa e refogue com cebola, tomate e o miolo da berinjela picado.
3. Recheie as metades de berinjela com a quinoa, regue com azeite.
4. Leve ao forno médio até dourar e ficar macio.
5. Sirva com salada verde.`
  },
  {
    nome: "Chili vegano de feijão",
    ingredientes: { "Feijão cozido (xícara)": 2, "Tomate (unid.)": 2 },
    preparo: `1. Cozinhe o feijão até ficar macio.
2. Em uma panela, refogue cebola, alho e tomate picado.
3. Junte o feijão, tempere com páprica, cominho, sal e pimenta a gosto.
4. Cozinhe até engrossar, finalize com coentro ou cheiro-verde.`
  },
  {
    nome: "Abobrinha recheada com legumes",
    ingredientes: { "Abobrinha (unid.)": 2, "Legumes variados (g)": 150 },
    preparo: `1. Corte as abobrinhas ao meio, retire parte do miolo.
2. Refogue o miolo com outros legumes picados, tempere a gosto.
3. Recheie as abobrinhas e regue com azeite.
4. Leve ao forno médio até ficar macia e levemente dourada.
5. Sirva quente ou fria.`
  },
  {
    nome: "Hambúrguer de lentilha",
    ingredientes: { "Lentilha cozida (xícara)": 2, "Farinha de aveia (g)": 80 },
    preparo: `1. Cozinhe a lentilha e escorra bem.
2. Misture com a farinha de aveia, cebola picada, cheiro-verde, sal e pimenta.
3. Modele hambúrgueres e grelhe em frigideira untada até dourar dos dois lados.
4. Sirva no pão ou com salada.`
  },
  {
    nome: "Bobó de mandioquinha e coco",
    ingredientes: { "Mandioquinha (g)": 300, "Leite de coco (ml)": 200 },
    preparo: `1. Cozinhe a mandioquinha até ficar macia e amasse formando um purê.
2. Em uma panela, refogue cebola e alho, acrescente o purê de mandioquinha.
3. Misture o leite de coco e tempere com sal e pimenta.
4. Cozinhe até engrossar levemente e finalize com cheiro-verde.`
  },
  {
    nome: "Moqueca de palmito",
    ingredientes: { "Palmito (g)": 200, "Leite de coco (ml)": 200 },
    preparo: `1. Em uma panela, refogue cebola, pimentão e tomate.
2. Acrescente o palmito em rodelas e refogue rapidamente.
3. Junte o leite de coco, um pouco de azeite de dendê (opcional) e cheiro-verde.
4. Cozinhe por 5 minutos em fogo baixo.
5. Sirva com arroz branco.`
  },
  {
    nome: "Espaguete de abobrinha ao molho de tomate",
    ingredientes: { "Abobrinha (unid.)": 3, "Molho de tomate (ml)": 200 },
    preparo: `1. Corte as abobrinhas em tiras finas (tipo espaguete) usando ralador ou espiralizador.
2. Refogue rapidamente em uma frigideira com azeite e sal, só para murchar levemente.
3. Aqueça o molho de tomate e misture ao espaguete de abobrinha.
4. Sirva com manjericão fresco e azeite.`
  }
],
};

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
      const total = (quantidade / 3) * pessoas;
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

    const quantidadeFormatada =
      Number.isInteger(quantidade)
        ? quantidade
        : quantidade % 1 === 0
        ? quantidade
        : quantidade.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");

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

  // Gerar e exibir modo de preparo detalhado com toggle
  const preparoContainer = document.getElementById("modo-preparo-container");
  preparoContainer.innerHTML = "";
  document.getElementById("preparo").style.display = "block";

  pratosSemana.forEach(prato => {
    if (prato && prato.preparo) {
      const details = document.createElement("details");
      details.className = "toggle";
      details.innerHTML = `
        <summary>${prato.nome}</summary>
        <pre style="white-space: pre-wrap; font-family: inherit;">${prato.preparo}</pre>
      `;
      preparoContainer.appendChild(details);
    }
  });
});
