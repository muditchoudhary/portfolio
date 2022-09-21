const NavigationController = (() => {
    const showNavBar = () => {
        const mobileNav = document.querySelector(".mobile-navbar");
        mobileNav.classList.remove("hidden");
    }

    const hideNavBar = () => {
        const mobileNav = document.querySelector(".mobile-navbar");
        mobileNav.classList.add("hidden");
    }

    const navBarToggler = () => {
        const toggleBtn = document.querySelector(".navbar-toggler");
        let isNavBarOpen = false;
        toggleBtn.addEventListener("click", () => {
            if (!isNavBarOpen) {
                showNavBar();
                isNavBarOpen = true;
            } else {
                hideNavBar();  
                isNavBarOpen = false;
            } 
        })
    }

  
    return {
      navBarToggler,
    };
  })();
  
  export { NavigationController };
  
