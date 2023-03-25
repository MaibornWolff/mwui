import { Handle, NodeProps, Position } from 'reactflow';
import "./NodeStyle.css";
//TODO:
//helper method: createNewNode (tokenName, NodeType)

//RootNode

//GroupNode

//ChildRelationNode

//ParentRelationNode





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

export default MindMapNode;
