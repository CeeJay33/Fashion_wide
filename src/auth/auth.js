
import axios from "axios";

export async function isAuthenticated() {
    try {
        const response = await axios.get("http://localhost:80/SignUpClassesPhp/auth/", {
            withCredentials: true,
        });
        return response.data.isAuthenticated === true;
    } catch (error) {
        console.log('failed to authenticate user');
        return false;
    }
}
