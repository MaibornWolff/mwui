import { Handle, NodeProps, Position } from 'reactflow';
import "./NodesStyle.css";

import { useCallback, memo } from 'react';


//TODO:
//helper method: createNewNode (tokenName, NodeType)

//RootNode
function ActiveNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <>
            <div style={{ backgroundColor: 'black', color: 'white' }}>
                <label>{data.label}</label>
                <input id={data.id} name="text" onChange={onChange} className="active_node" />
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
            <Handle type="source" position={Position.Bottom} id="b" />
        </>
    );
}

//GroupNode
function GroupNode({ data, backgroundColor }) {
    return (
        <div id={data.id} className='group' style={{ backgroundColor: backgroundColor, color: 'white', minWidth: 100, minHeight: 100 }}>
            <label >{data.label}</label>
        </div>
    );
}
export default memo(GroupNode);

//ChildRelationNode

//ParentRelationNode





function TextUpdaterNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <>
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} className="nodrag" />
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
            <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
        </>
    );
}

export const nodeData = {
    label: string
};

function MindMapNode({ id, data }) {
    return (
        <>
            <input defaultValue={data.label} />

            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </>
    );
}
