import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as Fa6Icons from "react-icons/fa6";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

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
        fa6: Fa6Icons,
        io: IoIcons,
        ri: RiIcons,
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
