# Análise de execução de algoritmos de ordenação (Showcase)

## EQUIPE
---
<img src="https://security.ufpb.br/educacaofinanceira/contents/imagens/brasoes-universidades/uft.png/@@images/image.png" width="200"/>

## Curso: Ciência da Computação
## Disciplina: Projeto e análise de algoritmos
## Membros:
* Marcos Gilmário Ferreira Moreira
* Arthur Fernandes Ferreira Reis
* Luana Lorena de Matos Tavares
* Kharlos Danyell Fonseca de Oliveira
---
## MÁQUINA USADA NOS TESTES DOS ALGORITMOS: 
* Modelo: Lenovo ideapad s145 
* Processador: Intel core i5 8 geração 1.60GHz
* RAM 8GB

## ALGORITMOS UTILIZADOS

Nos testes de performance de algoritmos de ordenação utilizamos os algoritmos, Merge-sort, Quick-sort, Bubble-sort e Selection-sort, para cada algoritmo utilizamos listas de números aleatórias a serem ordenadas, foram utilizadas listas com cem, mil, dez mil, vinte mil, cinquenta mil, cem mil, duzentos mil, quinhentos mil e um milhão de números. Nos testes optamos por implementar todos os algoritmos em javascript utilizando do [Node.js](https://nodejs.org) para executá-los, com isso conseguimos obter o tempo de execução de cada algoritmo para todos os valores de entrada e analisar o comportamento de cada um deles.

## MergeSort
Analisando o tempo de resposta do algoritmos podemos definir o mergesort como um bom algoritmo para ordenar quantidade pequena de valores, mas ainda sim não tendo um bom desempenho, até vinte mil entradas o tempo de resposta ia dobrando a cada aumento de entrada, após isso o tempo de resposta começou a crescer de forma exponencial. Para entradas obtivemos os seguintes tempos:

Quantidade de Entradas  | Tempo de execução
--------- | ------
**100 Entradas:** | 8.947ms,
**1000 Entradas:** | 12.181ms,
**Entradas:** | 25.447ms,
**Entradas:** | 53.086ms,
**Entradas:** | 305.599ms,
**Entradas:** | 897.359ms,
**Entradas:** | 41157ms,
**Entradas:** | 380710ms

<br/>

## QUICK SORT 

Sem dúvidas entre os algoritmos analisados o quicksort é o que melhor performa, para quantidade pequenas de valores o quick sort responde de forma semelhante ao merge, porém para grandes valores é quando ele se destaca, enquanto o mergesort cresce de forma exponencial, o tempo de resposta do quicksort não chega a dobrar, mesmo que dobremos o valor de entrada no algoritmo. Para entradas tivemos os seguintes tempos em ms:

Quantidade de Entradas  | Tempo de execução
--------- | ------
**Entradas:** |8,764ms,
**Entradas:** |11,677ms,
**Entradas:** |19,642ms,
**Entradas:** |30,203ms,
**Entradas:** |50,001ms,
**Entradas:** |85,458ms,
**Entradas:** |411,411ms,
**Entradas:** |868,771ms


<br/>

## BUBBLE SORT
O Bubble sort é um algoritmo de bolha mais simples e relativamente mais lento do que os outros algoritmos. Uma iteração é limitada em percorrer a tabela do início ao fim, sem interrupção, trocando de posição. Com isso o bubble se torna o menos eficiente entre os algoritmos utilizados para grandes entradas, para poucas entradas o bubble se mostrou eficiente, tendo um tempo de resposta menor que o quick, porém seu tempo de resposta vai crescendo de forma exponencial. Para entradas tivemos os seguintes tempos em ms:

Quantidade de Entradas  | Tempo de execução
--------- | ------
**Entradas:** |8,447ms,
**Entradas:** |12,710ms, 
**Entradas:** |163,469ms,
**Entradas:** |681,922ms,
**Entradas:** |4524ms,
**Entradas:** |21491ms,
**Entradas:** |488200ms,
**Entradas:** |1980000ms

<br/>

## SELECTION SORT
O Selection Sort é um algoritmo de baixa estabilidade devido não manter a ordem relativa caso tenha valores iguais, para até 100 entradas o selection sort se mostrou o algoritmo mais eficientes entre os analisados, porém assim como o bubble seu tempo de resposta começa a crescer de forma exponencial, se tornando pouco efetivo para grandes entradas ganhando apenas do bubble sort em tempo de resposta. Para entradas tivemos os seguintes tempos em ms:

Quantidade de Entradas  | Tempo de execução
--------- | ------
**Entradas:** |7,960ms,
**Entradas:** |18,104ms,
**Entradas:** |111,251ms,
**Entradas:** |156,842ms,
**Entradas:** |1307ms,
**Entradas:** |5442ms, 
**Entradas:** |41304ms,
**Entradas:** |617543ms

---
# Execução dos algoritmos
---

1. Clone o reposiório:

    ````$ git clone https://github.com/marcosgilmario/PAA-sort-algoritms.git````

2. Acesse os arquivos do repositório:

    ````$ cd PAA-sort-algoritms ````

3. Instalação das dependências:

    ````$ npm install````

    ou com yarn

    ````$ yarn install````

4. Executar os algoritmos:

    4.1 executar Merge Sort:

    ````$ node mergesort.js````

    4.2 executar Bubble Sort:

    ````$ node bublesort.js````

    4.3 executar Quick Sort:

    ````$ node quicksort.js````

    4.4 executar Selection Sort:

    ````$ node selectsort.js````

## ANÁLISE DOS CASOS DE EXCUÇÃO

