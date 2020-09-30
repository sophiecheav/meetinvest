# meet_invest

## Installation du projet :

Avant de lancer le projet Meet-Invest il faut :

  - Télécharger les repositories MeetInvest (front > Vue.js) ET MeetInvestNode (back > Node.js)
  - Télécharger Workbench, gestionnaire pour la base de données MySQL
  - Installer Vue/cli sur le fichier meetinvest, via le Terminal
  - Importer la base de données "meetinvestdb.mysql" présente dans le repository meetinvest_node et l'installer sur Workbench (identifiants et MDP à renseigner > fichier index.js dans ce même repo ; port 3306)
  - Installer Node. Ex: dans le terminal avec Home brew : brew install node
  - Installer Mysql Server en configurant root et password comme indiqué dans le fichier index.js du repository MeetInvestNode

### Lancement du projet :

 - Dans un premier terminal, en se plaçant dans le dossier meetinvest_node, lancer le serveur node avec la commande : node index.js
 - Dans un second terminal, en se plaçant dans le dossier meetinvest, lancer le serveur Vuejs: npm run serve --fix
 - Sur votre navigateur, accéder au site en tapant l'url : http://localhost:8080
