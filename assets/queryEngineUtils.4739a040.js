import{r,e as n}from"./DimensioningAnalysisView3D.4a6a180a.js";function i(e,t,o){switch(e.type){case"edge":return new n({coordinateHelper:t,edgeStart:t.pointToVector(e.start),edgeEnd:t.pointToVector(e.end),targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:o});case"vertex":return new r({coordinateHelper:t,targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:o})}}export{i as o};
