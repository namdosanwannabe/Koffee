import axios from "axios";
import API_URL from "../../API_URL.";

export const fetchAllProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/get-all`);
        return response.data;
    } catch (error) {
        console.error("Comprehensive Database Error:", {
            message: error.message,
            name: error.name,
            stack: error.stack
        });

        throw new Error(error.response.data.error || 'Error fetching products');
    }
}

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Comprehensive Database Error:", {
            message: error.message,
            name: error.name,
            stack: error.stack
        });

        throw new Error(error.response.data.error || 'Error fetching products');
    }
}

export const fetchProductByCategory = async (category) => {
    try {
        const response = await axios.get(`${API_URL}/products/category/${category}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("Comprehensive Database Error:", {
                message: error.message,
                name: error.name,
                stack: error.stack
            });

            throw new Error(error.response.data.error || 'Error fetching products');
        }
    }
}