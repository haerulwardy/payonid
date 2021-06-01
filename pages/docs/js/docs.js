// menu actiive
function menuActive() {
    const sidebarMenus = document.querySelectorAll('.sidebar-menu a');
    sidebarMenus.forEach( menu => {
        menu.addEventListener('click', function(e) {
            e.preventDefault();
            sidebarMenus.forEach(m => {
                m.classList.remove('active');
            })
            menu.classList.add('active');
        })
    })
}
// run function
menuActive();