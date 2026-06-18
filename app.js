const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        title: "DcRubik | Portfolio",
        name: "DcRubik",
        subtitle: "Estudiante de Desarrollo de Aplicaciones Multiplataforma (DAM)",
        bio: "Apasionado por el desarrollo de software, la creación de apps móviles y la resolución de problemas lógicos..",

        skills: {
            languages: ["Java", "Kotlin", "C#", "SQL", "JavaScript"],
            frameworks: ["Android Studio", ".NET MAUI", "Node.js", "Compose"],
            tools: ["Git", "Docker", "PostgreSQL", "WebStorm / IntelliJ"]
        },

        projects: [
            {
                title: "Android App - Gestión de Tareas",
                desc: "Aplicación móvil nativa en Kotlin con base de datos SQLite para organizar tareas diarias.",
                tech: "Kotlin / SQLite",
                type: "Móvil"
            },
            {
                title: "Sistema de Gestión de Clientes (Desktop)",
                desc: "Aplicación de escritorio desarrollada en C# y .NET para la gestión interna de una tienda.",
                tech: "C# / .NET / MySQL",
                type: "Escritorio"
            },
            {
                title: "API REST con Node.js",
                desc: "Servidor backend para conectar una aplicación móvil con una base de datos en la nube.",
                tech: "Node.js / Express / PostgreSQL",
                type: "Backend"
            }
        ]
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 DcRubik portafolio listo en http://localhost:${PORT}`));