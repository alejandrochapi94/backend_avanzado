const API_URL = "http://localhost:5000/api/auth";

async function loginUser(email, password) {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (res.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html";
    } else {
        alert(data.msg);
    }
}

async function registerUser(name, email, password) {
    const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    if (res.ok) {
        alert("Registro exitoso, ahora puedes iniciar sesión.");
    } else {
        alert(data.msg);
    }
}

function logoutUser() {
    localStorage.removeItem("token");
    window.location.href = "index.html";
}

function getToken() {
    return localStorage.getItem("token");
}

function isAuthenticated() {
    return !!getToken();
}
