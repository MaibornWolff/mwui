import { useEffect, useState } from "react";
import { getTokenGroupNames, getTokensByGroupName } from "../../../token-data/TokenSerialization"
import { getAllTokensDict, getRelationTokensDict, getTokenByName } from "../../../token-data/TokenUtils";



//TODO:
//calcPosition
//center primToken in Group, arrange others around
//group same types in a list like format

//calcDimension
//groupDimension by init
//groupDimension on change

export let relationsTokensDict = {}
export const nodeDistance = 60
export const origin = [0.5, 0.5];

export const initRelationNodeData = (rootTokenName) => {
    let r = 255, g = 0, b = 0;

    const rootToken = getTokenByName(rootTokenName);
    let groupContainerParams = Object.fromEntries(getTokenGroupNames().map(groupName => [groupName, {}]))

    relationsTokensDict = getRelationTokensDict(rootTokenName, getAllTokensDict())
    for (const groupName of getTokenGroupNames()) {
        groupContainerParams[groupName].width = Math.round(calcGroupWidth(groupName, rootToken))
        groupContainerParams[groupName].height = Math.round(calcGroupHeight(groupName, rootToken))
        groupContainerParams[groupName].color = 'rgba(' + r.toString() + ', ' + g.toString() + ', ' + b.toString() + ', 0.2)'
        b = g
        g = r
        r = b
    }

    return [rootToken, groupContainerParams]
}

const calcGroupWidth = (groupName, rootToken) => {
    console.log(rootToken)
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
