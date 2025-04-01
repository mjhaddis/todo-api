import axios from "axios";
import "./style.css";

document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault()

    const userEmail = (document.getElementById("email") as HTMLInputElement).value

    const userPassword = (document.getElementById("password") as HTMLInputElement).value

    if (!userEmail || !userPassword) {
        alert("Please enter both email and password.")
        return
    }

    try {
        const response = await axios.post(
            "http://localhost:3000/login",
            {
                email: userEmail,
                password: userPassword
            },
            {
                withCredentials: true  
            }
        )
        console.log(response.data)
    
        location.href = "/"
      
    } catch (error) {
        alert("Login failed. Check email and password")
        console.error(error)
    }
})