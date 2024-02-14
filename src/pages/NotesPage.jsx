import React from 'react'
import GroupsHandler from '../components/Hoc/GroupsHandler.jsx'
import NotesArea from '../components/NotesSection/NotesArea.jsx'

function NotesPage() {
    return (
        <GroupsHandler>
            <NotesArea />
        </GroupsHandler>
    )
}

export default NotesPage