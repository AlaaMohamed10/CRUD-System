var ProductNameInput = document.getElementById('ProductNameInput');
var ProductPriceInput = document.getElementById('ProductPriceInput');
var ProductCategoryInput = document.getElementById('ProductCategoryInput');
var ProductDescriptionInput = document.getElementById('ProductDescriptionInput');

var SearchInput = document.getElementById('SearchInput');

var productList = []

var addBtn = document.getElementById('addBtn')
var updateBdn = document.getElementById('updateBdn')

var indexUpdate = 0;


  if(localStorage.getItem('product')!=null){
    productList = JSON.parse( localStorage.getItem('product'))

  displayData()
  }

function getProduct(){

    if(validationName()==true&&validationPrice()==true&&validationCategory()==true){
        var addProduct = {
            name:ProductNameInput.value,
            price:ProductPriceInput.value,
            category:ProductCategoryInput.value,
            desc:ProductDescriptionInput.value,
        }
    productList.push(addProduct)
    
    localStorage.setItem('product',JSON.stringify(productList))
    
    clearForm()
    displayData()
    ProductNameInput.classList.remove('is-valid')
    ProductPriceInput.classList.remove('is-valid')
    ProductCategoryInput.classList.remove('is-valid')


    console.log(productList)
    }
}

/////////////////////////////////////////////////////////////////////

function clearForm(){
    ProductNameInput.value='',
    ProductPriceInput.value='',
    ProductCategoryInput.value='',
    ProductDescriptionInput.value=''
}

///////////////////////////////////////////////////////////////////

function displayData(){
var cartona =''

    for(var i =0 ; i<productList.length ; i++ ){
        cartona+=`
        <tr>
                        <td>${i}</td>
                        <td>${productList[i].name}</td>
                        <td>${productList[i].price}</td>
                        <td>${productList[i].category}</td>
                        <td>${productList[i].desc}</td>
                        <td>
                            <button onclick="setData(${i})" class="btn btn-warning btn-sm">Update</button>
                            <button onclick='deleteItem(${i})' class="btn btn-danger btn-sm">Delete</button>
                            </td>
                    </tr>
        `
        document.getElementById('tbody').innerHTML=cartona
    }
}

////////////////////////////////////////////////////////////

function deleteItem(index){

productList.splice(index,1)
localStorage.setItem('product',JSON.stringify(productList))
displayData()


} 

//////////////////////////////////////////////////////////////////////////////

function search(){
var term = SearchInput.value
var cartona =''

    for(var i =0 ; i<productList.length ; i++ ){
        if(productList[i].name.toLowerCase().includes(term.toLowerCase())){
        cartona+=`
        <tr>
                        <td>${i}</td>
                        <td>${productList[i].name}</td>
                        <td>${productList[i].price}</td>
                        <td>${productList[i].category}</td>
                        <td>${productList[i].desc}</td>
                        <td>
                            <button onclick="setData(${i})" class="btn btn-warning btn-sm">Update</button>
                            <button onclick='deleteItem(${i})' class="btn btn-danger btn-sm">Delete</button>
                            </td>
                    </tr>
        `
        document.getElementById('tbody').innerHTML=cartona
    }
    
}

}

/////////////////////////////////////////////////////////////////مراجعه

function setData(index){

    indexUpdate = index

var curntProduct = productList[index] 

ProductNameInput.value = curntProduct.name
ProductPriceInput.value = curntProduct.price
ProductCategoryInput.value = curntProduct.category
ProductDescriptionInput.value = curntProduct.desc





displayData()

updateBdn.classList.remove('d-none')
addBtn.classList.add('d-none')

}

/////////////////////////////////////////////////////////////////////////

function Update(){

    var addProduct = {
        name:ProductNameInput.value,
        price:ProductPriceInput.value,
        category:ProductCategoryInput.value,
        desc:ProductDescriptionInput.value,
    }

    productList.splice(indexUpdate,1,addProduct)
    localStorage.setItem('product',JSON.stringify(productList))
    displayData()

updateBdn.classList.add('d-none')
addBtn.classList.remove('d-none')
}
//////////////////////////////////////////////////////////////////مراجعه

var nameMasseg = document.getElementById('nameMasseg')

function validationName(){

    var regexName = /^[A-Z][a-z]{3,8}$/
var text =  ProductNameInput.value

console.log(regexName.test(text))

if(regexName.test(text)){

    ProductNameInput.classList.add('is-valid')
    ProductNameInput.classList.remove('is-invalid')
    
    nameMasseg.classList.add('d-none')
return true;
}
else{

    ProductNameInput.classList.add('is-invalid')
    ProductNameInput.classList.remove('is-valid')

    nameMasseg.classList.remove('d-none')
return false;
}

}
//////////////////////////////////////////////////////////////
var priceMasseg =document.getElementById('priceMasseg')

function validationPrice(){

    var regexName = /^[0-9]{3,8}$/
var text =  ProductPriceInput.value

console.log(regexName.test(text))

if(regexName.test(text)){

    ProductPriceInput.classList.add('is-valid')
    ProductPriceInput.classList.remove('is-invalid')
    
    priceMasseg.classList.add('d-none')
return true;
}
else{

    ProductPriceInput.classList.add('is-invalid')
    ProductPriceInput.classList.remove('is-valid')

    priceMasseg.classList.remove('d-none')
return false;
}

}

////////////////////////////////////////////////////////////////////
var categoryMasseg =document.getElementById('categoryMasseg')

function validationCategory(){

    var regexName =/^[A-Z][a-z]{3,8}$/
var text =  ProductCategoryInput.value

console.log(regexName.test(text))

if(regexName.test(text)){

    ProductCategoryInput.classList.add('is-valid')
    ProductCategoryInput.classList.remove('is-invalid')
    
    categoryMasseg.classList.add('d-none')
return true;
}
else{

    ProductCategoryInput.classList.add('is-invalid')
    ProductCategoryInput.classList.remove('is-valid')

    categoryMasseg.classList.remove('d-none')
return false;
}

}

/////////////////////////////////////////////////////////////////////



