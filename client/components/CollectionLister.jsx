import React, { useState } from 'react';
import { CollectionListerWrapper } from '../utils/styles';
import SingleCollection from './SingleCollection';
import useTracker from '../utils/useTracker';
import ToolsHeader from './ToolsHeader';

const CollectionLister = ({ handleClose }) => {
  const collections = useTracker(() => Meteor.connection._mongo_livedata_collections);
  const [openedCollection, setOpenedCollection] = useState(null);

  const handleOpenedCollection = (name) => {
    if (openedCollection === name) {
      setOpenedCollection(null);
    } else {
      setOpenedCollection(name);
    }
  };
  return (
    <CollectionListerWrapper onContextMenu={handleClose}>
      <ToolsHeader openCollection={handleOpenedCollection} open={openedCollection === 'tools'} />
      {Object.keys(collections).map((name) => (
        <SingleCollection
          openCollection={handleOpenedCollection}
          open={openedCollection === name}
          key={name}
          collection={collections[name]}
        />
      ))}
    </CollectionListerWrapper>
  );
};

export default CollectionLister;
