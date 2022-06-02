# Análise de execução de algoritmos de ordenação (Showcase)

## GUIA DA DOCUMENTAÇÃO

1. [Apresentação da equipe](#equipe)
2. [Máquina utilizada](#máquina-usada-nos-testes-dos-algoritmos)
3. [Algoritmos utilizados](#algoritmos-utilizados)

    3.1. [Merge sort](#mergesort)
    
    3.2. [Quick sort](#quick-sort)

    3.3. [Bubble sort](#bubble-sort)

    3.4. [Selection sort](#selection-sort)

4. [Como executar os algoritmos](#execução-dos-algoritmos)

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
Analisando o tempo de resposta do algoritmos podemos definir o mergesort como um bom algoritmo para ordenar quantidade pequena de valores, mas ainda sim não tendo um bom desempenho, até vinte mil entradas o tempo de resposta tende a dobrr a cada aumento de entrada, após isso o tempo de resposta começou a crescer de forma exponencial. Para entradas obtivemos os seguintes tempos:

<center>

Quantidade de Entradas  | Tempo de execução
--------- | ------
**100 Entradas** | 8.947ms,
**1.000 Entradas** | 12.181ms,
**10.000 Entradas** | 25.447ms,
**20.000 Entradas** | 53.086ms,
**50.000 Entradas** | 305.599ms,
**100.000 Entradas** | 897.359ms,
**500.000 Entradas** | 41157ms,
**1.000.000 Entradas** | 380710ms

<img src="https://cdn.discordapp.com/attachments/690279139185524826/981967049762959420/Merger-Sort.png" width="600"/>

</center>

<br/>

## QUICK SORT 

Sem dúvidas entre os algoritmos analisados o quicksort é o que melhor performa, para quantidade pequenas de valores o quick sort responde de forma semelhante ao merge, porém para grandes valores é quando ele se destaca, enquanto o mergesort cresce de forma exponencial, o tempo de resposta do quicksort não chega a dobrar, mesmo que dobremos o valor de entrada no algoritmo. Para entradas tivemos os seguintes tempos em ms:

<center>

Quantidade de Entradas  | Tempo de execução
--------- | ------
**100 Entradas** |8,764ms,
**1.000 Entradas** |11,677ms,
**10.000 Entradas** |19,642ms,
**20.000 Entradas** |30,203ms,
**50.000 Entradas** |50,001ms,
**100.000 Entradas** |85,458ms,
**500.000 Entradas** |411,411ms,
**1.000.000 Entradas** |868,771ms

<img src="https://cdn.discordapp.com/attachments/690279139185524826/981967050505347133/Quick-sort-concertado-_1_.png" width="600"/>

</center>

<br/>

## BUBBLE SORT
O Bubble sort é um algoritmo de bolha mais simples e relativamente mais lento do que os outros algoritmos. Uma iteração é limitada em percorrer a tabela do início ao fim, sem interrupção, trocando de posição. Com isso o bubble se torna o menos eficiente entre os algoritmos utilizados para grandes entradas, para poucas entradas o bubble se mostrou eficiente, tendo um tempo de resposta menor que o quick, porém seu tempo de resposta vai crescendo de forma exponencial. Para entradas tivemos os seguintes tempos em ms:

<center>

Quantidade de Entradas  | Tempo de execução
--------- | ------
**100 Entradas** |8,447ms,
**1.000 Entradas** |12,710ms, 
**10.000 Entradas** |163,469ms,
**20.000 Entradas** |681,922ms,
**50.000 Entradas** |4524ms,
**100.000 Entradas** |21491ms,
**500.000 Entradas** |488200ms,
**1.000.000 Entradas** |1980000ms

<img src="https://cdn.discordapp.com/attachments/690279139185524826/981967050203340800/Bubble-sort.png" width="600"/>

</center>

<br/>

## SELECTION SORT
O Selection Sort é um algoritmo de baixa estabilidade devido não manter a ordem relativa caso tenha valores iguais, para até 100 entradas o selection sort se mostrou o algoritmo mais eficientes entre os analisados, porém assim como o bubble seu tempo de resposta começa a crescer de forma exponencial, se tornando pouco efetivo para grandes entradas ganhando apenas do bubble sort em tempo de resposta. Para entradas tivemos os seguintes tempos em ms:

<center>

Quantidade de Entradas  | Tempo de execução
--------- | ------
**100 Entradas** |7,960ms,
**1.000 Entradas** |18,104ms,
**10.000 Entradas** |111,251ms,
**20.000 Entradas** |156,842ms,
**50.000 Entradas** |1307ms,
**100.000 Entradas** |5442ms,
**500.000 Entradas** |41304ms,
**1.000.000 Entradas** |617543ms

<img src="https://cdn.discordapp.com/attachments/690279139185524826/981967050006212628/Selection-Sort.png" width="600"/>

</center>

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
