(() => {
   // run in homepage
   if (window.location.pathname !== "/") {
       console.log("wrong page");
       return; 
   }

   var script = document.createElement('script');
   script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
   document.head.appendChild(script);

   const getProductsFromLocalStorage = () => {
     return JSON.parse(localStorage.getItem('products')) || null;
   };

   const setProductsToLocalStorage = (products) => {
      localStorage.setItem('products', JSON.stringify(products)); 
   };
   
   const getFavorites = () => JSON.parse(localStorage.getItem("favorites") || "[]");
   const setFavorites = (favorites_arr) => localStorage.setItem("favorites", JSON.stringify(favorites_arr));

   const fetchProducts = async () => {
         try {
            const response = await fetch('https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json');
            const data = await response.json();
            setProductsToLocalStorage(data)
            return data;
         } catch (error) {
            console.error('Error fetching products:', error);
            return [];
         }
      };


   const buildHTML = (products) => {
      console.log('Building HTML with products:', products);

      let productsHTML = '';

      products.forEach(product => {
         const hasDiscount = product.price != product.original_price;
         const discount = Math.round((1 - product.price / product.original_price) * 100);
        

         productsHTML += `
         <div class="owl-item ng-tns-c131-6 ng-trigger ng-trigger-autoHeight active ng-star-inserted" data-id="${product.id}" style="width: 242px; margin-right: 20px;">
                                    <div class="ins-web-smart-recommender-box-item ng-star-inserted" style="">
                                       <div event-collection="true" class="ins-product-box ins-element-link ins-add-to-cart-wrapper ins-sr-api" ins-product-id="XYZ-250DR1B">
                                          <eb-carousel-product-item>
                                             <div class="product-item">
                                                <eb-generic-link class="product-item-anchor" event-collection="true">
                                                   <a class="product-item-anchor ng-star-inserted" href="${product.url}" target="_blank" rel="noopener noreferrer">
                                                      <figure class="product-item__img ng-star-inserted">
                                                         <div class="product-item__multiple-badge" style="z-index: 1;">
                                                            <span class="d-flex flex-column">
                                                               <img alt="Popular" loading="lazy" src="assets/images/cok-satan.png" srcset="assets/images/cok-satan@2x.png 2x, assets/images/cok-satan@3x.png 3x" class="ng-star-inserted"><!----><!----><img alt="Popular" loading="lazy" src="assets/images/yildiz-urun.png" srcset="assets/images/yildiz-urun@2x.png 2x, assets/images/yildiz-urun@3x.png 3x" class="ng-star-inserted"><!---->
                                                            </span>
                                                         </div>
                                                         <span class="d-flex flex-column align-items-start justify-content-end position-absolute bottom-0">
                                                            <eb-new-product-badge class="mb-3">
                                                               <!----><!---->
                                                            </eb-new-product-badge>
                                                         </span>
                                                         <cx-media alt="Popular" format="product" id="lnkProductXYZ-250DR1B" class="is-initialized">
                                                            <!----><img class="ng-star-inserted lazyloaded" alt="${product.name}" data-src="${product.img}" src="${product.img}"><!----><!----><!----><!----><!----><!----><!----><!---->
                                                         </cx-media>
                                                         <!---->
                                                         <div class="d-flex ml-4">
                                                            <!----><!---->
                                                         </div>
                                                      </figure>
                                                      <div class="product-item-content ng-star-inserted">
                                                         <eb-generic-link class="product-item-anchor">
                                                   <a class="product-item-anchor ng-star-inserted" href="${product.url}"><h2 class="product-item__brand ng-star-inserted"><b> ${product.brand} - </b><span> ${product.name} </span></h2>
                                                   <div class="d-flex mb-2 stars-wrapper align-items-center ng-star-inserted"><cx-star-rating disabled="true" style="--star-fill: 5;"><cx-icon class="star cx-icon fas fa-star ng-star-inserted"></cx-icon><cx-icon class="star cx-icon fas fa-star ng-star-inserted"></cx-icon><cx-icon class="star cx-icon fas fa-star ng-star-inserted"></cx-icon><cx-icon class="star cx-icon fas fa-star ng-star-inserted"></cx-icon><cx-icon class="star cx-icon fas fa-star ng-star-inserted"></cx-icon><!----></cx-star-rating><p class="review-count ng-star-inserted">(68)</p><!----></div><!----><!----></a><!----><!----><!----></eb-generic-link>
                                                   <div class="product-item__price">
                                                   ${!hasDiscount ? `
                                                   <div class="d-flex align-items-center ng-star-inserted"><!----><!----></div>
                                                   <span class="product-item__new-price ng-star-inserted">${product.price} TL</span><!----><!----></div></div>
                                                   ` : 
                                                   `
                                                   <div class="d-flex align-items-center ng-star-inserted">
                                                   <span class="product-item__old-price ng-star-inserted">${product.original_price} TL</span><!---->
                                                   <span class="product-item__percent carousel-product-price-percent ml-2 ng-star-inserted">%${discount} <i class="icon icon-decrease"></i></span><!---->
                                                   </div><span class="product-item__new-price discount-product ng-star-inserted">${product.price} TL</span><!----><!----></div></div> 
                                                   `}
                                                   <div class="product-list-promo ng-star-inserted">
                                                      <!---->
                                                   </div>
                                                   <!----></a><!----><!----><!---->
                                                </eb-generic-link>
                                                <eb-add-to-wish-list>
                                                   <a  class="ng-star-inserted">
                                                      <div class="heart">
                                                           <img id="default-favorite" src="assets/svg/default-favorite.svg" alt="heart" class="heart-icon">
                                                         <img src="assets/svg/default-hover-favorite.svg" alt="heart" class="heart-icon hovered">
                                                      </div>
                                                   </a>
                                                   <!----><!----><!---->
                                                </eb-add-to-wish-list>
                                                <div class="product-item-content">
                                                   <div class="product-item__price">
                                                      <div class="ins-add-to-cart-wrapper" ins-product-id="XYZ-250DR1B">
                                                         <eb-add-to-cart buttonclass="close-btn">
                                                            <!---->
                                                            <form novalidate="" class="ng-untouched ng-pristine ng-valid ng-star-inserted">
                                                               <!----><!---->
                                                               <button id="addToCartBtn" type="submit" class="btn close-btn disable ng-star-inserted">
                                                                  Sepete Ekle<!----><!----><!---->
                                                               </button>
                                                               <!---->
                                                            </form>
                                                            <!----><!----><!---->
                                                         </eb-add-to-cart>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </eb-carousel-product-item>
                                       </div>
                                    </div>
                                    <!----><!---->
                                 </div>
            `;
         
         });
         const html = `
      <eb-product-carousel class="ng-star-inserted">
      <div class="banner ng-star-inserted">
         <div class="container">
            <eb-carousel-header class="ng-star-inserted">
               <div class="banner__titles">
                  <h2 class="title-primary">Beğenebileceğinizi düşündüklerimiz</h2>
                  <!---->
               </div>
            </eb-carousel-header>
            <div ebvisibilityobserver="" class="banner__wrapper ins-preview-wrapper-10167 ng-star-inserted">
               <div data-recomended-items="[BRM-7556,BAE-20030,XYZ-250DR1B,VAR-BIB-698-93-94,BYP-SH860G001,BAMM-1409,SLE-0006,BAE-70089001,MT-BB100,CH-C01E,XYZ-250DR3B,BAE-70090001,DED-03924,BYP-244003,SUD-400]">
               <owl-carousel-o class="product-list__best-products" _nghost-serverapp-c130="">
                     <div _ngcontent-serverapp-c130="" class="owl-carousel owl-theme owl-loaded owl-responsive owl-drag">
                        <div _ngcontent-serverapp-c130="" class="owl-stage-outer ng-star-inserted">
                           <owl-stage _ngcontent-serverapp-c130="" class="ng-tns-c131-6 ng-star-inserted">
                              <div class="ng-tns-c131-6">
                                 <div class="owl-stage ng-tns-c131-6" style="width: 3930px; transform: translate3d(0px, 0px, 0px); transition: all;">
                                    ${productsHTML}
                                    <!---->
                                 </div>
                              </div>
                           </owl-stage>
                        </div>
                        <!---->
                        <div _ngcontent-serverapp-c130="" class="owl-nav disabled ng-star-inserted">
                           <div _ngcontent-serverapp-c130="" class="owl-prev"><i class="icon icon-prev"></i></div>
                           <div _ngcontent-serverapp-c130="" class="owl-next"><i class="icon icon-next"></i></div>
                        </div>
                        <div _ngcontent-serverapp-c130="" class="owl-dots disabled ng-star-inserted">
                           <!---->
                        </div>
                        <!----><!---->
                     </div>
                  </owl-carousel-o>
                  <button aria-label="back" class="swiper-prev"></button><button aria-label="next" class="swiper-next"></button>
               </div>
            </div>
            <!----><!----><!----><!----><!---->
         </div>
      </div>
   <!---->
</eb-product-carousel>
    `;
      $('.Section2A.has-components').prepend(html);
   
      // Fill favorite icon at beginning
       const favorites = getFavorites();
        $(".owl-item").each(function () {
            const id = $(this).data("id");
            const $icon = $(this).find(".heart-icon");
            if (favorites.includes(id)) {
                $icon.addClass("filled");
            } else {
                $icon.removeClass("filled");
            }
        });
  
      // Add click event to heart icons
        $(".heart").on("click", function() {
            const $heart = $(this);
            const $defaultIcon = $heart.find(".heart-icon");
            const id = $heart.closest(".owl-item").data("id"); 
            let favorites = getFavorites();

            if (favorites.includes(id)) {
                favorites = favorites.filter(f => f !== id);
                $defaultIcon.removeClass("filled");
            } else {
                favorites.push(id);
                $defaultIcon.addClass("filled");
            }
            setFavorites(favorites);
        });

    
   };

   const buildCSS = () => {
      const css = `
      .container {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        --swiper-theme-color: #007aff;
        --swiper-navigation-size: 44px;
        --cx-spatial-base: 0.5rem;
        --cx-spatial-sm: calc(var(--cx-spatial-base) / 2);
        --cx-spatial-md: calc(2 * var(--cx-spatial-base));
        --cx-spatial-lg: calc(4 * var(--cx-spatial-base));
        --cx-spatial-xl: calc(8 * var(--cx-spatial-base));
        --cx-spinner-size: 40px;
        --cx-color-background: #f4f4f4;
        --cx-color-text: #212738;
        --cx-color-inverse: #fff;
        --cx-color-transparent: #0000;
        --cx-color-secondary: #747881;
        --cx-color-success: #5dac06;
        --cx-color-info: #17a2b8;
        --cx-color-warning: #ffc107;
        --cx-color-danger: #db0002;
        --cx-color-light: #d3d6db;
        --cx-color-dark: #212738;
        --cx-color-visual-focus: #6d9df7;
        --cx-color-background-focus: #50b0f41a;
        --cx-page-width-max: 1140px;
        --cx-font-weight-light: 300;
        --cx-font-weight-normal: 400;
        --cx-font-weight-semi: 600;
        --cx-font-weight-bold: 700;
        --cx-text-transform: capitalize;
        --cx-direction: ltr;
        --cx-transition-duration: 0.5s;
        --cx-animation-duration: 1s;
        --cx-border-radius: 1em;
        --cx-buttons-border-radius: 0.25rem;
        --cx-border-style: solid;
        --btf-delay: 300ms;
        --btf-min-height: 100vh;
        --btf-margin-top: 100vh;
        --cx-color-ghost: #f1f1f1;
        --cx-color-ghost-animation: #fff3;
        --cx-ghost-radius: 5px;
        --cx-ghost-margin: 10px;
        --cx-popover-font-size: 0.875rem;
        --cx-popover-background: var(--cx-color-inverse);
        --cx-popover-min-width: 140px;
        --cx-popover-max-width: 280px;
        --cx-popover-border-width: 1px;
        --cx-popover-border-color: var(--cx-color-light);
        --cx-popover-border-radius: 5px;
        --cx-popover-arrow-width: 1rem;
        --cx-popover-arrow-height: 0.5rem;
        --cx-popover-arrow-color: var(--cx-popover-background);
        --cx-popover-z-index: 10;
        --cx-popover-box-shadow-color: #0000001a;
        --cx-progress-button-radius: 24px;
        --cx-progress-button-border-width: 3px;
        --cx-progress-button-animation-time: 1s;
        --cx-progress-button-primary-color: var(--cx-color-primary);
        --cx-progress-button-secondary-color: var(--cx-color-white);
        --cx-spinner-radius: 120px;
        --cx-spinner-border-width: 15px;
        --cx-spinner-animation-time: 1s;
        font-size: 1rem;
        line-height: 1.6;
        color: #212738;
        --cx-color-primary: #007bff;
        --cx-spinner-primary-color: #007bff;
        --cx-spinner-secondary-color: #f8f9fa;
        font-family: Quicksand-Medium;
        text-align: start;
        box-sizing: border-box;
        flex: 1 1 var(--cx-flex-basis,100%);
        padding-bottom: 50px;
      }
      .heart-icon.filled {
            filter: invert(48%) sepia(97%) saturate(2073%) hue-rotate(2deg) brightness(97%) contrast(108%);
      }

    `;
      $('<style>').addClass('carousel-style')
         .html(css)
         .appendTo('head');
   };

   
   const init = async () => {
      let products = getProductsFromLocalStorage();
      if(!products){
         products = await fetchProducts();
      }
      buildHTML(products);
      buildCSS();
   };

   setTimeout(init, 1000);
})();


