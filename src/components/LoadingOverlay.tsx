"use client";

import "../styles/loading.scss";

export default function LoadingOverlay() {
    return (
        <div className="wrapper">
            <div className="box-wrap">
                <div className="box one"></div>
                <div className="box two"></div>
                <div className="box three"></div>
                <div className="box four"></div>
                <div className="box five"></div>
                <div className="box six"></div>
            </div>
        </div>
    );
}