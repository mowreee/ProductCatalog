import './Products.css';
import products from "../data/products";
import { useState } from "react";
import {
    Button,
    Modal,
    Box,
    TextField,
    Typography
} from "@mui/material";

export default function Products() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [form, setForm] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        stock: '',
        imageUrl: ''
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddProduct = () => {
        console.log("New Product:", form);
        handleClose();
    };

    const handleEditProduct = (product) => {
        console.log("Edit Product:", product);
        setForm(product);
        handleOpen();
    };

    const handleDeleteProduct = (id) => {
        console.log("Delete Product with ID:", id);
    };

    return (
        <div className="products">
            <div className="products-header">
                <h1>Product List</h1>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Add Product
                </Button>
            </div>

            <div className="product-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.imageUrl} alt={product.name} />
                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p>{product.description}</p>
                            <p><strong>Category:</strong> {product.category}</p>
                            <p><strong>Stock:</strong> {product.stock}</p>

                            {/* Action Buttons */}
                            <div className="product-actions">
                                <Button
                                    className="edit-button"
                                    onClick={() => handleEditProduct(product)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    className="delete-button"
                                    onClick={() => handleDeleteProduct(product.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal open={open} onClose={handleClose}>
                <Box className="modal-box">
                    <Typography variant="h6" mb={2}>Add New Product</Typography>

                    <TextField fullWidth label="Name" name="name" value={form.name} onChange={handleChange} margin="dense" />
                    <TextField fullWidth label="Price" name="price" value={form.price} onChange={handleChange} margin="dense" />
                    <TextField fullWidth label="Description" name="description" value={form.description} onChange={handleChange} margin="dense" />
                    <TextField fullWidth label="Category" name="category" value={form.category} onChange={handleChange} margin="dense" />
                    <TextField fullWidth label="Stock" name="stock" value={form.stock} onChange={handleChange} margin="dense" />
                    <TextField fullWidth label="Image URL" name="imageUrl" value={form.imageUrl} onChange={handleChange} margin="dense" />

                    <div className="modal-actions">
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" onClick={handleAddProduct}>Add</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

