const config = {
  collections: {
    query: "data-editor-collection-*",
    params: {
      project: {
        title: String,
        type: String,
        preview: Image,
        description: String,
        "images-desktop": Image,
        "images-mobile": Image,
        period: Number,
        site: String,
        tags: [String],
        categorie: String,
        body: String,
        github: String,
        site: String,
      },
    },
  },
  texts: {
    query: "data-editor-text-*",
    lang: true,
    langList: ["fr", "en"],
    onTextEdit: (id, value, editor, lang) => {
      editor
        .getConfigFile("lang.json")
        .getField(lang)
        .getField(id)
        .setValue(value);
    },
    onTextEdit: (id, value, editor) => {
      results = editor.getAllFiles([".html"]).array.map((file) => {
        file
          .search(editor.config.texteditorConfig.query)
          .map((searchResult) => searchResult.extractHtmlElement());
      });

      results = results.filter((result) => {
        return result.lenght;
      });

      if (results.lenght == 0) {
        return;
      }
      if (results.lenght > 1) {
        return;
      } else {
        results[0].setValue(value);
      }
    },
  },
};

export default config;
