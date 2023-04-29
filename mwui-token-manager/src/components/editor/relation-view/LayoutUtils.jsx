import { useEffect, useState } from "react";
import { Position, useNodesInitialized } from "reactflow";

import { getTokenGroupNames, getTokensByGroupName } from "../../../token-data/TokenSerialization"
import { getAllTokensDict, getRelationTokensDict, getTokenByName } from "../../../token-data/TokenUtils";

let relationsTokensDict = {}
let rootToken = {};
let groupContainerParams = {}
export const nodeDistance = 60
export const origin = [0.5, 0.5];
let idCounter = 0;
let xPosCounter = 0;
let yPosCounter = 0;

//TODO:
//useEffect u.ä. nur in flow!
//calc Positions
//calc Dimensions




export const calcNodePosition = (token, rootNode = NaN, parentNode = NaN) => {//für alle nodes verwendbar??

    //center primToken in Group, arrange others around

    //create groups, group of primToken is center, no with or hight if its possible
    //create relation nodes in lists of types -> arrange them in a bubble (relative in parent)
    //calculate with and height of groups

}
//center primToken in Group, arrange others around
//group same types in a list like format

//calcDimension
//groupDimension by init
//groupDimension on change

export const initRelationNodeData = (rootTokenName) => {
    let r = 255, g = 0, b = 0;

    rootToken = getTokenByName(rootTokenName);
    groupContainerParams = Object.fromEntries(getTokenGroupNames().map(groupName => [groupName, {}]))
    relationsTokensDict = getRelationTokensDict(rootTokenName, getAllTokensDict())

    for (const groupName of getTokenGroupNames()) {
        groupContainerParams[groupName].width = Math.round(calcGroupWidth(groupName, rootToken))
        groupContainerParams[groupName].height = Math.round(calcGroupHeight(groupName, rootToken))
        groupContainerParams[groupName].color = 'rgba(' + r.toString() + ', ' + g.toString() + ', ' + b.toString() + ', 0.2)'
        b = g
        g = r
        r = b
    }
}

const calcGroupWidth = (groupName, rootToken) => {
    // re-use canvas object for better performance
    const canvas = calcGroupWidth.canvas || (calcGroupWidth.canvas = document.createElement("canvas"));
    const ctx = canvas.getContext("2d");
    ctx.font = "400 12px 'Times New Roman'"; // font styling of nodes
    const relationTokensOfGroup = Object.values(relationsTokensDict).map(rtvalue => rtvalue.filter(t => t.group === groupName)).flat()
    if (rootToken.group === groupName) {
        relationTokensOfGroup.push(rootToken)
    }
    const widthArray = relationTokensOfGroup.map(token => ctx.measureText(token.name).width)
    const calculatedWidth = Math.max(...widthArray)
    if (Number.isFinite(calculatedWidth)) {
        return calculatedWidth + 40
    } else {
        return ctx.measureText(groupName).width + 40
    }
}

const calcGroupHeight = (groupName, rootToken) => {

    const relationsTokens = Object.values(getRelationTokensDict(rootToken.name, getTokensByGroupName(groupName)))
    const length = relationsTokens.filter(tList => tList.length !== 0).flat().length

    if (relationsTokens) {
        return nodeDistance * 2 + length * nodeDistance
    } else { return nodeDistance * 2 }
}

export const calcDimensionOfNodes = (nodes, setNodesNeedLayouting) => {

    // const nodeDimensions = nodes.map(n => { return { width: n.width, height: n.height } })
    if (nodes.some(node => node.width !== undefined)) {
        console.log("Width is set!!!")
        let hochzaehler = {}
        nodes.forEach(node => {
            if (node.className === "group") {
            } else {
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
        setNodesNeedLayouting(false)
        // }
        // if (nodeDimensions.some(n => n.width !== undefined)) {
    }
}




// useEffect(() => {
//     if (nodeDimensions.some(n => n !== undefined)) {
//         console.log("W x H", nodeDimensions, nodes)
//     }
// }, [nodesNeedLayouting])

//TODO: diese und ähnliche funktionen zum erstellen von nodes in nodes packen
export function createNodesAndEdges(nodes, edges, setNodes) {
    const group = rootToken.group;

    nodes.push({
        id: group,
        data: { label: group },
        type: 'input',
        position: { x: 0, y: 0 },
        className: 'group',
        style: {
            borderRadius: "20em", backgroundColor: groupContainerParams[group].color, width: 200, height: 100
        }
    },)

    nodes.push({
        id: rootToken.name,
        data: { label: rootToken.name },
        position: { x: 0, y: 0 },
        className: 'root',
        data: { label: rootToken.name },
        style: { background: "#EFF", width: 'unset' },
        //nodeOrigin: [0.5, 0.5],
        parentNode: rootToken.group
    },)
}

export const createGroupNodes = (tokenNodes) => {
    xPosCounter = 0;
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
export const createRootNode = (tokenNodes) => {
    const groupOfActiveNode = groupContainerParams[rootToken.group]
    tokenNodes.push({ id: "rootToken", position: Position.Top/*{ x: Math.max(groupOfActiveNode.width, groupOfActiveNode.height) / 2, y: (Math.max(groupOfActiveNode.width, groupOfActiveNode.height) / 2) }*/, data: { label: rootToken.name }, style: { background: "#333", color: "#EFF", width: 'unset' }, parentNode: rootToken.group })
    idCounter += 1;
    yPosCounter += nodeDistance;

}
export const createRelationNodes = (tokenNodes, tokenEdges) => {

    for (const groupName of getTokenGroupNames()) {
        yPosCounter = nodeDistance
        for (const [key, value] of Object.entries(getRelationTokensDict(rootToken.name, getTokensByGroupName(groupName)))) {
            value.forEach(token => {
                yPosCounter += nodeDistance;
                const groupOfNode = groupContainerParams[token.group]
                tokenNodes.push({
                    // groupContainerParams[token.group].width / 2
                    id: token.name, position: { x: Math.max(groupOfNode.width, groupOfNode.height) / 2, y: yPosCounter }, data: { label: token.name }, parentNode: groupName, style:
                        { width: 'unset' }
                });
                tokenEdges.push(createEdge("rootToken", tokenNodes[tokenNodes.length - 1].id, key))
                idCounter += 1;
            }
            )
        }

    }
}

export const createEdge = (tokenNodeSourceId, tokenNodeTargetId, label) => {
    return { id: "e_" + tokenNodeSourceId + "-" + tokenNodeTargetId, source: tokenNodeSourceId, target: tokenNodeTargetId, label: label }
}

