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
    console.log("DICT: ", relationsTokensDict)
    for (const groupName of getTokenGroupNames()) {
        groupContainerParams[groupName].width = Math.round(calcGroupWidth(groupName, activeToken))
        groupContainerParams[groupName].height = Math.round(calcGroupHeight(groupName, activeToken))
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

    const relationsTokens = Object.values(getRelationTokensDict(activeToken.name, getTokensByGroupName(groupName)))
    const length = relationsTokens.filter(tList => tList.length != 0).flat().length

    console.log("relationTokens", length, relationsTokens)

    if (relationsTokens) {
        return nodeDistance * 2 + length * nodeDistance
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
        console.log("xPos, size: ", xPosCounter, size)
        xPosCounter += size / 2
    }
    //Active Node
    const groupOfActiveNode = groupContainerParams[getTokenByName(activeToken).group]
    // groupContainerParams[getTokenByName(activeToken).group].width
    tokenNodes.push({ id: "activeToken", position: { x: Math.max(groupOfActiveNode.width, groupOfActiveNode.height) / 2, y: 0 }, data: { label: activeToken }, style: { background: "#EFF", width: 'unset' }, parentNode: getTokenByName(activeToken).group })
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
                    const groupOfNode = groupContainerParams[token.group]
                    tokenNodes.push({
                        // groupContainerParams[token.group].width / 2
                        id: token.name, position: { x: Math.max(groupOfNode.width, groupOfNode.height) / 2, y: yPosCounter }, data: { label: token.name }, parentNode: groupName, style:
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

    React.useEffect(() => { createTokenNodes(activeToken, setNodes, setEdges); setNodesNeedLayouting(true) }, [activeToken]);

    const onConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [setEdges]);

    // REVIEW: testweise initialize ausprobieren
    const [nodesNeedLayouting, setNodesNeedLayouting] = useState(true);
    // const [nodeDimensions, setNodeDimensions] = useState(nodes.map(n => {return {width:n.width, height:n.height}}))
    // const nodesInitialized = useNodesInitialized();
    // const nodeDimensions = nodes.map(n => n.width !== undefined ? n.width + "," + n.height : undefined)

    if (nodesNeedLayouting) {
        // const nodeDimensions = nodes.map(n => { return { width: n.width, height: n.height } })
        if (nodes.some(node => node.width !== undefined)) {
            let hochzaehler = {}
            nodes.forEach(node => {
                if (node.className === "group") {
                    // console.log("gruppen node gefunden", node)
                } else {
                    // console.log("token node gefunden", node)
                    const pnode = nodes.find(n => n.data.label === node.parentNode)
                    const hz = hochzaehler[node.parentNode]
                    if (hz === undefined) {
                        hochzaehler[node.parentNode] = 0
                    } else {
                        hochzaehler[node.parentNode] += node.height + 5
                    }
                    // node.position.y = hochzaehler[node.parentNode]
                    // node.position.x = pnode.position.x / 2
                }
            })
            // console.log(nodeDimensions)
            setNodesNeedLayouting(false)
            // }
            // if (nodeDimensions.some(n => n.width !== undefined)) {
        } else {
            console.log("nodes need layouting but values are undefined")
        }
    }

    // useEffect(() => {
    //     if (nodeDimensions.some(n => n !== undefined)) {
    //         console.log("W x H", nodeDimensions, nodes)
    //     }
    // }, [nodesNeedLayouting])

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