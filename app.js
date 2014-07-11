(function(){
  var app= angular.module('gemStore',[]);

  app.controller('StoreController',function(){
    this.products=gems;
  });

  var gems=
  [
    {
      name:'Dodecahedron',
      price:2.95,
      description:'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of this gems.',
      canPurchase:true,
      soldOut:false
    },
    {
      name:'Pentagonal Gem',
      price:5.95,
      description:'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of this gems.',
      canPurchase:true,
      soldOut:false
    },
    {
      name:'Gemy',
      price:5.95,
      description:'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of this gems.',
      canPurchase:true,
      soldOut:true
    }
  ];

})();
