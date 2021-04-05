import React                    from 'react';
import { WButton, WRow, WCol }  from 'wt-frontend';

const clickDisabled = () => { };

const SidebarHeader = (props) => {
    const disabled = !(props.addListActive);
    return (
        <WRow className='sidebar-header'>
            <WCol size="7">
                <WButton wType="texted" hoverAnimation="text-primary" className='sidebar-header-name'>
                    Todolists
                </WButton>
            </WCol>

            <WCol size="5">
                {
                    props.auth && <div className="sidebar-options">
                        <WButton className="sidebar-buttons" onClick={props.addListActive ? props.createNewList : clickDisabled} clickAnimation="ripple-light" shape="rounded" color="primary" disabled={disabled}>
                            <i className="material-icons">add</i>
                        </WButton>
                    </div>
                }
            </WCol>

        </WRow>

    );
};

export default SidebarHeader;