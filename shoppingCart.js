const product = [
    { 
        id: 0,
        image: 'images/camera.jpg',
        name: '250D DSLR Camera',
        price: 23000,
    },
    { 
        id: 1,
        image: 'images/iphone.jpeg',
        name: 'iphone 7',
        price: 123000,
    },
    { 
        id: 2,
        image: 'images/ipad.jpeg',
        name: 'ipad',
        price: 36000,
    },
    { 
        id: 3,
        image: 'images/headphone2.webp',
        name: 'Headphone',
        price: 2300,
    },
    { 
        id: 4,
        image: 'images/guiter.jpeg',
        name: 'Guiter',
        price: 24000,
    },
];
const categories = [...new Set(product.map((item)=> 
    {return item}))]
    let i = 0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image,name,id, price} = item;
        return(
            `<div class='box'>
                <div class= 'img-box'>
                    <img class='images' src=${image}></img>
                </div>
            <div class= 'bottom'>
            <h6> ID: ${id}</h6>
            <p>${name}</p>
            <h2 id='itemval'> ${price}.00</h2>
            <ul class="pagination justify-content-end set_quantity">
                    <li class="page-item">
                        <button class="page-link" onclick="decreaseNumber('textbox','itemval')"><i class="fas fa-minus"></i></button>
                    </li>
                    <li class="page-item">
                        <input type="text" name="" class="page-link" value="0" id="textbox"></input>
                    </li>
                    <li class="page-item">
                        <button class="page-link" onclick="increaseNumber('textbox','itemval')"><i class="fas fa-plus"></i></button>
                    </li>
                </ul>
            ` +
            "<button onclick='addToCart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')

    const decreaseNumber = (incdec, itemprice) => {
        var itemval = document.getElementById(incdec);

        var itemprice = document.getElementById(itemprice);
        console.log(itemprice.innerHTML);

        if(itemval.value <= 0 ){
            itemval.value = 0;
            alert('negative value not allowed');
        }
        else{
            itemval.value = parseInt(itemval.value) -1;
            

        }
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 23000;
    }

    const increaseNumber = (incdec,itemprice) => {
        var itemval = document.getElementById(incdec);
        var itemprice = document.getElementById(itemprice);
        console.log(itemprice.innerHTML);
        if(itemval.value >= 5 ){
            itemval.value = 5;
            alert('max 5 allowed');
            
        }
        else{
            itemval.value = parseInt(itemval.value) +1;
            if(itemval.value==1){
                itemprice.innerHTML = parseInt(itemprice.innerHTML) + 0;
            }
            else{
                itemprice.innerHTML = parseInt(itemprice.innerHTML) + 23000;

            }
            

        }
        
    } 

    var cart = [];

    function addToCart(a){
        cart.push({...categories[a]});
        displayCart();
    }
    function delElement(a){
        cart.splice(a,1);
        displayCart()
    }

    function displayCart(a){
        let j =0,total =0;
        document.getElementById('count').innerHTML = cart.length;
        document.getElementById('total').innerHTML = "$"+ 0+ ".00";
        if(cart.length == 0){
            document.getElementById('cartItem').innerHTML = 'Your cart is empty';

        }
        else{
            document.getElementById('cartItem').innerHTML = cart.map((item)=>
            {
                var {image,name,price} = item;
                total = total +price;
                document.getElementById('total').innerHTML = "$"+ total+ ".00";
                return(
                    `<div class='cart-item'>
                        <div class= 'row-img'>
                            <img class='rowing' src=${image}>
                        </div>
                    <p style='font-size:12px;'>${name}</p>
                    <h2 style='font-size:10px;'> ${price}.00</h2>` +
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
                );
            }).join('')
        }
    }