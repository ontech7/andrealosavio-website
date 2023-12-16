/**
 * Scrolls to element with smooth behavior
 * @param id of the element without '#'
 */
export const scrollToId = (id: string) => {
  const element: HTMLElement | null = document.getElementById(id);
  window.scrollTo({ behavior: "smooth", top: element?.offsetTop })
}