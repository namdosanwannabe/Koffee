import React from "react";

const Button = ({
    children,
    type = "rounded",
    variant = "filled",
    className = "",
    onClick,
}) => {
    const getBorderRadius = (type) => {
        return type === "rounded" ? "50px" : "10px";
    };

    return (
        <button
            style={{ borderRadius: getBorderRadius(type) }}
            className={`${className} py-4 px-8`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
