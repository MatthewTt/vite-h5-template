export const useDocumentTitle = (title) => {
  document.title = title || import.meta.env.VITE_GLOBAL_APP_TITLE
}
