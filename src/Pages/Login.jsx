import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { auth, isConfigured, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase";
import { useLoading } from "../contexts/useLoading";

const Login = () => {
    const navigate = useNavigate();
    const { showLoading } = useLoading();
    const [mode, setMode] = useState("login"); // 'login' | 'register'

    // Login form state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Register form state
    const [name, setName] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regConfirm, setRegConfirm] = useState("");

    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        if (!email || !password) {
            setError("Completá email y contraseña");
            return;
        }

        // Admin rápido (credenciales fijas de ejemplo)
        const isAdminQuick = email.toLowerCase() === "admin@admin.cl" && password === "admin";
        if (isAdminQuick) {
            localStorage.setItem("adminAuthed", "true");
            showLoading({ message: "Entrando al panel...", duration: 5000 });
            navigate("/admin");
            return;
        }

        if (isConfigured) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                // Si el email coincide con admin, tratar como admin
                if (email.toLowerCase() === "admin@admin.cl") {
                    localStorage.setItem("adminAuthed", "true");
                    showLoading({ message: "Entrando al panel...", duration: 5000 });
                    navigate("/admin");
                } else {
                    showLoading({ message: "Cargando...", duration: 5000 });
                    navigate("/perfil");
                }
            } catch (err) {
                setError(err?.message || "Error de autenticación");
            }
        } else {
            // Fallback local normal (usuario) si no es admin rápido
            localStorage.setItem("userAuthed", "true");
            localStorage.setItem("userEmail", email);
            showLoading({ message: "Cargando...", duration: 5000 });
            navigate("/perfil");
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        if (!name || !regEmail || !regPassword || !regConfirm) {
            setError("Completá todos los campos");
            return;
        }
        if (regPassword !== regConfirm) {
            setError("Las contraseñas no coinciden");
            return;
        }

        if (isConfigured) {
            try {
                await createUserWithEmailAndPassword(auth, regEmail, regPassword);
                // En un paso siguiente podríamos guardar el nombre en Firestore o actualizar perfil
                showLoading({ message: "Cargando...", duration: 5000 });
                navigate("/perfil");
            } catch (err) {
                setError(err?.message || "Error al registrar usuario");
            }
        } else {
            // Fallback local
            localStorage.setItem("userAuthed", "true");
            localStorage.setItem("userEmail", regEmail);
            localStorage.setItem("userName", name);
            showLoading({ message: "Cargando...", duration: 5000 });
            navigate("/perfil");
        }
    };

    return (
        <main id="contenido" tabIndex={-1} className="login-page">
            <a href="#contenido" className="skip-link">Saltar al contenido</a>

            {mode === "login" ? (
                <section className="login-container" id="login-form">
                    <h2>Iniciar Sesión</h2>
                    <form id="form-login" onSubmit={handleLogin}>
                        <label htmlFor="login-email">Correo electrónico</label>
                        <input
                            type="email"
                            id="login-email"
                            name="email"
                            placeholder="ejemplo@correo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="login-password">Contraseña</label>
                        <input
                            type="password"
                            id="login-password"
                            name="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {error && <div className="login-error">{error}</div>}
                        <button type="submit">Ingresar</button>
                    </form>
                    <div className="toggle">
                        ¿No tienes cuenta? {" "}
                        <button type="button" className="link-btn" onClick={() => setMode("register")}>
                            Regístrate aquí
                        </button>
                    </div>
                </section>
            ) : (
                <section className="login-container" id="register-form">
                    <h2>Registro</h2>
                    <form id="form-register" onSubmit={handleRegister}>
                        <label htmlFor="reg-name">Nombre completo</label>
                        <input
                            type="text"
                            id="reg-name"
                            name="name"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label htmlFor="reg-email">Correo electrónico</label>
                        <input
                            type="email"
                            id="reg-email"
                            name="email"
                            placeholder="ejemplo@correo.com"
                            value={regEmail}
                            onChange={(e) => setRegEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="reg-password">Contraseña</label>
                        <input
                            type="password"
                            id="reg-password"
                            name="password"
                            placeholder="********"
                            value={regPassword}
                            onChange={(e) => setRegPassword(e.target.value)}
                            required
                        />

                        <label htmlFor="reg-confirm">Confirmar contraseña</label>
                        <input
                            type="password"
                            id="reg-confirm"
                            name="confirm"
                            placeholder="********"
                            value={regConfirm}
                            onChange={(e) => setRegConfirm(e.target.value)}
                            required
                        />

                        {error && <div className="login-error">{error}</div>}
                        <button type="submit">Crear cuenta</button>
                    </form>
                    <div className="toggle">
                        ¿Ya tienes cuenta? {" "}
                        <button type="button" className="link-btn" onClick={() => setMode("login")}>
                            Inicia sesión aquí
                        </button>
                    </div>
                </section>
            )}
        </main>
    );
};

export default Login;
