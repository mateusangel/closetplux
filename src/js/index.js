// Função para rolar para a seção de produtos ao clicar no botão
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    window.scrollTo({
        top: productsSection.offsetTop,
        behavior: 'smooth'
    });
}
// homem
function redirectToProductPage() {
    window.location.href = "https://s.shopee.com.br/8zr045eAaN"; 
}

function redirectToProductPageHome02() {
    window.location.href = "https://s.shopee.com.br/7KimDgXDeh"; 
}

// mulher

function redirectToProductPage02() {
    window.location.href = "https://s.shopee.com.br/3LCdRE5WIE"; 
}
function redirectToProductPageMulher02() {
    window.location.href = "https://s.shopee.com.br/40SKG08CTQ"; 
}

// criança

function redirectToProductPageCrianca01() {
    window.location.href = "https://s.shopee.com.br/1LRZ4MWX9z"; 
}
function redirectToProductPageCrianca02() {
    window.location.href = "https://s.shopee.com.br/AKMNo53ytP"; 
}


// Função para exibir os produtos da categoria selecionada
function showProducts(category) {
    // Ocultar todas as categorias
    const allCategories = document.querySelectorAll('.product-category');
    allCategories.forEach(function(categoryDiv) {
        categoryDiv.style.display = 'none';
    });

    // Exibir a categoria selecionada
    const selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}
