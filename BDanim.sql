/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de création :  09/06/2022 09:28:51                      */
/*==============================================================*/


drop table if exists CategorieProduct;

drop table if exists CategorieServices;

drop table if exists Commande;

drop table if exists DetailCommande;

drop table if exists Produit;

drop table if exists Services;

drop table if exists Utilisateur;

drop table if exists association5;

/*==============================================================*/
/* Table : CategorieProduct                                     */
/*==============================================================*/
create table CategorieProduct
(
   idCategorie          int not null,
   nomCategorie         varchar(254),
   primary key (idCategorie)
);

/*==============================================================*/
/* Table : CategorieServices                                    */
/*==============================================================*/
create table CategorieServices
(
   idCategorieService   int not null,
   nomCategorieService  varchar(254),
   primary key (idCategorieService)
);

/*==============================================================*/
/* Table : Commande                                             */
/*==============================================================*/
create table Commande
(
   refCommande          varchar(254) not null,
   idUser               int not null,
   date                 datetime,
   adresseLivraison     varchar(254),
   etat                 int,
   typeCmnd             int,
   primary key (refCommande),
   key AK_refCommande (refCommande),
   key AK_Identifiant_2 (refCommande)
);

/*==============================================================*/
/* Table : DetailCommande                                       */
/*==============================================================*/
create table DetailCommande
(
   refCommande          varchar(254) not null,
   idProduit            int not null,
   qteCommande          int,
   primary key (refCommande, idProduit)
);

/*==============================================================*/
/* Table : Produit                                              */
/*==============================================================*/
create table Produit
(
   idProduit            int not null,
   idCategorie          int not null,
   nom                  varchar(254),
   prix                 numeric(8,0),
   qteStock             int,
   photo                varchar(254),
   description          varchar(254),
   primary key (idProduit),
   key AK_idProduit (idProduit),
   key AK_idUser (idProduit),
   key AK_Identifiant_4 (idProduit)
);

/*==============================================================*/
/* Table : Services                                             */
/*==============================================================*/
create table Services
(
   idService            int not null,
   idCategorieService   int not null,
   nomService           varchar(254),
   prix                 int,
   categorieService     int,
   photo                int,
   detailService        int,
   primary key (idService)
);

/*==============================================================*/
/* Table : Utilisateur                                          */
/*==============================================================*/
create table Utilisateur
(
   idUser               int not null,
   nom                  varchar(254),
   prenom               varchar(254),
   adresse              varchar(254),
   email                varchar(254),
   motDePasse           varchar(254),
   type                 varchar(254),
   primary key (idUser)
);

/*==============================================================*/
/* Table : association5                                         */
/*==============================================================*/
create table association5
(
   idService            int not null,
   refCommande          varchar(254) not null,
   primary key (idService, refCommande)
);

alter table Commande add constraint FK_association1 foreign key (idUser)
      references Utilisateur (idUser) on delete restrict on update restrict;

alter table DetailCommande add constraint FK_association2 foreign key (refCommande)
      references Commande (refCommande) on delete restrict on update restrict;

alter table DetailCommande add constraint FK_association2 foreign key (idProduit)
      references Produit (idProduit) on delete restrict on update restrict;

alter table Produit add constraint FK_association3 foreign key (idCategorie)
      references CategorieProduct (idCategorie) on delete restrict on update restrict;

alter table Services add constraint FK_association4 foreign key (idCategorieService)
      references CategorieServices (idCategorieService) on delete restrict on update restrict;

alter table association5 add constraint FK_association5 foreign key (refCommande)
      references Commande (refCommande) on delete restrict on update restrict;

alter table association5 add constraint FK_association5 foreign key (idService)
      references Services (idService) on delete restrict on update restrict;

