import { motion } from "motion/react";
import { useStore } from "@nanostores/react"; // or '@nanostores/preact'
import { atom } from "nanostores";
import { Fragment, useState } from "react";

export default function ProductCard({ project }: {
    project: {
        class: string;
        title: string;
        description: string;
        links: {
            attributes: Record<string, string>;
            label: string;
        }[];
    };
}) {
    const [isActive, setActive] = useState(false);

    return (
        <Fragment key={`project-x-${project.title}`}>
            {true && (
                <motion.div
                    onClick={() => setActive(!isActive)}
                    key={project.title}
                    layout
                    layoutId={`project-${project.title}`}
                    className={`rounded-2xl bg-lime-300 p-3 ${project.class}`}
                >
                    <motion.b layoutId={`project-${project.title}-title`}>
                        {project.title}
                    </motion.b>
                    <motion.p
                        className="text-balance"
                        layoutId={`project-${project.title}-description`}
                    >
                        {project.description}
                    </motion.p>
                    <motion.div className="flex gap-3 flex-wrap">
                        {project.links.map((link, index) => {
                            return (
                                <motion.a
                                    key={`${link.label}-${index}`}
                                    {...link.attributes}
                                    layoutId={`project-${project.title}-link-${index}-title`}
                                >
                                    {link.label}
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </motion.div>
            )}

            {isActive && (
                <motion.div
                    layoutId={`project-${project.title}`}
                    key={`${project.title}-expanded`}
                    layout
                    className={`rounded-2xl p-3 absolute w-full h-full ${project.class}`}
                >
                    <motion.b layoutId={`project-${project.title}-title`}>
                        {project.title}
                    </motion.b>
                    <motion.p
                        className="text-balance"
                        layoutId={`project-${project.title}-description`}
                    >
                        {project.description}
                    </motion.p>
                    <motion.div className="flex gap-3 flex-wrap">
                        {project.links.map((link, index) => {
                            return (
                                <motion.a
                                    key={`${link.label}-${index}`}
                                    {...link.attributes}
                                    layoutId={`project-${project.title}-link-${index}-title`}
                                >
                                    {link.label}
                                </motion.a>
                            );
                        })}
                        <button onClick={() => setActive(false)}>
                            minimize
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </Fragment>
    );
}
