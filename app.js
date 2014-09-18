/**
 * #GemStore
 * ##GemStore excercise from Shapping Up with AngularJS Course.
 * A module is a collection of configuration and run blocks which get applied to the application during the bootstrap process. In its simplest form the module consist of collection of two kinds of blocks:
 *
 * - Configuration blocks - get executed during the provider registrations and configuration phase. Only providers and constants can be injected into configuration blocks. This is to prevent accidental instantiation of services before they have been fully configured.
 * - Run blocks - get executed after the injector is created and are used to kickstart the application. Only instances and constants can be injected into run blocks. This is to prevent further system configuration during application run time.
 *
 * Modules can list other modules as their dependencies. Depending on a module implies that required module needs to be loaded before the requiring module is loaded. In other words the configuration blocks of the required modules execute before the configuration blocks of the requiring module. The same is true for the run blocks. Each module can only be loaded once, even if multiple other modules require it.
 * @module GemStore
 */
(function(){
  var app= angular.module('gemStore',[]);

  /**
  * #Application main controller.
  * ##You can reference to the Gems stored through this controller.
  * The ngController directive attaches a controller class to the view. This is a key aspect of how angular supports the principles behind the Model-View-Controller design pattern.
  * This directive creates new scope.
  * This directive executes at priority level 0.
  * - Using controller as makes it obvious which controller you are accessing in the template when multiple controllers apply to an element.
  * - If you are writing your controllers as classes you have easier access to the properties and methods, which will appear on the scope, from inside the controller code.
  * - Since there is always a . in the bindings, you don't have to worry about prototypal inheritance masking primitives.
  *
  * @class StoreController
  */
  app.controller('StoreController',function(){
    /**
    * @attribute products
    * @type array of gem objects
    */
    this.products=gems;

  });

  /**
  * ##Application controller for tab management.
  * UI Bootstrap provides directives and templates to work with Bootstrap components like tabs, accordions, alerts, and dialogs.
  *
  * @class TabController
  */
  app.controller('TabController',function(){
    /**
    * Indicates the tab to be displayed.
     * @attribute tab
     * @readOnly
     * @default 1
     * @type int
     */
    this.tab=1;

    /**
     * Description
     * @method setTab
     * @param {} tab
     * @return 
     */
    this.setTab = function(tab){
      this.tab=tab;
    };

    /**
     * Returns whether a tab is selected or not.
     * @method isSelected
     * @param {} tab
     * @return BinaryExpression
     */
    this.isSelected= function(tab)
    {
      return this.tab==tab;
    };
  });

  /**
  * ## Application controller for tab management.
  * At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element or even transform the DOM element and its children.
  *
  * Angular comes with a set of these directives built-in, like ngBind, ngModel, and ngView. Much like you create controllers and services, you can create your own directives for Angular to use. When Angular bootstraps your application, the HTML compiler traverses the DOM matching directives against the DOM elements.
  * @class ReviewController
  */
  app.controller('ReviewController',function(){
    /**
      * Holds information of a review in process of submition.
     * @attribute review
     * @default empty Object
     * @type {Object}
     */
    this.review={};

    /**
     * Add a review submitted by a user.
     * @method addReview
     * @param {} product
     * @return 
     */
    this.addReview=function(product){
      product.reviews.push(this.review)
      this.review={};
    };

  });

  var gems=
  [
    {
      name:'Blond Stone',
      price:2.95,
      description:'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of this gems.',
      canPurchase:true,
      soldOut:false,
      images: ['imgs/gem1.png' , 'imgs/gem1-2.png' , 'imgs/gem1-3.png' ],
      reviews:[{opinion:'i love it',stars:5, author:'tom@gmail.com'},{opinion:'i love it',stars:3, author:'tom@gmail.com'}]
    },
    {
      name:'Hexagonal Gem',
      price:5.95,
      description:'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of this gems.',
      canPurchase:true,
      soldOut:false,
      images: ['imgs/gem2.png', 'imgs/gem2-1.png', 'imgs/gem2-2.png' ],
      reviews:[{opinion:'i love it',stars:4, author:'tom@gmail.com'},{opinion:'i love it',stars:2, author:'tom@gmail.com'}]
    },
    {
      name:'Gemy',
      price:2,
      description:'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of this gems.',
      canPurchase:true,
      soldOut:true,
      images: ['imgs/gem3.png' , 'imgs/gem3-2.png' , 'imgs/gem3-3.png' ],
      reviews:[{opinion:'i love it',stars:3, author:'tom@gmail.com'},{opinion:'i love it',stars:1, author:'tom@gmail.com'}]
    }
  ];

})();
