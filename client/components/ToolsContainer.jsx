import React from 'react';
import { ActionZone } from '../utils/styles';
import AutoPublish from './AutoPublish';
import Impersonate from './Impersonate';

const ToolsContainer = ({ handleClose }) => (
  <ActionZone onContextMenu={handleClose}>
    <AutoPublish />
    <Impersonate />
  </ActionZone>
);

export default ToolsContainer;
