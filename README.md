# About
This site was made using React, and I used it to learn more about Redux. You can access it here: https://salaodenoticias.netlify.app/  
The site gets information using the NewsAPI service and is based around [Jovem Pan](https://jovempan.com.br/) and [G1](https://g1.globo.com/) news site.  
  
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
  
##### Tech utilized
- HTML  
- CSS  
- SASS  
- JavaScript  
- React  
- Redux  
