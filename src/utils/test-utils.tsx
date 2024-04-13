import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { FeedFeatureContextProvider } from "../contexts/FeedFeatureContext/feed-feature-context-provider";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <FeedFeatureContextProvider>{children}</FeedFeatureContextProvider>;
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";
export { customRender as render };
