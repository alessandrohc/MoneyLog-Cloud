//
// Este é o arquivo de configuração do MoneyLog.
//
// Aqui você pode alterar o comportamento padrão do programa, modificando as
// opções disponíveis. Você pode, por exemplo, mudar o idioma para inglês ou
// sempre iniciar no relatório mensal.
//
// Para saber mais informações sobre cada uma das opções, visite:
//
//     http://aurelio.net/moneylog/config/
//
//////////////////////////////////////////////////////////////////////////////
//
// Este é um arquivo em JavaScript, você deve seguir as regras de sintaxe da
// linguagem. Se você não sabe nada de JavaScript, não se preocupe. Vou lhe
// explicar o básico necessário. As opções estão logo após este texto
// explicativo.
//
// COMO ATIVAR/DESATIVAR UMA OPÇÃO
// -------------------------------
//
// Todas as opções deste arquivo estão desativadas. Isso quer dizer que
// nenhuma delas vai afetar o funcionamento do MoneyLog. Você precisa ativar
// aquelas que desejar utilizar.
//
// É muito simples, para ativar uma opção, basta apagar os // que estão no
// começo da linha.
//
// De:
//     // opcaoBacana = 12         ;// comentário
//
// Para:
//     opcaoBacana = 12         ;// comentário
//
// Se você mudar de ideia e quiser desativar a opção, fazendo o MoneyLog
// voltar ao seu comportamento padrão, basta recolocar os // na frente.
//
//
// COMO ALTERAR UMA OPÇÃO ATIVA
// ----------------------------
//
// Basta apenas alterar o conteúdo de cada opção e não mexer no resto.
// Por exemplo, estes são os três formatos que você vai encontrar:
//
//     opcaoBacana = 12         ;// comentário
//     opcaoBacana = 'texto'    ;// comentário
//     opcaoBacana = true       ;// comentário
//
// No primeiro exemplo o conteúdo é um número, 12. Basta você trocar este
// número por outro e pronto. Deixe todo o resto intocado.
//
// No segundo exemplo é uma opção que recebe um texto entre aspas. As aspas
// são importantes, não as apague. Apenas troque a palavra que está dentro
// delas.
//
// No terceiro exemplo é uma opção do tipo LIGA/DESLIGA. Há somente dois
// valores possíveis para ela: true (LIGA) e false (DESLIGA). Não use números
// ou qualquer outra palavra, nem aspas.
//
//////////////////////////////////////////////////////////////////////////////


////// SENHA DE ACESSO
//
// Você pode definir uma senha de acesso, para impedir que outras pessoas
// vejam seus dados. Porém, saiba que esta é uma proteção bem simples, que
// pode ser facilmente quebrada por quem entende de tecnologias web. Use
// apenas para impedir o acesso casual de familiares ou colegas não-nerds.
//
// myPassword = 'abc123'        ;// Pedir esta senha ao iniciar o app


////// IDIOMA
//
// lang = 'pt'                  ;// pt, en, es (Português, Inglês, Espanhol)


////// EXTRATO PADRÃO AO INICIAR
//
// reportType = 'd'             ;// d, m, y (diário, mensal, anual)


////// TELA CHEIA
//
// initFullScreen = false       ;// Iniciar o app já no modo Tela Cheia?


////// BUSCA
//
// defaultSearch = ''           ;// Iniciar já pesquisando por este texto
// checkRegex = false           ;// Marcar a opção [X] regex?
// checkNegate = false          ;// Marcar a opção [X] excluir?


////// PERÍODO - DATA INICIAL E FINAL
//
// checkDateFrom = true         ;// Iniciar marcando a opção [X] De:?
// checkDateUntil = true        ;// Iniciar marcando a opção [X] Até:?
//
// As duas opções seguintes servem para escolher qual será o valor padrão
// que virá escolhido nos seletores de data De: e Até:. Coloque um número,
// positivo ou negativo, que indicará o número de meses à partir da data
// atual. Use números positivos para meses futuros e negativos para os
// passados. Por exemplo, para dizer "três meses atrás", use -3. Para dizer
// mês seguinte, use 1. Zero significa o mês corrente.
//
// initMonthOffsetFrom = -2     ;// Valor inicial da opção [X] De:
// initMonthOffsetUntil = 0     ;// Valor inicial da opção [X] Até:


////// PARCIAIS MENSAIS
//
// checkMonthPartials = true    ;// Iniciar mostrando as parciais mensais?


////// SOMENTE VALORES
//
// Nada ainda.


////// WIDGETS
//
// initViewWidgetOpen = true    ;// Iniciar com a caixa Visualizar aberta?
// initTagCloudOpen = true      ;// Iniciar com a Nuvem de Tags aberta?
// showTagCloud = true          ;// Usar o widget Nuvem de Tags?


