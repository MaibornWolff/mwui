import React from "react";

import { useCallback, useEffect, useState } from "react";
import ReactFlow, { nodeOrigin, MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge, Position, useNodesInitialized } from "reactflow";

import "reactflow/dist/style.css";
import { getTokenGroupNames, getTokensByGroupName } from "../token-data/TokenDeserialization";
import { getAllTokensDict } from "../token-data/TokenfilterUtils";
import { getRelationTokensDict, getTokenByName } from "../token-data/TokenfilterUtils";
import "./NodeStyle.css";

let groupContainerParams = Object.fromEntries(getTokenGroupNames().map(groupName => [groupName, {}]))
let relationsTokensDict = {}
const nodeDistance = 60
const origin = [0.5, 0.5];

const initRelationNodeData = (activeTokenName) => {
    let r = 255, g = 0, b = 0;
    const activeToken = getTokenByName(activeTokenName)

    relationsTokensDict = getRelationTokensDict(activeTokenName, getAllTokensDict())
    for (const groupName of getTokenGroupNames()) {
        groupContainerParams[groupName].width = calcGroupWidth(groupName, activeToken)
        groupContainerParams[groupName].height = calcGroupHeight(groupName, activeToken)
        groupContainerParams[groupName].color = 'rgba(' + r.toString() + ', ' + g.toString() + ', ' + b.toString() + ', 0.2)'
        b = g
        g = r
        r = b
    }
}

const calcGroupWidth = (groupName, activeToken) => {
    // re-use canvas object for better performance
    const canvas = calcGroupWidth.canvas || (calcGroupWidth.canvas = document.createElement("canvas"));
    const ctx = canvas.getContext("2d");
    ctx.font = "400 12px 'Times New Roman'"; // font styling of nodes
    const relationTokensOfGroup = Object.values(relationsTokensDict).map(rtvalue => rtvalue.filter(t => t.group === groupName)).flat()
    if (activeToken.group === groupName) {
        relationTokensOfGroup.push(activeToken)
    }
    const widthArray = relationTokensOfGroup.map(token => ctx.measureText(token.name).width)
    const calculatedWidth = Math.max(...widthArray)
    if (Number.isFinite(calculatedWidth)) {
        return calculatedWidth + 40
    } else {
        return ctx.measureText(groupName).width + 40
    }
}

const calcGroupHeight = (groupName, activeToken) => {
    const relationsTokens = Object.values(getRelationTokensDict(activeToken, getTokensByGroupName(groupName)))

    if (relationsTokens) {
        return nodeDistance * 2 + relationsTokens.length * nodeDistance
    } else { return nodeDistance * 2 }
}


const createTokenNodes = (activeToken, setNodes, setEdges) => {
    if (activeToken === "") { return; }

    initRelationNodeData(activeToken);
    const tokenNodes = [];
    const tokenEdges = [];
    let idCounter = 0;
    let xPosCounter = 0;
    let yPosCounter = 0;

    //Group Container
    for (const group of getTokenGroupNames()) {
        const size = groupContainerParams[group].width > groupContainerParams[group].height ? groupContainerParams[group].width : groupContainerParams[group].height
        tokenNodes.push({
            id: group,
            data: { label: group },
            type: 'input',
            position: { x: xPosCounter, y: yPosCounter },
            className: 'group',
            style: { borderRadius: "20em", backgroundColor: groupContainerParams[group].color, width: size, height: size }
        },)
        idCounter += 1;
        xPosCounter += size + nodeDistance
    }
    //Active Node
    tokenNodes.push({ id: "activeToken", position: { x: 0, y: 0 }, data: { label: activeToken }, style: { background: "#EFF", width: 'unset' }, parentNode: getTokenByName(activeToken).group })
    idCounter += 1;
    yPosCounter += nodeDistance;
    //Relation Nodes
    if (true)
        for (const groupName of getTokenGroupNames()) {
            yPosCounter = nodeDistance
            for (const [key, value] of Object.entries(getRelationTokensDict(activeToken, getTokensByGroupName(groupName)))) {
                // console.log("key, value:", key, value)
                value.forEach(token => {
                    yPosCounter += nodeDistance;
                    tokenNodes.push({
                        id: token.name, position: { x: 10, y: yPosCounter }, data: { label: token.name }, parentNode: groupName, style:
                            { width: 'unset' }
                    });
                    tokenEdges.push(createEdge("activeToken", tokenNodes[tokenNodes.length - 1].id, key))
                    idCounter += 1;
                }
                )
            }
        }
    setNodes(tokenNodes);
    setEdges(tokenEdges);
};

const createEdge = (tokenNodeSourceId, tokenNodeTargetId, label) => {
    return { id: "e_" + tokenNodeSourceId + "-" + tokenNodeTargetId, source: tokenNodeSourceId, target: tokenNodeTargetId, label: label }
}

function Flow({ activeToken, setActiveToken }) {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    React.useEffect(() => createTokenNodes(activeToken, setNodes, setEdges), [activeToken]);

    const onConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [setEdges]);

    // REVIEW: testweise initialize ausprobieren
    const nodesInitialized = useNodesInitialized();
    const nodeDimensions = nodes.map(n => n.width !== undefined ? n.width + "," + n.height : undefined)

    useEffect(() => {
        if (nodesInitialized && nodeDimensions.some(n => n !== undefined)) {
            console.log("W x H", nodeDimensions, nodes)
        }
    }, [nodesInitialized, nodeDimensions])

    return (
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeOrigin={origin}>
            {/* <MiniMap /> */}
            <Controls />
            <Background />
        </ReactFlow>
    );
}

export default Flow;
