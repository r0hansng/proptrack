import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Toast({ title, description, show }) {
    const [visible, setVisible] = useState(false); 
    const [delayedVisible, setDelayedVisible] = useState(false); 

    useEffect(() => {
        if (show) {
            setVisible(true);
            setDelayedVisible(true); 
            const hideTimer = setTimeout(() => {
                setDelayedVisible(false); 
            }, 3000); 

            const removeTimer = setTimeout(() => {
                setVisible(false);
            }, 3500);

            return () => {
                clearTimeout(hideTimer);
                clearTimeout(removeTimer);
            };
        } else {
            setVisible(false);
            setDelayedVisible(false);
        }
    }, [show]);

    return (
        <>
            {visible && (
                <div
                    className={`fixed top-16 right-4 w-full max-w-[18rem] bg-white/10 text-white backdrop-blur-3xl backdrop-saturate-200 rounded-2xl px-4 py-3 transition-all duration-500 transform ${
                        delayedVisible
                            ? 'translate-x-0' 
                            : 'translate-x-full' 
                    } opacity-100 flex items-start gap-3`}
                >
                    <div className="w-full">
                        <div className="flex justify-between items-center w-full">
                            <h3 className="text-sm font-semibold">{title}</h3>
                            <h2 className="text-sm font-normal text-white/50">now</h2>
                        </div>
                        <p className="text-xs text-white/80 mt-1">{description}</p>
                    </div>
                </div>
            )}
        </>
    );
}

Toast.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
};
