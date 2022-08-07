'use babel'

import React from 'react'
import { useSelector } from 'react-redux'

function selectEditingNoteBody({ editingNote }) {
  return editingNote ? editingNote.body : ''
}

function SubtleWordcountEditorDrawerItem(props) {
  const noteBody = useSelector(selectEditingNoteBody)

  const { EditorDrawerItem, EditorDrawerSeparator } = inkdrop.components.classes

  const currentCount = noteBody.split(/\s+/).length

  return (
    <>
      <EditorDrawerSeparator />
      <EditorDrawerItem className="subtle-wordcount" icon="pencil-write">
        {currentCount} WORDS
      </EditorDrawerItem>
    </>
  )
}

module.exports = {
  activate() {
    inkdrop.components.registerClass(SubtleWordcountEditorDrawerItem)
    inkdrop.layouts.addComponentToLayout(
      'editor-drawer-menu',
      'SubtleWordcountEditorDrawerItem'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'editor-drawer-menu',
      'SubtleWordcountEditorDrawerItem'
    )
    inkdrop.components.deleteClass(SubtleWordcountEditorDrawerItem)
  }
}
