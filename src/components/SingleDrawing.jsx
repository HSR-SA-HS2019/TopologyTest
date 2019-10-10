import GraphVis from 'react-graph-vis';
import React from 'react';
import { palette, graphVisLocales } from '../functions/GlobalConstants';
import { addNode, showEditNodeDialog } from '../functions/NodeFunctions';
import { addEdge, showEditEdgeDialog } from '../functions/EdgeFunctions';
import EditNodeDialog from '../UI/EditNodeDialog/EditNodeDialog';
import EditEdgeDialog from '../UI/EditEdgeDialog/EditEdgeDialog';
import './SingleDrawing.css';

class SingleDrawing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphVis: { nodes: [], edges: [] },
      options: {
        autoResize: true,
        height: '100%',
        width: '100%',
        locale: 'en',
        locales: graphVisLocales,
        clickToUse: false,
        layout: {},
        nodes: {
          font: { size: 18 },
        },
        edges: {
          arrows: {
            to: { enabled: false },
            from: { enabled: false },
          },
          color: { color: palette.black, hover: palette.black },
          width: 2,
          hoverWidth: function (width) { return width * 2; },
          selectionWidth: function (width) { return width * 2; },
          font: { align: 'top', size: 18 },
        },
        manipulation: {
          enabled: true,
          initiallyActive: true,
          addNode: addNode,
          editNode: showEditNodeDialog,
          addEdge: addEdge,
          editEdge: showEditEdgeDialog,
          deleteNode: true,
          deleteEdge: true,
        },
        interaction: {
          dragNodes: true,
          dragView: true,
          // Use node hover colors when to mouse moves over it
          hover: true,
          // Longheld click or CTRT+click will add to the selection
          multiselect: true,
          selectable: true,
        },
        // Turn automatic graph rearranging off
        physics: false,
        // Turn configuration panel off
        configure: false,

      },
    };
  }

  render() {
    return (
      <div className="single-drawing-box">
        <EditNodeDialog />
        <EditEdgeDialog />
        <GraphVis
          graph={this.state.graphVis}
          options={this.state.options}
          events={{ }}
          style={{ width: "100%", height: window.innerHeight}} />
      </div>
    );
  }
}

export default SingleDrawing;
