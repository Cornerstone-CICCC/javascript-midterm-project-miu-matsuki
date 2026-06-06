// Exercise 9: Reorder candidates
//
// Find active products that may need reordering.
// A product needs reordering when stock is below 25 and it is not discontinued.
// Return: id, name, supplier, stock, totalUnitsSold.
// Sort by stock ascending, then totalUnitsSold descending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const products = require('../data/products.json');

const lodashSolution = _.chain(products)
.filter((num)=> num.stock < 25 && !num.discontinued)
.map((el)=>({
  id: el.id,
  name: el.name, 
  supplier:el.supplier, 
  stock: el.stock, 
  totalUnitsSold: _.sum(_.values(el.sales))
}))
.orderBy(["stock", "totalUnitsSold"] , ["asc","desc"])
.value();

console.log(lodashSolution);

/*
Expected output:
[
  {
    id: 'P-1027',
    name: 'Standing Desk Basic',
    supplier: 'OfficeDepot Pro',
    stock: 9,
    totalUnitsSold: 107
  },
  {
    id: 'P-1026',
    name: 'Drawing Tablet S',
    supplier: 'ScreenHub',
    stock: 12,
    totalUnitsSold: 160
  },
  {
    id: 'P-1017',
    name: 'Adjustable Dumbbell',
    supplier: 'ActiveSupply',
    stock: 15,
    totalUnitsSold: 192
  },
  {
    id: 'P-1003',
    name: 'Studio Monitor 27',
    supplier: 'ScreenHub',
    stock: 18,
    totalUnitsSold: 232
  },
  {
    id: 'P-1010',
    name: 'Air Purifier Mini',
    supplier: 'CleanAir Co',
    stock: 20,
    totalUnitsSold: 245
  },
  {
    id: 'P-1013',
    name: 'Rain Shell Jacket',
    supplier: 'TrailWorks',
    stock: 22,
    totalUnitsSold: 343
  }
]
*/
