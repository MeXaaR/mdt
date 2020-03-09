import React from 'react';
import { ActionZone } from '../utils/styles';
import AutoPublish from './AutoPublish';

const ToolsContainer = ({ handleClose }) => (
  <ActionZone onContextMenu={handleClose}>
    <AutoPublish />
  </ActionZone>
);

export default ToolsContainer;
