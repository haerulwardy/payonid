// menu actiive
function menuActive() {
    const sidebarMenus = document.querySelectorAll('.sidebar-menu a');
    sidebarMenus.forEach( menu => {
        menu.addEventListener('click', function() {
            sidebarMenus.forEach(m => {
                m.classList.remove('active');
            })
            menu.classList.add('active');
        })
    })
}

// res menu
function resMenu() {
    const resMenus = document.querySelectorAll('.res-menu');
    const resContent = document.querySelectorAll('.res-content');
    resMenus.forEach(menu => {
        menu.addEventListener('click', function() {
            resContent.forEach(content => {
                content.classList.remove('active')
            })
            showMenus(this);
        })
    })

    function showMenus(content) {
        if(content.className.includes('res-login')) {
            const conLogin = document.querySelector('.content-login');
            conLogin.classList.toggle('active');
        } else if(content.className.includes('res-rincian')) {
            const conRincian = document.querySelector('.content-rincian');
            conRincian.classList.toggle('active');
        } else if(content.className.includes('res-produk')) {
            const conProduk = document.querySelector('.content-produk');
            conProduk.classList.toggle('active');
        } else if(content.className.includes('res-pembelian')) {
            const conPembelian = document.querySelector('.content-pembelian');
            conPembelian.classList.toggle('active');
        } else if(content.className.includes('res-transaksi')) {
            const conTransaksi = document.querySelector('.content-transaksi');
            conTransaksi.classList.toggle('active');
        }
    }
}

// conten menu
function resContentMenu() {
    const resContentMenus = document.querySelectorAll('.res-content-menu a');
    resContentMenus.forEach(menu => {
        menu.addEventListener('click', function(e) {
            e.preventDefault();
            resContentMenus.forEach(m => {
                m.classList.remove('active');
            })

            this.classList.add('active');
        })
    })
}



// run function
menuActive();
resMenu();
resContentMenu();