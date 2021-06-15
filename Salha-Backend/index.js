const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ports = process.env.PORT || 3000;
const femmeRoutes = require('./routes/femme');
const GouvernoratRoutes = require('./routes/gouvernorat');
const ProduitRoutes = require('./routes/produit');
const coursierRoutes = require('./routes/coursier');
const uniteeRoutess = require ('./routes/unite');
const productionRoutes = require('./routes/productionRoute');


const errorController = require('./controllers/error');






app.use(bodyParser.json());
app .use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST ,PUT , DELETE');
res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
next();
});
app.use('/unites',uniteeRoutess);
app.use('/coursiers',coursierRoutes);
app.use('/gouvernorats',GouvernoratRoutes);
app.use('/femmes',femmeRoutes);
app.use('/Produits',ProduitRoutes);
app.use('/production',productionRoutes);

app.use(errorController.get404);

app.use(errorController.get500);
app.listen(ports, () => console.log('listenning on port '+ ports));


