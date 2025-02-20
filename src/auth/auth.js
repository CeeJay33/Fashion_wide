import axios from "axios";

export async function isAuthenticated() {
  try {
    const response = await axios.get("http://localhost:80/SignUpClassesPhp/auth/", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return response.data?.isAuthenticated === true;
  } catch (error) {
    console.error("Failed to authenticate user:", error.response?.data || error.message);
    return false;
  }
}
