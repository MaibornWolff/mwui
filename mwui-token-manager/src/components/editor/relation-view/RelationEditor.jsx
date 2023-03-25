import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactFlowProvider } from 'reactflow';
import Flow from './RelationFlow';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ReactFlowProvider>
            <Flow />
        </ReactFlowProvider>
    </React.StrictMode>
);