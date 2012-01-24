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


////// IDIOMA
//
// lang = 'pt'                  ;// pt, en, es (Português, Inglês, Espanhol)


////// EXTRATO PADRÃO AO INICIAR
//
// reportType = 'd'             ;// d, m, y (diário, mensal, anual)


////// SOMENTE RECENTES
//
// maxLastMonths = 12           ;// Quantos meses mostrar no seletor?
// initLastMonths = 3           ;// Qual será o item selecionado por padrão?
// defaultLastMonths = false    ;// Iniciar com esta opção já ativada?


////// SOMENTE VALORES
//
// Nada ainda.


////// LANÇAMENTOS FUTUROS
//
// defaultFuture = false        ;// Iniciar mostrando lançamentos futuros?


////// PARCIAIS MENSAIS
//
// defaultMonthPartials = true  ;// Iniciar mostrando as parciais mensais?


////// BUSCA
//
// defaultSearch = ''           ;// Iniciar já pesquisando por este texto
// defaultRegex = false         ;// Marcar a opção [X] regex?
// defaultNegate = false        ;// Marcar a opção [X] excluir?


////// TABELA DO EXTRATO
//
// showRowCount = true          ;// Mostrar o número da linha à esquerda?
// monthlyRowCount = true       ;// O número da linha recomeça a cada mês?
//
// highlightWords = 'XXX TODO'  ;// Destacar estas palavras na Descrição
// highlightTags = 'luz água'   ;// Destacar estas tags no extrato
//
// showLocaleDate = false       ;// Mostrar datas no formato regional d/m/a?
// i18nDatabase.pt.dateFormat = 'd.m.Y'  ;// Usar meu próprio formato regional


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
// showEmptyTagInSummary = true ;// Mostrar o item VAZIO no somatório de tags?


////// ARQUIVOS TXT
//
// Se você usa mais de um arquivo TXT, o MoneyLog automaticamente carrega
// todos os arquivos que encontrar em sua pasta. Com essa opção você pode
// mudar isso e carregar somente um arquivo específico no início.
//
// dataFilesDefault = 'meu-arquivo.txt';



