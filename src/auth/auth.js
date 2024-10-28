import axios from "axios";

export async function isAuthenticated() {
  try {
    const token = localStorage.getItem("token");
    console.log(localStorage.getItem("token")); 

    const response = await axios.get(
      "http://localhost:80/SignUpClassesPhp/auth/",
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    return response.data.isAuthenticated === true;
  } catch (error) {
    console.log("Failed to authenticate user:", error);
    return false;
  }
}
