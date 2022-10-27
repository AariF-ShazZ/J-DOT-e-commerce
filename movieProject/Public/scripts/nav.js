const navFunction = () => {
    let nav = document.querySelector(".navbar")

    nav.innerHTML = `
    <div class="nav">
    <img src="./img-20221024T171850Z-001/img/brandLogo.webp" class="brand_logo" alt="">
    <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Search...">
                <button class="search-btn">Search</button>
            </div>
            
          <a href="">  <img src="/img-20221024T171850Z-001/img/user.png" alt=""></a>
            <a href=""><img src="/img-20221024T171850Z-001/img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">home</a></li>
    <li class="link-item"><a href="#" class="link">women</a></li>
    <li class="link-item"><a href="#" class="link">men</a></li>
    <li class="link-item"><a href="#" class="link">kids</a></li>
    <li class="link-item"><a href="#" class="link">accessories</a></li>
</ul>
    `
}

navFunction()