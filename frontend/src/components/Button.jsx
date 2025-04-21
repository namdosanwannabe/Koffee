import React from "react";
import PropTypes from "prop-types";

const Button = ({
    children,
    type = "rounded",
    variant = "filled",
    className = "font-semibold leading-normal",
    onClick,
}) => {
    const getBorderRadius = (type) => {
        return type === "rounded" ? "rounded-full" : "rounded-lg";
    };

    const getVariant = (variant) => {
        return variant === "filled" ? "bg-primary text-white" : "border-[1px] border-primary text-primary";
    };

    return (
        <button
            type="button"
            className={`${className} ${getVariant(variant)} ${getBorderRadius(type)} py-4 px-8 w-fit`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["rounded", "squared"]),
    variant: PropTypes.oneOf(["filled", "outlined"]),
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
