export function menuToggle(openArrow, closeArrow, menuContent, menuId) {
    let openMenuArrow = document.getElementById(openArrow);
    let closeMenuArrow = document.getElementById(closeArrow);
    let navContent = document.getElementById(menuContent);
    let menu = document.getElementById(menuId);
    openMenuArrow === null || openMenuArrow === void 0 ? void 0 : openMenuArrow.addEventListener('click', () => {
        openMenuArrow.style.display = 'none';
        if (closeMenuArrow && navContent && menu) {
            closeMenuArrow.style.display = 'block';
            navContent.style.display = 'flex';
            menu.style.paddingLeft = '6vw';
        }
    });
    closeMenuArrow === null || closeMenuArrow === void 0 ? void 0 : closeMenuArrow.addEventListener('click', () => {
        closeMenuArrow.style.display = 'none';
        if (openMenuArrow && navContent && menu) {
            openMenuArrow.style.display = 'block';
            navContent.style.display = 'none';
            menu.style.paddingLeft = '0';
        }
    });
}
