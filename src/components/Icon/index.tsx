import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";

interface IconComponentProps {
    library: string;
    name: string;
    size?: number;
    color?: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ library, name, size = 24, color = "black" }): JSX.Element | null => {

    const libraries = {
        fa: FaIcons,
        md: MdIcons,
        ai: AiIcons,
    };

    const IconLibrary = libraries[library];
    const IconComponent = IconLibrary[name as keyof typeof IconLibrary] as React.ElementType;

    if (!IconComponent) {
        console.warn(`Ícone com nome "${name}" não foi encontrado na biblioteca "${library}".`);
        return null;
    }

    return <IconComponent size={size} color={color} />;
};

export default IconComponent;
