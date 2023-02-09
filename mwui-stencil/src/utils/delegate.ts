export const attachComponent = async (delegate: any | undefined, container: HTMLElement): Promise<HTMLElement> => {
  if (delegate) {
    return delegate.attachViewToDom(container);
  }
};

export const detachComponent = (delegate: any | undefined, element: HTMLElement | undefined) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};

export const CoreDelegate = () => {
  let BaseComponent: HTMLElement;
  let Reference: Comment;

  const attachViewToDom = async (parentElement: HTMLElement) => {
    BaseComponent = parentElement;

    const root = BaseComponent.firstElementChild as HTMLElement;

    if (!root.classList.contains("mw-modal-host")) {
      const el = BaseComponent.ownerDocument?.createElement("div");
      el.classList.add("mw-modal-host");

      el.append(...Array.from(BaseComponent.children));
      BaseComponent.appendChild(el);
    }

    const app = document.body; // @TODO: add custom anchor element

    Reference = document.createComment("mwui-anchor-comment");
    BaseComponent.parentNode.insertBefore(Reference, BaseComponent);

    app.appendChild(BaseComponent);

    return BaseComponent;
  };

  const removeViewFromDom = (): Promise<void> => {
    if (BaseComponent && Reference) {
      Reference.parentNode?.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }
    return Promise.resolve();
  };

  return { attachViewToDom, removeViewFromDom };
};
