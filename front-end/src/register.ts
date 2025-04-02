import axios from "axios";
import "./style.css";

document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
    e.preventDefault()

    const userEmail = (document.getElementById("registerEmail") as HTMLInputElement).value

    const userPassword = (document.getElementById("registerPassword") as HTMLInputElement).value

    if (!userEmail || !userPassword) {
        alert("Please enter both email and password.")
        return
    }

    try {
        const response = await axios.post(
            "http://localhost:3000/register",
            {
                email: userEmail,
                password: userPassword
            },
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        console.log(response.data)
        
        location.href = "/login"
    } catch (error) {
        alert("Register failed. Check email and password")
        console.error(error)
    }
}) 