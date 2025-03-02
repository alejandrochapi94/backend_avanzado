document.addEventListener("DOMContentLoaded", async () => {
    if (!isAuthenticated()) {
        window.location.href = "index.html";
        return;
    }

    const res = await fetch("http://localhost:5000/api/protected/profile", {
        headers: {
            "Authorization": `Bearer ${getToken()}`
        }
    });

    const data = await res.json();
    if (res.ok) {
        document.getElementById("userInfo").innerText = `Hola, ${data.usuario}`;
        console.log(data.usuario)
    } else {
        alert("No autorizado. Inicia sesión nuevamente.");
        logoutUser();
    }
});

document.getElementById("logoutBtn").addEventListener("click", logoutUser);
