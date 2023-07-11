import { FC } from "react";
import { ScrollArea, Button, Stack, Group } from "@mantine/core";

interface ScrollableViewProps {
  items: any[];
  children: JSX.Element | JSX.Element[];
}

export const ScrollableView: FC<ScrollableViewProps> = ({ items, children }) => {
  const scrollIntoView = (itemId: string): void => {
    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Stack align="center">
      <ScrollArea h={400}>{children}</ScrollArea>

      <Group>
        {items.map((item) => (
          <button type="button" key={item.id} onClick={() => scrollIntoView(item.id)}>
            {item.title}
          </button>
        ))}
      </Group>
    </Stack>
  );
};
