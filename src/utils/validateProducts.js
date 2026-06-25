export const validateProducts = (products) => {
    const errors = {};

    if (!products.name || products.name.trim() === "") {
        errors.name = "El nombre del producto es obligatorio";
    }

    if (!products.description || products.description.trim() === "") {
        errors.description = "La descripción del producto es obligatoria";
    }

    if (!products.price || isNaN(products.price) || products.price <= 0) {
        errors.price = "El precio del producto debe ser un número mayor a 0";
    }

    if (!products.file || products.file.trim() === "") {
        errors.file = "La imagen del producto es obligatoria";
    }

    return errors;
};