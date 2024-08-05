const openedMenu = document.querySelector(".opened-menu");
const closedMenu = document.querySelector(".closed-menu");
const navbarMenu = document.querySelector(".navbar");
const menuOverlay = document.querySelector(".overlay");

// Opened navbarMenu
// Closed navbarMenu
// Closed navbarMenu by Click Outside
openedMenu.addEventListener("click", toggleMenu);
closedMenu.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

// Toggle Menu Function
function toggleMenu() {
	navbarMenu.classList.toggle("active");
	menuOverlay.classList.toggle("active");
	document.body.classList.toggle("scrolling");
}

navbarMenu.addEventListener("click", (event) => {
	if (window.innerWidth <= 992) {

		const menuItemHasChildren = event.target.parentElement;//event.target => li > a 태그

		//하위메뉴 있는 경우
		if (menuItemHasChildren.classList.contains("menu-item-has-children")) {
			// 기본 앵커 클릭 동작 방지
			event.preventDefault();

			//메뉴를 먼저 닫는 경우 active가 삭제되어버리므로 항상 active가 추가됨
			//선택한게 이미 확장되어있는 경우
			if (menuItemHasChildren.classList.contains("active")) {
				collapseSubMenu(); //메뉴 닫기
			} else { //선택한게 확장되어있지 않은 경우
				collapseSubMenu(); //메뉴 닫기

				menuItemHasChildren.classList.add("active");
				const subMenu = menuItemHasChildren.querySelector(".sub-menu");
				subMenu.style.maxHeight = subMenu.scrollHeight + "px";
			}
		} else if ( menuItemHasChildren.classList.contains("menu-item-no-children")) {//하위메뉴 없는 경우
			collapseSubMenu();//메뉴 닫기
			menuItemHasChildren.classList.add("selected");
		}
		// else { //2레벨 메뉴인 경우
		// }
	}
});

// 메뉴 선택 해제
function collapseSubMenu() {
	//자식없는 1차메뉴 선택된거 있으면
	if (navbarMenu.querySelector(".menu-item-no-children.selected")) {
		navbarMenu.querySelector(".menu-item-no-children.selected").classList.remove("selected");
	}

	//자식 있는 1차 메뉴 선택된거 있으면
	if (navbarMenu.querySelector(".menu-item-has-children.active")) {
		navbarMenu.querySelector(".menu-item-has-children.active .sub-menu").removeAttribute("style");
		navbarMenu.querySelector(".menu-item-has-children.active").classList.remove("active");
	}
}

// Fixed Resize Screen Function
function resizeScreen() {
	//  navbarMenu 열려있으면 닫기
	if (navbarMenu.classList.contains("active")) {
		toggleMenu();
	}

	// If menuItemHasChildren is Expanded, Collapse It
	//자식없는 1레벨 메뉴 선택된 경우도 초기화
	if (navbarMenu.querySelector(".menu-item-has-children.active, .menu-item-no-children.selected")) {
		collapseSubMenu();
	}
}

window.addEventListener("resize", () => {
	if (this.innerWidth > 992) {
		resizeScreen();
	}
});
