export function protectedLink({ isLogin, navigate, url }) {
    if (!isLogin) {
        sessionStorage.setItem("redirectAfterLogin", url);
        navigate("/login");
        return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
}
