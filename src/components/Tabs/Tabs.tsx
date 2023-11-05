import { FC, ReactNode, useMemo, useState } from "react";

import { Tab, TabsContainer, TabsContent, TabsHeader } from "./Tabs.styled";

interface TabItem {
  key: string;
  label: ReactNode;
  element: ReactNode;
}

interface TransformedItems {
  [key: string]: ReactNode;
}

interface TabsProps {
  defaultActiveKey?: string;
  items: TabItem[];
  className?: string;
  testId?: string;
}

export const Tabs: FC<TabsProps> = ({
  defaultActiveKey,
  items,
  className,
  testId,
}) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || items[0].key);

  const transformItems = useMemo<TransformedItems>(
    () =>
      items.reduce((acc, { key, element }) => {
        acc[key] = element;
        return acc;
      }, {} as TransformedItems),
    [items]
  );

  return (
    <TabsContainer className={className} data-testid={testId}>
      <TabsHeader>
        {items.map(({ key, label }, index) => (
          <Tab
            key={key}
            role="tab"
            isActive={key === activeKey}
            onClick={() => setActiveKey(key)}
            tabIndex={index}
            data-testid={testId ? `${testId}_${key}` : undefined}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsContent>{transformItems[activeKey]}</TabsContent>
    </TabsContainer>
  );
};
