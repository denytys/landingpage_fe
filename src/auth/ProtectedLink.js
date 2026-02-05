export function protectedLink({ authType, navigate, url }) {
    // belum login sama sekali
    if (!authType) {
        sessionStorage.setItem("redirectAfterLogin", url);
        navigate("/login");
        return;
    }

    // guest
    if (authType === "guest") {
        // link eksternal → boleh
        if (url.startsWith("http")) {
            window.open(url, "_blank", "noopener,noreferrer");
            return;
        }

        // link internal → tolak halus
        navigate("/");
        return;
    }

    // user login
    if (url.startsWith("http")) {
        window.open(url, "_blank", "noopener,noreferrer");
    } else {
        navigate(url);
    }
}
