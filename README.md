# news-site
##### Link => https://salaodenoticias.netlify.app/

###### en =>  
This site was made using React and is part of my portfolio.  
The site gets information using the NewsAPI service  
and is based around [Jovem Pan](https://jovempan.com.br/) and [G1](https://g1.globo.com/) news site.  
  
To run the site locally open in your terminal the site root folder and run "npm start",  
you will need nodeJS installed on your pc.  
  
The site link does not get dinamic news, becase of the NewsAPI developer plan restrictions.  
If you want to get dinamic news fallow the next steps after downloading the archives:  
* 1 - get an API key [here](https://newsapi.org/);  
* 2 - go to utils/utils.js;  
* 3 - change staticNews var to false, line 9;  
* 4 - put your API key on the newsApiaKey var, line 13;  
* 5 - go to redux/specific-news/specificNewsActions.js;  
* 6 - uncomment getSpecificNews dispatch, line 7;  
* 7 - go to App.js;  
* 8 - uncomment lines 21 to 32;  
* 9 - start/restart the server;  
  
###### pt-br =>  
Este site foi feito utilizando React e faz parte do meu portfólio.  
O site recebe informações através dos serviços da NewsAPI  
e é baseado nos sites da [Jovem Pan](https://jovempan.com.br/) e [G1](https://g1.globo.com/).  
  
Para iniciar o site localmente abra em seu terminal a pasta base do site e rode o seguinte script "npm start",  
você irá precisar do nodeJS instalado em seu computador.  
  
O link do site não gera notícias dinamicamente, devido às restrições a desenvolvedores da NewsAPI.  
Se você quer gerar notícias dinamicamente siga os seguintes passos após efetuar a transferência dos arquivos:  
* 1 - Pegue uma chave para a API [aqui](https://newsapi.org/);  
* 2 - vá para utils/utils.js;  
* 3 - troque o valor da variável staticNews para false, linha 9;  
* 4 - coloque a sua chave na variável newsApiKey, linha 13;  
* 5 - vá para redux/specific-news/specificNewsActions.js;  
* 6 - descomente getSpecificNews dispatch, linha 7;  
* 7 - vá para App.js;  
* 8 - descomente as linhas 21 a 32;  
* 9 - inicie/reinicie o servidor;  
