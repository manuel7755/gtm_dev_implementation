import React from "react";
import "./Spinner.styles.scss";

const Spinner = () => {
    return (
        <div id="cool-loader">
            <div className="react-spinner-loader-svg">
                <svg id="triangle" width="128" height="128" viewBox="-3 -4 39 39">
                    <polygon fill="transparent" stroke="cyan" strokeWidth="1" points="16,0 32,32 0,32" />
                </svg> LOADING
            </div>
        </div>
    )
}

export default Spinner;