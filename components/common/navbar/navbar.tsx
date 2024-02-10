import { Icon } from "@iconify/react";

export const NavBar = () => {
    return (
        <div className="container mx-auto px-8 xl:px-32">
            <nav aria-label="Breadcrumb" className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                <ol className="flex items-center space-x-2">
                    <li>
                        <a
                            href="#"
                            className="flex items-center space-x-2 text-text hover:text-heading"
                        >
                            <Icon icon="ic:round-home" className="h-5 w-5" />
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Icon icon="icon-park-outline:right" className="h-5 w-5" />
                        <a href="#" className="text-text hover:text-heading">
                            키보드
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Icon icon="icon-park-outline:right" className="h-5 w-5" />
                        <a href="#" className="text-heading">
                            무선 키보드
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
    );
}