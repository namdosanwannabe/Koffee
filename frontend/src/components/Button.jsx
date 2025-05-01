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
        return type === "rounded" ? "rounded-full" : "rounded-[10px]";
    };

    const getVariant = (variant) => {
        return variant === "filled" ? "bg-primary text-white" : "border-[1px] border-primary text-primary";
    };

    return (
        <button
            type="button"
            className={`${className} ${getVariant(variant)} ${getBorderRadius(type)} 
            p-4 md:py-4 md:px-6 lg:py-4 lg:px-8 w-fit text-nowrap text-xs sm:text-sm md:text-base`}
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
