document.addEventListener("DOMContentLoaded", function () {
    function addProductToCart() { // Manichandan
        document.getElementById('myModal').style.display = 'flex';
    }
    });
    
    // -- Abhi Patel / 8943801
    var myCart = JSON.parse(localStorage.getItem('items'));
    console.log(myCart);
    $(document).ready(function() {
        
        var cartContainer = $('#cartContainer');
        
        // iterate over each product category in the array
        $.each(myCart, function(index, myCart) {
            var productDataHtml = '<div class="item26">';
            productDataHtml += '<img src="'+ myCart.image +'" />';
            productDataHtml += '<div>';
            productDataHtml += '<h3>'+ myCart.name +'</h3>';
            productDataHtml += '<p>'+ myCart.desc +'</p>';
            productDataHtml += '<p>$'+ myCart.price +'</p>';
            productDataHtml += '</div>';
            productDataHtml += '</div>';
            
            // append the product HTML to the appropriate container
            cartContainer.append(productDataHtml);
        });
    })
    
    $('#add').on('click', function() {
            var total = $('.cost');
            
            let itemPrice = myCart.flat().find(x => x.price);
            let result = itemPrice.price * $('#quantity').val();
            // append the product HTML to the appropriate container
            total.append(result);
    
            $('#checkout').on('click', function() {
                if(result) {
                    alert("Order Successfull!!");
                }
            })
    });