import React            from 'react';
import TableHeader      from './TableHeader';
import TableContents    from './TableContents';

const MainContents = (props) => {
    return (
        <div className='table ' >
            <TableHeader
                disabled={!props.activeList._id} addItem={props.addItem}
                setShowDelete={props.setShowDelete} setActiveList={props.setActiveList}
                closeList={props.closeList} undo={props.undo} redo={props.redo} 
                tpsHasUndo={props.tpsHasUndo} tpsHasRedo={props.tpsHasRedo}
                /*handleSortList={props.handleSortList}*/ openList={props.openList}
            />
            <TableContents
                key={props.activeList.id} activeList={props.activeList}
                deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                editItem={props.editItem} topElementId={props.topElementId}
                bottomElementId={props.bottomElementId}
            />
        </div>
    );
};

export default MainContents;