export const isAuthenticated = () => localStorage.getItem("auth") === "true";

export const login = (username, password) => {
    if (username === "admin" && password === "password") {
        localStorage.setItem("auth", "true");
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem("auth");
};
