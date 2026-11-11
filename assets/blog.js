/* SIGEMEC — matérias do blog. Para publicar uma nova, adicione um objeto no topo da lista. */
const CATS = {
  programas:    { label: 'Programas',    c: 'var(--ctl)',  mark: 'm-group',    pat: 'pat-edu' },
  politicas:    { label: 'Políticas',    c: 'var(--sau)',  mark: 'm-group',    pat: 'pat-sau' },
  fornecedores: { label: 'Fornecedores', c: 'var(--gold)', mark: 'm-group', pat: 'pat-gestao' },
  gestao:       { label: 'Gestão',       c: 'var(--esc)',  mark: 'm-group',    pat: 'pat-esc' }
};

const POSTS = [
{
  slug: 'par-ciclo-5-diagnostico',
  cat: 'programas',
  date: '2026-10-22',
  title: 'PAR Ciclo 5: o que o município precisa ter pronto no diagnóstico',
  summary: 'O diagnóstico no SIMEC define o que a rede pode pedir até 2028. Um retrato errado agora limita os projetos dos próximos anos.',
  body: `
<p>O Plano de Ações Articuladas, o PAR, é o instrumento que organiza o apoio técnico e financeiro do MEC e do FNDE às redes municipais. O Ciclo 5 vale de 2025 a 2028, e tudo começa pelo diagnóstico feito no SIMEC. É ali que o município descreve a situação da rede: gestão, formação de professores, práticas pedagógicas, infraestrutura e recursos.</p>
<p>O ponto que muita secretaria subestima é este: <strong>as ações que o município poderá pedir depois saem desse diagnóstico</strong>. Se a rede informa que a infraestrutura está adequada quando não está, a ação de reforma ou de equipamento simplesmente não aparece como necessidade. O planejamento de quatro anos nasce limitado.</p>
<h2>Quem precisa estar na mesa</h2>
<p>O diagnóstico não é tarefa de uma pessoa só. Ele cruza informação pedagógica, financeira, de pessoal e de patrimônio. Antes de abrir o sistema, reúna pelo menos:</p>
<ul>
<li>o técnico ou a técnica municipal do PAR, que opera o SIMEC;</li>
<li>o dirigente municipal de educação, que responde pelas escolhas;</li>
<li>alguém do setor financeiro e de licitações;</li>
<li>a coordenação pedagógica e representantes das escolas;</li>
<li>quem cuida da prestação de contas dos programas já recebidos.</li>
</ul>
<h2>Dados que precisam estar à mão</h2>
<p>Responder de memória é a principal fonte de erro. Separe com antecedência o Censo Escolar mais recente, a lista de prédios com a situação de cada um, o quadro de professores com formação, o plano municipal de educação e as metas que o município já assumiu. Quanto mais o diagnóstico conversar com esses documentos, mais fácil fica justificar as ações depois.</p>
<div class="box"><b>Atenção</b>Pendências de prestação de contas de ciclos e programas anteriores podem travar a análise de novos pedidos. Vale levantar o histórico antes de planejar.</div>
<h2>Do diagnóstico ao plano</h2>
<p>Com o diagnóstico concluído, o município monta o planejamento: escolhe ações e subações, define metas, prazos e responsáveis. Três cuidados ajudam a não perder oportunidades:</p>
<ol>
<li><strong>Priorize pelo impacto, não pela facilidade.</strong> A ação mais simples de cadastrar nem sempre é a que a rede mais precisa.</li>
<li><strong>Distribua as metas pelos quatro anos.</strong> Um plano que concentra tudo no primeiro ano costuma ficar parado no segundo.</li>
<li><strong>Registre quem faz o quê.</strong> Troca de equipe é comum, e o plano precisa sobreviver a ela.</li>
</ol>
<h2>O que acompanhar depois</h2>
<p>Depois de enviado, o plano passa por análise técnica, e o município precisa acompanhar o sistema para responder diligências dentro do prazo. Pedidos sem resposta tendem a ficar parados. Uma rotina semanal de conferência no SIMEC, com uma pessoa responsável, resolve boa parte desse problema.</p>
<p>A consultoria do SIGEMEC acompanha o município nesse caminho, do diagnóstico no SIMEC ao planejamento de quatro anos. Veja também os <a href="treinamentos.html">encontros técnicos</a> com turmas abertas.</p>`
},
{
  slug: 'sigpc-pendencias-que-bloqueiam',
  cat: 'gestao',
  date: '2026-10-15',
  title: 'Prestação de contas no SIGPC: as pendências que mais bloqueiam repasses',
  summary: 'A maior parte dos bloqueios não vem de desvio, e sim de documento faltando, prazo perdido e conta mal organizada.',
  body: `
<p>O SIGPC é o sistema do FNDE onde o município presta contas dos recursos recebidos em programas como PNAE, PNATE e PDDE. Quando a prestação não é enviada, ou é enviada com problema, o município pode ficar inadimplente e ter novos repasses suspensos. Na prática, a creche espera, o transporte atrasa e o gestor responde por isso.</p>
<p>A boa notícia é que a maior parte das pendências que vemos nos municípios tem causa administrativa. Elas se repetem, e por isso dá para prevenir.</p>
<h2>As pendências mais comuns</h2>
<ul>
<li><strong>Prestação não enviada no prazo.</strong> Troca de gestão, servidor que saiu e ninguém assumiu, senha perdida. O prazo passa sem que ninguém perceba.</li>
<li><strong>Movimentação fora da conta específica.</strong> Recurso de programa federal precisa transitar pela conta aberta para ele. Transferências para outras contas complicam a comprovação.</li>
<li><strong>Saldo sem aplicação financeira.</strong> Dinheiro parado na conta sem rendimento costuma gerar questionamento.</li>
<li><strong>Documento fiscal que não fecha com o extrato.</strong> Nota com valor, data ou favorecido diferente do que aparece no banco.</li>
<li><strong>Parecer do conselho ausente.</strong> Alguns programas exigem a manifestação do conselho de controle social, como o CAE na alimentação escolar.</li>
<li><strong>Despesa fora do objeto.</strong> Gasto que não se encaixa nas regras do programa.</li>
</ul>
<h2>Como montar uma rotina que evita o problema</h2>
<p>O município que presta contas sem susto não faz isso no último mês. Ele mantém a documentação organizada ao longo do ano. Uma rotina mínima inclui:</p>
<ol>
<li>Uma pasta por programa e por exercício, com extratos mensais, notas, contratos e atas.</li>
<li>Conferência mensal entre extrato e documentos, feita por quem não fez o pagamento.</li>
<li>Um calendário com os prazos de cada programa, visível para a equipe e para o dirigente.</li>
<li>Acesso ao SIGPC com mais de uma pessoa habilitada, para que férias e exonerações não parem tudo.</li>
<li>Reunião com o conselho antes do prazo, com tempo para ele analisar.</li>
</ol>
<div class="box"><b>Herdou pendência?</b>Pendências de gestões anteriores continuam sendo do município. O primeiro passo é levantar o status de cada programa nos últimos anos e separar o que ainda pode ser regularizado.</div>
<h2>Quando a pendência já existe</h2>
<p>Se o município já está com prestação em atraso ou com diligência aberta, o caminho é organizar a documentação disponível, responder o que o FNDE pediu e acompanhar o andamento até a baixa. Em muitos casos, a regularização destrava recursos que estavam parados há anos.</p>
<p>O pré-diagnóstico gratuito do SIGEMEC mostra o status das prestações de contas do município nos últimos 15 anos e aponta por onde começar.</p>`
},
{
  slug: 'cnpj-proprio-secretaria-educacao',
  cat: 'politicas',
  date: '2026-10-08',
  title: 'CNPJ próprio para a Secretaria de Educação: por que fazer e por onde começar',
  summary: 'Dar à secretaria a gestão dos próprios recursos organiza a prestação de contas e deixa claro quem responde por cada gasto.',
  body: `
<p>Em muitos municípios, os recursos da educação ainda são movimentados pela estrutura geral da prefeitura. A legislação educacional, porém, aponta outro caminho: os recursos da educação devem ser geridos pelo órgão responsável pela educação, com o dirigente municipal à frente. Dar à secretaria um CNPJ próprio, como unidade gestora, é a forma mais comum de tornar isso real.</p>
<h2>O que muda na prática</h2>
<ul>
<li><strong>Contas separadas e rastreáveis.</strong> Os recursos da educação deixam de se misturar com o restante do orçamento.</li>
<li><strong>Responsabilidade clara.</strong> Fica evidente quem autoriza e quem responde por cada despesa.</li>
<li><strong>Prestação de contas mais simples.</strong> Extrato, empenho e documento fiscal passam a conversar dentro de uma mesma estrutura.</li>
<li><strong>Autonomia para planejar.</strong> A secretaria acompanha o próprio saldo e consegue planejar compras e contratações com antecedência.</li>
</ul>
<h2>Por onde começar</h2>
<p>O processo envolve as áreas jurídica, contábil e administrativa da prefeitura. Um roteiro comum é este:</p>
<ol>
<li>Verificar a lei de estrutura administrativa do município e, se necessário, ajustá-la para prever a secretaria como unidade gestora.</li>
<li>Formalizar a nomeação do dirigente como ordenador de despesa.</li>
<li>Solicitar a inscrição no CNPJ vinculada ao município.</li>
<li>Abrir as contas bancárias exclusivas e atualizar os cadastros nos sistemas federais.</li>
<li>Ajustar a contabilidade para que a execução passe a ocorrer pela nova unidade.</li>
</ol>
<div class="box"><b>Cuidado na transição</b>Durante a mudança, convivem contas antigas e novas. Registre a data de corte e garanta que nenhum programa fique sem prestação de contas no meio do caminho.</div>
<h2>Organização por sistemas</h2>
<p>O CNPJ é o começo. O passo seguinte é organizar a secretaria pelos sistemas federais com que ela trabalha: quem opera o SIMEC, quem cuida do SIGPC, quem acompanha os programas de alimentação, transporte e dinheiro direto na escola. Cada sistema precisa de um responsável e de um substituto.</p>
<p>CNPJ próprio, movimentação bancária exclusiva e organização da secretaria por sistemas fazem parte da assessoria do SIGEMEC e já foram tema dos encontros técnicos, com Murilo Prevê, advogado especialista em gestão pública.</p>`
},
{
  slug: 'pnae-pnate-pdde-rotina',
  cat: 'programas',
  date: '2026-09-30',
  title: 'PNAE, PNATE e PDDE: uma rotina anual para não perder recurso',
  summary: 'Três programas, três lógicas diferentes. Um calendário simples evita que o dinheiro fique parado ou volte.',
  body: `
<p>Alimentação escolar, transporte escolar e dinheiro direto na escola são os programas do FNDE mais presentes na rotina de qualquer secretaria. Cada um tem regra própria de uso, de compra e de prestação de contas. Misturar essas lógicas é um dos jeitos mais rápidos de criar pendência.</p>
<h2>PNAE: alimentação escolar</h2>
<p>O recurso é repassado ao município para a compra de gêneros alimentícios. Alguns pontos pedem atenção o ano inteiro:</p>
<ul>
<li>o cardápio é responsabilidade de nutricionista vinculado ao programa;</li>
<li>a lei reserva um percentual mínimo das compras para a agricultura familiar, normalmente por chamada pública;</li>
<li>o Conselho de Alimentação Escolar acompanha a execução e emite parecer sobre a prestação de contas.</li>
</ul>
<h2>PNATE: transporte escolar</h2>
<p>O programa apoia o transporte de estudantes da educação básica que moram na zona rural. O recurso pode custear manutenção de veículos, combustível e serviços de terceiros, conforme as regras do programa. O controle de rotas, quilometragem e alunos transportados é o que sustenta a prestação de contas.</p>
<h2>PDDE: dinheiro direto na escola</h2>
<p>Aqui o recurso vai para a unidade executora da escola, geralmente o conselho escolar ou a associação de pais e mestres. A secretaria não executa, mas acompanha. Escolas com unidade executora irregular ou com prestação pendente deixam de receber.</p>
<div class="box"><b>Regra de ouro</b>Cada programa tem conta, documento e prazo próprios. Nada de pagar despesa de um com recurso de outro, nem por um dia.</div>
<h2>Um calendário que funciona</h2>
<ol>
<li><strong>Início do ano:</strong> conferir saldos reprogramados, atualizar cadastros e planejar compras e chamadas públicas.</li>
<li><strong>Primeiro semestre:</strong> executar, arquivar documentos por programa e fazer a conferência mensal com o extrato.</li>
<li><strong>Meio do ano:</strong> revisar a situação das unidades executoras do PDDE e corrigir cadastros.</li>
<li><strong>Segundo semestre:</strong> acompanhar a execução para evitar saldo parado no fim do exercício.</li>
<li><strong>Antes do prazo de prestação:</strong> reunir o conselho, consolidar a documentação e enviar com folga.</li>
</ol>
<p>O encontro técnico Gestão Educacional Municipal 2026 trata das mudanças do SIGPC Ágil na prestação de contas de PNAE, PNATE e PDDE, e a VIII Jornada de Excelência Pedagógica dedica um dia inteiro ao PDDE. Veja as <a href="treinamentos.html#eventos">turmas</a>.</p>`
},
{
  slug: 'fornecedores-compras-educacao',
  cat: 'fornecedores',
  date: '2026-09-23',
  title: 'Como escolher fornecedores para a educação sem travar a licitação',
  summary: 'Com a Lei 14.133, planejar a compra virou parte da compra. Fornecedor bom começa num estudo bem feito.',
  body: `
<p>Desde que a Lei 14.133/2021 passou a ser a regra para as contratações públicas, o planejamento ganhou peso. Para a educação, isso significa que a compra de mobiliário, equipamentos, uniformes ou serviços começa muito antes do edital, e que a escolha do fornecedor depende da qualidade desse começo.</p>
<h2>Planeje o ano inteiro</h2>
<p>O plano de contratações anual reúne o que a secretaria pretende comprar no exercício. Ele ajuda a juntar demandas parecidas, evita compras de emergência e dá tempo para pesquisar o mercado. Uma secretaria que planeja em janeiro não precisa correr em novembro.</p>
<h2>Descreva a necessidade, não a marca</h2>
<p>O estudo técnico preliminar e o termo de referência devem explicar o problema que a compra resolve e as características que o produto ou serviço precisa ter. Descrições amarradas a uma marca, ou exigências sem justificativa, restringem a competição e costumam gerar impugnação.</p>
<h2>Pesquise preço com método</h2>
<ul>
<li>use mais de uma fonte, como contratações similares de outros órgãos e painéis de preços públicos;</li>
<li>registre a data e a origem de cada cotação;</li>
<li>descarte valores muito fora da média e explique por quê.</li>
</ul>
<div class="box"><b>Atalho legítimo</b>A adesão a atas de registro de preços de outros órgãos pode acelerar a compra, desde que a vantagem seja demonstrada e as regras de adesão sejam respeitadas.</div>
<h2>Avalie o fornecedor além do preço</h2>
<p>O menor preço só é vantajoso se a entrega acontecer. Na habilitação e na execução do contrato, observe a capacidade técnica comprovada, o histórico de entregas a outros órgãos e a assistência técnica na região. Registrar o desempenho de cada fornecedor ao fim do contrato ajuda as próximas compras.</p>
<h2>Onde encontrar referências</h2>
<p>Para apoiar os municípios nessa etapa, o SIGEMEC mantém o portal <a href="https://melhoresfornecedoresdobrasil.sigemec.com.br/" target="_blank" rel="noopener">Melhores Fornecedores do Brasil</a>, com empresas que atuam no atendimento ao setor público. O portal serve como ponto de partida para a pesquisa de mercado e não substitui o procedimento de contratação previsto em lei.</p>`
},
{
  slug: 'creches-preparar-pedido-de-obra',
  cat: 'politicas',
  date: '2026-09-16',
  title: 'Creches: como preparar o município para pedir uma obra de educação infantil',
  summary: 'Quando abre uma seleção federal, o prazo é curto. Quem já tem terreno, demanda e documentos sai na frente.',
  body: `
<p>Ampliar vagas em creche e pré-escola é uma das demandas mais fortes das famílias e uma das metas mais cobradas dos municípios. Os recursos federais para construção e ampliação de unidades de educação infantil costumam vir por seleções com prazo curto. O município que se prepara antes consegue cadastrar um bom projeto. O que começa do zero, muitas vezes, perde a janela.</p>
<h2>1. Comprove a demanda</h2>
<p>A justificativa de uma obra começa pelo número de crianças sem vaga. Organize a lista de espera por bairro ou região, cruze com dados do Censo Escolar e registre a capacidade atual de cada unidade. Esses números sustentam o pedido e ajudam a escolher onde construir.</p>
<h2>2. Regularize o terreno</h2>
<p>Terreno é o ponto em que mais pedidos travam. Ele precisa ser do município, com documentação em dia, sem impedimento ambiental e com acesso a água, energia e esgoto. Ter dois ou três terrenos já regularizados e mapeados é uma vantagem real.</p>
<h2>3. Tenha a documentação técnica encaminhada</h2>
<ul>
<li>levantamento topográfico e sondagem, quando exigidos;</li>
<li>declarações de viabilidade de serviços públicos;</li>
<li>equipe técnica de engenharia identificada para acompanhar a obra.</li>
</ul>
<div class="box"><b>Lembre</b>Obras paradas de seleções anteriores pesam contra o município. Antes de pedir uma nova, organize a situação das que já existem.</div>
<h2>4. Planeje o funcionamento</h2>
<p>Uma unidade nova precisa de professores, equipe de apoio, alimentação escolar e manutenção. Os órgãos federais avaliam se o município terá condições de manter a creche aberta. Mostre isso no planejamento orçamentário.</p>
<h2>5. Acompanhe do cadastro à inauguração</h2>
<p>Depois da aprovação vêm licitação, execução, medições e prestação de contas. Cada etapa tem registro em sistema e prazo próprio. Um responsável fixo pela obra no município evita boa parte dos atrasos.</p>
<p>O SIGEMEC presta consultoria e assessoria para projetos de educação infantil, com foco na ampliação de vagas em creches e pré-escolas, do diagnóstico à prestação de contas.</p>`
}
];

