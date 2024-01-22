# Introduction à NoSQL et MongoDB

Une présentation de NoSQL est disponible via ce [lien](https://docs.google.com/presentation/d/1ANhv39Pt6jXdfQQrlpoJIlHUkWMaPUbH2ko_R26Cxmw/edit?usp=sharing).

Lors de ce TP, nous allons découvrir MongoDB, une base de données NoSQL orientée documents. Nous allons également utiliser Mongoose, un module Node.js permettant de manipuler MongoDB. Nous allons créer une API de gestion d'annonces immobilières, avec des fonctionnalités de CRUD (Create, Read, Update, Delete).

## 1. Création d'un compte sur MongoDB Atlas

MongoDB Atlas offre une option de base de données NoSQL hébergée dans le cloud, avec un niveau gratuit pour démarrer. Ces bases de données sont faciles à mettre à l'échelle et bien adaptées aux applications modernes.

Créer un compte en vous rendant sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

Une fois votre compte et votre cluster créés, accédez au bouton "Connect" pour découvrir les méthodes de connexion. Parmi elles, les "drivers" sont des outils essentiels pour interagir avec MongoDB depuis différents langages de programmation. Pour ce TP, nous nous concentrerons sur le driver pour Node.js. Suivez attentivement les instructions fournies par MongoDB.

![Texte alternatif](/image.png).
![Texte alternatif](/image-1.png).

## 2. Installation de Mongoose

Mongoose est un module pour Node.js facilitant l'interaction avec MongoDB. Il sert à créer des schémas de données, les manipuler et les persister en base de données.

Similaire à Doctrine dans Symfony, Mongoose permet de modéliser des entités avec des schémas et de transformer ces derniers en modèles pour les instances de données.

Consultez la documentation de [Mongoose](https://mongoosejs.com/) pour en apprendre plus sur la création et la manipulation des schémas.

## 3. Passage à la pratique

Consultez [Démarrage du projet](demarage.md) pour commencer à utiliser ces outils dans un cadre pratique.
