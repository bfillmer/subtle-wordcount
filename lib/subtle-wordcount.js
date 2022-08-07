'use babel';

import SubtleWordcountMessageDialog from './subtle-wordcount-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(SubtleWordcountMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'SubtleWordcountMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'SubtleWordcountMessageDialog'
    )
    inkdrop.components.deleteClass(SubtleWordcountMessageDialog);
  }

};
