import Stack, { StackProps } from "./Stack";

export type ContainerProps = StackProps;

export default function Container({
  children,
  spacing,
  ...props
}: ContainerProps) {
  return (
    <Stack
      flex={1}
      padding={{
        xs: "16px",
      }}
      alignItems="center"
      {...props}
    >
      <Stack
        width="100%"
        maxWidth={{
          xs: "unset",
          md: "1240px",
        }}
        spacing={spacing}
      >
        {children}
      </Stack>
    </Stack>
  );
}
