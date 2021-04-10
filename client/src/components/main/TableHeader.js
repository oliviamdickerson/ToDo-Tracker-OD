import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const redoStyle = !props.tpsHasRedo ? ' table-header-button-disabled ' : 'table-header-button ';
    const undoStyle = !props.tpsHasUndo ? ' table-header-button-disabled ' : 'table-header-button ';
    //const listOpen = props.openList; 
    const clickDisabled = () => { };

    return (
        <WRow className="table-header">
            <WCol size="3">
                <WButton className='table-header-section' wType="texted" /*onClick={listOpen ? props.handleSortList("description") : clickDisabled}*/>Task</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" /*onClick={listOpen ? props.handleSortList("due_date") : clickDisabled}*/>Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" /*onClick={listOpen ? props.handleSortList("completed") : clickDisabled}*/ >Status</WButton>
            </WCol>
            <WCol size="2">
                <WButton className='table-header-section' wType="texted" >Assigned To</WButton>
            </WCol>

            <WCol size="2">
                <div className="table-header-buttons">
                    <WButton onClick={!props.tpsHasUndo ? clickDisabled : props.undo} wType="texted" className={`${undoStyle}`} >
                        <i className="material-icons">undo</i>
                    </WButton>
                    <WButton onClick={!props.tpsHasRedo ? clickDisabled : props.redo} wType="texted" className={`${redoStyle}`}>
                        <i className="material-icons">redo</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.closeList} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>

        </WRow>
    );
};

export default TableHeader;