const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container-1');

(() => {
    if(signInButton != null){
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
    }

    if(signInButton != null){
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }
})();