////// WIDGET: SOMATÓRIO DE TAGS
// TagSummary.config.active = true      ;// Usar o widget Somatório de tags?
// TagSummary.config.opened = true      ;// Iniciar com este widget já aberto?
// TagSummary.config.showTagless = true ;// Mostrar o item (sem tag)?
// TagSummary.config.checkSort = false  ;// Iniciar marcando a opção [X] Ordenar por valor?


////// TABELA DO EXTRATO
//
// showBalance = true           ;// Mostrar a coluna Acumulado?
// showRowCount = true          ;// Mostrar o número da linha à esquerda?
// monthlyRowCount = true       ;// O número da linha recomeça a cada mês?
//
// highlightWords = 'XXX TODO'  ;// Destacar estas palavras na Descrição
// highlightTags = 'luz água'   ;// Destacar estas tags no extrato
//
// sortData.d.index = 0         ;// Diário: iniciar ordenando por esta coluna (0-3)
// sortData.m.index = 0         ;// Mensal: iniciar ordenando por esta coluna (0-4)
// sortData.y.index = 0         ;// Anual : iniciar ordenando por esta coluna (0-4)
// sortData.d.rev = false       ;// Diário: iniciar com a ordem inversa?
// sortData.m.rev = false       ;// Mensal: iniciar com a ordem inversa?
// sortData.y.rev = false       ;// Anual : iniciar com a ordem inversa?


////// GRÁFICO DE BARRAS
//
// showCharts = true            ;// Mostrar gráfico de barras depois do extrato?
// showChartBarLabel = true     ;// Mostrar os números no topo de cada barra?
//
// initChartDaily = 3           ;// Iniciar mostrando este item no gráfico diário [1-4]
// initChartMonthly = 1         ;// Iniciar mostrando este item no gráfico mensal [1-4]
// initChartYearly = 1          ;// Iniciar mostrando este item no gráfico anual [1-4]


////// BARRA DE PORCENTAGEM
//
// showMiniBars = true          ;// Mostrar barra de porcentagem no mensal/anual?
// showMiniBarsLabels = true    ;// Mostrar os números dentro destas barras?
// miniBarWidth = 70            ;// Largura da barra de porcentagem, em pixels


////// TAGS
//
// showTagReport = true         ;// Mostrar o relatório de tags?
// ignoreTags = 'poupança'      ;// Ignorar todos os lançamentos com estas tags
// initSelectedTags = 'água'    ;// Iniciar já com estas tags marcadas
// initExcludedTags = 'luz'     ;// Iniciar já com estas tags riscadas
// checkHideRelatedTags = false ;// Iniciar marcando a opção [X] Esconder relacionadas?


////// FORMATO DA DATA
//
// showLocaleDate = false       ;// Mostrar datas no formato regional d/m/a?
//
// Você também pode personalizar o formato regional: usar outros separadores,
// mudar a ordem ou até escolher exatamente quais componentes mostrar. Além
// de símbolos, você pode usar as seguintes letras:
//     Y = ano com 4 dígitos           b = nome do mês com 3 letras
//     y = ano com 2 dígitos           B = nome completo do mês
//     m = mês
//     d = dia
//
// i18nDatabase.pt.dateFormat = 'd.m.Y'     ;// Personalizar formato dia-mês-ano
// i18nDatabase.pt.dateFormatMonth = 'B Y'  ;// Personalizar formato mês-ano
// i18nDatabase.pt.dateFormatYear = 'Y'     ;// Personalizar formato ano


////// IGNORAR LANÇAMENTOS ANTIGOS E FUTUROS
//
// Se você já usa o MoneyLog há bastante tempo, pode querer simplesmente
// ignorar os lançamentos antigos, dos anos anteriores. Ou ainda, limitar a
// visão de anos futuros para poucos anos, sumindo de sua vista com aquelas
// dezenas de parcelas do financiamento que vai demorar para acabar. Basta
// colocar nas opções seguintes as datas limite, no passado e/ou no futuro,
// e o MoneyLog vai fingir que não viu nada :)
//
// ignoreDataOlderThan = '2010-01-01'   ;// Ignorar lançamentos de 2009, 2008...
// ignoreDataNewerThan = '2020-12-31'   ;// Ignorar lançamentos após 2020


////// ARQUIVOS TXT
//
// Se você usa mais de um arquivo TXT, o MoneyLog automaticamente carrega
// todos os arquivos que encontrar em sua pasta. Com essa opção você pode
// mudar isso e carregar somente um arquivo específico no início.
//
// dataFilesDefault = 'meu-arquivo.txt';



