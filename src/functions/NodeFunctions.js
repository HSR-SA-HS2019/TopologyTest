/**
 * Callback function for adding new node to GraphVis.
 */
export function addNode(nodeData, callback) {
  // Set parameters of the new node
  nodeData.shape = 'square';
  nodeData.margin = 16;
  nodeData.label = '   ';
  nodeData.color = { background: 'white', border: '#000000' };
  nodeData.borderWidth = 1;
  nodeData.shadow = { enabled: false };
  callback(nodeData);
}

/**
 * Displays dialog with form for editing selected node.
 */
export function showEditNodeDialog(nodeData, callback) {
  // Fill node edit dialog's inputs by selected node data
  let labelInput = nodeData.label;
  if (labelInput === '   ')
    labelInput = '';

  document.getElementById('inpNodeLabel').value = labelInput;
  //document.getElementById('inpNodeColor').value = nodeData.color.background;
  // document.getElementById('inpNodeMargin').value = nodeData.margin;
  //document.getElementById('inpLabelColor').value = nodeData.font.color;
  // Bind saveNode and cancelEditNode functions
  document.getElementById('btnSave').onclick = saveNode.bind(this, nodeData, document, callback);
  document.getElementById('btnCancel').onclick = cancelNodeEdit.bind(this, document, callback);
  document.getElementById('editNodeDialog').style.display = 'block';
}

/**
 * Sets inputed data to the selected node, saves the node and hides the Node Edit dialog.
 */
function saveNode(nodeData, document, callback) {
  let newLabel = document.getElementById('inpNodeLabel').value;
  if (newLabel.length === 1)
    newLabel = ' ' + newLabel + ' ';

  if (newLabel === '')
    newLabel = '   ';

  nodeData.label = newLabel;
  //nodeData.color.background = document.getElementById('inpNodeColor').value;
  // nodeData.margin = document.getElementById('inpNodeMargin').value;
  //nodeData.font.color = document.getElementById('inpLabelColor').value;
  clearEditNodeDialog(document);
  callback(nodeData);
}

/**
 * Cancels editing of node and hides Edit Node dialog.
 */
function cancelNodeEdit(document, callback) {
  clearEditNodeDialog(document);
  callback(null);
};

/**
 * Clears and hides Edit Node dialog.
 */
function clearEditNodeDialog(document) {
  document.getElementById('btnSave').onclick = null;
  document.getElementById('btnCancel').onclick = null;
  document.getElementById('editNodeDialog').style.display = 'none';
}
