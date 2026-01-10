import type React from "react";
import { createElement } from "react";

// oxlint-disable-next-line no-explicit-any
type AnyComponent = React.ComponentType<any>;

function copyComponentProperties<C extends AnyComponent>(
  BaseComponent: C,
  Component: AnyComponent,
): C {
  for (const [key, value] of Object.entries(BaseComponent)) {
    if (key === "$$typeof" || key === "render" || key === "contextType") {
      continue;
    }

    (Component as unknown as Record<string, unknown>)[key] = value;
  }

  Component.displayName = BaseComponent.displayName;

  return Component as unknown as C;
}

function useCssElement<C extends AnyComponent>(
  BaseComponent: C,
  incomingProps: React.ComponentProps<C>,
  mapping: StyledProps<C>,
) {
  let props = { ...incomingProps };

  for (const [key, target] of Object.entries(mapping)) {
    const source: unknown = props[key];
    if (!source) {
      continue;
    }

    delete props[key];

    props[target] = [props[target], { $$css: true, [key]: source }];
  }

  return createElement(BaseComponent, props);
}

type StyledProps<C extends AnyComponent> = {
  [K: string]: keyof React.ComponentProps<C>;
};

export function styled<C extends AnyComponent, M extends StyledProps<C>>(
  BaseComponent: C,
  mapping: M,
) {
  return copyComponentProperties(
    BaseComponent,
    (props: React.ComponentProps<C>) =>
      useCssElement(BaseComponent, props, mapping),
  ) as React.ComponentType<
    React.ComponentProps<C> & Partial<Record<keyof M, string>>
  >;
}
