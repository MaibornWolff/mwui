import React from "react";

import { useCallback, /*useEffect,*/ useState } from "react";
import ReactFlow, { /*nodeOrigin, MiniMap,*/ Controls, Background, useNodesState, useEdgesState, addEdge, Position, useNodesInitialized } from "reactflow";

import "reactflow/dist/style.css";
import { getTokenGroupNames, getTokensByGroupName } from "../../../token-data/TokenSerialization"
import { getRelationTokensDict } from "../../../token-data/TokenUtils";
import { origin, initRelationNodeData, nodeDistance, calcDimensionOfNodes } from "./LayoutUtils";


const createGroupNodes = (idCounter, xPosCounter, yPosCounter, tokenNodes, groupContainerParams) => {
    for (const group of getTokenGroupNames()) {
        const size = groupContainerParams[group].width > groupContainerParams[group].height ? groupContainerParams[group].width : groupContainerParams[group].height
        xPosCounter += size / 2
        tokenNodes.push({
            id: group,
            data: { label: group },
            type: 'input',
            position: { x: xPosCounter, y: yPosCounter },
            className: 'group',
            style: { borderRadius: "20em", backgroundColor: groupContainerParams[group].color, width: size, height: size }
        },)
        idCounter += 1;
        xPosCounter += size / 2 //+ nodeDistance
    }
}
const createRootNode = (rootToken, idCounter, yPosCounter, tokenNodes, groupContainerParams) => {
    const groupOfActiveNode = groupContainerParams[rootToken.group]
    tokenNodes.push({ id: "rootToken", position: Position.Top/*{ x: Math.max(groupOfActiveNode.width, groupOfActiveNode.height) / 2, y: (Math.max(groupOfActiveNode.width, groupOfActiveNode.height) / 2) }*/, data: { label: rootToken.name }, style: { background: "#EFF", width: 'unset' }, parentNode: rootToken.group })
    idCounter += 1;
    yPosCounter += nodeDistance;

}
const createRelationNodes = (rootToken, idCounter, yPosCounter, tokenNodes, tokenEdges, groupContainerParams) => {
    if (true)
        for (const groupName of getTokenGroupNames()) {
            yPosCounter = nodeDistance
            for (const [key, value] of Object.entries(getRelationTokensDict(rootToken, getTokensByGroupName(groupName)))) {
                value.forEach(token => {
                    yPosCounter += nodeDistance;
                    const groupOfNode = groupContainerParams[token.group]
                    tokenNodes.push({
                        // groupContainerParams[token.group].width / 2
                        id: token.name, position: Position.Bottom/*{ x: Math.max(groupOfNode.width, groupOfNode.height) / 2, y: yPosCounter }*/, data: { label: token.name }, parentNode: groupName, style:
                            { width: 'unset' }
                    });
                    tokenEdges.push(createEdge("rootToken", tokenNodes[tokenNodes.length - 1].id, key))
                    idCounter += 1;
                }
                )
            }
        }
}

const createEdge = (tokenNodeSourceId, tokenNodeTargetId, label) => {
    return { id: "e_" + tokenNodeSourceId + "-" + tokenNodeTargetId, source: tokenNodeSourceId, target: tokenNodeTargetId, label: label }
}

const createTokenNodes = (rootTokenName, setNodes, setEdges) => {

    console.log(rootTokenName)
    if (rootTokenName === "" || rootTokenName === undefined) { return; }

    const [rootToken, groupContainerParams] = initRelationNodeData(rootTokenName);

    const tokenNodes = [];
    const tokenEdges = [];
    let idCounter = 0;
    let xPosCounter = 0;
    let yPosCounter = 0;

    //Group Container
    createGroupNodes(idCounter, xPosCounter, yPosCounter, tokenNodes, groupContainerParams)

    //Root Node
    createRootNode(rootToken, idCounter, yPosCounter, tokenNodes, groupContainerParams)

    //Relation Nodes
    createRelationNodes(rootToken, idCounter, yPosCounter, tokenNodes, tokenEdges, groupContainerParams)

    setNodes(tokenNodes);
    setEdges(tokenEdges);
};

function Flow({ rootTokenName, setRootToken }) {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    React.useEffect(() => { createTokenNodes(rootTokenName, setNodes, setEdges); setNodesNeedLayouting(true) }, [rootTokenName]);

    const onConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [setEdges]);

    // TODO: REVIEW: testweise initialize ausprobieren
    const [nodesNeedLayouting, setNodesNeedLayouting] = useState(true);
    // const [nodeDimensions, setNodeDimensions] = useState(nodes.map(n => {return {width:n.width, height:n.height}}))
    // const nodesInitialized = useNodesInitialized();
    // const nodeDimensions = nodes.map(n => n.width !== undefined ? n.width + "," + n.height : undefined)


    if (nodesNeedLayouting) {
        calcDimensionOfNodes(nodes, setNodesNeedLayouting)
    } else {
        console.log("nodes need layouting but values are undefined")
    }

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeOrigin={origin}
            defaultViewport={{ zoom: 1, x: 0, y: 0 }}
            fitView
            fitViewOptions={{ padding: 0.4 }}>
            {/* <MiniMap /> */}

            <Controls />
            <Background />
        </ReactFlow>
    );
}

export default Flow;