// gujja mani chandan

var itemJSON = [];

// make predefined jason for showing menu on menu page of our site  
var product = [
    maincourse = [
        {
            id: 1,
            name: 'Burger',
            desc: 'Savor our succulent burger, a culinary masterpiece of premium beef, fresh veggies, and tantalizing sauces. Bite into perfection!',
            price: 20,
            image: '../imgs/burger-with-melted-cheese.webp'
        },
        {
            id: 2,
            name: 'Lime taco',
            desc: 'Indulge in the zest of our lime taco—bursting with vibrant flavors, tender protein, and a citrusy kick for a fiesta in every bite!',
            price: 20,
            image: '../imgs/chicken-lime-taco.webp'
        },
        {
            id: 3,
            name: 'Grilled Skewer',
            desc: 'Relish the savory perfection of our grilled skewer—juicy, marinated bites skewered to charred perfection. A tantalizing culinary journey on a stick!',
            price: 20,
            image: '../imgs/grilled-skewers.webp'
        },
        {
            id: 4,
            name: 'Mexican Special',
            desc: 'SDiscover our Mexican special—an explosion of authentic flavors. From zesty salsas to savory enchiladas, each bite is a fiesta on your taste buds. ¡Delicioso!avor our succulent burger, a culinary masterpiece of premium beef, fresh veggies, and tantalizing sauces. Bite into perfection!',
            price: 20,
            image: '../imgs/colorful-traditional-mexican-food-dishes-chimichanga-78099842.jpg'
        },
        {
            id: 5,
            name: 'Chicken Tortilla',
            desc: 'Savor our Chicken Tortilla—tender grilled chicken wrapped in a warm tortilla, layered with fresh ingredients. A taste of comfort and Mexican flair in every bite!',
            price: 20,
            image: '../imgs/enchiladas-mexican-food-tortilla-chicken-cheese-tomatoes-95792777.jpg'
        },
        {
            id: 6,
            name: 'Iron pan backgourn',
            desc: 'Immerse in the rustic charm of our Iron Pan Background—where eachdish is crafted with love, bringing a touch of timeless culinary elegance to your dining experience. our succulent burger,o perfection!',
            price: 20,
            image: '../imgs/iron pan backgourn.jpg'
        },
        {
            id: 7,
            name: 'Lemon tortilla',
            desc: 'Elevate your senses with our Lemon Tortilla—a citrus-infused delight featuring succulent fillings embraced by the zest of a handmade, flavorful tortilla. Zingy satisfaction awaits! veggies, and tantalizing sauces. Bite into perfection!',
            price: 20,
            image: '../imgs/lemon tortilla.jpg'
        },
        {
            id: 8,
            name: 'Oaxaca',
            desc: 'Embark on a culinary journey to Oaxaca—savor the rich, authentic flavors of our dishes inspired by this Mexican gem. Immerse yourself in gastronomic delight! our succulent burger,o perfection!',
            price: 20,
            image: '../imgs/tlayudas-oaxaca-mexico.jpg'
        }
    ],
    extras = [
        {
            id: 1,
            name: 'Red Velwate',
            desc: '',
            price: 10,
            image: '../imgs/red-velvate.jpg'
        },
        {
            id: 2,
            name: 'Cheese-cake',
            desc: '',
            price: 10,
            image: '../imgs/cheese-cake.jpg'
        },
        {
            id: 3,
            name: 'Pudding',
            desc: '',
            price: 10,
            image: '../imgs/pudding.jpg'
        },
        {
            id: 4,
            name: 'Cup Cake',
            desc: '',
            price: 10,
            image: '../imgs/cup-cake.jpg'
        },
        {
            id: 5,
            name: 'Ice Cream',
            desc: '',
            price: 10,
            image: '../imgs/ice creame.jpg'
        }   
    ],
    drinks = [
        {
            id: 1,
            name: 'Coke',
            desc: '',
            price: 5,
            image: '../imgs/coke cola.jpg'
        },
        {
            id: 2,
            name: 'lemon Aide',
            desc: '',
            price: 5,
            image: '../imgs/lemon aide.jpg'
        },
        {
            id: 3,
            name: 'Virgin Mery',
            desc: '',
            price: 5,
            image: '../imgs/virgin mery.jpg'
        }
    ]
]
// gujja mani chandan
$(document).ready(function(){
  $('#multicol-carousel').slick({
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    speed: 1000, // Transition speed in milliseconds
    infinite: true, // Enable infinite loop
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
  });


var mainCourseContainer = $('#maincourse');
var extrasContainer = $('#extras');
var drinksContainer = $('#drinks');
 // Function to handle menu search
 $("#menuSearch").on("input", function() {
  var searchTerm = $(this).val().toLowerCase();

  // Hide all menu items in maincourse, extras, and drinks sections
  $("#maincourse .item26, .extras .item26, .drinks .item26").hide();

  // Show only items in maincourse,extras, drinks that match the search term
  $("#maincourse .item26, .extras .item26, .drinks .item26").filter(function() {
    return $(this).text().toLowerCase().includes(searchTerm);
  }).show();

});

// Abhi Patel / 8943801
// iterate over each product category in the array
$.each(product, function(index, category) {
    // iterate over each product in the category
    $.each(category, function(i, product) {
        var productDataHtml = '<div class="item26">';
        productDataHtml += '<img src="'+ product.image +'" />';
        productDataHtml += '<div>';
        productDataHtml += '<h3>'+ product.name +'</h3>';
        productDataHtml += '<p>'+ product.desc +'</p>';
        productDataHtml += '<p>$'+ product.price +'</p>';
        productDataHtml += '</div>';
        productDataHtml += '<button id="item'+index+'" name="'+product.name+'">Add to cart</button>';
        productDataHtml += '</div>';
        
        // append the product HTML to the appropriate container
        if (index === 0) {
            mainCourseContainer.append(productDataHtml);
        } else if (index === 1) {
            extrasContainer.append(productDataHtml);
        } else if (index === 2) {
            drinksContainer.append(productDataHtml);
        }
    });
});

var cartCounter = 0;
  function updateCartCounter() {
    $('.addToCart').text('Show Cart (' + cartCounter + ')');
}

$('.item26 button').on('click',function() {
  var itemName = $(this).attr('name');

  // Find the item in the nested arrays
  var item = product.flat().find(x => x.name === itemName);
    // Store add-to-cart json to local storage 
    itemJSON.push(item);  
    if (itemJSON) {
      cartCounter ++;
      updateCartCounter();    
      localStorage.setItem('items', JSON.stringify(itemJSON));
    }
});

$('.addToCart').on('click',function() {
  if (itemJSON.length > 0) {
    window.location.href = "../cart/cart.html";
  } else {
    alert("Please add atleast one item into cart");
  }
});

});