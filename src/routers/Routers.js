import React from 'react';
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import { WhoIs } from '../actor/WhoIs';
import { UploadArchive } from '../archivo/UploadArchive';

export const Routers = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/actor/:actorName" element={<WhoIs />} />
                    <Route path="/" element={<UploadArchive />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
