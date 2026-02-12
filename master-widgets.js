(function () {
  if (!window.MasterWidgets) {
    window.MasterWidgets = {
      register: function () {},
      get: function () { return null; },
      all: function () { return {}; },
      init: function () {}
    };
  }

  // Fichier optionnel: vous pouvez enregistrer vos widgets custom ici.
  // Exemple:
  // window.MasterWidgets.register('MY_WIDGET', {
  //   toolbarLabel: '🧪 Mon widget',
  //   countAsQuestion: true,
  //   renderEditor: function (ctx) { ... },
  //   exportToBlueprint: function (block, ctx) { return []; },
  //   exportToStudentHTML: function (block, ctx) { return ''; },
  //   importFromBlueprint: function (items) { return null; }
  // });
})();
