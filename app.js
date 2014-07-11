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
      soldOut:false,
      images: ['imgs/gem1.png' , 'imgs/gem1-2.png' ]
    },
    {
      name:'Pentagonal Gem',
      price:5.95,
      description:'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of this gems.',
      canPurchase:true,
      soldOut:false,
      images: ['imgs/gem2.png', 'imgs/gem2-1.png' ]
    },
    {
      name:'Gemy',
      price:2,
      description:'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of this gems.',
      canPurchase:true,
      soldOut:true,
      images: ['imgs/gem3.png' , 'imgs/gem3-2.png' , 'imgs/gem3-3.png' ]
    }
  ];

})();
