const footerFuction = () => {
    let footer =  document.querySelector("footer")

    footer.innerHTML = `
    <div class="footer-content">
    <img src="/img-20221024T171850Z-001/img/whiteLogo-removebg-preview.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-Shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-Shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">About Company</p>
<p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quae rem consequatur sint minima
    beatae, repudiandae, dolores sequi laboriosam quas aliquam molestiae tenetur similique deleniti voluptatem
    ut minus consectetur in reiciendis magni? Modi nisi ducimus, consequuntur optio ad impedit! Repellat odit
    inventore blanditiis animi ipsum cumque sed ipsa temporibus sit.</p>
    <p class="info">support emails - jDot@clothing.com, customersupport@clothing.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, best apparels online store</p>
    `
}

footerFuction()