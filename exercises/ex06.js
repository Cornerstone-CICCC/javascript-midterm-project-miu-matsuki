// Exercise 6: Inventory value by category
//
// Group products by category.
// For each category, calculate:
// - productCount
// - totalStock
// - inventoryValue, using price * stock and rounded to 2 decimal places
// Sort categories from highest inventoryValue to lowest.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const products = require('../data/products.json');

const lodashSolution = _.chain(products)
.groupBy("category")
.map((el)=>({
  category: el[0].category,
  productCount: el.length,
  totalStock: _.sumBy( el , "stock"),
  inventoryValue:  _.round(_.sumBy(el,(p)=> p.price * p.stock),2)  
}))
.orderBy("inventoryValue", "desc")
.value();

console.log(lodashSolution);

/*
Expected output:
[
  {
    category: 'Electronics',
    productCount: 8,
    totalStock: 363,
    inventoryValue: 35546.37
  },
  {
    category: 'Home',
    productCount: 6,
    totalStock: 277,
    inventoryValue: 25021.46
  },
  {
    category: 'Outdoor',
    productCount: 5,
    totalStock: 326,
    inventoryValue: 21736.74
  },
  {
    category: 'Fitness',
    productCount: 5,
    totalStock: 430,
    inventoryValue: 19085.7
  },
  {
    category: 'Grocery',
    productCount: 5,
    totalStock: 682,
    inventoryValue: 14802.78
  },
  {
    category: 'Travel',
    productCount: 3,
    totalStock: 220,
    inventoryValue: 10838.07
  },
  {
    category: 'Stationery',
    productCount: 4,
    totalStock: 497,
    inventoryValue: 10268.03
  }
]
*/