(function () {
  const fmtDate = d => new Date(d + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace('.', '');
  const minutes = html => Math.max(3, Math.round(html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length / 200));
  const isBlog = !!document.getElementById('blogList');
  const href = p => isBlog ? '#' + p.slug : 'blog.html#' + p.slug;
  const arr = '<svg><use href="#i-arr"/></svg>';
  const card = (p, feature) => {
    const c = CATS[p.cat];
    return `<a class="post-card${feature ? ' feature' : ''}" href="${href(p)}" ${isBlog ? 'data-route' : ''} style="--c:${c.c}">
      <div class="cover"><div class="bgpat ${c.pat}"></div><svg><use href="#${c.mark}"/></svg></div>
      <div style="display:flex;flex-direction:column;gap:12px;min-width:0">
        <div class="post-meta"><span class="cat"><i></i>${c.label}</span><span>${fmtDate(p.date)}</span><span>${minutes(p.body)} min de leitura</span></div>
        <h3>${p.title}</h3><p>${p.summary}</p><span class="go">Ler matéria ${arr}</span>
      </div></a>`;
  };

  /* home: as três mais recentes */
  const latest = document.getElementById('latestPosts');
  if (latest) latest.innerHTML = POSTS.slice(0, 3).map(p => card(p)).join('');
  if (!isBlog) return;

  /* página do blog */
  const list = document.getElementById('blogList'), listView = document.getElementById('listView');
  const post = document.getElementById('post'), filters = document.getElementById('filters');
  let current = 'todas';
  filters.innerHTML = `<button aria-pressed="true" data-cat="todas">Todas</button>` +
    Object.entries(CATS).map(([k, c]) => `<button aria-pressed="false" data-cat="${k}" style="--c:${c.c}"><i></i>${c.label}</button>`).join('');
  const renderList = () => {
    const items = POSTS.filter(p => current === 'todas' || p.cat === current);
    list.innerHTML = items.length ? items.map((p, i) => card(p, i === 0 && current === 'todas')).join('') : '<p class="empty">Nenhuma matéria nesta categoria ainda.</p>';
  };
  filters.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    current = b.dataset.cat;
    filters.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
    renderList();
  });

  const showPost = slug => {
    const p = POSTS.find(x => x.slug === slug);
    if (!p) { post.hidden = true; listView.hidden = false; return; }
    const c = CATS[p.cat];
    const related = POSTS.filter(x => x.slug !== slug).slice(0, 3);
    post.innerHTML = `<div class="wrap narrow">
        <a class="back" href="#todas" data-route><svg><use href="#i-arr"/></svg>Todas as matérias</a>
        <h1>${p.title}</h1>
        <p class="summary">${p.summary}</p>
        <div class="post-meta" style="--c:${c.c}"><span class="cat"><i></i>${c.label}</span><span>${fmtDate(p.date)}</span><span>${minutes(p.body)} min de leitura</span><span>Equipe SIGEMEC</span></div>
        <div class="prose">${p.body}</div>
      </div>
      <div class="wrap" style="margin-top:80px"><div class="sec-head"><h2 style="font-size:clamp(28px,3vw,44px)">Continue lendo</h2></div>
      <div class="posts" style="margin-top:28px">${related.map(r => card(r)).join('')}</div></div>`;
    listView.hidden = true; post.hidden = false;
    document.title = p.title + ' · Blog SIGEMEC';
    window.scrollTo(0, 0);
  };
  const route = () => {
    const slug = location.hash.slice(1);
    if (slug && slug !== 'todas' && POSTS.some(p => p.slug === slug)) showPost(slug);
    else { post.hidden = true; listView.hidden = false; document.title = 'Blog SIGEMEC'; }
  };
  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-route]'); if (!a) return;
    e.preventDefault();
    const h = a.getAttribute('href');
    history.pushState(null, '', h);
    route();
    if (h === '#todas') window.scrollTo(0, 0);
  });
  addEventListener('popstate', route);
  renderList(); route();
})();
