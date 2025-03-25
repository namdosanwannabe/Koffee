import axios from "axios";
import API_URL from "../../API_URL.";

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/get-all`);
        return response.data;
    } catch (error) {
        console.error("Comprehensive Database Error:", {
            message: error.message,
            name: error.name,
            stack: error.stack
        });
        return {
            message: 'Server Error',
            error: error.message
        };
    }
}

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Comprehensive Database Error:", {
            message: error.message,
            name: error.name,
            stack: error.stack
        });
        return {
            message: 'Server Error',
            error: error.message
        };
    }
}