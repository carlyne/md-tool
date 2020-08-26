window.addEventListener("DOMContentLoaded", () => {
	const converter = new showdown.Converter();
	const mdView = document.getElementById('md-view');
	const mdEditor = document.getElementById('md-editor');

	function convertEditorToMarkdown() {
		const editorContent = mdEditor.value;
		const markdownResult = converter.makeHtml(editorContent);

		mdView.innerHTML = markdownResult;
	}

	mdEditor.addEventListener('input', convertEditorToMarkdown);

	convertEditorToMarkdown();
})